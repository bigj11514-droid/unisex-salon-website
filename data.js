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
    features: ["Barrier support", "Rosewater + zinc", "15-minute ritual"],
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
    price: "$26",
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
    price: "$30",
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
    price: "$24",
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
    ["Cut & finish", "Shape, wash, styling ritual", "$65+"],
    ["Color studio", "Gloss, dimension, full transformation", "$120+"],
    ["Texture & form", "Silk press, curls, protective styling", "$95+"],
    ["Skin ritual", "Express facial, glow reset, brows", "$45+"],
  ],
  men: [
    ["Precision cut", "Clipper, scissor, wash, finish", "$45+"],
    ["Signature fade", "Skin fade, taper, texture styling", "$55+"],
    ["Beard design", "Shape, hot towel, conditioning", "$35+"],
    ["Full reset", "Cut, beard, hot towel ritual", "$90+"],
  ],
};
const packages = {
  women: [
    { name: "The Glow Reset", summary: "Cut & finish + express facial", price: "$99", duration: "90 min", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85", details: "A polished shape and luminous skin reset for an instantly refreshed finish.", products: "Cloud Gloss, Soft Reset mask, and a mineral SPF veil." },
    { name: "Color Ritual", summary: "Gloss refresh + deep conditioning", price: "$145", duration: "120 min", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85", details: "A color-maintenance ritual that revives dimension while restoring softness and shine.", products: "Chrome Mist color guard, bond-repair cream, and Cloud Gloss." },
  ],
  men: [
    { name: "The Full Reset", summary: "Precision cut + beard design", price: "$75", duration: "75 min", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85", details: "A complete shape-up with a considered cut, beard architecture, and hot towel finish.", products: "Form / 03 matte paste, Night Shift beard oil, and Clean Guard wash." },
    { name: "The Clean Start", summary: "Cut + hot towel scalp ritual", price: "$65", duration: "60 min", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85", details: "A precise everyday cut paired with a cooling scalp reset and restorative towel ritual.", products: "Clean Guard peppermint wash, cooling tonic, and Form / 03 finish." },
  ],
};
