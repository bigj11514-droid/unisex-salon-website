const products = [
  {
    id: "cloud-gloss",
    side: "women",
    name: "Cloud Gloss",
    category: "Finish / hair",
    price: "$34",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    description:
      "A weightless shine veil that catches light without the crunch.",
    features: ["Glass-level shine", "Humidity shield", "Vegan + heat safe"],
    needs:
      "Use after a clean blowout. Mist from 20cm away, then press through ends.",
  },
  {
    id: "soft-reset",
    side: "women",
    name: "Soft Reset",
    category: "Care / skin",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    description:
      "A mineral-rich mask for a calm, luminous reset between appointments.",
    features: ["Barrier support", "Rosewater + zinc", "15-minute treatment"],
    needs: "Apply to clean skin twice a week. Leave for 15 minutes and rinse.",
  },
  {
    id: "chrome-mist",
    side: "women",
    name: "Chrome Mist",
    category: "Color / protect",
    price: "$42",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    description:
      "A cool-toned leave-in that keeps dimensional color vivid and soft.",
    features: ["UV color guard", "Detangles instantly", "Cool pearl tone"],
    needs: "Comb through damp hair before styling. Layer lightly on dry hair.",
  },
  {
    id: "form-paste",
    side: "men",
    name: "Form / 03",
    category: "Style / hair",
    price: "GH₵ 120",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    description:
      "A flexible matte paste for control that still moves with you.",
    features: ["Medium hold", "Dry matte finish", "Washes clean"],
    needs:
      "Warm a pea-sized amount in palms. Work through dry hair from the back.",
  },
  {
    id: "night-oil",
    side: "men",
    name: "Night Shift Oil",
    category: "Care / beard",
    price: "GH₵ 150",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    description:
      "A cedar and bergamot conditioning oil for a softer, sharper beard.",
    features: ["Cedar + bergamot", "Non-greasy finish", "Tames flyaways"],
    needs: "Press 2-4 drops into beard and skin after cleansing or before bed.",
  },
  {
    id: "clean-guard",
    side: "men",
    name: "Clean Guard",
    category: "Care / scalp",
    price: "GH₵ 110",
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=85",
    description:
      "A cooling daily wash that keeps the scalp balanced and refreshed.",
    features: ["Daily formula", "Peppermint + aloe", "Silicone free"],
    needs: "Massage into wet scalp for 60 seconds, then rinse thoroughly.",
  },
];
const services = {
  women: [
    ["Cut & finish", "Shape, wash, styling service", "$65+"],
    ["Color studio", "Gloss, dimension, full transformation", "$120+"],
    ["Texture & form", "Silk press, curls, protective styling", "$95+"],
    ["Skin service", "Express facial, glow reset, brows", "$45+"],
  ],
  men: [
    ["Precision cut", "Clipper, scissor, wash, finish", "GH₵ 80+"],
    ["Low cut", "Clean low cut, wash, finish", "GH₵ 50+"],
    ["Signature fade", "Skin fade, taper, texture styling", "GH₵ 100+"],
    ["Taper cut", "Temple taper, line-up, styling", "GH₵ 80+"],
    ["Beard trim", "Shape, hot towel, conditioning", "GH₵ 50+"],
    ["Hair + beard", "Full haircut and beard design", "GH₵ 150+"],
    ["Kids cut", "Gentle cut and styling for ages 12 and under", "GH₵ 50+"],
    ["Full reset", "Cut, beard, hot towel service", "GH₵ 180+"],
  ],
};
const serviceGroups = {
  women: [
    {
      name: "Cuts & styling",
      intro: "Choose the shape and finish that fits your day.",
      options: [
        ["Classic cut", "Consultation, wash, shape and finish", "$65+"],
        ["Blowout", "Smooth, volume or soft waves", "$45+"],
        ["Silk press", "Clean press with heat protection", "$85+"],
      ],
    },
    {
      name: "Color studio",
      intro: "Dimensional color with a finish built to last.",
      options: [
        ["Gloss refresh", "Tone, shine and condition", "$80+"],
        ["Highlights", "Face frame or full head dimension", "$140+"],
        ["Balayage", "Hand-painted natural brightness", "$180+"],
      ],
    },
    {
      name: "Texture & protective",
      intro: "Express yourself with texture, curls and protective styles.",
      options: [
        ["Natural curls", "Shape, define and diffuse", "$75+"],
        ["Braids", "Feed-in, knotless or custom pattern", "$120+"],
        ["Protective styling", "Low-tension install and finish", "$150+"],
      ],
    },
    {
      name: "Skin & beauty",
      intro: "Small services with a visible reset.",
      options: [
        ["Glow facial", "Cleanse, exfoliate, mask and moisturize", "$65+"],
        ["Brows & lashes", "Shape, tint or lash finish", "$45+"],
        ["Manicure", "Shape, care and polished finish", "$40+"],
      ],
    },
  ],
  men: [
    {
      name: "Fades",
      intro: "Pick your fade level, finish and line-up.",
      options: [
        ["Low fade", "Subtle fade around the ears and neckline", "GH₵ 50+"],
        ["Mid fade", "Balanced fade with a clean blend", "GH₵ 70+"],
        ["High fade", "Bold high blend with sharp contrast", "GH₵ 90+"],
        ["Skin fade", "Zero-bald finish with detailed blending", "GH₵ 110+"],
      ],
    },
    {
      name: "Cuts & tapers",
      intro: "Classic shapes, clean lines and everyday confidence.",
      options: [
        ["Low cut", "Clean low cut, wash and finish", "GH₵ 50+"],
        ["Taper cut", "Temple taper, line-up and styling", "GH₵ 80+"],
        ["Scissor cut", "Longer shape with scissor texture", "GH₵ 90+"],
        ["Kids cut", "Gentle cut and styling for ages 12 and under", "GH₵ 50+"],
      ],
    },
    {
      name: "Beard & shave",
      intro: "Detailed grooming for a sharper finish.",
      options: [
        ["Beard trim", "Shape, line-up and conditioning", "GH₵ 50+"],
        ["Hot towel shave", "Steam, straight-razor shave and balm", "GH₵ 70+"],
        ["Hair + beard", "Full haircut paired with beard design", "GH₵ 150+"],
      ],
    },
    {
      name: "Scalp & skin",
      intro: "Reset the scalp and keep skin looking fresh.",
      options: [
        ["Scalp treatment", "Cleanse, cool and rebalance", "GH₵ 60+"],
        ["Men's facial", "Cleanse, exfoliate, mask and moisturize", "GH₵ 80+"],
      ],
    },
  ],
};
const packages = {
  women: [
    {
      name: "The Glow Reset",
      summary: "Cut & finish + express facial",
      price: "$99",
      duration: "90 min",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
      details:
        "A polished shape and luminous skin reset for an instantly refreshed finish.",
      products: ["Cloud Gloss", "Soft Reset mask", "Mineral SPF veil"],
    },
    {
      name: "Color Service",
      summary: "Gloss refresh + deep conditioning",
      price: "$145",
      duration: "120 min",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
      details:
        "A color-maintenance service that revives dimension while restoring softness and shine.",
      products: ["Chrome Mist color guard", "Bond-repair cream", "Cloud Gloss"],
    },
  ],
  men: [
    {
      name: "The Full Reset",
      summary: "Precision cut + beard design",
      price: "GH₵ 150",
      duration: "75 min",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
      details:
        "A complete shape-up with a considered cut, beard architecture, and hot towel finish.",
      products: [
        "Form / 03 matte paste",
        "Night Shift beard oil",
        "Clean Guard wash",
      ],
    },
    {
      name: "The Clean Start",
      summary: "Cut + hot towel scalp service",
      price: "GH₵ 120",
      duration: "60 min",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
      details:
        "A precise everyday cut paired with a cooling scalp reset and restorative towel service.",
      products: [
        "Clean Guard peppermint wash",
        "Cooling tonic",
        "Form / 03 finish",
      ],
    },
  ],
};
