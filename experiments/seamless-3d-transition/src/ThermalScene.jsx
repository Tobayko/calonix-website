import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const MODEL_WIDTH = 4.2;
const MODEL_DEPTH = 2.8;
const PIPE_RADIUS = 0.06;

const COLORS = {
  cyan: new THREE.Color("#45dee7"),
  clip: new THREE.Color("#12c7df"),
  dim: new THREE.Color("#05090b"),
};

const WIREFRAME = {
  slab: { fill: "#17252b", wire: "#86b7c2" },
  adhesive: { fill: "#271d36", wire: "#c29bff" },
  biofaser: { fill: "#4b3414", wire: "#ffc86a" },
  edgeStrip: { fill: "#073d56", wire: "#67e9ff" },
  clips: { fill: "#075a70", wire: "#72f3ff" },
  pipe: { fill: "#081823", wire: "#71ecff" },
  dryScreed: { fill: "#1e3435", wire: "#9be3cf" },
  finishWood: { fill: "#5d2c1f", wire: "#ff9d66" },
  finishStone: { fill: "#27313f", wire: "#9aacff" },
  finishDesign: { fill: "#51542c", wire: "#e7f174" },
};

const COMPONENTS = [
  { key: "finish", baseY: 0.42, explodeOffset: 2.05, assemblyOrder: 7 },
  { key: "dryScreed", baseY: 0.17, explodeOffset: 1.36, assemblyOrder: 6 },
  { key: "pipe", baseY: -0.02, explodeOffset: 0.68, assemblyOrder: 5 },
  { key: "clips", baseY: -0.02, explodeOffset: 0.32, assemblyOrder: 4 },
  { key: "edgeStrip", baseY: -0.238, explodeOffset: -0.04, assemblyOrder: 3 },
  { key: "biofaser", baseY: -0.28, explodeOffset: -0.46, assemblyOrder: 2 },
  { key: "adhesive", baseY: -0.34, explodeOffset: -0.98, assemblyOrder: 1 },
  { key: "slab", baseY: -0.61, explodeOffset: -1.5, assemblyOrder: 0 },
];

const clamp01 = (value) => THREE.MathUtils.clamp(value, 0, 1);

const smoothstep = (start, end, value) => {
  const x = clamp01((value - start) / (end - start));
  return x * x * (3 - 2 * x);
};

const damp = (current, target, lambda, delta) =>
  THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * delta));

function seededRandom(seed = 9047) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}


function addWireframeMesh(group, geometry, { fill, wire }) {
  const material = new THREE.MeshStandardMaterial({
    color: fill,
    emissive: "#000000",
    emissiveIntensity: 0,
    roughness: 0.64,
    metalness: 0.08,
    flatShading: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);

  const wireOverlay = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ color: wire, wireframe: true, toneMapped: false }),
  );
  wireOverlay.renderOrder = 2;
  mesh.add(wireOverlay);

  const outline = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry, 28),
    new THREE.LineBasicMaterial({ color: wire, toneMapped: false }),
  );
  outline.renderOrder = 3;
  mesh.add(outline);
  return mesh;
}

function addWireOverlay(mesh, material) {
  const wireOverlay = new THREE.Mesh(mesh.geometry, material);
  wireOverlay.renderOrder = 2;
  mesh.add(wireOverlay);
  return mesh;
}

function createSlab() {
  const group = new THREE.Group();
  addWireframeMesh(
    group,
    new RoundedBoxGeometry(MODEL_WIDTH + 0.1, 0.42, MODEL_DEPTH + 0.1, 4, 0.07),
    WIREFRAME.slab,
  );
  return group;
}

function createAdhesive() {
  const group = new THREE.Group();
  addWireframeMesh(
    group,
    new RoundedBoxGeometry(MODEL_WIDTH, 0.085, MODEL_DEPTH, 3, 0.025),
    WIREFRAME.adhesive,
  );

  for (let index = 0; index < 12; index += 1) {
    const ridge = addWireframeMesh(
      group,
      new RoundedBoxGeometry(1.62, 0.035, 0.022, 2, 0.007),
      WIREFRAME.adhesive,
    );
    ridge.position.set(-1.08, 0.055, -1.02 + index * 0.17);
  }
  return group;
}

