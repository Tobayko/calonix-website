const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const routes = require('./i18n-routes.json');
const buildDate = new Date().toISOString().slice(0, 10);
const contentDate = '2026-04-16';

const pages = [
  {
    dePath: 'index.html',
    deUrl: 'https://prometo.app/',
    enPath: 'en/index.html',
    enUrl: 'https://prometo.app/en/',
    slugNoSlash: '/en',
    title: 'Prometo | Heat Load Calculation and Digital Takeoff for HVAC',
    description: 'Prometo helps HVAC teams turn floor plans into heat load calculations, digital takeoff, heat pump sizing and hydraulic balancing workflows.',
    badge: 'HVAC planning software',
    h1: 'Heat load calculation, digital takeoff and HVAC workflows in one app',
    intro: 'Prometo connects floor plans, room data, heating surfaces and hydraulic balancing in one project workflow for HVAC teams.',
    short: 'Prometo is built for HVAC workflows that start with a floor plan and end with structured calculation data. Teams can prepare heat load, takeoff, heat pump context and balancing data without splitting the project across disconnected tools.',
    sections: [
      ['Plan-based workflow', 'Start from a PDF floor plan, structure rooms and keep project data connected through the next planning steps.'],
      ['Built for HVAC teams', 'Prometo focuses on the practical workflow around heat load calculation, digital takeoff, heat generators and hydraulic balancing.'],
      ['Mobile and office-ready', 'Project data can be reviewed on site and continued in the office, so measurements and calculations stay aligned.']
    ],
    faqs: [
      ['What is Prometo?', 'Prometo is an HVAC workflow app for floor-plan based project preparation, heat load calculation, digital takeoff and related planning tasks.'],
      ['Who is Prometo for?', 'Prometo is aimed at HVAC contractors, planners and teams that need a structured workflow from floor plan to technical project data.'],
      ['Does Prometo replace professional planning?', 'No. Prometo provides structured project data and workflow support. Final technical decisions remain project-specific and should be checked by qualified professionals.']
    ]
  },
  {
    dePath: 'heizlast/index.html',
    deUrl: 'https://prometo.app/heizlast/',
    enPath: 'en/heat-load/index.html',
    enUrl: 'https://prometo.app/en/heat-load/',
    slugNoSlash: '/en/heat-load',
    title: 'Heat Load: Definition, Formula, kW and Heat Pumps | Prometo',
    description: 'Heat load explained: definition, formula, W/kW, room heat load, building heat load and why it matters for heat pump sizing.',
    badge: 'Heat load',
    h1: 'Heat Load: Definition, Formula, kW and Heat Pumps',
    intro: 'Heat load is the required heating output at the design condition. It is a power value, not annual energy consumption.',
    short: 'Heat load describes how much heating power a room or building needs at the design outdoor temperature. It is usually stated in watts or kilowatts and is the basis for sizing heat generators, heating surfaces and hydraulic balancing.',
    sections: [
      ['Heat load vs. heat demand', 'Heat load is a power value for the design case. Heat demand is energy over time. The two values should not be used interchangeably.'],
      ['Basic formula', 'A simplified structure is: heat load = transmission heat loss + ventilation heat loss + possible reheating allowance. Detailed calculations depend on the applicable method and project data.'],
      ['Why it matters for heat pumps', 'Heat pump output, modulation range, supply temperature and bivalence strategy should be checked against the building heat load and real operating conditions.']
    ],
    faqs: [
      ['Can I calculate heat load myself?', 'You can estimate it for orientation, but a project-specific calculation needs building data, room data and professional review.'],
      ['Is annual fuel consumption enough?', 'No. Consumption can be a plausibility check, but it does not replace a design heat load calculation.'],
      ['What unit is heat load measured in?', 'Heat load is usually stated in watts or kilowatts. Specific heat load may be shown as W/m².']
    ]
  },
  {
    dePath: 'heizlastberechnung/index.html',
    deUrl: 'https://prometo.app/heizlastberechnung/',
    enPath: 'en/heat-load-calculation/index.html',
    enUrl: 'https://prometo.app/en/heat-load-calculation/',
    slugNoSlash: '/en/heat-load-calculation',
    title: 'Heat Load Calculation App for HVAC Teams | Prometo',
    description: 'Heat load calculation workflow for HVAC teams: floor plan import, room structure, heat load context, heating surfaces and project data in one app.',
    badge: 'Heat load calculation',
    h1: 'Heat Load Calculation App for HVAC Teams',
    intro: 'Prometo helps HVAC teams prepare heat load workflows from the floor plan instead of rebuilding project data manually across tools.',
    short: 'A reliable heat load workflow starts with room structure, building envelope data and project context. Prometo brings those steps into one connected workflow for HVAC teams.',
    sections: [
      ['From floor plan to rooms', 'Use the project floor plan as the starting point and review room data before continuing into calculation workflows.'],
      ['Room-by-room structure', 'Room-based data is important because heating surfaces, flow rates and balancing later depend on the individual rooms.'],
      ['Connected project data', 'The same project context can support heat load, heat pump sizing, surface heating and hydraulic balancing workflows.']
    ],
    faqs: [
      ['Why use a heat load calculation app?', 'It reduces duplicate work and keeps room data, floor plans and technical assumptions connected.'],
      ['Does Prometo perform final professional verification?', 'Prometo supports the workflow. Final verification remains project-specific and should be performed by qualified professionals.'],
      ['Can heat load data support heat pump sizing?', 'Yes. Building heat load and room heat load data are central inputs for heat pump and heating surface decisions.']
    ]
  },
  {
    dePath: 'heizlastberechnung/app/index.html',
    deUrl: 'https://prometo.app/heizlastberechnung/app/',
    enPath: 'en/heat-load-calculation/app/index.html',
    enUrl: 'https://prometo.app/en/heat-load-calculation/app/',
    slugNoSlash: '/en/heat-load-calculation/app',
    title: 'Heat Load Calculation App for Site and Office | Prometo',
    description: 'Mobile heat load calculation workflow for HVAC teams: floor plan review, room data, project structure and site-ready workflows.',
    badge: 'Mobile heat load app',
    h1: 'Heat Load Calculation App for Site and Office',
    intro: 'Use Prometo to keep floor plan review, room structure and heat load context close to the actual project workflow.',
    short: 'A mobile heat load workflow helps teams review project data where it is created: on site, in the office and during technical preparation. Prometo keeps the project model connected.',
    sections: [
      ['Plan-based start', 'Start with the floor plan and room structure instead of entering the same information repeatedly.'],
      ['Site-ready review', 'Mobile and tablet views make it easier to check room data while the project is still fresh.'],
      ['Connected next steps', 'Heat load data can support later heating surface and hydraulic balancing decisions.']
    ],
    faqs: [
      ['Is the app only for the office?', 'No. The workflow is designed to support both site review and office preparation.'],
      ['Why is room structure important?', 'Room-level data is needed for heating surfaces, flow rates and later balancing decisions.'],
      ['Can the app replace all engineering judgement?', 'No. It supports structured work; project-specific technical review remains necessary.']
    ]
  },
  {
    dePath: 'heizlastberechnung/din-12831/index.html',
    deUrl: 'https://prometo.app/heizlastberechnung/din-12831/',
    enPath: 'en/heat-load-calculation/din-en-12831/index.html',
    enUrl: 'https://prometo.app/en/heat-load-calculation/din-en-12831/',
    slugNoSlash: '/en/heat-load-calculation/din-en-12831',
    title: 'Heat Load Calculation According to DIN EN 12831 | Prometo',
    description: 'DIN EN 12831 heat load calculation explained: transmission losses, ventilation losses, design temperatures and practical project context.',
    badge: 'DIN EN 12831',
    h1: 'Heat Load Calculation According to DIN EN 12831',
    intro: 'DIN EN 12831 is the key reference for structured heat load calculation. Project data and professional interpretation still matter.',
    short: 'A heat load calculation under DIN EN 12831 considers transmission heat losses, ventilation heat losses and relevant design temperatures. It is more reliable than a simple area-based estimate.',
    sections: [
      ['Transmission losses', 'Heat loss through the building envelope depends on areas, U-values and the temperature difference.'],
      ['Ventilation losses', 'Air exchange and ventilation assumptions contribute to the required heating output.'],
      ['Not just a shortcut', 'Area-based rules can be useful for orientation, but they do not replace a project-specific method.']
    ],
    faqs: [
      ['Is DIN EN 12831 the same as a rough estimate?', 'No. The standard-based approach is structured around building and room data, not only floor area.'],
      ['Why do design temperatures matter?', 'They define the temperature difference that drives heat losses in the design case.'],
      ['Does this page provide a final calculation?', 'No. It explains the method context. Final calculation remains project-specific.']
    ]
  },
  {
    dePath: 'heizlastberechnung/schaetzwerte/index.html',
    deUrl: 'https://prometo.app/heizlastberechnung/schaetzwerte/',
    enPath: 'en/heat-load-estimates/index.html',
    enUrl: 'https://prometo.app/en/heat-load-estimates/',
    slugNoSlash: '/en/heat-load-estimates',
    title: 'Estimate Heat Load: Orientation Values and Limits | Prometo',
    description: 'How to use rough heat load estimates for orientation, where W/m² values help and why they do not replace a project calculation.',
    badge: 'Heat load estimates',
    h1: 'Estimate Heat Load: Orientation Values and Limits',
    intro: 'Rough heat load values can support early orientation, but they are not a replacement for a room-by-room project calculation.',
    short: 'Heat load estimates are useful for a first plausibility check. They become risky when used for final heat pump sizing, heating surface design or hydraulic balancing without project-specific data.',
    sections: [
      ['When estimates help', 'They can support early feasibility checks, budget conversations and quick comparisons.'],
      ['Where estimates fail', 'They do not capture room geometry, envelope details, ventilation assumptions, design temperature and system behavior.'],
      ['Next step', 'Use the estimate as a starting point and move toward structured room-by-room data before making final decisions.']
    ],
    faqs: [
      ['Can I use W/m² values for a first estimate?', 'Yes, for orientation. They should not be used as the final sizing basis.'],
      ['Can an estimate size a heat pump?', 'Only as a very rough pre-check. Final sizing needs more project data.'],
      ['Why are old buildings difficult to estimate?', 'Renovation state, windows, insulation and air leakage can vary heavily between buildings.']
    ]
  },
  {
    dePath: 'hydraulischer-abgleich/index.html',
    deUrl: 'https://prometo.app/hydraulischer-abgleich/',
    enPath: 'en/hydraulic-balancing/index.html',
    enUrl: 'https://prometo.app/en/hydraulic-balancing/',
    slugNoSlash: '/en/hydraulic-balancing',
    title: 'Hydraulic Balancing: Workflow, Heat Load and Heat Pumps | Prometo',
    description: 'Hydraulic balancing explained for HVAC workflows: room heat load, flow rates, heating surfaces, heat pumps and documentation context.',
    badge: 'Hydraulic balancing',
    h1: 'Hydraulic Balancing: Workflow, Heat Load and Heat Pumps',
    intro: 'Hydraulic balancing aligns heat distribution with the actual room demand so the system can operate more efficiently and reliably.',
    short: 'Hydraulic balancing is not only a valve setting task. It depends on room heat loads, heating surfaces, flow rates, system temperatures and project documentation.',
    sections: [
      ['Heat distribution logic', 'Balancing helps each room receive the required flow instead of letting nearby circuits dominate the system.'],
      ['Heat load connection', 'Room heat load and heating surface data provide the technical basis for flow rate decisions.'],
      ['Heat pump relevance', 'Balanced systems can support lower supply temperatures and steadier operation, which matters for heat pump efficiency.']
    ],
    faqs: [
      ['Why does hydraulic balancing matter?', 'It improves the relationship between room demand, heating surfaces and flow distribution.'],
      ['Does it depend on heat load?', 'Yes. Room heat load is a key input for meaningful balancing.'],
      ['Is it relevant for heat pumps?', 'Yes. Poor flow distribution and high supply temperatures can reduce heat pump efficiency.']
    ]
  },
  {
    dePath: 'fussbodenheizung-auslegen/index.html',
    deUrl: 'https://prometo.app/fussbodenheizung-auslegen/',
    enPath: 'en/underfloor-heating-design/index.html',
    enUrl: 'https://prometo.app/en/underfloor-heating-design/',
    slugNoSlash: '/en/underfloor-heating-design',
    title: 'Underfloor Heating Design: Spacing, Circuits and EN 1264 | Prometo',
    description: 'Underfloor heating design explained: heat load, pipe spacing, circuit length, supply temperature, hydraulics and EN 1264 context.',
    badge: 'Underfloor heating',
    h1: 'Underfloor Heating Design: Spacing, Circuits and EN 1264',
    intro: 'Underfloor heating design starts with room heat load and then connects heating surface, pipe spacing, circuit lengths and hydraulics.',
    short: 'Good underfloor heating design is not only about choosing a pipe spacing. It depends on room heat load, available floor area, surface temperature, supply temperature and hydraulic constraints.',
    sections: [
      ['Heat load first', 'Room heat load defines how much output the floor construction must deliver.'],
      ['Spacing and circuit length', 'Pipe spacing and circuit length must fit both heat output and hydraulic limits.'],
      ['System temperature', 'Lower supply temperatures are especially important when the system is paired with a heat pump.']
    ],
    faqs: [
      ['Can I choose one pipe spacing for every room?', 'That is often too simple. Rooms with different heat loads and usable floor areas may need different spacing.'],
      ['Why does heat load matter?', 'It defines the output each room needs from the floor heating system.'],
      ['Is underfloor heating good for heat pumps?', 'It can be, because large surfaces can support lower supply temperatures when designed correctly.']
    ]
  },
  {
    dePath: 'waermeerzeuger/index.html',
    deUrl: 'https://prometo.app/waermeerzeuger/',
    enPath: 'en/heat-generators/index.html',
    enUrl: 'https://prometo.app/en/heat-generators/',
    slugNoSlash: '/en/heat-generators',
    title: 'Heat Generators: Heat Pump, Biomass and Hybrid Systems | Prometo',
    description: 'Heat generators explained: heat pumps, biomass, hybrid systems, heat load, supply temperature and system fit for HVAC projects.',
    badge: 'Heat generators',
    h1: 'Heat Generators: Heat Pump, Biomass and Hybrid Systems',
    intro: 'The right heat generator depends on building heat load, system temperature, distribution, available space and operating strategy.',
    short: 'A heat generator should be selected in the context of the building and heating system. Heat pumps, biomass and hybrid solutions each need different checks before a final decision.',
    sections: [
      ['System fit first', 'The building, emitters and supply temperature often matter more than a generic technology label.'],
      ['Heat pumps', 'Heat pump sizing depends on heat load, performance curve, modulation range and operating points.'],
      ['Hybrid and backup strategy', 'Hybrid systems and backup heaters need a clear operating concept, including the bivalence point.']
    ],
    faqs: [
      ['Which heat generator is best?', 'There is no universal answer. The right choice depends on building heat load, system temperatures and project constraints.'],
      ['Why is heat load important?', 'It defines the required output in the design case and supports system sizing.'],
      ['Are hybrid systems always better?', 'Not always. They can be useful, but only with a clear operating strategy and project-specific design.']
    ]
  },
  {
    dePath: 'digitales-aufmass/index.html',
    deUrl: 'https://prometo.app/digitales-aufmass/',
    enPath: 'en/digital-takeoff/index.html',
    enUrl: 'https://prometo.app/en/digital-takeoff/',
    slugNoSlash: '/en/digital-takeoff',
    title: 'Digital Takeoff App for HVAC: Floor Plans and Site Work | Prometo',
    description: 'Digital takeoff for HVAC teams: import PDF floor plans, structure rooms, review project data and connect takeoff with heat load workflows.',
    badge: 'Digital takeoff',
    h1: 'Digital Takeoff App for HVAC: Floor Plans and Site Work',
    intro: 'Digital takeoff helps HVAC teams turn floor plans into structured project data for later calculation and planning workflows.',
    short: 'A digital takeoff workflow reduces repeated manual data entry. Floor plan, rooms and project context stay connected so heat load and follow-up tasks can start from cleaner data.',
    sections: [
      ['From PDF to project data', 'Use the floor plan as a practical starting point for room and project structure.'],
      ['Site-ready workflow', 'Review data on mobile or tablet where measurements and corrections are often discovered.'],
      ['Connected calculations', 'The takeoff workflow can feed heat load and later hydraulic planning tasks.']
    ],
    faqs: [
      ['What is digital takeoff for HVAC?', 'It is the process of capturing and structuring project data from plans and site information for technical workflows.'],
      ['Does it replace site review?', 'No. It supports the workflow, but project data should still be checked.'],
      ['Why connect takeoff and heat load?', 'The same room and building data often feeds both workflows.']
    ]
  },
  {
    dePath: 'digitales-aufmass-app.html',
    deUrl: 'https://prometo.app/digitales-aufmass/',
    enPath: 'en/digital-takeoff-app/index.html',
    enUrl: 'https://prometo.app/en/digital-takeoff-app/',
    slugNoSlash: '/en/digital-takeoff-app',
    title: 'Digital Takeoff App for HVAC | Prometo',
    description: 'Mobile digital takeoff app for HVAC teams with floor plan import, room review and connected project workflows.',
    badge: 'Digital takeoff app',
    h1: 'Digital Takeoff App for HVAC Teams',
    intro: 'Prometo supports floor plan import, room review and connected project data for HVAC takeoff workflows.',
    short: 'The app helps teams move from floor plan review to structured room and project data without describing internal recognition methods or technical API details.',
    sections: [
      ['Plan import', 'Start with the project floor plan and review the resulting room structure.'],
      ['Mobile review', 'Keep site checks and office preparation connected in one project context.'],
      ['Technical follow-up', 'Use structured data as the basis for heat load and further planning workflows.']
    ],
    faqs: [
      ['Is this a separate workflow?', 'It supports the digital takeoff part of the broader Prometo workflow.'],
      ['Can users review results?', 'Yes. Review is important because project data should be checked before technical use.'],
      ['Do you explain internal recognition logic?', 'No. The page describes the user workflow, not implementation details.']
    ]
  },
  {
    dePath: 'app-workflows.html',
    deUrl: 'https://prometo.app/app-workflows.html',
    enPath: 'en/app-workflows/index.html',
    enUrl: 'https://prometo.app/en/app-workflows/',
    slugNoSlash: '/en/app-workflows',
    robots: 'noindex, follow',
    title: 'Prometo App Workflows: Floor Plan Import, Heat Load and Balancing',
    description: 'Prometo app workflow overview for floor plan import, room review, heat load context, heatmap and hydraulic balancing screens.',
    badge: 'App workflows',
    h1: 'Prometo App Workflows: Floor Plan Import, Heat Load and Balancing',
    intro: 'This English workflow overview summarizes the main Prometo app screens for international visitors.',
    short: 'Prometo combines plan import, room review, heat load context, project detail views and hydraulic balancing support in a connected HVAC workflow.',
    sections: [
      ['Create project structure', 'Start a project and keep floor plan, room data and follow-up planning context together.'],
      ['Review rooms and heat load context', 'Use the app workflow to review room data and prepare a cleaner basis for calculations.'],
      ['Continue into balancing', 'Project data can continue into distribution and balancing workflows.']
    ],
    faqs: [
      ['Is this an indexed SEO page?', 'This workflow overview is intended as a supporting page and can remain noindex if used mainly for product screenshots.'],
      ['What does the workflow cover?', 'It covers floor plan import, room review, heat load context and hydraulic balancing screens.'],
      ['Does it reveal internal implementation details?', 'No. It describes the user-facing workflow only.']
    ]
  },
  {
    dePath: 'datenschutz.html',
    deUrl: 'https://prometo.app/datenschutz.html',
    enPath: 'en/privacy/index.html',
    enUrl: 'https://prometo.app/en/privacy/',
    slugNoSlash: '/en/privacy',
    robots: 'noindex, follow',
    title: 'Privacy Policy | Prometo',
    description: 'English orientation page for Prometo privacy information. The legally authoritative privacy policy remains the German version.',
    badge: 'Privacy',
    h1: 'Privacy Policy',
    intro: 'This English page provides orientation for international visitors. The legally authoritative privacy policy remains the German version.',
    short: 'Prometo may process technical access data, contact data and analytics data depending on user consent and interaction with the website. Please refer to the German privacy policy for the legally binding wording.',
    sections: [
      ['Analytics consent', 'Google Analytics is only loaded after consent through the cookie banner.'],
      ['Contact and demo requests', 'If you contact Prometo, the provided data is used to process the request.'],
      ['Authoritative version', 'For legal precision, use the German privacy policy linked from this page.']
    ],
    faqs: [
      ['Is this the legally binding privacy policy?', 'No. It is an English orientation page. The German privacy policy remains legally authoritative.'],
      ['Is analytics loaded without consent?', 'The website sets analytics consent to denied by default and loads Google Analytics after consent.'],
      ['Where is the German privacy policy?', 'It is available at /datenschutz.html.']
    ]
  },
  {
    dePath: 'impressum.html',
    deUrl: 'https://prometo.app/impressum.html',
    enPath: 'en/legal-notice/index.html',
    enUrl: 'https://prometo.app/en/legal-notice/',
    slugNoSlash: '/en/legal-notice',
    robots: 'noindex, follow',
    title: 'Legal Notice | Prometo',
    description: 'English orientation page for Prometo legal notice. The legally authoritative imprint remains the German version.',
    badge: 'Legal notice',
    h1: 'Legal Notice',
    intro: 'This English page helps international visitors find Prometo legal information. The legally authoritative imprint remains the German version.',
    short: 'Prometo is operated from Germany. For full legal details, responsible party and contact information, please use the German imprint linked from this page.',
    sections: [
      ['Responsible information', 'The legally relevant company and contact details are maintained in the German imprint.'],
      ['International visitors', 'This page is an English orientation page, not a replacement for the German legal notice.'],
      ['Contact', 'For product or demo questions, use the contact options linked from the main website.']
    ],
    faqs: [
      ['Is this a legal translation?', 'No. It is an English orientation page. The German imprint remains authoritative.'],
      ['Where is the German imprint?', 'It is available at /impressum.html.'],
      ['Can I contact Prometo in English?', 'Yes, international product inquiries can use the website contact or demo request paths.']
    ]
  }
];

