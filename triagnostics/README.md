# TriAgnostics

A personalized gut-health assessment demo app built with React, Vite, TypeScript, and Tailwind CSS.

## Overview

TriAgnostics is an interactive web application that helps users discover their personalized gut-health profile through a scientific assessment. The app guides users through an 8-question quiz, analyzes their responses, and provides tailored recommendations based on one of four gut-health archetypes.

## Features

- **5-Minute Assessment**: Quick, engaging 8-question quiz
- **AI-Powered Matching**: Sophisticated scoring algorithm that matches users to specialized profiles
- **Personalized Recommendations**: Tailored product and food recommendations based on profile
- **Progress Tracking**: Visual charts showing wellness improvements over 8 weeks
- **Responsive Design**: Mobile-first responsive layout with desktop support
- **Beautiful UI**: Teal-to-coral gradient design with smooth animations

## The 4 Gut-Health Profiles

1. **The Balancer** - Well-balanced digestive system with good energy levels
   - Focus: Maintaining healthy habits with balanced nutrition
   - Recommendations: Bone broth, prebiotic fiber, herbal teas, omega-3 fish

2. **The Fermenter** - Thrives with fermented and probiotic-rich foods
   - Focus: Beneficial bacteria cultivation
   - Recommendations: Kimchi, sauerkraut, kombucha, miso paste

3. **The Processor** - Works best with clean, simple, easily digestible options
   - Focus: Gentle nutrition with consistent meal timing
   - Recommendations: Bone broths, digestive enzymes, white rice, ginger tea

4. **The Sensitive Gut** - Requires careful nutrition planning for reactive systems
   - Focus: Elimination diet and gradual reintroduction
   - Recommendations: Elimination diet protocol, L-glutamine, bone broth, slippery elm

## Scoring Logic

The app analyzes responses across 4 wellness dimensions:

- **Energy**: Overall vitality and alertness
- **Digestion**: Digestive regularity and comfort
- **Sensitivity**: Food sensitivities and intolerances
- **Balance**: Overall gut-system harmony

Each answer option has numeric scores for each dimension. Total scores are calculated by summing all answers, and the highest-scoring dimension determines the matched profile.

### 4-Step Science

1. **Discovery**: Comprehensive 8-question assessment
2. **Analysis**: Algorithm analyzes responses across 4 wellness dimensions
3. **Matching**: Results match to one of 4 specialized gut-health archetypes
4. **Personalization**: Receive tailored recommendations for the matched profile

## Project Structure

```
triagnostics/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── QuizQuestion.tsx
│   │   ├── ScienceTimeline.tsx
│   │   ├── ProgressCharts.tsx
│   │   └── index.ts
│   ├── pages/            # Page routes
│   │   ├── Landing.tsx
│   │   ├── Quiz.tsx
│   │   ├── Results.tsx
│   │   ├── Science.tsx
│   │   └── Progress.tsx
│   ├── data/             # Data files
│   │   ├── questions.ts  # 8 quiz questions
│   │   ├── profiles.ts   # 4 profile archetypes
│   │   └── index.ts      # Chart data & science steps
│   ├── lib/
│   │   └── scoring.ts    # Scoring algorithm
│   ├── store/
│   │   └── quizStore.ts  # Zustand state management
│   ├── App.tsx           # Main app with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind styles
├── public/               # Static assets
├── index.html            # HTML entry point
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind CSS config
├── postcss.config.ts     # PostCSS config
└── README.md             # This file
```

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **State Management**: Zustand 4
- **Charts**: Recharts 2
- **Icons**: Lucide React
- **Font**: Quicksand (Google Fonts)

## Color Palette

- **Primary Teal**: `#0B7A8C`
- **Primary Dark**: `#00606e`
- **Accent Coral**: `#E8385F`
- **Background**: White (`#ffffff`)
- **Neutral Grays**: `#f7fafb` to `#181c1d`

## Routes

- `/` - Landing page with CTA
- `/quiz` - 8-question assessment with progress bar
- `/results` - Profile results with recommendations
- `/science` - 4-step timeline explaining the science
- `/progress` - 8-week progress tracking with charts

## Running Locally

### Prerequisites

- Node.js 16+ (npm or yarn)

### Setup & Run

```bash
# Clone or navigate to project directory
cd triagnostics

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open automatically at `http://localhost:3000`

### Development

- Hot module reloading enabled
- TypeScript type checking
- Tailwind CSS utilities with autocomplete
- React Router with client-side routing

## Demo Data

All quiz questions, profiles, and recommendations are defined in `src/data/` as typed TypeScript files:

- **8 Questions** covering: digestion frequency, energy patterns, bloating, diet type, stress level, sleep quality, food sensitivity, exercise frequency
- **4 Profiles** with descriptions and 3-4 tailored recommendations each
- **Mock Chart Data** showing 8-week progress trends

To customize for your demo, simply edit the data files—no additional setup required.

## Features Implemented

✅ React Router with 5 routes  
✅ Mobile-first responsive design  
✅ Teal-to-coral gradient branding  
✅ 8-question quiz with multi-step navigation  
✅ Scoring algorithm with 4 profile archetypes  
✅ Personalized recommendations  
✅ Progress tracking with Recharts  
✅ Science explainer timeline  
✅ Navbar navigation for post-quiz sections  
✅ Zustand state management  
✅ TypeScript throughout  
✅ Tailwind CSS for styling  
✅ Zero dependencies on external APIs  
✅ Hardcoded mock data for offline demo  
✅ Comprehensive README with setup instructions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## License

Demo project for TriAgnostics wellness platform.
