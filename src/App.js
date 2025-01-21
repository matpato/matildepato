import React, { useState, useEffect } from 'react';
import { FileText, Mail, Users, Brain, Database, Dna, Sun, Moon } from 'lucide-react';
import { Alert, AlertDescription } from './components/ui/alert';

import BriefBio from './components/profile/BriefBio';
import AcademicLinks from './components/profile/AcademicLinks';
import PublicationList from './components/research/PublicationList';
import ProjectList from './components/research/ProjectList';
import StudentsList from './components/teaching/StudentsList';
import CoursesList from './components/teaching/CoursesList';

const PersonalPage = () => {
  // const [setCopiedIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update HTML class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1a1a1a';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Mobile Menu Button - Only shows on mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 z-50"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Main Content Container */}
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        {/* Mobile and Theme Toggle buttons remain the same */}

        <div className="container mx-auto px-4 py-8">
          {/* Identification Section at Top */}
          <div className="mb-5 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Matilde Pato</h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300">
             Professor Adjunct at Polytechnic University of Lisbon | European University, Researcher at FIT/ISEL, IBEB-FCUL, LASIGE-FCUL and NOVALINCS.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {/* Left Column */}
            <div className={`md:col-span-1 ${isMenuOpen ? 'fixed inset-0 bg-white dark:bg-gray-800 z-40 overflow-y-auto p-4' : 'hidden md:block'}`}>
              <div className="sticky top-8 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                {/* Profile Content */}
                <div className="text-center">
                  <img
                    src="./img/matildepato.png"
                    alt="Profile"
                    className="w-60 h-50 mx-auto rounded-full mb-4"
                  />
                </div>
                {/* Contact Info */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Contact
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      <Mail className="w-4 h-4 inline mr-2" />
                      matilde.pato [@] isel.pt
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Office: Building F, Room F0.15
                    </p>
                  </div>
                </div>
                {/* Academic Links */}
                <div className="flex-shrink-0"><AcademicLinks /> </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="md:col-span-2 lg:col-span-3 space-y-5">
              {/* Brief Bio Section at Top */}
              <div><BriefBio /></div>

              {/* Research Opportunities Alert */}
              <Alert className="bg-gray-50 dark:bg-gray-900/30 border-gray-500 dark:border-gray-500">
                <Users className="w-6 h-5 text-gray-600 dark:text-gray-400" />
                <AlertDescription className="ml-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-1">
                    Looking for Research Collaborators!
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm actively seeking passionate students and researchers interested in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-1 text-sm md:text-base">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Database className="w-4 h-4" />
                      <span>Information System</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-700 dark:text-gray-300">
                      <Brain className="w-4 h-4" />
                      <span>Artificial Intelligence</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Brain className="w-4 h-4" />
                      <span>Machine Learning</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-700 dark:text-gray-300">
                      <Database className="w-4 h-4" />
                      <span>Recommender Systems</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Dna className="w-4 h-4" />
                      <span>Bioinformatics</span>
                    </div>
                  </div>

                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    If you're interested in pursuing research in these areas, please reach out via email
                    to discuss potential collaboration opportunities, including PhD positions and research internships.
                  </p>
                </AlertDescription>
              </Alert>

              {/* Publications Section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <PublicationList />
              </div>

              {/* Projects Section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <ProjectList />
              </div>

              {/* Teaching Section */}
              <div className="space-y-8">
                <CoursesList />
                <StudentsList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-1">
          {/* Identification Section at Bottom */}
            <p className="font-bold text-gray-900 dark:text-white mb-4"> &copy; 2025 MP | based on React</p>
          </div>
          
    </div>
  );
};


export default PersonalPage;