const nav = [
  ['Home', '/en/'],
  ['Heat Load', '/en/heat-load/'],
  ['Heat Pump Sizing', '/en/heat-pump-sizing/'],
  ['Digital Takeoff', '/en/digital-takeoff/'],
  ['Hydraulic Balancing', '/en/hydraulic-balancing/']
];

const copyExpansions = {
  'en/index.html': {
    sections: [
      ['Heat load as the base', 'Prometo keeps heat load data visible so sizing decisions stay grounded in the building, not just in a single kW figure.'],
      ['Room-by-room structure', 'Room data stays organized so later steps like heating surfaces, balancing, and validation do not have to be rebuilt.'],
      ['One connected model', 'The goal is a clean technical workflow where the same project information is reused instead of re-entered.']
    ],
    faqs: [
      ['Is Prometo mobile-friendly?', 'Yes. The workflow is designed so field and office work can stay connected.'],
      ['Can the same project data be reused later?', 'Yes. The intent is to reuse the same room and project context across calculation and balancing steps.']
    ]
  },
  'en/heat-load/index.html': {
    sections: [
      ['What heat load means', 'Heat load is the output needed at the coldest design case, not the energy used over an entire year.'],
      ['Units and specific load', 'Heat load is usually shown in W or kW, while specific heat load is often expressed as W/m2 for rough comparison.'],
      ['Room load vs building load', 'Room heat load supports emitter sizing, while building heat load supports the overall heating concept and system sizing.']
    ],
    faqs: [
      ['Why is room heat load important?', 'Room heat load is what later drives heating surface sizing, flow rates, and balancing decisions.'],
      ['What is the biggest mistake to avoid?', 'The biggest mistake is treating consumption or floor area as if it were the same thing as a design heat load.']
    ]
  },
  'en/heat-load-calculation/index.html': {
    sections: [
      ['Start from the floor plan', 'Use the floor plan as the first source of truth so room data is built from the actual project geometry.'],
      ['Add building context', 'Envelope data, location, and design temperatures should stay tied to the calculation instead of living in separate notes.'],
      ['Support the handoff', 'The calculation output should be easy to review, share, and continue in the next technical step.']
    ],
    faqs: [
      ['Is the workflow only useful for large projects?', 'No. Smaller projects still benefit when the data stays organized from the start.'],
      ['Does it help with later balancing work?', 'Yes. Room-level structure is useful later when balancing and flow rate checks begin.']
    ]
  },
  'en/heat-load-calculation/app/index.html': {
    sections: [
      ['Field and office together', 'The same project can be reviewed on site and continued later in the office without losing context.'],
      ['Review while the project is fresh', 'Mobile review makes it easier to catch missing room data, plan changes, and open questions early.'],
      ['Reduce handoff errors', 'When the same data travels with the project, fewer details get lost between site and office.']
    ],
    faqs: [
      ['Is the mobile workflow different from the office workflow?', 'The same project data should carry through both, even if the device experience changes.'],
      ['Does it help with change tracking?', 'Yes. It is easier to catch plan revisions when the room structure stays visible in the workflow.']
    ]
  },
  'en/heat-load-calculation/din-en-12831/index.html': {
    sections: [
      ['What the standard covers', 'DIN EN 12831 focuses on the building and room data needed to calculate the design heating output.'],
      ['Design temperatures', 'The design outdoor temperature defines the cold-case load that the heating system must cover.'],
      ['What the standard does not do', 'The standard gives a calculation method, but it does not replace project-specific review or system design choices.']
    ],
    faqs: [
      ['Can consumption replace the standard method?', 'No. Consumption can support plausibility, but it does not replace a design calculation.'],
      ['Why is the room level important?', 'Room data is what later supports heating surfaces, flow rates, and balancing.']
    ]
  },
  'en/heat-load-estimates/index.html': {
    sections: [
      ['Rules of thumb', 'W/m2 values are useful as a starting point, but they are still only shortcuts.'],
      ['New build vs retrofit', 'A new build is easier to estimate than a retrofit because the project conditions are more predictable.'],
      ['Avoid mis-sizing', 'A rough estimate should never be treated as a final sizing basis for a heat pump or emitter system.']
    ],
    faqs: [
      ['When should I stop using the estimate?', 'Stop using it once the project needs a final technical decision.'],
      ['Is an estimate useful at all?', 'Yes. It is useful as a first step, as long as its limits stay clear.']
    ]
  },
  'en/hydraulic-balancing/index.html': {
    sections: [
      ['What balancing does', 'Balancing helps each room receive the required flow instead of letting nearby circuits dominate the system.'],
      ['Flow rates and emitters', 'The balancing result needs to match the actual emitters, not just the nominal system concept.'],
      ['Documentation and review', 'Good balancing should be traceable, reviewable, and connected to the original project data.']
    ],
    faqs: [
      ['Can balancing be done without room data?', 'It can be approximated, but the result is weaker and less defensible.'],
      ['What is the most common mistake?', 'The most common mistake is treating balancing like a pure valve exercise instead of a system task.']
    ]
  },
  'en/underfloor-heating-design/index.html': {
    sections: [
      ['Pipe spacing', 'Spacing controls how the output is distributed across the floor surface.'],
      ['Surface output', 'The floor must provide enough output without pushing the surface temperature too far.'],
      ['Different rooms need different layouts', 'Bedrooms, bathrooms, and living spaces often have different heat load and spacing needs.']
    ],
    faqs: [
      ['Why does circuit length matter?', 'Long or uneven circuits make balancing harder and can limit performance.'],
      ['What is the main design risk?', 'The main risk is sizing by spacing alone instead of by room demand and hydraulic reality.']
    ]
  },
  'en/heat-generators/index.html': {
    sections: [
      ['Biomass systems', 'Biomass can make sense where the site conditions, fuel logistics, and project goals fit the concept.'],
      ['Backup strategy', 'If an auxiliary heat source is part of the design, its role should be defined early.'],
      ['Project-specific choice', 'There is no universal best heat generator. The better choice is the one that matches the actual project.']
    ],
    faqs: [
      ['Does supply temperature matter?', 'Yes. Supply temperature strongly affects whether a heat pump can operate efficiently.'],
      ['Can I choose the system from the equipment alone?', 'No. The building and system context matter just as much as the equipment.']
    ]
  },
  'en/digital-takeoff/index.html': {
    sections: [
      ['Build the room structure', 'Room data is the backbone for later heat load, emitter, and balancing work.'],
      ['Keep notes and revisions', 'Site notes, revisions, and changes should stay connected to the same project.'],
      ['Avoid duplicate entry', 'Reusing the same structured project data saves time and lowers errors.']
    ],
    faqs: [
      ['Is this just for office use?', 'No. The best use case is a workflow that keeps the field and office linked.'],
      ['What is the main benefit?', 'The main benefit is cleaner project data that can be reused later.']
    ]
  },
  'en/digital-takeoff-app/index.html': {
    sections: [
      ['Room-level capture', 'Room data should stay clear enough to support later calculation and balancing work.'],
      ['Office handoff', 'The office should be able to pick up the same project without rebuilding the data.'],
      ['Keep the workflow simple', 'The app should help the team move faster without making the process harder to understand.']
    ],
    faqs: [
      ['Is it built for field use?', 'Yes. The content should support mobile review and site work.'],
      ['Does it connect to later planning work?', 'Yes. The point is to feed structured data into the next technical step.']
    ]
  },
  'en/app-workflows/index.html': {
    sections: [
      ['Create the project', 'Start with the project shell so the floor plan and follow-up planning steps stay in one place.'],
      ['Project detail views', 'Project detail screens should make the key data easy to revisit without digging through unrelated views.'],
      ['Mobile and tablet use', 'The workflow should still make sense on smaller screens because field work and review do not always happen at a desk.']
    ],
    faqs: [
      ['Why keep it noindex?', 'Because it is primarily a supporting product page, not a search landing page.'],
      ['Is the content still useful to visitors?', 'Yes. It helps visitors understand the product flow quickly.']
    ]
  },
  'en/privacy/index.html': {
    sections: [
      ['Cookies and technical data', 'The website may use technical cookies or similar mechanisms to support normal operation and analytics.'],
      ['Retention and handling', 'Data should be handled only for the purpose it was collected for and for the period required by law or business need.'],
      ['Where to find details', 'Use the German privacy policy for the exact legal wording and full details.']
    ],
    faqs: [
      ['Can I still understand the basics in English?', 'Yes. This page should give international visitors the practical overview they need.'],
      ['Should users rely on the German page for legal clarity?', 'Yes. The German page is the source of record.']
    ]
  },
  'en/legal-notice/index.html': {
    sections: [
      ['Contact information', 'Use the main site contact paths for product or demo questions.'],
      ['Business location', 'The German legal notice remains the source of record for company details and jurisdiction.'],
      ['Where to verify details', 'If the exact legal wording matters, use the German page.']
    ],
    faqs: [
      ['Should I rely on the German page for legal wording?', 'Yes. That is the source of record.'],
      ['Why have an English legal notice at all?', 'To make it easier for international visitors to find the correct legal information.']
    ]
  }
};

