'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Plus, Trash2, FileJson, FileType, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard() {
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBulkUpload = () => {
    setIsUploading(true);
    // Simulate API call
    setTimeout(() => {
      setIsUploading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <main className="container" style={{ paddingBlock: '4rem' }}>
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Admin Panel</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>Manage the question bank and curriculum content.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={20} /> Add New Question
        </button>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '2rem' }}>
        {/* Question List Preview */}
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Active Question Bank</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.8)' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '1rem' }}>Subject</th>
                <th style={{ padding: '1rem' }}>Topic</th>
                <th style={{ padding: '1rem' }}>Difficulty</th>
                <th style={{ padding: '1rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sub: 'Maths', top: 'Integration', diff: 'EASY' },
                { sub: 'Physics', top: 'Electrostatics', diff: 'HARD' },
                { sub: 'Chemistry', top: 'Hydrocarbons', diff: 'MEDIUM' },
              ].map((q, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem' }}>{q.sub}</td>
                  <td style={{ padding: '1rem' }}>{q.top}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '2px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.7rem', 
                      background: q.diff === 'EASY' ? 'rgba(16, 185, 129, 0.1)' : q.diff === 'HARD' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: q.diff === 'EASY' ? '#10b981' : q.diff === 'HARD' ? '#ef4444' : '#f59e0b'
                    }}>
                      {q.diff}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bulk Upload Section */}
        <div className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: 'fit-content' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Upload size={24} color="#6366f1" />
            Bulk Upload
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Upload questions via CSV or JSON format.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div 
              onClick={handleBulkUpload}
              style={{ 
                border: '2px dashed rgba(255,255,255,0.1)', 
                borderRadius: '16px', 
                padding: '3rem 1rem', 
                textAlign: 'center', 
                cursor: 'pointer',
                background: isUploading ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              {isUploading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                    <Upload size={32} color="#6366f1" />
                  </motion.div>
                  <span>Processing...</span>
                </div>
              ) : success ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: '#10b981' }}>
                  <CheckCircle2 size={32} />
                  <span>Upload Successful!</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <Upload size={32} color="rgba(255,255,255,0.2)" />
                  <span style={{ fontSize: '0.9rem' }}>Click or drag file here</span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', fontSize: '0.8rem' }}>
                <FileJson size={20} color="#f59e0b" />
                Sample.json
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', fontSize: '0.8rem' }}>
                <FileType size={20} color="#10b981" />
                Sample.csv
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