function createPerforatedBoard() {
  const group = new THREE.Group();
  const shape = new THREE.Shape();
  const halfWidth = MODEL_WIDTH / 2;
  const halfDepth = MODEL_DEPTH / 2;
  shape.moveTo(-halfWidth, -halfDepth);
  shape.lineTo(halfWidth, -halfDepth);
  shape.lineTo(halfWidth, halfDepth);
  shape.lineTo(-halfWidth, halfDepth);
  shape.lineTo(-halfWidth, -halfDepth);

  const spacing = 0.35;
  const columns = 12;
  const rows = 8;
  const holeRadius = 0.052;
  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      const hole = new THREE.Path();
      const x = (column - (columns - 1) / 2) * spacing;
      const z = (row - (rows - 1) / 2) * spacing;
      hole.absarc(x, z, holeRadius, 0, Math.PI * 2, false);
      shape.holes.push(hole);
    }
  }

  // 0.35 model units represent 50 mm, so a 5 mm board is 0.035 units thick.
  const height = 0.035;
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: height,
    steps: 1,
    curveSegments: 10,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.004,
    bevelThickness: 0.003,
  });
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, height / 2, 0);
  geometry.computeVertexNormals();

  addWireframeMesh(group, geometry, WIREFRAME.biofaser);
  group.userData = {
    spacingCm: 5,
    thicknessMm: 5,
    holeCount: columns * rows,
  };
  return group;
}

function createEdgeStrip() {
  const group = new THREE.Group();
  const backStrip = addWireframeMesh(
    group,
    new RoundedBoxGeometry(MODEL_WIDTH + 0.08, 0.48, 0.06, 5, 0.018),
    WIREFRAME.edgeStrip,
  );
  backStrip.position.set(0, 0.18, -MODEL_DEPTH / 2 - 0.014);

  const sideStrip = addWireframeMesh(
    group,
    new RoundedBoxGeometry(0.06, 0.48, MODEL_DEPTH, 5, 0.018),
    WIREFRAME.edgeStrip,
  );
  sideStrip.position.set(-MODEL_WIDTH / 2 - 0.014, 0.18, 0);

  const cornerSeam = addWireframeMesh(
    group,
    new RoundedBoxGeometry(0.07, 0.485, 0.07, 4, 0.019),
    WIREFRAME.edgeStrip,
  );
  cornerSeam.position.set(-MODEL_WIDTH / 2 - 0.014, 0.18, -MODEL_DEPTH / 2 - 0.014);

  group.userData = { component: "Randdämmstreifen" };
  return group;
}

function createDryScreed() {
  const group = new THREE.Group();
  const back = addWireframeMesh(
    group,
    new RoundedBoxGeometry(MODEL_WIDTH - 0.06, 0.19, 1.5, 4, 0.055),
    WIREFRAME.dryScreed,
  );
  back.position.z = -0.63;

  const frontRight = addWireframeMesh(
    group,
    new RoundedBoxGeometry(2.5, 0.19, 1.2, 4, 0.055),
    WIREFRAME.dryScreed,
  );
  frontRight.position.set(0.78, 0, 0.76);

  const joint = new THREE.Mesh(
    new RoundedBoxGeometry(0.035, 0.015, 1.12, 2, 0.006),
    new THREE.MeshBasicMaterial({ color: WIREFRAME.dryScreed.wire, toneMapped: false }),
  );
  joint.position.set(-0.46, 0.103, 0.76);
  group.add(joint);
  return group;
}

