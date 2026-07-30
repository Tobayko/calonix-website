import { chromium } from "playwright";
import { execFile } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const qaDir = path.join(root, "qa");
const prototypeUrl = "http://127.0.0.1:4173/";
const sourceInitialPath = path.join(qaDir, "source-desktop-initial.png");
const sourceFocusPath = path.join(qaDir, "source-desktop-focus.png");
const previousInitialPath = path.join(qaDir, "reference-previous-engine-initial.png");
const previousTransitionPath = path.join(qaDir, "reference-previous-engine-transition.png");
const previousMobilePath = path.join(qaDir, "reference-previous-engine-mobile.png");
const renovationReferencePath = path.join(
  root,
  "public",
  "product",
  "renovierungsaufbau-referenz.png",
);

await mkdir(qaDir, { recursive: true });

const result = {
  prototypeUrl,
  references: {
    currentWebsiteInitial: sourceInitialPath,
    currentWebsiteFocus: sourceFocusPath,
    previousEngineInitial: previousInitialPath,
    previousEngineTransition: previousTransitionPath,
    previousEngineMobile: previousMobilePath,
    renovationBuild: renovationReferencePath,
  },
  desktop: {},
  mobile: {},
  reducedMotion: {},
  consoleErrors: [],
  pageErrors: [],
  interactions: {},
};

const browser = await chromium.launch({
  headless: true,
  args: [
    "--enable-webgl",
    "--ignore-gpu-blocklist",
    "--use-angle=swiftshader-webgl",
  ],
});

const attachErrorTracking = (page, scope) => {
  page.on("console", (message) => {
    if (message.type() === "error") {
      result.consoleErrors.push({ scope, text: message.text() });
    }
  });
  page.on("pageerror", (error) => {
    result.pageErrors.push({ scope, text: error.message });
  });
};

const settle = async (page, milliseconds = 900) => {
  await page.waitForLoadState("networkidle");
  await page.waitForFunction(() => !document.fonts || document.fonts.status === "loaded");
  await page.waitForTimeout(milliseconds);
};

const screenshot = async (page, name, options = {}) => {
  const target = path.join(qaDir, name);
  await page.screenshot({
    path: target,
    animations: "disabled",
    ...options,
  });
  return target;
};

const scrollToStoryProgress = async (page, progress) => {
  await page.evaluate((targetProgress) => {
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";
    const story = document.querySelector(".story");
    const distance = story.offsetHeight - window.innerHeight;
    window.scrollTo(0, story.offsetTop + distance * targetProgress);
  }, progress);
};

const createComparison = async ({ leftPath, rightPath, output, focus = false }) => {
  await Promise.all([readFile(leftPath), readFile(rightPath)]);
  const target = path.join(qaDir, output);
  const contentHeight = focus ? 610 : 680;
  const outputHeight = focus ? 650 : 720;
  const filter = [
    `[0:v]scale=930:${contentHeight}:force_original_aspect_ratio=decrease,`,
    `pad=930:${contentHeight}:(ow-iw)/2:(oh-ih)/2:color=0x0b0e0e[left];`,
    `[1:v]scale=930:${contentHeight}:force_original_aspect_ratio=decrease,`,
    `pad=930:${contentHeight}:(ow-iw)/2:(oh-ih)/2:color=0x0b0e0e[right];`,
    `[left][right]hstack=inputs=2[stack];`,
    `[stack]pad=1920:${outputHeight}:30:20:color=0x070a0a[out]`,
  ].join("");

  await execFileAsync("/opt/homebrew/bin/ffmpeg", [
    "-y",
    "-loglevel",
    "error",
    "-i",
    leftPath,
    "-i",
    rightPath,
    "-filter_complex",
    filter,
    "-map",
    "[out]",
    "-frames:v",
    "1",
    target,
  ]);
  return target;
};

const desktopContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  colorScheme: "dark",
  reducedMotion: "no-preference",
  deviceScaleFactor: 1,
});

result.desktop.sourceInitial = sourceInitialPath;
result.desktop.sourceFocus = sourceFocusPath;
result.desktop.previousInitial = previousInitialPath;
result.desktop.previousTransition = previousTransitionPath;

