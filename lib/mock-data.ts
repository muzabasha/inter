import { Subject } from './types';

export const CURRICULUM: Subject[] = [
  {
    id: 'maths',
    name: 'Mathematics',
    icon: 'Calculator',
    chapters: [
      {
        id: 'integration',
        name: 'Integration',
        topics: [
          {
            id: 'indefinite-integration',
            name: 'Indefinite Integration',
            description: 'Learn the basic transformation and substitution methods.',
            questions: [
              {
                id: 'm1',
                text: 'What is the integral of sin(x) dx?',
                options: ['cos(x) + C', '-cos(x) + C', 'sin(x) + C', '-sin(x) + C'],
                correctAnswer: 1,
                explanation: 'The derivative of -cos(x) is sin(x), therefore the integral of sin(x) is -cos(x) + C.',
                difficulty: 'EASY',
                conceptTag: 'Trigonometric Integration',
                subject: 'Mathematics',
                chapter: 'Integration'
              },
              {
                id: 'm2',
                text: 'Integrate ∫ (2x + 3)^5 dx.',
                options: ['(2x + 3)^6 / 6 + C', '(2x + 3)^6 / 12 + C', '(2x + 3)^4 / 8 + C', '2(2x + 3)^6 + C'],
                correctAnswer: 1,
                explanation: 'Using the power rule and chain rule (substitution u = 2x+3, du = 2dx), the integral is (2x+3)^6 / (6 * 2) + C.',
                difficulty: 'MEDIUM',
                conceptTag: 'Substitution Method',
                subject: 'Mathematics',
                chapter: 'Integration'
              }
            ]
          },
          {
            id: 'definite-integration',
            name: 'Definite Integration',
            description: 'Properties of definite integrals and areas under curves.',
            questions: [
              {
                id: 'm3',
                text: 'Evaluate ∫₀ᴨ/² cos(x) dx.',
                options: ['0', '1', 'ᴨ/2', '-1'],
                correctAnswer: 1,
                explanation: 'The integral of cos(x) is sin(x). Evaluating from 0 to ᴨ/2: sin(ᴨ/2) - sin(0) = 1 - 0 = 1.',
                difficulty: 'EASY',
                conceptTag: 'Fundamental Theorem',
                subject: 'Mathematics',
                chapter: 'Integration'
              }
            ]
          }
        ]
      },
      {
        id: 'coordinate-geometry',
        name: 'Coordinate Geometry',
        topics: [
          {
            id: 'circles',
            name: 'Circles',
            description: 'Standard equations and properties of circles.',
            questions: [
              {
                id: 'm4',
                text: 'The radius of the circle x² + y² - 4x + 6y - 12 = 0 is:',
                options: ['4', '5', '6', '7'],
                correctAnswer: 1,
                explanation: 'Comparing with x² + y² + 2gx + 2fy + c = 0, we get g = -2, f = 3, c = -12. Radius = √(g² + f² - c) = √(4 + 9 + 12) = √25 = 5.',
                difficulty: 'MEDIUM',
                conceptTag: 'Circle Properties',
                subject: 'Mathematics',
                chapter: 'Coordinate Geometry'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Zap',
    chapters: [
      {
        id: 'electrostatics',
        name: 'Electrostatics',
        topics: [
          {
            id: 'coulombs-law',
            name: 'Coulomb\'s Law',
            description: 'Forces between stationary electric charges.',
            questions: [
              {
                id: 'p1',
                text: 'The force between two point charges is F. If the distance between them is doubled, the new force will be:',
                options: ['2F', 'F/2', 'F/4', '4F'],
                correctAnswer: 2,
                explanation: 'According to Coulomb\'s Law, F is inversely proportional to the square of the distance (r²). If r becomes 2r, F becomes F/4.',
                difficulty: 'EASY',
                conceptTag: 'Inverse Square Law',
                subject: 'Physics',
                chapter: 'Electrostatics'
              }
            ]
          },
          {
            id: 'electric-potential',
            name: 'Electric Potential',
            description: 'Work done in moving charges in an electric field.',
            questions: [
              {
                id: 'p2',
                text: 'The electric potential at a point on the axis of an electric dipole is:',
                options: ['Zero', 'Maximum', 'Minimum', 'Depends on distance'],
                correctAnswer: 1,
                explanation: 'Potential V = kp(cos θ)/r². On the axis, θ = 0°, so V = kp/r², which is the maximum value.',
                difficulty: 'MEDIUM',
                conceptTag: 'Dipole Potential',
                subject: 'Physics',
                chapter: 'Electrostatics'
              }
            ]
          }
        ]
      },
      {
        id: 'current-electricity',
        name: 'Current Electricity',
        topics: [
          {
            id: 'ohm-law',
            name: 'Ohm\'s Law & Resistance',
            description: 'Flow of charge and resistance in circuits.',
            questions: [
              {
                id: 'p3',
                text: 'If the length of a wire is doubled and its cross-sectional area is halved, its resistance will:',
                options: ['Remain same', 'Become double', 'Become four times', 'Become eight times'],
                correctAnswer: 2,
                explanation: 'R = ρL/A. New R\' = ρ(2L)/(A/2) = 4(ρL/A) = 4R.',
                difficulty: 'MEDIUM',
                conceptTag: 'Resistivity',
                subject: 'Physics',
                chapter: 'Current Electricity'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'FlaskConical',
    chapters: [
      {
        id: 'organic-chemistry',
        name: 'Organic Chemistry',
        topics: [
          {
            id: 'hydrocarbons',
            name: 'Hydrocarbons',
            description: 'Study of Alkanes, Alkenes, and Alkynes.',
            questions: [
              {
                id: 'c1',
                text: 'Which of the following is the most stable carbocation?',
                options: ['Primary', 'Secondary', 'Tertiary', 'Methyl'],
                correctAnswer: 2,
                explanation: 'Tertiary carbocations are most stable due to maximum inductive effect (+I) and hyperconjugation from three alkyl groups.',
                difficulty: 'MEDIUM',
                conceptTag: 'Carbocation Stability',
                subject: 'Chemistry',
                chapter: 'Organic Chemistry'
              }
            ]
          },
          {
            id: 'alkenes',
            name: 'Alkenes & Alkynes',
            description: 'Unsaturated hydrocarbons and their reactions.',
            questions: [
              {
                id: 'c2',
                text: 'Lindlar\'s catalyst is used for the partial reduction of:',
                options: ['Alkanes', 'Alkenes', 'Alkynes to cis-alkenes', 'Alkynes to trans-alkenes'],
                correctAnswer: 2,
                explanation: 'Lindlar\'s catalyst (Pd/CaCO₃ with lead poisoning) reduces alkynes to cis-alkenes selectively.',
                difficulty: 'HARD',
                conceptTag: 'Reduction Reactions',
                subject: 'Chemistry',
                chapter: 'Organic Chemistry'
              }
            ]
          }
        ]
      },
      {
        id: 'physical-chemistry',
        name: 'Physical Chemistry',
        topics: [
          {
            id: 'atomic-structure',
            name: 'Atomic Structure',
            description: 'Fundamental particles and quantum models.',
            questions: [
              {
                id: 'c3',
                text: 'The number of radial nodes for a 3p orbital is:',
                options: ['0', '1', '2', '3'],
                correctAnswer: 1,
                explanation: 'Radial nodes = n - l - 1. For 3p: n=3, l=1. Nodes = 3 - 1 - 1 = 1.',
                difficulty: 'EASY',
                conceptTag: 'Quantum Numbers',
                subject: 'Chemistry',
                chapter: 'Physical Chemistry'
              }
            ]
          }
        ]
      }
    ]
  }
];
