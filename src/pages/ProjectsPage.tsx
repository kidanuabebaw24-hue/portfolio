import PageContainer from '../components/layout/PageContainer';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="Projects"
              title="All Projects"
              description="Software I've designed and built — each one a real attempt to solve a practical problem."
            />
          </motion.div>
        </div>
      </section>
      <FeaturedProjects projects={projects} showAll />
    </PageContainer>
  );
}
