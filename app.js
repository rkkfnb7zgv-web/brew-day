// ============================================================
// BREW DAY CHECKLIST DATA
// Mirrors the printed checklist from red_rock_schwarzbier_checklist.docx
// ============================================================

const CHECKLIST = {
  reference: {
    recipe: {
      Style: "Schwarzbier (Dark Lager)",
      "Batch size": "9 L into Junior fermenter",
      "Target OG": "1.040 (10.0 °Brix)",
      "Target FG range": "1.010–1.012",
      "Expected ABV": "3.8–4.0%",
      "Target IBU": "~26",
      "Target SRM": "~28 (dark with ruby highlights)",
      "Total timeline": "~9–12 weeks grain to glass"
    },
    grainBill: [
      ["Pilsner malt", "1.51 kg", "86%"],
      ["Munich malt (10°L)", "161 g", "9%"],
      ["Carafa Special II (dehusked)", "66 g", "4%"],
      ["Roast malt", "20 g", "1%"]
    ],
    hops: [
      ["Tettnang", "10 g", "4.0%", "60 min"],
      ["Tettnang", "10 g", "4.0%", "30 min"],
      ["Hallertau Mittelfrüh", "20 g", "4.0%", "whirlpool 80°C"]
    ],
    yeast: {
      primary: "Wyeast 2124 Bohemian Lager (liquid) with 1.5 L starter — see Stage 1",
      backup: "If no starter: 2 packets Saflager W-34/70 (22 g total) — pitch directly"
    },
    waterVolumes: [
      ["Stage", "Full-volume BIAB", "Mash + sparge"],
      ["Strike water (~71°C)", "~15 L (all of it)", "~6 L"],
      ["Sparge water (75°C)", "none", "~9 L"],
      ["Total water", "15 L", "15 L"],
      ["Pre-boil volume", "~13.5 L", "~13.5 L"],
      ["Post-boil (90 min)", "~10 L", "~10 L"],
      ["Into Junior", "9 L", "9 L"]
    ],
    waterRecommendation: "Recommendation for this brew: full-volume BIAB. Simpler workflow, no sparge water to heat in parallel, less error-prone.",
    criticalReminders: [
      "Your previous two Schwarzbiers used two single dry packets pitched cold — borderline under-pitched. This time you're using liquid yeast WITH a 1.5 L starter (substantially more cells, in active growth phase). The starter is non-negotiable. Begin 2–3 days before brew day. If you can't make a starter, use 2 packets of dry W-34/70.",
      "Verify thermometer calibration before brew day (ice water = 0°C; boiling water = 100°C). Any error here cascades through every brew.",
      "Mash temperature target is 64–65°C. Do not exceed 66°C — Schwarzbier needs high attenuation, and a high mash produces unfermentable sugars.",
      "Hold pressure at 0–1 PSI until active fermentation is established. Do not ramp pressure early.",
      "Do not measure FG before day 14 of primary. Lager fermentation is slow and stable readings require time.",
      "Lagering is real work — minimum 4 weeks in keg, ideally 6+ weeks. Be patient.",
      "RAPT Pill goes in BEFORE sealing the Junior. Calibrate in plain water first; sanitise with Star San (no heat)."
    ]
  },

  stages: [
    // ============================================================
    // STAGE 1: STARTER
    // ============================================================
    {
      id: "stage1",
      label: "Stage 1",
      title: "Yeast Starter",
      subtitle: "2–3 days before brew day",
      preBrew: true,
      intro: "A 1.5 L starter grows Wyeast 2124 from ~80 billion to ~350 billion cells — properly pitched for a 9 L lager wort. Previous Schwarzbiers used single dry packets pitched cold (borderline-low cell count, slow to start); a properly prepared liquid starter gives ~3× more cells in active growth phase.",
      subsections: [
        {
          title: "Starter — Equipment",
          items: [
            { type: "task", text: "2 L+ glass jar or flask" },
            { type: "task", text: "Foil for cover (sanitised)" },
            { type: "task", text: "Sanitiser (Star San)" },
            { type: "task", text: "Pot for boiling" },
            { type: "task", text: "DME: 150 g" },
            { type: "task", text: "Stir plate (optional but helpful)" },
            { type: "task", text: "Sanitised scissors" }
          ]
        },
        {
          title: "Starter — Preparation procedure",
          items: [
            { type: "task", text: "Sanitise jar, foil, anything that will touch wort" },
            { type: "task", text: "Boil 1.5 L water with 150 g DME for 10 min", hint: "lid on, watch for boilover" },
            { type: "task", text: "Cool to ~20°C (cold water bath speeds this up)" },
            { type: "task", text: "Pour cooled wort into sanitised jar" },
            { type: "task", text: "Sanitise outside of Wyeast pack, snap inner pouch, shake well" },
            { type: "task", text: "Pitch Wyeast 2124 into jar", hint: "record manufacture date in comment" },
            { type: "task", text: "Cover with sanitised foil (loose, not airtight)" },
            { type: "task", text: "Place on stir plate OR set in warm spot (18–22°C)" }
          ]
        },
        {
          title: "Starter — Monitor and prepare",
          items: [
            { type: "note", text: "Hold starter at 18–22°C throughout. Shake gently 3–4× per day if no stir plate." },
            { type: "task", text: "Day 1 check: slight cloudiness, maybe small krausen" },
            { type: "task", text: "Day 2 check: active fermentation visible, krausen on top" },
            { type: "task", text: "Day 3 check: activity slowing, yeast settling to bottom" },
            { type: "note", text: "If no activity by Day 2 morning: yeast may be dead or pack was bad. Switch to backup dry yeast." },
            { type: "task", text: "Optional: refrigerate 12–24 hrs before brew day to flocculate" },
            { type: "task", text: "Optional: decant spent starter beer, pitch only yeast slurry" },
            { type: "task", text: "Bring starter to ~12°C on brew day morning", hint: "match pitching temp" }
          ]
        }
      ]
    },

    // ============================================================
    // PRE-BREW: RAPT PILL SETUP
    // ============================================================
    {
      id: "pillSetup",
      label: "Pre-brew",
      title: "RAPT Pill Setup",
      subtitle: "day before brew day",
      preBrew: true,
      intro: "First-brew Pill setup. Once configured, future brews skip most of this.",
      subsections: [
        {
          title: "Pill — first-brew setup",
          items: [
            { type: "task", text: "Charge the Pill fully (USB)", hint: "battery %:" },
            { type: "task", text: "Create / log into RAPT cloud account at app.rapt.io" },
            { type: "task", text: "Pair Pill to Wi-Fi via the RAPT app" },
            { type: "task", text: "Set reporting interval to 15 minutes" },
            { type: "task", text: "Calibrate in plain water at 20°C", hint: "should read 1.000 (±0.002)" },
            { type: "task", text: "Note any calibration offset in RAPT portal", hint: "offset:" },
            { type: "task", text: "Sanitise Pill in Star San (cold soak — never boil)", hint: "5+ min contact" },
            { type: "task", text: "Verify Pill is dry-able / readable from outside fridge" },
            { type: "note", text: "Pill talks to Wi-Fi from inside the fridge. Test signal strength before brew day — if poor, the Pill won't report." },
            { type: "task", text: "Set up a 'Red Rock Schwarzbier' batch in RAPT app" },
            { type: "task", text: "Confirm Pill is reporting readings to the app" }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 2: BREW DAY
    // ============================================================
    {
      id: "stage2",
      label: "Stage 2",
      title: "Brew Day",
      subtitle: "approximately 5–6 hours",
      subsections: [
        {
          title: "Equipment setup",
          items: [
            { type: "task", text: "Burner" },
            { type: "task", text: "Windbreaks" },
            { type: "task", text: "Pot (20 L kettle)" },
            { type: "task", text: "Firestarter / lighter" },
            { type: "task", text: "Wort chiller" },
            { type: "task", text: "1st and 2nd hoses in place" },
            { type: "task", text: "Junior (9 L mark visible — 2 cm above temp gauge)" },
            { type: "task", text: "Spunding valve" },
            { type: "task", text: "CO2 to ball-lock connector" },
            { type: "task", text: "Ball-lock to ball-lock (liquid transfer line)" },
            { type: "task", text: "Screwdriver to tighten wort chiller" },
            { type: "task", text: "Shifter for pot seals" },
            { type: "task", text: "Silicon transfer tube" },
            { type: "task", text: "Manual long thermometer" },
            { type: "task", text: "Jug" },
            { type: "task", text: "Spoon" },
            { type: "task", text: "Bag (BIAB)" },
            { type: "task", text: "Clips for bag" },
            { type: "task", text: "Basket (for bag draining)" },
            { type: "task", text: "Hop spider" },
            { type: "task", text: "Refractometer + distilled water for zero" },
            { type: "task", text: "Hydrometer + test tube (for OG and FG confirmation)" },
            { type: "task", text: "RAPT Pill — sanitised and ready to drop into wort" },
            { type: "task", text: "Scissors" },
            { type: "task", text: "Star San spray bottle" },
            { type: "task", text: "Star San bucket" },
            { type: "task", text: "Starter (from Stage 1) — at ~12°C, ready to pitch" }
          ]
        },
        {
          title: "Sanitation",
          items: [
            { type: "task", text: "Mix Star San in bucket (1.5 ml per L)" },
            { type: "task", text: "Sanitise: silicon hose, hop spider, wort chiller" },
            { type: "task", text: "Sanitise: scissors, long thermometer, spoon" },
            { type: "task", text: "Sanitise: transfer lines, Junior interior + lid" },
            { type: "task", text: "Sanitise: starter jar lid area, anywhere yeast will touch" },
            { type: "note", text: "Star San is no-rinse — drain but don't dry." }
          ]
        },
        {
          title: "Thermometer calibration check",
          items: [
            { type: "note", text: "If not done in last 6 months, calibrate now. 20 minutes, prevents future stuck fermentations." },
            { type: "task", text: "Thermometer in ice water — should read 0°C (±0.5)", hint: "actual:" },
            { type: "task", text: "Thermometer in boiling water — should read 100°C (±0.5)", hint: "actual:" },
            { type: "task", text: "Note any offset for use during mash", hint: "offset:" }
          ]
        },
        {
          title: "Water and Mash",
          items: [
            { type: "note", text: "Two approaches — pick one. Full-volume BIAB is simpler for this small batch (1.75 kg grain)." },
            { type: "note", text: "FULL-VOLUME BIAB (recommended): use ~15 L total water, no separate sparge." },
            { type: "note", text: "MASH + POUR-OVER SPARGE: use ~6 L strike + ~9 L sparge." },
            { type: "task", text: "Fill kettle with 15 L water (full-volume) OR 6 L strike (if sparging)" },
            { type: "task", text: "Mark wort level at boil start (for boil-off measurement)", hint: "level mark made:" },
            { type: "task", text: "Heat strike water to ~71°C", hint: "target stabilises at 64–65°C" },
            { type: "task", text: "Mash pH check / lactic acid adjustment", hint: "target pH 5.4" },
            { type: "task", text: "Prepare bag, clips, attach to kettle" },
            { type: "task", text: "Mash in: add grain slowly while stirring" },
            { type: "task", text: "Stir thoroughly — check for dough balls" },
            { type: "task", text: "Verify mash temp +5 min after stir", hint: "actual temp:" },
            { type: "task", text: "Verify mash temp +15 min", hint: "actual temp:" },
            { type: "task", text: "Verify mash temp +30 min", hint: "actual temp:" },
            { type: "note", text: "Schwarzbier wants HIGH ATTENUATION. Mash MUST stay in 64–66°C range. Over 66 = sweet, stuck fermentation." }
          ]
        },
        {
          title: "Mash rest (60 min)",
          items: [
            { type: "task", text: "Take off clips, put on lid" },
            { type: "task", text: "Set timer for 60 min" },
            { type: "task", text: "Hold at 64–65°C for full hour" },
            { type: "task", text: "Apply heat briefly if temp drops > 1°C" },
            { type: "task", text: "Prepare hops while mashing" },
            { type: "task", text: "  — Weigh out 10 g Tettnang for 60 min" },
            { type: "task", text: "  — Weigh out 10 g Tettnang for 30 min" },
            { type: "task", text: "  — Weigh out 20 g Hallertau MF for whirlpool" },
            { type: "task", text: "  — Place each on a separate covered plate in fridge" },
            { type: "task", text: "Brix at 30 min mash", hint: "target ~9–10 °Brix:" },
            { type: "task", text: "Brix at 60 min mash", hint: "target ~9–10 °Brix:" },
            { type: "note", text: "30-min and 60-min Brix should match within 0.5°. If they differ, extend mash 15 min and re-check." }
          ]
        },
        {
          title: "Sparge",
          items: [
            { type: "note", text: "SKIP if you chose full-volume BIAB. Lift bag, drain, squeeze, proceed to boil." },
            { type: "note", text: "If sparging: heat 9 L water to 75°C in separate kettle on stove (during mash rest)." },
            { type: "task", text: "Lift bag from kettle, place in wire basket on top" },
            { type: "task", text: "Allow to drain a few minutes" },
            { type: "task", text: "Squeeze bag — collect every drop" },
            { type: "task", text: "IF SPARGING: take sparge water temp — should be 75–78°C", hint: "actual:" },
            { type: "task", text: "IF SPARGING: pour sparge water slowly over bag" },
            { type: "task", text: "IF SPARGING: test runoff Brix periodically", hint: "first runoff Brix:" },
            { type: "task", text: "IF SPARGING: stop when runoff drops to ~5 °Brix", hint: "final runoff Brix:" },
            { type: "task", text: "Measure pre-boil volume in kettle", hint: "target ~13–14 L, actual:" },
            { type: "task", text: "Measure pre-boil Brix", hint: "target 8.0–9.0 °Brix, actual:" },
            { type: "note", text: "STOP sparging once runoff reaches 5°Brix. Continuing extracts tannins → astringent finish." }
          ]
        },
        {
          title: "Boil (90 min)",
          items: [
            { type: "task", text: "Confirm pre-boil volume target: ~13–14 L", hint: "actual:" },
            { type: "task", text: "Confirm post-boil target: 10–11 L" },
            { type: "task", text: "Set timer for 90 min total boil" },
            { type: "task", text: "Bring to rolling boil" },
            { type: "task", text: "Mark wort level at start of rolling boil (for boil-off rate)", hint: "level marked y/n:" },
            { type: "task", text: "Set up wort chiller hoses while waiting" },
            { type: "task", text: "Connect wort chiller, test water flow" },
            { type: "task", text: "Insert wort chiller into kettle (15 min before flameout)" },
            { type: "task", text: "Insert hop spider" },
            { type: "task", text: "AT FLAMEOUT: measure wort level vs start mark", hint: "level drop:" },
            { type: "task", text: "Calculate boil-off rate (drop ÷ 1.5 hrs = L/hr)", hint: "boil-off L/hr:" },
            { type: "note", text: "90 min boil is essential — Pilsner-malt-heavy wort needs the time for DMS reduction." },
            { type: "note", text: "Boil-off rate is your most important kit constant. Record it carefully." }
          ]
        },
        {
          title: "Hop schedule",
          items: [
            { type: "task", text: "60 min to go: add 10 g Tettnang (first hops)", hint: "time:" },
            { type: "task", text: "30 min to go: add 10 g Tettnang (second hops)", hint: "time:" },
            { type: "task", text: "Flameout (90 min elapsed)", hint: "time:" },
            { type: "task", text: "Note post-boil volume", hint: "target 10–11 L, actual:" }
          ]
        },
        {
          title: "Wort chilling and whirlpool",
          items: [
            { type: "task", text: "Start wort chiller, cool to 80°C" },
            { type: "task", text: "At 80°C, pause chiller (leave inside wort)" },
            { type: "task", text: "Add 20 g Hallertau Mittelfrüh (whirlpool hops)" },
            { type: "task", text: "Set timer for 15 min hop stand" },
            { type: "task", text: "Maintain 70–80°C during stand" },
            { type: "task", text: "Remove hop spider after 15 min" },
            { type: "task", text: "Restart wort chiller" },
            { type: "task", text: "Chill toward 12°C (or as low as possible)", hint: "actual final temp:" },
            { type: "task", text: "Remove wort chiller when at temp" },
            { type: "task", text: "Note cool wort volume", hint: "target 10–11 L, actual:" },
            { type: "note", text: "Schwarzbier wants COLD PITCH. Chill below 14°C if at all possible." }
          ]
        },
        {
          title: "Transfer to fermenter",
          items: [
            { type: "task", text: "Confirm Junior is sanitised" },
            { type: "task", text: "Confirm sanitised silicon transfer hose" },
            { type: "task", text: "Spray Star San on kettle outlet fitting" },
            { type: "task", text: "Attach silicon hose to kettle" },
            { type: "task", text: "Open kettle, begin transfer to Junior" },
            { type: "task", text: "Splash a bit to oxygenate", hint: "important at pitch — yeast need O2" },
            { type: "task", text: "Stop at 9 L mark (pen line, 2 cm above temp gauge)" },
            { type: "note", text: "Important not to fill above 9 L — krausen will reach the posts and clog them." },
            { type: "task", text: "Rock Junior gently to mix and aerate" },
            { type: "task", text: "Confirm wort temp", hint: "target 10–12°C, actual:" },
            { type: "task", text: "Seal Junior" },
            { type: "task", text: "Place Junior in fridge" },
            { type: "task", text: "Set Inkbird to 14°C", hint: "ferment temp" }
          ]
        },
        {
          title: "Original gravity readings",
          items: [
            { type: "task", text: "Pour remainder from kettle for OG test" },
            { type: "task", text: "Hydrometer OG (degassed sample, 20°C)", hint: "target 1.040, actual SG:" },
            { type: "task", text: "Refractometer OG (cross-check)", hint: "target 10 °Brix, actual:" },
            { type: "task", text: "Wait for Junior to reach 12°C before pitching" },
            { type: "note", text: "Hydrometer is the source of truth for OG. Refractometer is the cross-check. Both should agree within 1–2 points." }
          ]
        },
        {
          title: "Pitching yeast",
          items: [
            { type: "task", text: "Purge Junior with CO2", hint: "displace headspace O2" },
            { type: "task", text: "Bring starter to room temp briefly (don't shock yeast)" },
            { type: "task", text: "Sanitise outside of starter jar" },
            { type: "task", text: "Sanitise scissors / opening method" },
            { type: "task", text: "Confirm Pill is sanitised, woken, and reporting", hint: "battery %:" },
            { type: "task", text: "Open Junior, drop Pill into wort first" },
            { type: "task", text: "Pour in starter (or decanted slurry)" },
            { type: "task", text: "Reseal Junior immediately" },
            { type: "task", text: "Confirm spunding valve attached, set to 0 PSI" },
            { type: "task", text: "Confirm Inkbird set to 14°C", hint: "should hold steady" },
            { type: "task", text: "Open RAPT app — confirm Pill is reading from inside Junior", hint: "first SG reading:" },
            { type: "note", text: "Pressure stays at 0 PSI initially. Will build naturally as fermentation starts. Cap at 5–8 PSI via spunding valve." },
            { type: "note", text: "Pill will read slightly low at first (still equilibrating). Trust the trend over 6+ hours, not individual readings." }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 3: PRIMARY FERMENTATION
    // ============================================================
    {
      id: "stage3",
      label: "Stage 3",
      title: "Primary Fermentation",
      subtitle: "14–16 days at 13–15°C",
      intro: "Free-rise from pitch temp (12°C) toward 14°C as fermentation produces heat. RAPT Pill provides continuous gravity and temperature readings via the RAPT app — log SG values daily as snapshots of the trend.",
      subsections: [
        {
          title: "Days 1–3: Active fermentation begins",
          items: [
            { type: "note", text: "Expect lag phase of 12–24 hours before visible activity. Pill should show gravity starting to drop within the same window." },
            { type: "task", text: "12 hrs: check Pill — any drop from OG?", hint: "SG:" },
            { type: "task", text: "24 hrs: check Pill — should see clear drop now", hint: "SG:" },
            { type: "note", text: "If no Pill gravity drop by 36 hours: yeast may be underpitched or dead. Verify Pill is reporting; if confirmed flat, consider repitching with backup dry yeast." },
            { type: "task", text: "48 hrs: confirm active fermentation, krausen visible", hint: "SG:" },
            { type: "task", text: "Check ferment temp on RAPT app", hint: "temp:" },
            { type: "task", text: "Adjust spunding valve to 5–8 PSI ceiling", hint: "PSI:" },
            { type: "note", text: "Pressure will build naturally to 5–8 PSI as CO2 is produced. Valve vents anything above 8." }
          ]
        },
        {
          title: "Days 4–10: Peak fermentation",
          items: [
            { type: "note", text: "Peak fermentation. Most attenuation happens here. Log daily Pill SG to track the curve." },
            { type: "task", text: "Day 4: log SG (from RAPT app)", hint: "SG:" },
            { type: "task", text: "Day 5: log SG", hint: "SG:" },
            { type: "task", text: "Day 6: log SG", hint: "SG:" },
            { type: "task", text: "Day 7: log SG", hint: "SG:" },
            { type: "task", text: "Day 8: log SG", hint: "SG:" },
            { type: "task", text: "Day 9: log SG", hint: "SG:" },
            { type: "task", text: "Day 10: log SG", hint: "SG:" },
            { type: "task", text: "Confirm Pill temp holding at 13–15°C", hint: "temp range:" },
            { type: "task", text: "Confirm pressure 5–8 PSI" },
            { type: "task", text: "Check Pill battery level periodically", hint: "battery %:" },
            { type: "note", text: "Pill readings are continuous but noisy — individual values can swing 1–2 points. Trust the trend across 24+ hours, not single readings." }
          ]
        },
        {
          title: "Days 11–14: Approaching terminal gravity",
          items: [
            { type: "task", text: "Day 11: log SG", hint: "SG:" },
            { type: "task", text: "Day 12: log SG — watch for stability (flat curve)", hint: "SG:" },
            { type: "task", text: "Day 13: log SG — should be near terminal", hint: "SG:" },
            { type: "task", text: "Day 14: log SG — three matching readings = finished primary", hint: "SG:" },
            { type: "note", text: "Target FG: 1.010–1.012. Stability means Pill SG hasn't moved more than 1 point across 48 hours." },
            { type: "note", text: "Before declaring FG: take a hydrometer reading from a degassed sample. Hydrometer is the source of truth, Pill is the trend." }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 4: DIACETYL REST
    // ============================================================
    {
      id: "stage4",
      label: "Stage 4",
      title: "Diacetyl Rest",
      subtitle: "2–3 days",
      intro: "Critical for pressure-fermented lagers. Warming the yeast lets it reabsorb diacetyl (buttery off-flavour) before cold crashing locks it in.",
      subsections: [
        {
          title: "Diacetyl rest",
          items: [
            { type: "task", text: "Confirm Pill SG has been stable for 48 hrs", hint: "stable y/n:" },
            { type: "task", text: "Increase Inkbird setpoint to 16–18°C (whatever is achievable)", hint: "actual target:" },
            { type: "task", text: "Allow temp to rise over 12–24 hrs (monitor on Pill)" },
            { type: "task", text: "Hold at warm temp for 48 hrs" },
            { type: "task", text: "Maintain pressure (don't release spunding valve)", hint: "PSI:" },
            { type: "task", text: "Day +1 of rest: log Pill SG", hint: "SG:" },
            { type: "task", text: "Day +2 of rest: take hydrometer sample (degassed)", hint: "hydrometer SG:" },
            { type: "task", text: "Day +2 of rest: cross-check Pill SG", hint: "Pill SG:" },
            { type: "note", text: "Final FG target: 1.010–1.012. If significantly higher, gravity may still drop with more time." },
            { type: "note", text: "Winter environment may not reach 18°C without a heater. Best-effort warmer is still better than no rest." },
            { type: "note", text: "If Pill and hydrometer disagree by >3 points: trust the hydrometer for the final number. Note the Pill offset for future calibration." }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 5: COLD CONDITIONING
    // ============================================================
    {
      id: "stage5",
      label: "Stage 5",
      title: "Cold Conditioning",
      subtitle: "3–5 days in Junior",
      intro: "Brief cold conditioning drops yeast and clarifies the beer before transfer to keg. Real lagering happens in the keg.",
      subsections: [
        {
          title: "Cold conditioning",
          items: [
            { type: "task", text: "Lower Inkbird setpoint to 2–4°C" },
            { type: "task", text: "Allow Junior to drop over 12–24 hrs (watch Pill temp)" },
            { type: "task", text: "Maintain pressure (8–10 PSI)" },
            { type: "task", text: "Day 1 cold: check Pill temp", hint: "actual:" },
            { type: "task", text: "Day 2 cold: yeast settling" },
            { type: "task", text: "Day 3 cold: beer clearing" },
            { type: "task", text: "Day 4 cold: ready to transfer" },
            { type: "task", text: "Note final Pill SG before packaging", hint: "SG:" },
            { type: "task", text: "Optional: cold-crash for up to 5 days" },
            { type: "note", text: "Pill stays in the Junior. It will not transfer with the beer — it sinks to the bottom with yeast cake. You'll recover it when cleaning the Junior post-package." }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 6: PACKAGING
    // ============================================================
    {
      id: "stage6",
      label: "Stage 6",
      title: "Closed Transfer to Keg",
      subtitle: "approximately 1 hour",
      intro: "Closed CO2 transfer leaves yeast cake in the Junior, frees up the fermenter for the next brew, and moves the beer to its lagering vessel without oxygen exposure.",
      subsections: [
        {
          title: "Keg preparation",
          items: [
            { type: "task", text: "Select destination keg", hint: "keg ID:" },
            { type: "task", text: "Clean keg if not already done (PBW soak, rinse)" },
            { type: "task", text: "Sanitise keg interior + posts + lid" },
            { type: "task", text: "Fill keg with Star San solution" },
            { type: "task", text: "Connect gas line, push out Star San with CO2 into receiving bucket" },
            { type: "task", text: "Keg is now full of CO2 (purged)" }
          ]
        },
        {
          title: "Transfer",
          items: [
            { type: "task", text: "Confirm both Junior and keg at similar cold temperature", hint: "temp match y/n:" },
            { type: "task", text: "Junior pressure at ~10 PSI", hint: "actual:" },
            { type: "task", text: "Connect ball-lock liquid line: Junior → keg" },
            { type: "task", text: "Briefly open keg PRV to create pressure differential" },
            { type: "task", text: "Beer flows from Junior to keg under pressure" },
            { type: "task", text: "Watch keg fill — listen for change when nearing empty" },
            { type: "task", text: "Stop transfer before yeast cake disturbed" },
            { type: "task", text: "Disconnect liquid line" },
            { type: "task", text: "Note volume transferred", hint: "actual:" },
            { type: "note", text: "Goal: maximum beer, minimum yeast. Discard last bit if drawing from the cake. Pill stays behind." },
            { type: "task", text: "Set keg pressure to 12 PSI for serving carbonation" },
            { type: "task", text: "Move keg to lagering location (kegerator / fridge)" },
            { type: "task", text: "Set lagering temp to 2°C" },
            { type: "task", text: "Open Junior, recover Pill from yeast cake" },
            { type: "task", text: "Rinse Pill, sanitise, store for next brew" }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 7: LAGERING
    // ============================================================
    {
      id: "stage7",
      label: "Stage 7",
      title: "Lagering in Keg",
      subtitle: "4–8 weeks minimum",
      intro: "This is where lagers are actually made. Flavour develops, residual yeast and trub settle out, and the beer reaches its full potential. Do not rush this stage.",
      subsections: [
        {
          title: "Lagering",
          items: [
            { type: "task", text: "Week 1: confirm keg holding 2°C, 12 PSI" },
            { type: "task", text: "Week 2: optional first taste (still young)", hint: "notes:" },
            { type: "task", text: "Week 3: clarity should be improving" },
            { type: "task", text: "Week 4: minimum lagering complete — drinkable" },
            { type: "note", text: "4 weeks is minimum. 6–8 weeks is meaningfully better. Time genuinely improves this style." },
            { type: "task", text: "Week 6: ideal tap point", hint: "notes:" },
            { type: "task", text: "Week 8: peak condition for Schwarzbier" },
            { type: "task", text: "Connect to tap for serving", hint: "first pour date:" }
          ]
        }
      ]
    },

    // ============================================================
    // STAGE 8: TASTING NOTES
    // ============================================================
    {
      id: "stage8",
      label: "Stage 8",
      title: "Tasting Notes",
      subtitle: "across keg lifetime",
      intro: "A kegged beer is consumed over weeks. Notes at different ages build understanding of when each beer peaks.",
      subsections: [
        {
          title: "Tasting log",
          items: [
            { type: "task", text: "First pour", hint: "date / notes:" },
            { type: "task", text: "Day 7 on tap", hint: "notes:" },
            { type: "task", text: "Day 14 on tap", hint: "notes:" },
            { type: "task", text: "Day 21 on tap", hint: "notes:" },
            { type: "task", text: "Day 28 on tap", hint: "notes:" },
            { type: "task", text: "Empty keg", hint: "date:" },
            { type: "note", text: "Look for: malt character, roast level (should be subtle), clarity (ruby highlights), carbonation, drinkability." },
            { type: "note", text: "Schwarzbier reference: clean, dry, restrained roast, smooth mouthfeel, no sweetness, no astringency." }
          ]
        }
      ]
    },

    // ============================================================
    // BREW SUMMARY
    // ============================================================
    {
      id: "summary",
      label: "Summary",
      title: "Brew Summary",
      subtitle: "fill in after FG",
      intro: "Key numbers to record for diagnostic comparison and future brews.",
      subsections: [
        {
          title: "Summary",
          items: [
            { type: "task", text: "Brew date" },
            { type: "task", text: "Starter date" },
            { type: "task", text: "Approach: full-volume BIAB or mash+sparge?" },
            { type: "task", text: "Total water used" },
            { type: "task", text: "Strike volume / temp actual" },
            { type: "task", text: "Sparge volume (if used)" },
            { type: "task", text: "Mash temp average" },
            { type: "task", text: "Pre-boil volume / Brix" },
            { type: "task", text: "Wort level drop during boil" },
            { type: "task", text: "Calculated boil-off rate (L/hr)" },
            { type: "task", text: "Post-boil volume" },
            { type: "task", text: "OG (hydrometer)" },
            { type: "task", text: "OG (refractometer)" },
            { type: "task", text: "OG (Pill first stable reading)" },
            { type: "task", text: "Pitch temp" },
            { type: "task", text: "Pitch date/time" },
            { type: "task", text: "Active ferment confirmed (hrs after pitch)" },
            { type: "task", text: "Peak pressure" },
            { type: "task", text: "Diacetyl rest start" },
            { type: "task", text: "Diacetyl rest end" },
            { type: "task", text: "FG (Pill)" },
            { type: "task", text: "FG (hydrometer — source of truth)" },
            { type: "task", text: "Pill-hydrometer offset (if any)" },
            { type: "task", text: "Cold crash start" },
            { type: "task", text: "Package date / volume to keg" },
            { type: "task", text: "First pour date" },
            { type: "task", text: "Final attenuation %" },
            { type: "task", text: "Final ABV" },
            { type: "task", text: "Overall notes / lessons" }
          ]
        }
      ]
    }
  ]
};

// ============================================================
// STATE MANAGEMENT
// ============================================================

const STORAGE_KEY = "brewChecklist_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { checked: {}, comments: {}, collapsed: {} };
  } catch (e) {
    return { checked: {}, comments: {}, collapsed: {} };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Could not save:", e);
  }
}

let state = loadState();

// ============================================================
// RENDERING
// ============================================================

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function taskId(stageId, subIdx, itemIdx) {
  return `${stageId}__${subIdx}__${itemIdx}`;
}

function renderReference() {
  const r = CHECKLIST.reference;
  let html = "";

  // Critical reminders (open by default)
  html += `<details class="reference-card critical-reminder" open>
    <summary>Critical reminders for this brew</summary>
    <div class="card-body">
      <ol>
        ${r.criticalReminders.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
      </ol>
    </div>
  </details>`;

  // Recipe summary
  html += `<details class="reference-card">
    <summary>Recipe summary</summary>
    <div class="card-body">
      <table>
        ${Object.entries(r.recipe).map(([k, v]) => `<tr><td>${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join("")}
      </table>
    </div>
  </details>`;

  // Grain bill
  html += `<details class="reference-card">
    <summary>Grain bill (1.75 kg total)</summary>
    <div class="card-body">
      <table>
        <tr><th>Malt</th><th>Weight</th><th>%</th></tr>
        ${r.grainBill.map(row => `<tr>${row.map(c => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("")}
      </table>
    </div>
  </details>`;

  // Hops
  html += `<details class="reference-card">
    <summary>Hops (40 g total)</summary>
    <div class="card-body">
      <table>
        <tr><th>Variety</th><th>Weight</th><th>AA%</th><th>Time</th></tr>
        ${r.hops.map(row => `<tr>${row.map(c => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("")}
      </table>
    </div>
  </details>`;

  // Yeast
  html += `<details class="reference-card">
    <summary>Yeast</summary>
    <div class="card-body">
      <p><strong>Primary:</strong> ${escapeHtml(r.yeast.primary)}</p>
      <p><strong>Backup:</strong> ${escapeHtml(r.yeast.backup)}</p>
    </div>
  </details>`;

  // Water volumes
  html += `<details class="reference-card">
    <summary>Water volumes</summary>
    <div class="card-body">
      <p class="text-small">Calculated for 1.75 kg grain, 9 L target, with placeholder kit constants. Measure your actual boil-off this brew to calibrate.</p>
      <table>
        ${r.waterVolumes.map((row, i) => {
          const tag = i === 0 ? "th" : "td";
          return `<tr>${row.map(c => `<${tag}>${escapeHtml(c)}</${tag}>`).join("")}</tr>`;
        }).join("")}
      </table>
      <p><em>${escapeHtml(r.waterRecommendation)}</em></p>
    </div>
  </details>`;

  return html;
}

function renderStage(stage) {
  const isCollapsed = state.collapsed[stage.id] === true;
  let html = `<section class="stage ${isCollapsed ? "collapsed" : ""} ${stage.preBrew ? "pre-brew" : ""}" data-stage-id="${stage.id}">
    <header class="stage-header" onclick="toggleStage('${stage.id}')">
      <div class="stage-header-top">
        <div>
          <div class="stage-label">${escapeHtml(stage.label)}</div>
          <h2 class="stage-title">${escapeHtml(stage.title)}</h2>
        </div>
        <span class="stage-toggle">▾</span>
      </div>
      <div class="stage-meta">
        <span>${escapeHtml(stage.subtitle)}</span>
        <span> · </span>
        <span class="stage-count" id="count-${stage.id}">0 / 0</span>
      </div>
    </header>
    <div class="stage-body">`;

  if (stage.intro) {
    html += `<div class="note" style="margin: 0; border-top: none;"><div>${escapeHtml(stage.intro)}</div></div>`;
  }

  stage.subsections.forEach((sub, subIdx) => {
    html += `<div class="subsection">`;
    html += `<div class="subsection-title">${escapeHtml(sub.title)}</div>`;
    sub.items.forEach((item, itemIdx) => {
      if (item.type === "note") {
        html += `<div class="note"><div>${escapeHtml(item.text)}</div></div>`;
      } else {
        const id = taskId(stage.id, subIdx, itemIdx);
        const checked = state.checked[id] === true;
        const comment = state.comments[id] || "";
        const hint = item.hint ? `<div class="task-hint">${escapeHtml(item.hint)}</div>` : "";
        html += `<div class="task ${checked ? "checked" : ""}" data-task-id="${id}">
          <div class="task-checkbox" onclick="toggleTask('${id}')"></div>
          <div class="task-content">
            <div class="task-text">${escapeHtml(item.text)}</div>
            ${hint}
            <textarea class="task-comment" placeholder="Comment..." oninput="updateComment('${id}', this.value)">${escapeHtml(comment)}</textarea>
          </div>
        </div>`;
      }
    });
    html += `</div>`;
  });

  html += `</div></section>`;
  return html;
}

function render() {
  const main = document.getElementById("appContent");
  let html = renderReference();
  CHECKLIST.stages.forEach(stage => {
    html += renderStage(stage);
  });
  main.innerHTML = html;
  updateAllCounts();
  updateProgress();
}

// ============================================================
// INTERACTIONS
// ============================================================

function toggleTask(id) {
  state.checked[id] = !state.checked[id];
  saveState();
  const el = document.querySelector(`[data-task-id="${id}"]`);
  if (el) {
    el.classList.toggle("checked", state.checked[id]);
  }
  updateAllCounts();
  updateProgress();
}

function updateComment(id, value) {
  if (value === "") {
    delete state.comments[id];
  } else {
    state.comments[id] = value;
  }
  saveState();
}

function toggleStage(stageId) {
  state.collapsed[stageId] = !state.collapsed[stageId];
  saveState();
  const el = document.querySelector(`[data-stage-id="${stageId}"]`);
  if (el) {
    el.classList.toggle("collapsed", state.collapsed[stageId]);
  }
}

function expandAll() {
  CHECKLIST.stages.forEach(s => { delete state.collapsed[s.id]; });
  saveState();
  document.querySelectorAll(".stage").forEach(el => el.classList.remove("collapsed"));
}

function collapseAll() {
  CHECKLIST.stages.forEach(s => { state.collapsed[s.id] = true; });
  saveState();
  document.querySelectorAll(".stage").forEach(el => el.classList.add("collapsed"));
}

function countStage(stage) {
  let total = 0, done = 0;
  stage.subsections.forEach((sub, subIdx) => {
    sub.items.forEach((item, itemIdx) => {
      if (item.type === "task") {
        total++;
        if (state.checked[taskId(stage.id, subIdx, itemIdx)]) done++;
      }
    });
  });
  return { total, done };
}

function updateAllCounts() {
  CHECKLIST.stages.forEach(stage => {
    const { total, done } = countStage(stage);
    const el = document.getElementById(`count-${stage.id}`);
    if (el) el.textContent = `${done} / ${total}`;
  });
}

function updateProgress() {
  let totalTotal = 0, totalDone = 0;
  CHECKLIST.stages.forEach(stage => {
    const { total, done } = countStage(stage);
    totalTotal += total;
    totalDone += done;
  });
  document.getElementById("progressText").textContent = `${totalDone} of ${totalTotal} tasks`;
  const pct = totalTotal === 0 ? 0 : Math.round((totalDone / totalTotal) * 100);
  document.getElementById("progressFill").style.width = `${pct}%`;
}

// ============================================================
// EXPORT / RESET
// ============================================================

function buildExportText() {
  const lines = [];
  lines.push("RED ROCK SCHWARZBIER — BREW LOG");
  lines.push("Exported: " + new Date().toISOString());
  lines.push("=".repeat(60));
  lines.push("");

  CHECKLIST.stages.forEach(stage => {
    const { total, done } = countStage(stage);
    lines.push(`\n${stage.label.toUpperCase()}: ${stage.title.toUpperCase()} (${done}/${total})`);
    lines.push("-".repeat(60));

    stage.subsections.forEach((sub, subIdx) => {
      lines.push(`\n  ${sub.title}`);
      sub.items.forEach((item, itemIdx) => {
        if (item.type === "note") return;
        const id = taskId(stage.id, subIdx, itemIdx);
        const checked = state.checked[id] ? "[x]" : "[ ]";
        const comment = state.comments[id];
        lines.push(`    ${checked} ${item.text}`);
        if (comment) {
          lines.push(`        → ${comment}`);
        }
      });
    });
  });

  return lines.join("\n");
}

function showExport() {
  document.getElementById("exportContent").textContent = buildExportText();
  document.getElementById("exportModal").classList.add("visible");
}

function copyExport() {
  const text = document.getElementById("exportContent").textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = event.target;
      const orig = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => { btn.textContent = orig; }, 1500);
    });
  } else {
    // Fallback for older browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

function showReset() {
  document.getElementById("resetModal").classList.add("visible");
}

function resetBrew() {
  state = { checked: {}, comments: {}, collapsed: {} };
  saveState();
  closeModal("resetModal");
  render();
  window.scrollTo(0, 0);
}

function closeModal(id) {
  document.getElementById(id).classList.remove("visible");
}

// Close modal on overlay click
document.addEventListener("click", e => {
  if (e.target.classList && e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("visible");
  }
});

// ============================================================
// PWA SERVICE WORKER
// ============================================================

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.log("SW registration failed:", err);
    });
  });
}

// ============================================================
// BOOT
// ============================================================

document.addEventListener("DOMContentLoaded", render);
