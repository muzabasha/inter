export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface Concept {
  id: string;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of options
  explanation: string;
  difficulty: Difficulty;
  conceptTag: string;
  subject: string;
  chapter: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  chapters: Chapter[];
}

export interface UserProgress {
  userId: string;
  accuracy: number;
  weakTopics: string[];
  strongTopics: string[];
  recentAttempts: number[]; // Scores
}
