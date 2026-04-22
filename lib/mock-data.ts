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
                explanation: 'According to Coulomb\'s Law, F is inversely proportional to the square of the distance (r^2). If r becomes 2r, F becomes F/4.',
                difficulty: 'EASY',
                conceptTag: 'Inverse Square Law',
                subject: 'Physics',
                chapter: 'Electrostatics'
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
                explanation: 'Tertiary carbocations are most stable due to maximum inductive effect and hyperconjugation from three alkyl groups.',
                difficulty: 'MEDIUM',
                conceptTag: 'Carbocation Stability',
                subject: 'Chemistry',
                chapter: 'Organic Chemistry'
              }
            ]
          }
        ]
      }
    ]
  }
];
