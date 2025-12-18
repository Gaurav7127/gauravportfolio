import React, { useState, useEffect } from 'react';
import BlueprintWrapper from './components/BlueprintWrapper';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProfileView from './components/views/ProfileView';
import SkillsView from './components/views/SkillsView';
import ProjectsView from './components/views/ProjectsView';
import EducationView from './components/views/EducationView';
import ContactView from './components/views/ContactView';
import CertificationsView from './components/views/CertificationsView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.PROFILE);
  const [theme, setTheme] = useState<string>('blue');

  // Apply theme to body for global CSS variables
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.PROFILE:
        return <ProfileView />;
      case ViewState.SKILLS:
        return <SkillsView />;
      case ViewState.EDUCATION:
        return <EducationView />;
      case ViewState.CERTIFICATIONS:
        return <CertificationsView />;
      case ViewState.PROJECTS:
        return <ProjectsView />;
      case ViewState.CONTACT:
        return <ContactView />;
      default:
        return <ProfileView />;
    }
  };

  return (
    <BlueprintWrapper>
      <div className="flex flex-col w-full h-full bg-[#fdfbf7] relative">
        {/* Top Header Block with Theme Switcher */}
        <Header theme={theme} onThemeChange={setTheme} />
        
        {/* Navigation Tabs (Responsive) */}
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        
        {/* Main Content Viewport */}
        <main className="flex-1 overflow-hidden relative">
          <div className="h-full w-full overflow-y-auto">
             {renderContent()}
          </div>
        </main>
      </div>
    </BlueprintWrapper>
  );
};

export default App;
