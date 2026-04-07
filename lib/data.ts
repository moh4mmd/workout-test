export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
}

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "HIQ Alpha", 
    category: "Core Foundation", 
    price: 120, 
    image: "/product/headerproduct2.webp",
    description: "The definitive absolute foundation for elite performers. HIQ Alpha is bio-engineered to elevate your baseline cellular health and metabolic efficiency.",
    benefits: ["Optimized Cellular Function", "Enhanced Nutrient Absorption", "All-day Clean Energy"],
    ingredients: ["Alpha-GPC", "Ashwagandha Extract KSM-66", "Vitamin D3", "Zinc Picolinate"]
  },
  { 
    id: 2, 
    name: "HIQ Omega", 
    category: "Cognitive Focus", 
    price: 140, 
    image: "/product/headerproduct2.webp",
    description: "Unlock flow state on command. HIQ Omega bridges the gap between raw physical potential and extreme cognitive endurance.",
    benefits: ["Laser-like Focus", "Neural Protection", "Reduced Brain Fog"],
    ingredients: ["High-DHA Omega 3 EPA/DHA", "Lion's Mane Mushroom", "L-Theanine", "Bacopa Monnieri"]
  },
  { 
    id: 3, 
    name: "HIQ Zen", 
    category: "Deep Recovery", 
    price: 110, 
    image: "/product/headerproduct2.webp",
    description: "Growth happens while you rest. HIQ Zen triggers deep parasympathetic nervous system activation for maximum overnight regeneration.",
    benefits: ["Deep REM Sleep", "Muscle Tissue Repair", "Stress Hormone Reduction"],
    ingredients: ["Magnesium Bisglycinate", "L-Tryptophan", "Chamomile Extract", "Melatonin (Micro-dose)"]
  },
  { 
    id: 4, 
    name: "HIQ Prime", 
    category: "Immune Matrix", 
    price: 150, 
    image: "/product/headerproduct2.webp",
    description: "An impenetrable fortress for your immune system. Prime equips your body with highly bioavailable adaptogens and antioxidants.",
    benefits: ["Robust Immune Defense", "Rapid Oxidative Stress Recovery", "Gut Microbiome Support"],
    ingredients: ["Liposomal Vitamin C", "Quercetin", "Epicor", "Beta-Glucans"]
  },
  { 
    id: 5, 
    name: "HIQ Surge", 
    category: "Performance", 
    price: 90, 
    image: "/product/headerproduct2.webp",
    description: "Break past your genetic limits. Surge provides unadulterated vascular expansion and immediate ATP synthesis prior to extreme exertion.",
    benefits: ["Explosive Power Generation", "Vasodilation & Pump", "Lactic Acid Buffering"],
    ingredients: ["L-Citrulline Malate 2:1", "Beta-Alanine", "Natural Caffeine (Green Tea)", "Betaine Anhydrous"]
  },
  { 
    id: 6, 
    name: "HIQ Vitality", 
    category: "Core Foundation", 
    price: 135, 
    image: "/product/headerproduct2.webp",
    description: "A symphony of essential micronutrients designed to bridge dietary gaps and optimize hormonal synthesis.",
    benefits: ["Hormonal Balance", "Bone Density Support", "Vitality & Vigor"],
    ingredients: ["Complete B-Vitamin Complex", "Shilajit Extract", "Boron", "Selenium"]
  },
  { 
    id: 7, 
    name: "HIQ Clarity", 
    category: "Cognitive Focus", 
    price: 125, 
    image: "/product/headerproduct2.webp",
    description: "Shatter mental fatigue. Clarity provides sustained neurotransmitter support for long hours of intense analytical or creative work.",
    benefits: ["Sustained Energy Curve", "Memory Recall Enhancement", "Neuroplasticity Support"],
    ingredients: ["Huperzine A", "CDP-Choline", "Rhodiola Rosea", "Ginkgo Biloba"]
  },
  { 
    id: 8, 
    name: "HIQ Shield", 
    category: "Immune Matrix", 
    price: 145, 
    image: "/product/headerproduct2.webp",
    description: "Proactive, continuous protection against environmental stressors and pathogens, keeping your performance uninterrupted.",
    benefits: ["Antimicrobial Properties", "Lymphatic System Support", "Inflammation Modulation"],
    ingredients: ["Elderberry Extract", "Echinacea Purpurea", "Astragalus Root", "Olive Leaf Extract"]
  },
];