for (const page of pages) {
  const expansion = copyExpansions[page.enPath];
  if (!expansion) continue;
  page.sections = [...page.sections, ...expansion.sections];
  page.faqs = [...page.faqs, ...expansion.faqs];
}

const relatedModules = {
  'en/index.html': {
    eyebrow: 'English cluster',
    title: 'Start with the core HVAC workflows',
    lead: 'These pages carry the English workflow forward from the overview into calculation, design and balancing.',
    links: [
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Move from the overview into room structure and calculation context.' },
      { label: 'Underfloor heating design', href: '/en/underfloor-heating-design/', description: 'See how load, spacing and circuit layout fit together.' },
      { label: 'Heat generators', href: '/en/heat-generators/', description: 'Check system choice after the building load is clear.' }
    ]
  },
  'en/heat-load/index.html': {
    eyebrow: 'Next step',
    title: 'Connect heat load to sizing decisions',
    lead: 'Use these pages when a heat load value needs to become a practical project decision.',
    links: [
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Go back to the connected calculation workflow.' },
      { label: 'Heat pump sizing', href: '/en/heat-pump-sizing/', description: 'Check what the load means for a concrete system selection.' },
      { label: 'Hydraulic balancing', href: '/en/hydraulic-balancing/', description: 'Carry the same load data into balancing and flow-rate work.' }
    ]
  },
  'en/heat-load-calculation/index.html': {
    eyebrow: 'Calculation cluster',
    title: 'Keep the calculation chain connected',
    lead: 'These links keep the main calculation page tied to its app, standard and downstream planning pages.',
    links: [
      { label: 'Heat load calculation app', href: '/en/heat-load-calculation/app/', description: 'Move the workflow into the site-and-office app flow.' },
      { label: 'DIN EN 12831', href: '/en/heat-load-calculation/din-en-12831/', description: 'Read the standard-based calculation context next.' },
      { label: 'Heat load', href: '/en/heat-load/', description: 'Start from the definition before you size anything.' }
    ]
  },
  'en/heat-load-calculation/app/index.html': {
    eyebrow: 'Workflow links',
    title: 'From site capture to calculation output',
    lead: 'Use the app page together with the calculation and planning pages so the workflow does not break at handoff.',
    links: [
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Return to the main calculation workflow.' },
      { label: 'Digital takeoff', href: '/en/digital-takeoff/', description: 'Connect plan capture with the same project data.' },
      { label: 'DIN EN 12831', href: '/en/heat-load-calculation/din-en-12831/', description: 'Keep the standard-based context close to the app flow.' }
    ]
  },
  'en/heat-load-calculation/din-en-12831/index.html': {
    eyebrow: 'Standards context',
    title: 'Use the standard with the practical pages',
    lead: 'DIN EN 12831 works best when it stays linked to the practical calculation, load and sizing pages.',
    links: [
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Go back to the main workflow that uses the standard.' },
      { label: 'Heat load', href: '/en/heat-load/', description: 'Revisit the basic load definition before the method details.' },
      { label: 'Heat generators', href: '/en/heat-generators/', description: 'Connect the calculation output to system choice.' }
    ]
  },
  'en/heat-load-estimates/index.html': {
    eyebrow: 'Orientation only',
    title: 'Move from estimate to real calculation',
    lead: 'Treat rough values as the starting point and hand them off to the project-specific pages.',
    links: [
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Move from a rule of thumb to room-by-room data.' },
      { label: 'Heat load', href: '/en/heat-load/', description: 'Keep the distinction between load and demand clear.' },
      { label: 'Heat pump sizing', href: '/en/heat-pump-sizing/', description: 'Check why a rough estimate is not enough for system selection.' }
    ]
  },
  'en/hydraulic-balancing/index.html': {
    eyebrow: 'Balancing cluster',
    title: 'Keep balancing tied to load and emitters',
    lead: 'Balancing becomes more useful when it stays connected to the pages that define room demand and system choice.',
    links: [
      { label: 'Heat load', href: '/en/heat-load/', description: 'Use the design load as the base for flow-rate decisions.' },
      { label: 'Underfloor heating design', href: '/en/underfloor-heating-design/', description: 'Check how circuit layout and room demand interact.' },
      { label: 'Heat generators', href: '/en/heat-generators/', description: 'Link balancing back to the generator and operating strategy.' }
    ]
  },
  'en/underfloor-heating-design/index.html': {
    eyebrow: 'Layout links',
    title: 'Move from room load to emitter layout',
    lead: 'Pipe spacing and circuit length are easier to judge when the calculation and balancing pages stay one click away.',
    links: [
      { label: 'Heat load', href: '/en/heat-load/', description: 'Start with the output requirement for each room.' },
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Keep the design tied to the calculation workflow.' },
      { label: 'Hydraulic balancing', href: '/en/hydraulic-balancing/', description: 'Check the flow consequences of the final layout.' }
    ]
  },
  'en/heat-generators/index.html': {
    eyebrow: 'System choice',
    title: 'Match the generator to the building data',
    lead: 'The generator page belongs next to the load and sizing pages, not on its own.',
    links: [
      { label: 'Heat load', href: '/en/heat-load/', description: 'Use the design load before choosing equipment.' },
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Bring the full calculation workflow into the decision.' },
      { label: 'Heat pump sizing', href: '/en/heat-pump-sizing/', description: 'Compare the generator choice with sizing constraints.' }
    ]
  },
  'en/digital-takeoff/index.html': {
    eyebrow: 'Plan workflow',
    title: 'Carry takeoff data into the calculation pages',
    lead: 'Digital takeoff is strongest when the same project data keeps flowing into the calculation workflow.',
    links: [
      { label: 'Digital takeoff app', href: '/en/digital-takeoff-app/', description: 'Move from the page overview to the mobile workflow.' },
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Connect the takeoff result with the calculation page.' },
      { label: 'Heat load', href: '/en/heat-load/', description: 'Keep the base load definition visible.' }
    ]
  },
  'en/digital-takeoff-app/index.html': {
    eyebrow: 'Field to office',
    title: 'Use the app as the handoff point',
    lead: 'The mobile takeoff page should feed the same project into the calculation and app workflow pages.',
    links: [
      { label: 'Digital takeoff', href: '/en/digital-takeoff/', description: 'See the broader takeoff workflow around the app.' },
      { label: 'Heat load calculation app', href: '/en/heat-load-calculation/app/', description: 'Connect the takeoff result with site and office review.' },
      { label: 'Heat load calculation', href: '/en/heat-load-calculation/', description: 'Continue into the main calculation workflow.' }
    ]
  },
  'en/app-workflows/index.html': {
    eyebrow: 'Supporting page',
    title: 'Keep the workflow overview linked to the product pages',
    lead: 'This supporting page should point back to the main English product pages instead of sitting apart as a dead end.',
    links: [
      { label: 'Digital takeoff app', href: '/en/digital-takeoff-app/', description: 'Review the mobile workflow shown in the screenshots.' },
      { label: 'Heat load calculation app', href: '/en/heat-load-calculation/app/', description: 'Keep the calculation flow tied to the app page.' },
      { label: 'Hydraulic balancing', href: '/en/hydraulic-balancing/', description: 'Continue into the balancing step after the workflow overview.' }
    ]
  },
  'en/privacy/index.html': {
    eyebrow: 'Legal links',
    title: 'Pair the English summary with the source documents',
    lead: 'This page is only an English orientation layer, so the legal source pages stay close at hand.',
    links: [
      { label: 'German privacy policy', href: '/datenschutz.html', description: 'Open the legally authoritative version.' },
      { label: 'Legal notice', href: '/en/legal-notice/', description: 'Switch to the English legal notice page if needed.' },
      { label: 'Home', href: '/en/', description: 'Return to the main English entry point.' }
    ]
  },
  'en/legal-notice/index.html': {
    eyebrow: 'Legal links',
    title: 'Keep the English notice tied to the German source',
    lead: 'The legal notice page should lead visitors back to the authoritative German imprint and the privacy page.',
    links: [
      { label: 'German imprint', href: '/impressum.html', description: 'Open the legally authoritative notice.' },
      { label: 'Privacy policy', href: '/en/privacy/', description: 'Move from the notice to the privacy summary.' },
      { label: 'Home', href: '/en/', description: 'Return to the English home page.' }
    ]
  }
};

