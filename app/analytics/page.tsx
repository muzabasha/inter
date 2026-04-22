'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertCircle, CheckCircle2, Clock, Zap } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <main className="container" style={{ paddingBlock: '4rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Performance Insights</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>Detailed breakdown of your learning journey and areas for improvement.</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {/* Performance Chart Placeholder */}
        <div className="glass" style={{ padding: '2rem', gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <TrendingUp color="#6366f1" />
              Accuracy Over Time
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Last 30 Days</span>
          </div>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            {[45, 60, 55, 70, 65, 80, 78].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ delay: 0.1 * i, duration: 1 }}
                style={{ flex: 1, background: 'linear-gradient(to top, #6366f1, #4f46e5)', borderRadius: '4px 4px 0 0', position: 'relative' }}
              >
                <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem' }}>{val}%</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
              <Zap size={24} color="#10b981" />
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Current Streak</p>
              <h4 style={{ fontSize: '1.2rem' }}>5 Days</h4>
            </div>
          </div>
          <div className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
              <Clock size={24} color="#f59e0b" />
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Total Study Time</p>
              <h4 style={{ fontSize: '1.2rem' }}>12.5 Hours</h4>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        {/* Strong Areas */}
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#10b981' }}>
            <CheckCircle2 size={24} />
            Strong Areas
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Coulomb\'s Law', 'Algebraic Identities', 'Hydrocarbons'].map((topic) => (
              <div key={topic} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                <span>{topic}</span>
                <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600 }}>90% +</span>
              </div>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ef4444' }}>
            <AlertCircle size={24} />
            Weak Concepts
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: 'Integration by Parts', score: '45%' },
              { name: 'Wave Optics', score: '52%' },
              { name: 'Redox Reactions', score: '38%' }
            ].map((topic) => (
              <div key={topic.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{topic.name}</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>{topic.score}</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <div style={{ width: topic.score, height: '100%', background: '#ef4444', borderRadius: '10px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
