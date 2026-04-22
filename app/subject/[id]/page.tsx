'use client';

import { useParams } from 'next/navigation';
import { CURRICULUM } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, PlayCircle, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.id as string;
  
  const subject = CURRICULUM.find(s => s.id === subjectId);

  if (!subject) return <div>Subject not found</div>;

  return (
    <main className="container" style={{ paddingBlock: '3rem' }}>
      <button 
        onClick={() => router.back()}
        style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '2rem' }}
      >
        <ArrowLeft size={20} /> Back to Dashboard
      </button>

      <section style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{subject.name}</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>Master {subject.name} with targeted practice and instant feedback.</p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {subject.chapters.map((chapter, idx) => (
          <motion.div 
            key={chapter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={24} color="#6366f1" />
              {chapter.name}
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {chapter.topics.map((topic) => (
                <Link key={topic.id} href={`/quiz/${topic.id}`} className="glass glass-hover" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{topic.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{topic.questions.length} Questions</p>
                  </div>
                  <div style={{ color: '#10b981' }}>
                    <PlayCircle size={28} />
                  </div>
                </Link>
              ))}
              
              {/* Coming Soon Topics Mock */}
              <div className="glass" style={{ padding: '1.5rem', opacity: 0.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'not-allowed' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Advanced Concepts</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>Locked</p>
                </div>
                <Lock size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
