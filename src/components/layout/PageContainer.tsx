import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`pt-16 ${className}`}
      id="main-content"
      role="main"
    >
      {children}
    </motion.main>
  );
}