const prototypePage = await desktopContext.newPage();
attachErrorTracking(prototypePage, "prototype-desktop");
await prototypePage.goto(prototypeUrl, { waitUntil: "domcontentloaded" });
await settle(prototypePage, 300);
await prototypePage.waitForSelector("canvas");
await prototypePage.evaluate(() => window.scrollTo(0, 0));
result.desktop.prototypeAssembly = await screenshot(
  prototypePage,
  "prototype-desktop-assembly.png",
);
await prototypePage.waitForTimeout(5200);
result.desktop.prototypeInitial = await screenshot(prototypePage, "prototype-desktop-initial.png");
result.desktop.prototypeFocus = await screenshot(prototypePage, "prototype-desktop-focus.png", {
  clip: { x: 0, y: 0, width: 1440, height: 560 },
});

result.desktop.webgl = await prototypePage.evaluate(() => {
  const canvas = document.querySelector("canvas");
  const gl = canvas?.getContext("webgl2") || canvas?.getContext("webgl");
  return {
    canvasPresent: Boolean(canvas),
    contextPresent: Boolean(gl),
    width: canvas?.width || 0,
    height: canvas?.height || 0,
    renderer: gl?.getParameter(gl.RENDERER) || null,
  };
});

await prototypePage.mouse.move(1120, 440);
await prototypePage.waitForTimeout(250);
await prototypePage.getByRole("button", { name: "Aufbau auffächern" }).click();
await prototypePage.waitForTimeout(850);
result.desktop.modelExpanded = await screenshot(prototypePage, "prototype-desktop-expanded.png");
result.desktop.modelExpandedState = await prototypePage.evaluate(() => {
  const story = document.querySelector(".story");
  const hero = document.querySelector(".hero-copy");
  const canvas = document.querySelector(".thermal-scene");
  return {
    scrollY: window.scrollY,
    storyProgress: getComputedStyle(story).getPropertyValue("--story-progress").trim(),
    heroOpacity: getComputedStyle(hero).opacity,
    heroZIndex: getComputedStyle(hero).zIndex,
    frameZIndex: getComputedStyle(document.querySelector(".story-frame")).zIndex,
    canvasZIndex: getComputedStyle(canvas).zIndex,
  };
});
await prototypePage.getByRole("button", { name: "Aufbau schließen" }).click();
await prototypePage.waitForTimeout(550);

await scrollToStoryProgress(prototypePage, 0.525);
await prototypePage.waitForTimeout(850);
result.desktop.prototypePipeStep = await screenshot(prototypePage, "prototype-desktop-pipe-step.png");

await scrollToStoryProgress(prototypePage, 0.58);
await prototypePage.waitForTimeout(850);
result.desktop.prototypeClipStep = await screenshot(prototypePage, "prototype-desktop-clip-step.png");

await scrollToStoryProgress(prototypePage, 0.665);
await prototypePage.waitForTimeout(850);
result.desktop.prototypeEdgeStripStep = await screenshot(
  prototypePage,
  "prototype-desktop-edge-strip-step.png",
);

await scrollToStoryProgress(prototypePage, 0.72);
await prototypePage.waitForTimeout(850);
result.desktop.prototypeBoardStep = await screenshot(prototypePage, "prototype-desktop-board-step.png");
result.desktop.prototypeTransition = result.desktop.prototypeBoardStep;

await scrollToStoryProgress(prototypePage, 0.9);
await prototypePage.waitForTimeout(850);
result.desktop.prototypeSlabStep = await screenshot(prototypePage, "prototype-desktop-slab-step.png");

await prototypePage.locator("#system").scrollIntoViewIfNeeded();
await prototypePage.waitForTimeout(700);
result.desktop.prototypeContinuation = await screenshot(prototypePage, "prototype-desktop-continuation.png");
await prototypePage.getByRole("button", { name: "Beta-Zugang testen" }).click();
await prototypePage.waitForTimeout(150);

result.interactions.desktop = {
  toastVisible: await prototypePage.locator(".toast-visible").isVisible(),
  trackedEvents: await prototypePage.evaluate(() => window.__prometoPrototypeEvents || []),
  horizontalOverflow: await prototypePage.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  ),
};

await prototypePage.evaluate(() => window.scrollTo(0, 0));
await prototypePage.waitForTimeout(200);
const keyboardOrder = [];
for (let index = 0; index < 8; index += 1) {
  await prototypePage.keyboard.press("Tab");
  keyboardOrder.push(
    await prototypePage.evaluate(() => {
      const element = document.activeElement;
      return {
        tag: element?.tagName || null,
        text: element?.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) || "",
        href: element?.getAttribute?.("href") || null,
      };
    }),
  );
}
result.interactions.desktop.keyboardOrder = keyboardOrder;

await desktopContext.close();