function getRelatedModule(page) {
  return relatedModules[page.enPath] || {
    eyebrow: 'English cluster',
    title: `Continue with ${page.badge}`,
    lead: 'Use these links to keep the English topic cluster connected instead of treating each page as a dead end.',
    links: nav
      .filter(([, href]) => href !== '/en/' && href !== page.enUrl.replace('https://prometo.app', ''))
      .slice(0, 3)
      .map(([label, href]) => ({ label, href, description: 'Open a related English planning page.' }))
  };
}

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function hasNoindexMeta(html) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  return metaTags.some(tag => /name\s*=\s*["'](?:robots|googlebot)["']/i.test(tag) && /content\s*=\s*["'][^"']*noindex/i.test(tag));
}

function render(page) {
  const robots = page.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const related = getRelatedModule(page);
  const navLinks = nav.map(([label, href]) => {
    const current = href === page.slugNoSlash + '/' || (href === '/en/' && page.enPath === 'en/index.html');
    return `<a href="${href}" class="${current ? 'text-primary' : 'hover:text-white transition-colors'}"${current ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('\n                ');
  const sections = page.sections.map(([title, text], index) => `
                    <article class="glass-panel rounded-3xl p-8 reveal ${index ? `reveal-delay-${Math.min(index, 3)}` : ''} lift-on-hover">
                        <h2 class="text-2xl font-bold text-white mb-4">${esc(title)}</h2>
                        <p class="text-gray-400 leading-relaxed">${esc(text)}</p>
                    </article>`).join('');
  const faqs = page.faqs.map(([q, a], index) => `
                    <details class="faq-item glass-panel rounded-3xl p-6 reveal ${index ? `reveal-delay-${Math.min(index, 3)}` : ''} lift-on-hover"${index === 0 ? ' open' : ''}>
                        <summary class="text-lg font-headline font-bold text-gray-200">${esc(q)}</summary>
                        <p class="mt-4 text-gray-400 leading-relaxed">${esc(a)}</p>
                    </details>`).join('');
  const faqJson = page.faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://prometo.app/#organization',
        name: 'Prometo',
        url: 'https://prometo.app/',
        logo: { '@type': 'ImageObject', url: 'https://prometo.app/Logo/Wort-Bild.svg' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${page.enUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prometo.app/en/' },
          { '@type': 'ListItem', position: 2, name: page.badge, item: page.enUrl }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': `${page.enUrl}#webpage`,
        url: page.enUrl,
        name: page.h1,
        description: page.description,
        inLanguage: 'en-US',
        isPartOf: { '@id': 'https://prometo.app/#website' },
        breadcrumb: { '@id': `${page.enUrl}#breadcrumb` }
      },
      {
        '@type': 'FAQPage',
        '@id': `${page.enUrl}#faq`,
        mainEntity: faqJson
      }
    ]
  };

  return `<!DOCTYPE html>
<html class="dark" lang="en-US">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport" />
    <meta name="google-site-verification" content="6mKTmjxum120PQpW8ywo2vEvDUL25xBNT1ke12Zb2tQ" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <meta name="robots" content="${robots}" />
    <meta name="googlebot" content="${robots}" />
    <meta name="theme-color" content="#0b0e0e" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <link rel="canonical" href="${page.enUrl}" />
    <link rel="alternate" hreflang="de-DE" href="${page.deUrl}" />
    <link rel="alternate" hreflang="en-US" href="${page.enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${page.deUrl}" />
    <link rel="preload" href="/assets/fonts/space-grotesk-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/assets/fonts/manrope-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="icon" href="/assets/icon.svg" type="image/svg+xml" sizes="any" />
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Prometo" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${page.enUrl}" />
    <meta property="og:image" content="https://prometo.app/assets/prometo-screenshots/mobile/projektdetail-bivalenzpunkt.webp" />
    <meta property="og:image:alt" content="Prometo app screen for HVAC project planning" />
    <meta property="og:image:type" content="image/webp" />
    <meta property="og:image:width" content="1080" />
    <meta property="og:image:height" content="2400" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="https://prometo.app/assets/prometo-screenshots/mobile/projektdetail-bivalenzpunkt.webp" />
    <link rel="preload" href="/assets/tailwind.css" as="style" />
    <link rel="stylesheet" href="/assets/tailwind.css" />
    <link rel="stylesheet" href="/assets/page-effects.css" />
    <style>
        body { background: radial-gradient(circle at top, rgba(69, 222, 231, 0.12), transparent 42%), linear-gradient(180deg, #0b0e0e 0%, #0f1414 100%); color: #dfe3e3; font-family: 'Manrope', sans-serif; }
        h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
        .glass-panel { background: rgba(23, 28, 28, 0.72); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
        .badge { display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 999px; padding: 0.5rem 0.9rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #6bf6ff; background: rgba(69, 222, 231, 0.08); border: 1px solid rgba(69, 222, 231, 0.18); }
        .badge::before { content: ""; width: 0.45rem; height: 0.45rem; border-radius: 999px; background: #45dee7; box-shadow: 0 0 16px rgba(69, 222, 231, 0.7); }
        .faq-item summary { cursor: pointer; list-style: none; }
        .faq-item summary::-webkit-details-marker { display: none; }
    </style>
    <script type="application/ld+json">${JSON.stringify(jsonLd, null, 8)}</script>
</head>

<body class="min-h-screen">
    <header class="sticky top-0 z-50 border-b border-white/6 bg-[#0b0e0e]/85 backdrop-blur-xl">
        <div class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <a href="/en/" class="inline-flex items-center gap-3" aria-label="Prometo home">
                <img src="/Logo/Wort-Bild.svg" alt="Prometo" width="230" height="37" fetchpriority="high" decoding="async" class="h-8 w-auto brightness-0 invert" />
            </a>
            <nav aria-label="Primary navigation" class="hidden md:flex items-center gap-7 text-sm text-gray-400">
                ${navLinks}
                <a href="${page.deUrl.replace('https://prometo.app', '')}" hreflang="de-DE" class="hover:text-white transition-colors">Deutsch</a>
            </nav>
            <a href="/#beta-signup" class="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-headline font-bold text-on-primary transition-all hover:shadow-[0_0_24px_rgba(69,222,231,0.35)]">Request demo</a>
        </div>
    </header>

    <main>
        <section class="px-6 py-16 md:py-24">
            <div class="max-w-screen-xl mx-auto">
                <nav aria-label="Breadcrumb" class="mb-8 text-sm text-gray-500">
                    <a href="/en/" class="text-primary hover:text-white transition-colors">Home</a>
                    <span class="mx-2 text-gray-600">/</span>
                    <span aria-current="page">${esc(page.badge)}</span>
                </nav>
                <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div class="reveal">
                        <span class="badge mb-6">${esc(page.badge)}</span>
                        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">${esc(page.h1)}</h1>
                        <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-6">${esc(page.intro)}</p>
                        <div class="mb-6 p-5 rounded-2xl border border-primary/20 bg-primary/8">
                            <p class="text-xs font-headline font-bold text-primary uppercase tracking-widest mb-3">Short answer</p>
                            <p class="text-sm md:text-base text-gray-200 leading-relaxed">${esc(page.short)}</p>
                        </div>
                        <p class="text-xs text-gray-500 mb-8">Last updated: <time datetime="${contentDate}">April 2026</time></p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="/#beta-signup" class="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-headline font-bold text-on-primary transition-all hover:shadow-[0_0_28px_rgba(69,222,231,0.35)]">Request demo</a>
                            <a href="${page.deUrl.replace('https://prometo.app', '')}" hreflang="de-DE" class="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-base text-white transition-colors hover:border-primary hover:text-primary">German version</a>
                        </div>
                    </div>
                    <aside class="glass-panel rounded-[2rem] p-8 reveal reveal-delay-2 lift-on-hover">
                        <p class="text-sm font-headline font-bold text-primary uppercase tracking-widest mb-4">${esc(related.eyebrow)}</p>
                        <h2 class="text-3xl font-bold text-white mb-5">${esc(related.title)}</h2>
                        <p class="text-gray-400 leading-relaxed mb-6">${esc(related.lead)}</p>
                        <div class="space-y-3">
                            ${related.links.map(link => `
                            <a href="${link.href}" class="block rounded-2xl border border-white/10 p-4 transition-colors hover:border-primary hover:text-white">
                                <span class="block text-base font-headline font-bold text-gray-100">${esc(link.label)}</span>
                                <span class="mt-1 block text-sm text-gray-400 leading-relaxed">${esc(link.description)}</span>
                            </a>`).join('')}
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <section class="px-6 pb-16 md:pb-24">
            <div class="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-3">
                ${sections}
            </div>
        </section>

        <section class="px-6 pb-16 md:pb-24" id="faq">
            <div class="max-w-screen-xl mx-auto">
                <div class="mb-10 max-w-3xl reveal">
                    <span class="badge mb-6">FAQ</span>
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Frequently asked questions</h2>
                </div>
                <div class="space-y-4">
                    ${faqs}
                </div>
            </div>
        </section>
    </main>

    <footer class="border-t border-white/6 bg-[#0b0e0e]">
        <div class="max-w-screen-xl mx-auto px-6 py-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div class="text-sm text-gray-400">© 2026 Prometo · HVAC software for heat load calculation, digital takeoff and planning workflows</div>
            <div class="flex flex-wrap gap-4 text-sm text-gray-400">
                <a href="/en/" class="hover:text-white transition-colors">English home</a>
                <a href="${page.deUrl.replace('https://prometo.app', '')}" hreflang="de-DE" class="hover:text-white transition-colors">Deutsch</a>
                <a href="/en/privacy/" class="hover:text-white transition-colors">Privacy</a>
                <a href="/en/legal-notice/" class="hover:text-white transition-colors">Legal notice</a>
            </div>
        </div>
    </footer>

    <script src="/assets/page-effects.js" defer></script>
</body>

</html>
`;
}

