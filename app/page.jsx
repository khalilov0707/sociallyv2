import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ComparisonSection from './components/ComparisonSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import SignupSection from './components/SignupSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <BenefitsSection />
      <PricingSection />
      <SignupSection />
      <Footer />
    </main>
  );
} 