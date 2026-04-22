'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BarChart3, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  if (pathname.includes('/quiz/')) return null;

  return (
    <nav className="glass" style={{ 
      position: 'fixed', 
      bottom: '2rem', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      padding: '0.75rem', 
      zIndex: 1000,
      display: 'flex',
      gap: '0.5rem',
      borderRadius: '24px'
    }}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
            <motion.div
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: isActive ? '#6366f1' : 'transparent',
                color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={20} />
              <span className="nav-text">{item.name}</span>
            </motion.div>
          </Link>
        );
      })}

      <style jsx>{`
        @media (max-width: 600px) {
          .nav-text {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