function updateGermanHreflang(page) {
  const file = path.join(root, page.dePath);
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(`hreflang="en-US" href="${page.enUrl}"`)) return;
  const deTag = `<link rel="alternate" hreflang="de-DE" href="${page.deUrl}" />`;
  if (html.includes(deTag)) {
    html = html.replace(deTag, `${deTag}\n    <link rel="alternate" hreflang="en-US" href="${page.enUrl}" />`);
  } else {
    html = html.replace(/<link rel="canonical" href="[^"]+" \/>/, match => `${match}\n    <link rel="alternate" hreflang="en-US" href="${page.enUrl}" />`);
  }
  fs.writeFileSync(file, html);
}

function updateSitemap() {
  const file = path.join(root, 'sitemap-pages.xml');
  const existing = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  const lastmodByLoc = new Map();
  for (const match of existing.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g)) {
    lastmodByLoc.set(match[1], match[2]);
  }

  const seen = new Set();
  const entries = [];
  const add = loc => {
    if (seen.has(loc)) return;
    seen.add(loc);
    const lastmod = loc.startsWith('https://prometo.app/en/')
      ? (changedEnUrls.has(loc) ? buildDate : lastmodByLoc.get(loc) || buildDate)
      : lastmodByLoc.get(loc) || buildDate;
    entries.push({ loc, lastmod });
  };

  for (const route of routes) {
    add(route.deUrl);
    const enFile = path.join(root, route.enPath);
    if (!fs.existsSync(enFile)) continue;
    const html = fs.readFileSync(enFile, 'utf8');
    const robotsNoindex = hasNoindexMeta(html);
    if (!robotsNoindex) add(route.enUrl);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(entry => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`).join('\n')}\n</urlset>\n`;
  fs.writeFileSync(file, xml);
}

function updateVercel(allPages) {
  const file = path.join(root, 'vercel.json');
  const config = JSON.parse(fs.readFileSync(file, 'utf8'));
  config.redirects = config.redirects || [];
  for (const page of allPages) {
    if (config.redirects.some(redirect => redirect.source === page.slugNoSlash)) continue;
    config.redirects.push({ source: page.slugNoSlash, destination: `${page.slugNoSlash}/`, permanent: true });
  }
  fs.writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`);
}

const changedEnUrls = new Set();

for (const page of pages) {
  const file = path.join(root, page.enPath);
  const nextHtml = render(page);
  const currentHtml = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (currentHtml !== nextHtml) {
    fs.writeFileSync(file, nextHtml);
    changedEnUrls.add(page.enUrl);
  }
  updateGermanHreflang(page);
}

updateGermanHreflang({
  dePath: 'waermepumpe-dimensionieren/index.html',
  deUrl: 'https://prometo.app/waermepumpe-dimensionieren/',
  enUrl: 'https://prometo.app/en/heat-pump-sizing/'
});
updateSitemap();
updateVercel(pages);

console.log(`Generated ${pages.length} English pages and updated hreflang, sitemap and redirects.`);
