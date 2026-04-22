'use client';

import { motion } from 'framer-motion';
import { CURRICULUM } from '@/lib/mock-data';
import { Calculator, Zap, FlaskConical, ChevronRight, BarChart3, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Calculator: Calculator,
  Zap: Zap,
  FlaskConical: FlaskConical,
};

export default function Dashboard() {
  return (
    <main className="container" style={{ paddingBlock: '4rem' }}>
      <header style={{ marginBottom: '4rem' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-text"
          style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #6366f1, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Welcome Back, Aspirant
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)' }}
        >
          Your path to EAMCET excellence starts here. Let's tackle your weak spots.
        </motion.p>
      </header>

      {/* Stats Overview */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {[
          { label: 'Overall Accuracy', value: '78%', icon: Target, color: '#10b981' },
          { label: 'Questions Solved', value: '1,240', icon: BarChart3, color: '#6366f1' },
          { label: 'Study Time', value: '42h', icon: Clock, color: '#f59e0b' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="glass"
            style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            <div style={{ padding: '1rem', borderRadius: '12px', background: `${stat.color}15`, color: stat.color }}>
              <stat.icon size={28} />
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{stat.label}</p>
              <h3 style={{ fontSize: '2rem' }}>{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Subject Selection */}
      <section>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Explore Subjects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {CURRICULUM.map((subject, i) => {
            const Icon = iconMap[subject.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Link href={`/subject/${subject.id}`} className="glass glass-hover" style={{ display: 'block', padding: '2.5rem', textDecoration: 'none', color: 'inherit', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <div style={{ padding: '1.2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.05)' }}>
                      <Icon size={32} color={i === 0 ? '#6366f1' : i === 1 ? '#10b981' : '#f59e0b'} />
                    </div>
                    <ChevronRight className="chevron" color="rgba(255,255,255,0.3)" />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{subject.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>{subject.chapters.length} Chapters • {subject.chapters.reduce((acc, ch) => acc + ch.topics.length, 0)} Topics</p>
                  
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 60 + 20}%` }}
                      transition={{ duration: 1, delay: 0.8 }}
                      style={{ height: '100%', background: i === 0 ? '#6366f1' : i === 1 ? '#10b981' : '#f59e0b', borderRadius: '10px' }} 
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .chevron {
          transition: transform 0.3s ease;
        }
        .glass-hover:hover .chevron {
          transform: translateX(5px);
          color: white;
        }
      `}</style>
    </main>
  );
}
