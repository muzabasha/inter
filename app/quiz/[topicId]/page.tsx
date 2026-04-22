'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CURRICULUM } from '@/lib/mock-data';
import { Question } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, ArrowLeft, Lightbulb, Trophy, BrainCircuit } from 'lucide-react';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showReinforcement, setShowReinforcement] = useState(false);

  useEffect(() => {
    // Find topic and its questions
    for (const subject of CURRICULUM) {
      for (const chapter of subject.chapters) {
        const topic = chapter.topics.find(t => t.id === topicId);
        if (topic) {
          setQuestions(topic.questions);
          break;
        }
      }
    }
  }, [topicId]);

  if (!questions.length && !isFinished) return <div className="flex-center" style={{ height: '100vh' }}>Loading questions...</div>;

  const currentQuestion = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    } else {
      // Logic for "Weak Concept Detection" would go here
      setShowReinforcement(true);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowReinforcement(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <main className="container flex-center" style={{ height: '100vh', flexDirection: 'column' }}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass" 
          style={{ padding: '4rem', textAlign: 'center', maxWidth: '600px' }}
        >
          <Trophy size={80} color="#f59e0b" style={{ marginBottom: '2rem' }} />
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Quiz Complete!</h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
            You scored <span style={{ color: '#10b981', fontWeight: 'bold' }}>{score} / {questions.length}</span>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => router.push('/')}>Go Home</button>
            <button className="glass" style={{ padding: '0.75rem 1.5rem', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onClick={() => window.location.reload()}>Retry</button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingBlock: '3rem', maxWidth: '800px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <button 
          onClick={() => router.back()}
          style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
        >
          <ArrowLeft size={20} /> Quit
        </button>
        <div className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', fontWeight: 600 }}>
          {currentIndex + 1} / {questions.length}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ 
              background: 'rgba(99, 102, 241, 0.1)', 
              color: '#6366f1', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {currentQuestion.difficulty} • {currentQuestion.conceptTag}
            </span>
            <h2 style={{ fontSize: '1.8rem', marginTop: '1.5rem', lineHeight: 1.4 }}>{currentQuestion.text}</h2>
          </div>

          <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
            {currentQuestion.options.map((option, idx) => {
              const isCorrect = idx === currentQuestion.correctAnswer;
              const isSelected = idx === selectedOption;
              
              let borderColor = 'rgba(255,255,255,0.1)';
              let bgColor = 'rgba(255,255,255,0.03)';
              
              if (isAnswered) {
                if (isCorrect) {
                  borderColor = '#10b981';
                  bgColor = 'rgba(16, 185, 129, 0.1)';
                } else if (isSelected) {
                  borderColor = '#ef4444';
                  bgColor = 'rgba(239, 68, 68, 0.1)';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    background: bgColor,
                    border: `2px solid ${borderColor}`,
                    color: 'white',
                    fontSize: '1.1rem',
                    textAlign: 'left',
                    cursor: isAnswered ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 color="#10b981" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle color="#ef4444" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div className="glass" style={{ padding: '2rem', borderLeft: `4px solid ${selectedOption === currentQuestion.correctAnswer ? '#10b981' : '#ef4444'}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#6366f1' }}>
                  <Lightbulb size={20} />
                  <h4 style={{ fontSize: '1.1rem' }}>Explanation</h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{currentQuestion.explanation}</p>
              </div>

              {showReinforcement && (
                <div style={{ background: 'rgba(99, 102, 241, 0.05)', padding: '2rem', borderRadius: '16px', border: '1px dashed rgba(99, 102, 241, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#6366f1' }}>
                    <BrainCircuit size={20} />
                    <h4 style={{ fontSize: '1.1rem' }}>Reinforcement Needed</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
                    It looks like <strong>{currentQuestion.conceptTag}</strong> is a bit tricky. 
                    We'll provide more practice for this concept later.
                  </p>
                </div>
              )}

              <button className="btn-primary" onClick={nextQuestion} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', alignSelf: 'flex-end', marginTop: '1rem' }}>
                {currentIndex === questions.length - 1 ? 'Finish' : 'Next Question'} <ChevronRight size={20} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      
      <style jsx>{`
        button:not(:disabled):hover {
          border-color: rgba(255,255,255,0.3) !important;
          background: rgba(255,255,255,0.06) !important;
        }
      `}</style>
    </main>
  );
}