function createFinishSamples() {
  const group = new THREE.Group();
  const specs = [
    { x: -1.28, z: -0.58, width: 1.35, depth: 0.62, palette: WIREFRAME.finishWood },
    { x: 0.12, z: -0.1, width: 1.28, depth: 0.65, palette: WIREFRAME.finishStone },
    { x: 1.2, z: 0.61, width: 1.42, depth: 0.58, palette: WIREFRAME.finishDesign },
  ];

  specs.forEach(({ x, z, width, depth, palette }) => {
    const sample = addWireframeMesh(
      group,
      new RoundedBoxGeometry(width, 0.12, depth, 4, 0.035),
      palette,
    );
    sample.position.set(x, 0, z);
  });
  return group;
}

function createSerpentineCurve() {
  const points = [];
  const lanes = 7;
  const xMin = -1.72;
  const xMax = 1.68;
  const zMin = -1.02;
  const zMax = 1.02;
  const spacing = (zMax - zMin) / (lanes - 1);
  const turnRadius = spacing / 2;

  for (let lane = 0; lane < lanes; lane += 1) {
    const z = zMin + spacing * lane;
    const fromX = lane % 2 === 0 ? xMin : xMax;
    const toX = lane % 2 === 0 ? xMax : xMin;

    for (let step = lane === 0 ? 0 : 1; step <= 20; step += 1) {
      points.push(new THREE.Vector3(THREE.MathUtils.lerp(fromX, toX, step / 20), 0, z));
    }

    if (lane < lanes - 1) {
      const direction = lane % 2 === 0 ? 1 : -1;
      const centerZ = z + spacing / 2;
      for (let step = 1; step <= 14; step += 1) {
        const angle = -Math.PI / 2 + (Math.PI * step) / 14;
        points.push(
          new THREE.Vector3(
            toX + direction * turnRadius * Math.cos(angle),
            0,
            centerZ + turnRadius * Math.sin(angle),
          ),
        );
      }
    }
  }

  return new THREE.CatmullRomCurve3(points, false, "centripetal", 0.42);
}

function createClipPrototype() {
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({
    color: WIREFRAME.clips.fill,
    emissive: "#000000",
    emissiveIntensity: 0,
    roughness: 0.5,
    metalness: 0.12,
    flatShading: true,
  });
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: WIREFRAME.clips.wire,
    wireframe: true,
    toneMapped: false,
  });
  const createClipPiece = (geometry) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    addWireOverlay(mesh, wireMaterial);
    group.add(mesh);
    return mesh;
  };

  const cradlePoints = [];
  const cradleRadius = PIPE_RADIUS + 0.012;
  for (let index = 0; index <= 22; index += 1) {
    const angle = THREE.MathUtils.degToRad(150 + (240 * index) / 22);
    cradlePoints.push(
      new THREE.Vector3(0, cradleRadius * Math.sin(angle), cradleRadius * Math.cos(angle)),
    );
  }
  createClipPiece(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cradlePoints), 52, 0.014, 12, false),
  );

  [cradlePoints[0], cradlePoints[cradlePoints.length - 1]].forEach((point) => {
    const lip = createClipPiece(new THREE.SphereGeometry(0.019, 12, 8));
    lip.position.copy(point);
    lip.scale.set(1.15, 1.2, 1.05);
  });

  const baseY = -cradleRadius - 0.015;
  const base = createClipPiece(
    new RoundedBoxGeometry(0.11, 0.028, 0.205, 3, 0.009),
  );
  base.position.y = baseY;

  [-1, 1].forEach((direction) => {
    const support = createClipPiece(
      new RoundedBoxGeometry(0.08, 0.1, 0.026, 3, 0.008),
    );
    support.position.set(0, -0.025, direction * 0.084);
    support.rotation.x = direction * 0.18;
  });

  const centerBrace = createClipPiece(
    new RoundedBoxGeometry(0.105, 0.055, 0.04, 3, 0.009),
  );
  centerBrace.position.set(0, -0.018, 0);

  const stem = createClipPiece(
    new THREE.CylinderGeometry(0.022, 0.027, 0.095, 10),
  );
  stem.position.y = baseY - 0.058;

  const barb = createClipPiece(
    new THREE.ConeGeometry(0.045, 0.052, 10),
  );
  barb.rotation.z = Math.PI;
  barb.position.y = baseY - 0.122;
  return group;
}

function createThermalWaveMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uFocus: { value: 0 },
      uDim: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uFocus;
      uniform float uDim;
      varying vec2 vUv;

      void main() {
        float travel = vUv.x * 25.0 - uTime * 4.6;
        float thermal = sin(travel * 0.72) * 0.5 + 0.5;
        float crest = pow(sin(travel) * 0.5 + 0.5, 2.2);
        vec3 cold = vec3(0.04, 0.62, 1.0);
        vec3 hot = vec3(1.0, 0.19, 0.05);
        vec3 thermalColor = mix(cold, hot, thermal);
        float intensity = (mix(0.82, 1.3, crest) + uFocus * 0.32) * mix(1.0, 0.18, uDim);
        gl_FragColor = vec4(thermalColor * intensity, 1.0);
      }
    `,
    wireframe: true,
    transparent: false,
    depthWrite: true,
    toneMapped: false,
  });
}

function createPipeAndClips() {
  const curve = createSerpentineCurve();
  const pipeGroup = new THREE.Group();
  const clipsGroup = new THREE.Group();

  const pipeMaterial = new THREE.MeshStandardMaterial({
    color: WIREFRAME.pipe.fill,
    emissive: "#000000",
    emissiveIntensity: 0,
    roughness: 0.42,
    metalness: 0.16,
    flatShading: true,
  });
  const pipe = new THREE.Mesh(new THREE.TubeGeometry(curve, 460, PIPE_RADIUS, 18, false), pipeMaterial);
  pipe.castShadow = true;
  pipe.receiveShadow = true;
  pipeGroup.add(pipe);

  const thermalWaveMaterial = createThermalWaveMaterial();
  const thermalWire = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 460, PIPE_RADIUS + 0.004, 18, false),
    thermalWaveMaterial,
  );
  thermalWire.renderOrder = 3;
  pipeGroup.add(thermalWire);

  const prototype = createClipPrototype();
  const clipCount = 28;
  for (let index = 0; index < clipCount; index += 1) {
    const t = index / (clipCount - 1);
    const position = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);
    const clip = prototype.clone(true);
    clip.position.copy(position);
    clip.position.y = -0.015;
    clip.rotation.y = -Math.atan2(tangent.z, tangent.x);
    clipsGroup.add(clip);
  }

  pipeGroup.userData = {
    curve,
    pipeMaterial,
    thermalWaveMaterial,
    dimension: "17 × 2 mm",
  };
  clipsGroup.userData = { clipCount };
  return { pipeGroup, clipsGroup };
}

function createGuideLines() {
  const material = new THREE.LineBasicMaterial({
    color: COLORS.cyan,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const group = new THREE.Group();
  [
    [-MODEL_WIDTH / 2, -MODEL_DEPTH / 2],
    [MODEL_WIDTH / 2, -MODEL_DEPTH / 2],
    [-MODEL_WIDTH / 2, MODEL_DEPTH / 2],
    [MODEL_WIDTH / 2, MODEL_DEPTH / 2],
  ].forEach(([x, z]) => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, -2.25, z),
      new THREE.Vector3(x, 2.4, z),
    ]);
    group.add(new THREE.Line(geometry, material));
  });
  group.userData.material = material;
  return group;
}

function createParticles() {
  const count = 230;
  const positions = new Float32Array(count * 3);
  const random = seededRandom(777);
  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (random() - 0.5) * 11;
    positions[index * 3 + 1] = (random() - 0.45) * 7;
    positions[index * 3 + 2] = (random() - 0.5) * 5;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: COLORS.cyan,
      size: 0.017,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
}

export function ThermalScene({
  progressRef,
  exploded,
  activeLayer,
  onFirstInteraction,
  onSceneReady,
}) {
  const hostRef = useRef(null);
  const interactionReportedRef = useRef(false);
  const sceneReadyReportedRef = useRef(false);
  const explodedRef = useRef(exploded);
  const activeLayerRef = useRef(activeLayer);

  useEffect(() => {
    explodedRef.current = exploded;
  }, [exploded]);

  useEffect(() => {
    activeLayerRef.current = activeLayer;
  }, [activeLayer]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#071010", 0.046);

    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
    camera.position.set(0, 2.25, 8.15);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.set(-0.035, -0.62, -0.025);
    scene.add(root);

    const { pipeGroup, clipsGroup } = createPipeAndClips();
    const layerGroups = {
      finish: createFinishSamples(),
      dryScreed: createDryScreed(),
      pipe: pipeGroup,
      clips: clipsGroup,
      edgeStrip: createEdgeStrip(),
      biofaser: createPerforatedBoard(),
      adhesive: createAdhesive(),
      slab: createSlab(),
    };

    Object.values(layerGroups).forEach((group) => {
      const materials = new Set();
      group.traverse((object) => {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => materials.add(material));
        } else if (object.material) {
          materials.add(object.material);
        }
      });
      group.userData.highlightMaterials = [...materials].map((material) => ({
        material,
        amount: 0,
        dimAmount: 0,
        baseColor: material.color?.clone() || null,
        baseEmissive: material.emissive?.clone() || null,
        baseEmissiveIntensity: material.emissiveIntensity || 0,
      }));
    });

    COMPONENTS.forEach(({ key, baseY }) => {
      layerGroups[key].position.y = baseY;
      root.add(layerGroups[key]);
    });

    const guides = createGuideLines();
    root.add(guides);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(7.2, 5.6),
      new THREE.ShadowMaterial({ color: "#000000", transparent: true, opacity: 0.28 }),
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.87;
    shadowPlane.receiveShadow = true;
    root.add(shadowPlane);

    const particles = createParticles();
    scene.add(particles);

    const hemisphereLight = new THREE.HemisphereLight("#eaf7f7", "#171918", 0.9);
    const keyLight = new THREE.DirectionalLight("#fffaf1", 2.85);
    keyLight.position.set(4.5, 6.2, 4.8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.left = -5;
    keyLight.shadow.camera.right = 5;
    keyLight.shadow.camera.top = 5;
    keyLight.shadow.camera.bottom = -5;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 18;
    keyLight.shadow.bias = -0.00022;
    keyLight.shadow.normalBias = 0.025;
    keyLight.shadow.radius = 3;

    const topSoftbox = new THREE.RectAreaLight("#fff7eb", 7.2, 5.8, 3.4);
    topSoftbox.position.set(1.8, 5.6, 3.2);
    topSoftbox.lookAt(0, -0.1, 0);

    const cyanSoftbox = new THREE.RectAreaLight("#7eeaf1", 4.4, 3.2, 4.8);
    cyanSoftbox.position.set(-4.2, 1.7, 2.1);
    cyanSoftbox.lookAt(0, 0, 0);

    const warmRim = new THREE.RectAreaLight("#f0b985", 3.2, 3.6, 2.4);
    warmRim.position.set(3.4, 1.4, -3.1);
    warmRim.lookAt(0, 0.25, 0);

    const cyanLight = new THREE.PointLight("#45dee7", 3.8, 10, 2);
    cyanLight.position.set(-3.1, 0.85, 2.8);
    const warmLight = new THREE.PointLight("#e9ae78", 2.4, 7, 2);
    warmLight.position.set(1.7, 0.1, 2.1);
    scene.add(
      hemisphereLight,
      keyLight,
      topSoftbox,
      cyanSoftbox,
      warmRim,
      cyanLight,
      warmLight,
    );

    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    let currentProgress = 0;
    let currentExplosion = reducedMotion ? 0.6 : 0;
    let introTime = reducedMotion ? 6 : 0;
    const introStartedAt = performance.now();
    let frameId = 0;
    let previousTime = performance.now();

    const reportInteraction = () => {
      if (interactionReportedRef.current) return;
      interactionReportedRef.current = true;
      onFirstInteraction?.();
    };

    const handlePointerMove = (event) => {
      const rect = host.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        return;
      }
      pointerTarget.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerTarget.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      if (Math.abs(pointerTarget.x) + Math.abs(pointerTarget.y) > 0.22) reportInteraction();
    };

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = width < 700 ? 42 : width < 1050 ? 36 : 33;
      camera.updateProjectionMatrix();
    };

    const render = (time) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      introTime = reducedMotion ? 6 : (time - introStartedAt) / 1000;

      const requestedProgress = reducedMotion ? 0 : progressRef.current;
      const requestedExplosion = reducedMotion
        ? 0.6
        : Math.max(
            smoothstep(0.08, 0.28, requestedProgress),
            explodedRef.current ? 1 : 0,
          );
      currentProgress = damp(currentProgress, requestedProgress, 4.8, delta);
      currentExplosion = damp(currentExplosion, requestedExplosion, reducedMotion ? 18 : 4.8, delta);
      pointer.x = damp(pointer.x, pointerTarget.x, 4, delta);
      pointer.y = damp(pointer.y, pointerTarget.y, 4, delta);

      const width = host.clientWidth;
      const desktop = width >= 860;
      const detailTransition = smoothstep(0.25, 0.38, currentProgress);
      const manualOnHero = explodedRef.current && currentProgress < 0.18;
      const activeKey = COMPONENTS[activeLayerRef.current]?.key;
      const detailActive = activeLayerRef.current >= 0;

      const targetX = desktop
        ? reducedMotion
          ? 2.25
          : manualOnHero
            ? 1.62
            : THREE.MathUtils.lerp(1.18, -1.62, detailTransition)
        : 0;
      const targetY = desktop
        ? reducedMotion
          ? -0.08
          : THREE.MathUtils.lerp(-0.1, 0.04, detailTransition)
        : reducedMotion
          ? -2.3
          : THREE.MathUtils.lerp(-2.1, 2.12, detailTransition);
      const baseScale = desktop
        ? reducedMotion
          ? 0.5
          : 0.98
        : reducedMotion
          ? 0.52
          : 0.67;
      const explodedScale = THREE.MathUtils.lerp(1, desktop ? 0.76 : 0.54, currentExplosion);
      const manualFit = manualOnHero ? (desktop ? 0.84 : 0.8) : 1;
      const rootScale = baseScale * explodedScale * manualFit;
      const cameraTargetY = desktop ? -0.18 : 0.08;

      root.rotation.x = -0.035 + pointer.y * 0.04 + detailTransition * 0.02;
      root.rotation.y = -0.62 + pointer.x * 0.085 + detailTransition * 0.14;
      root.rotation.z = -0.025 + pointer.x * 0.01;
      root.scale.setScalar(rootScale);

      COMPONENTS.forEach(({ key, baseY, explodeOffset, assemblyOrder }, index) => {
        const group = layerGroups[key];
        const assembly = smoothstep(assemblyOrder * 0.38 + 0.12, assemblyOrder * 0.38 + 0.88, introTime);
        const introOffset = key === "slab" ? -1.45 : 1.65 + assemblyOrder * 0.08;
        const assembledY = baseY + introOffset * (1 - assembly);
        const targetLayerY = assembledY + explodeOffset * currentExplosion;
        const focused = activeKey === key;
        const detailActive = activeLayerRef.current >= 0;
        const shouldDim = detailActive && !focused;

        group.position.y = damp(group.position.y, targetLayerY + (focused ? 0.06 : 0), 5.4, delta);
        group.position.x = damp(
          group.position.x,
          (index - (COMPONENTS.length - 1) / 2) * 0.018 * currentExplosion +
            (key === "edgeStrip" ? -0.08 * currentExplosion : 0),
          5,
          delta,
        );
        const explodedZ = key === "edgeStrip" ? -0.13 * currentExplosion : 0;
        group.position.z = damp(
          group.position.z,
          focused ? 0.25 : detailActive ? explodedZ - 0.02 : explodedZ,
          5,
          delta,
        );
        const focusScale = focused ? 1.09 : detailActive ? 0.975 : 1;
        const scale = damp(group.scale.x, focusScale, 5.4, delta);
        group.scale.setScalar(scale);

        group.userData.highlightMaterials.forEach((entry) => {
          entry.amount = damp(entry.amount, focused ? 1 : 0, 7, delta);
          entry.dimAmount = damp(entry.dimAmount, shouldDim ? 1 : 0, 6.2, delta);
          if (entry.baseColor && entry.material.color) {
            entry.material.color
              .copy(entry.baseColor)
              .lerp(COLORS.dim, entry.dimAmount * 0.76);
          }
          if (entry.baseEmissive && entry.material.emissive) {
            entry.material.emissive
              .copy(entry.baseEmissive)
              .lerp(COLORS.cyan, entry.amount * 0.18);
            entry.material.emissiveIntensity =
              entry.baseEmissiveIntensity + entry.amount * 0.22;
          }
        });
      });

      const focusedGroup = activeKey ? layerGroups[activeKey] : null;
      const focusedOffsetX = focusedGroup
        ? (focusedGroup.position.x * Math.cos(root.rotation.y) +
            focusedGroup.position.z * Math.sin(root.rotation.y)) *
          rootScale
        : 0;
      const focusedOffsetY = focusedGroup ? focusedGroup.position.y * rootScale : 0;
      const centeredX = detailActive ? -focusedOffsetX : targetX;
      const centeredY = detailActive ? cameraTargetY - focusedOffsetY : targetY;

      root.position.x = reducedMotion ? centeredX : damp(root.position.x, centeredX, 5.6, delta);
      root.position.y = reducedMotion ? centeredY : damp(root.position.y, centeredY, 5.6, delta);

      const pipeData = layerGroups.pipe.userData;
      pipeData.thermalWaveMaterial.uniforms.uTime.value = reducedMotion ? 0 : time / 1000;
      pipeData.thermalWaveMaterial.uniforms.uFocus.value = damp(
        pipeData.thermalWaveMaterial.uniforms.uFocus.value,
        activeKey === "pipe" ? 1 : 0,
        5,
        delta,
      );
      pipeData.thermalWaveMaterial.uniforms.uDim.value = damp(
        pipeData.thermalWaveMaterial.uniforms.uDim.value,
        activeLayerRef.current >= 0 && activeKey !== "pipe" ? 1 : 0,
        6.2,
        delta,
      );
      pipeData.pipeMaterial.emissiveIntensity = damp(
        pipeData.pipeMaterial.emissiveIntensity,
        activeKey === "pipe" ? 0.15 : 0.02,
        5,
        delta,
      );

      guides.userData.material.opacity = 0.17 * currentExplosion;
      shadowPlane.position.y = layerGroups.slab.position.y - 0.26;
      shadowPlane.material.opacity = 0.28 * (1 - currentExplosion * 0.58);
      particles.rotation.y += reducedMotion ? 0 : delta * 0.011;
      particles.material.opacity = 0.19 * (1 - detailTransition * 0.18);

      camera.position.x = pointer.x * 0.045;
      camera.position.y = 2.25 + pointer.y * 0.05;
      camera.lookAt(0, cameraTargetY, 0);
      renderer.render(scene, camera);

      if (!sceneReadyReportedRef.current) {
        sceneReadyReportedRef.current = true;
        onSceneReady?.({
          layerCount: COMPONENTS.length,
          pipeDimension: "17 × 2 mm",
          holeGridCm: 5,
          boardThicknessMm: layerGroups.biofaser.userData.thicknessMm,
          clipCount: clipsGroup.userData.clipCount,
          edgeStripSeparated: true,
          waterAnimation: false,
          visualMode: "opaque-wireframe",
          thermalWave: true,
          isolatedFocus: true,
          reducedMotion,
          webgl: Boolean(renderer.getContext()),
        });
      }

      frameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else if (object.material) {
          object.material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onFirstInteraction, onSceneReady, progressRef]);

  return <div className="thermal-scene" ref={hostRef} aria-hidden="true" />;
}
