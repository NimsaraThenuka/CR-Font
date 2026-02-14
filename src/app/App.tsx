import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { BackToTop } from '@/app/components/BackToTop';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { ProductDetailPage } from '@/app/pages/ProductDetailPage';
import { CollectionPage } from '@/app/pages/CollectionPage';
import { BrandStoryPage } from '@/app/pages/BrandStoryPage';
import { JournalPage } from '@/app/pages/JournalPage';
import { BlogDetailPage } from '@/app/pages/BlogDetailPage';
import { FontProvider } from '@/app/contexts/FontContext';

export default function App() {
  return (
    <FontProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/brand-story" element={<BrandStoryPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:id" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/collections/:type" element={<CollectionPage />} />
          </Routes>

          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </FontProvider>
  );
}