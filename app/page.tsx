import { HeroSection } from '@/components/el-taller-del-cabell/HeroSection';
import { TrustBadges } from '@/components/el-taller-del-cabell/TrustBadges';
import { FeaturesBento } from '@/components/el-taller-del-cabell/FeaturesBento';
import { ServicesGrid } from '@/components/el-taller-del-cabell/ServicesGrid';
import { TestimonialsSection } from '@/components/el-taller-del-cabell/TestimonialsSection';
import { CtaBanner } from '@/components/el-taller-del-cabell/CtaBanner';
import { NewsletterSection } from '@/components/el-taller-del-cabell/NewsletterSection';
import { MapInstagramSection } from '@/components/el-taller-del-cabell/MapInstagramSection';

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#fafaf8] px-3 pb-8 pt-3 md:px-6 md:pt-6">
      <HeroSection />
      <TrustBadges />
      <FeaturesBento />
      <ServicesGrid />
      <TestimonialsSection />
      <CtaBanner />
      <NewsletterSection />
      <MapInstagramSection />
    </main>
  );
}
