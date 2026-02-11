
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import Events from './pages/Events';
import Programs from './pages/Programs';
import ISchoolX from './pages/ISchoolX';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  // Set default language to English as requested
  const [lang, setLang] = useState<Language>('en');
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-brand-red/10 selection:text-brand-red">
        <Header 
            lang={lang} 
            setLang={setLang} 
            openAI={() => setIsAIOpen(true)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} openAI={() => setIsAIOpen(true)} />} />
            <Route path="/insights" element={<Insights lang={lang} />} />
            <Route path="/insights/article/:id" element={<ArticleDetail lang={lang} />} />
            <Route path="/events" element={<Events lang={lang} />} />
            <Route path="/programs" element={<Programs lang={lang} />} />
            <Route path="/ischoolx" element={<ISchoolX lang={lang} />} />
            <Route path="/resources" element={<Resources lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />

        {/* Global AI Assistant component */}
        <AIAssistant 
            isOpen={isAIOpen} 
            onClose={() => setIsAIOpen(!isAIOpen)} 
            lang={lang} 
        />
      </div>
    </Router>
  );
};

export default App;
