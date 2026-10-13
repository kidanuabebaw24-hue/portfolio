import PageContainer from '../components/layout/PageContainer';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsPreview from '../components/home/SkillsPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import ContactCTA from '../components/home/ContactCTA';
import { getFeaturedProjects } from '../data/projects';

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <PageContainer>
      <Hero />
      <AboutPreview />
      <FeaturedProjects projects={featured} />
      <SkillsPreview />
      <ServicesPreview />
      <ContactCTA />
    </PageContainer>
  );
}
