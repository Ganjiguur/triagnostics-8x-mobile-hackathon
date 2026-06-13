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
    description:
      "You have a well-balanced digestive system with good energy levels and minimal sensitivities. Your gut thrives on consistent routines and balanced nutrition. Focus on maintaining your current healthy habits.",
    recommendations: [
      {
        name: "Bone Broth",
        benefit:
          "Supports gut lining health and maintains digestive balance.",
      },
      {
        name: "Prebiotic Fiber",
        benefit:
          "Nurtures beneficial gut bacteria without disruption.",
      },
      {
        name: "Herbal Teas",
        benefit: "Promotes relaxation and digestive ease.",
      },
      {
        name: "Omega-3 Fish",
        benefit: "Reduces inflammation and supports overall wellness.",
      },
    ],
    icon: "Heart",
    color: "#0B7A8C",
  },
  "The Fermenter": {
    name: "The Fermenter",
    description:
      "Your system loves fermented and probiotic-rich foods. You thrive with beneficial bacteria and benefit from gut-nourishing foods. Embrace fermentation as your digestive ally.",
    recommendations: [
      {
        name: "Kimchi & Sauerkraut",
        benefit: "Boosts beneficial gut bacteria naturally.",
      },
      {
        name: "Kombucha",
        benefit: "Supports digestive enzymes and detoxification.",
      },
      {
        name: "Probiotic Yogurt",
        benefit:
          "Adds live cultures for optimal digestion.",
      },
      {
        name: "Miso Paste",
        benefit: "Enhances nutrient absorption and immunity.",
      },
    ],
    icon: "Beaker",
    color: "#E8385F",
  },
  "The Processor": {
    name: "The Processor",
    description:
      "Your digestive system works best with clean, simple foods. You need easily digestible options and consistent meal timing. Focus on gentle, whole-food nutrition.",
    recommendations: [
      {
        name: "Bone Broths",
        benefit: "Easily digestible and deeply nourishing.",
      },
      {
        name: "Digestive Enzymes",
        benefit:
          "Supports optimal breakdown and absorption.",
      },
      {
        name: "White Rice",
        benefit: "Gentle carb that's easy on the system.",
      },
      {
        name: "Ginger Tea",
        benefit: "Soothes digestion and reduces discomfort.",
      },
    ],
    icon: "Zap",
    color: "#F59E0B",
  },
  "The Sensitive Gut": {
    name: "The Sensitive Gut",
    description:
      "Your system is reactive to many foods and needs careful nutrition planning. Focus on elimination, low-FODMAP options, and gradual reintroduction of foods. Healing is possible with patience.",
    recommendations: [
      {
        name: "Elimination Diet",
        benefit:
          "Identifies trigger foods safely and systematically.",
      },
      {
        name: "L-Glutamine",
        benefit:
          "Supports gut lining repair and barrier function.",
      },
      {
        name: "Bone Broth",
        benefit: "Soothes and heals the digestive tract.",
      },
      {
        name: "Slippery Elm",
        benefit:
          "Coats and protects the intestinal lining.",
      },
    ],
    icon: "AlertCircle",
    color: "#EC4899",
  },
};
