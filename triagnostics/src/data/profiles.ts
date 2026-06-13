export interface Recommendation {
  name: string;
  benefit: string;
}

export interface Profile {
  name: string;
  description: string;
  recommendations: Recommendation[];
  icon: string;
  color: string;
}

export const profiles: Record<string, Profile> = {
  "The Balancer": {
    name: "The Balancer",
    description: "A steady system with balanced digestion and energy.",
    recommendations: [
      { name: "Bone Broth", benefit: "Supports gut lining health." },
      { name: "Prebiotic Fiber", benefit: "Feeds good bacteria." },
      { name: "Herbal Teas", benefit: "Eases digestion." },
    ],
    icon: "Heart",
    color: "#0B7A8C",
  },
  "The Fermenter": {
    name: "The Fermenter",
    description: "A digestive profile that thrives on fermented foods.",
    recommendations: [
      { name: "Kimchi", benefit: "Adds live cultures." },
      { name: "Kombucha", benefit: "Supports digestion." },
      { name: "Miso", benefit: "Improves nutrient uptake." },
    ],
    icon: "Beaker",
    color: "#E8385F",
  },
  "The Processor": {
    name: "The Processor",
    description: "A system that responds best to simple, clean nutrition.",
    recommendations: [
      { name: "Bone Broth", benefit: "Gentle on digestion." },
      { name: "Digestive Enzymes", benefit: "Aids nutrient breakdown." },
      { name: "Ginger Tea", benefit: "Soothe discomfort." },
    ],
    icon: "Zap",
    color: "#F59E0B",
  },
  "The Sensitive Gut": {
    name: "The Sensitive Gut",
    description: "A reactive system that needs careful support.",
    recommendations: [
      { name: "Elimination Diet", benefit: "Identifies triggers." },
      { name: "L-Glutamine", benefit: "Supports repair." },
      { name: "Slippery Elm", benefit: "Coats the gut lining." },
    ],
    icon: "AlertCircle",
    color: "#EC4899",
  },
};