result.desktop.initialComparison = await createComparison({
  leftPath: result.desktop.previousInitial,
  rightPath: result.desktop.prototypeInitial,
  leftLabel: "Vorherige 3D-Engine · Startzustand",
  rightLabel: "Fußbodenaufbau · Startzustand",
  output: "comparison-desktop-initial.png",
});

result.desktop.focusComparison = await createComparison({
  leftPath: result.desktop.sourceFocus,
  rightPath: result.desktop.prototypeFocus,
  leftLabel: "Quelle · Navigation & Typografie",
  rightLabel: "Prototyp · Navigation & Typografie",
  output: "comparison-desktop-focus.png",
  focus: true,
});

result.desktop.transitionComparison = await createComparison({
  leftPath: result.desktop.previousTransition,
  rightPath: result.desktop.prototypeTransition,
  leftLabel: "Vorherige 3D-Engine · Übergang",
  rightLabel: "Fußbodenaufbau · Explosionszustand",
  output: "comparison-desktop-transition.png",
});

result.desktop.websiteComparison = await createComparison({
  leftPath: result.desktop.sourceInitial,
  rightPath: result.desktop.prototypeInitial,
  leftLabel: "Aktuelle Website · Designquelle",
  rightLabel: "3D-Test · Prometo Gestaltung",
  output: "comparison-current-website.png",
});

result.desktop.renovationComparison = await createComparison({
  leftPath: renovationReferencePath,
  rightPath: result.desktop.prototypeBoardStep,
  leftLabel: "Produktreferenz · Renovierungsaufbau",
  rightLabel: "3D-Test · Biofaser-Aufbau aufgefächert",
  output: "comparison-renovation-build.png",
});

const mobileContext = await browser.newContext({
  viewport: { width: 390, height: 844 },
  colorScheme: "dark",
  reducedMotion: "no-preference",
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
});
const mobilePage = await mobileContext.newPage();
attachErrorTracking(mobilePage, "prototype-mobile");
await mobilePage.goto(prototypeUrl, { waitUntil: "domcontentloaded" });
await settle(mobilePage, 5600);
await mobilePage.waitForSelector("canvas");
result.mobile.initial = await screenshot(mobilePage, "prototype-mobile-initial.png");

await mobilePage.getByRole("button", { name: "Menü öffnen" }).click();
await mobilePage.waitForTimeout(150);
result.mobile.menu = await screenshot(mobilePage, "prototype-mobile-menu.png");
await mobilePage.getByRole("button", { name: "Menü öffnen" }).click();

await scrollToStoryProgress(mobilePage, 0.72);
await mobilePage.waitForTimeout(900);
result.mobile.transition = await screenshot(mobilePage, "prototype-mobile-transition.png");
result.interactions.mobile = {
  horizontalOverflow: await mobilePage.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  ),
  canvas: await mobilePage.evaluate(() => {
    const canvas = document.querySelector("canvas");
    return { present: Boolean(canvas), width: canvas?.width || 0, height: canvas?.height || 0 };
  }),
};

result.mobile.comparison = await createComparison({
  leftPath: previousMobilePath,
  rightPath: result.mobile.initial,
  leftLabel: "Vorherige 3D-Engine · Mobil",
  rightLabel: "Fußbodenaufbau · Mobil",
  output: "comparison-mobile-initial.png",
  focus: true,
});

await mobileContext.close();

const reducedMotionContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  colorScheme: "dark",
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
});
const reducedMotionPage = await reducedMotionContext.newPage();
attachErrorTracking(reducedMotionPage, "prototype-reduced-motion");
await reducedMotionPage.goto(prototypeUrl, { waitUntil: "domcontentloaded" });
await settle(reducedMotionPage, 700);
await reducedMotionPage.waitForSelector("canvas");
await reducedMotionPage.waitForFunction(() =>
  window.__prometoPrototypeEvents?.some((event) => event.event === "three_scene_ready"),
);
await reducedMotionPage.waitForTimeout(1000);
result.reducedMotion.screenshot = await screenshot(
  reducedMotionPage,
  "prototype-desktop-reduced-motion.png",
);
result.reducedMotion.state = await reducedMotionPage.evaluate(() => ({
  matchesPreference: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  storyHeight: document.querySelector(".story")?.getBoundingClientRect().height || 0,
  detailDisplay: getComputedStyle(document.querySelector(".component-detail")).display,
  horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
}));
await reducedMotionContext.close();

await browser.close();

await writeFile(path.join(qaDir, "capture-result.json"), JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
