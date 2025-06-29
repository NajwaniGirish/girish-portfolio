
import { ChevronDown, Database, BarChart3, Code2, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen lg:min-h-screen md:min-h-[80vh] sm:min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle background decoration with very low opacity */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 md:w-40 md:h-40 bg-teal-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 bg-purple-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex justify-center lg:justify-start space-x-4 mb-6 md:mb-8 opacity-20">
              <Database className="w-8 h-8 md:w-12 md:h-12 text-blue-400 animate-pulse" />
              <BarChart3 className="w-8 h-8 md:w-12 md:h-12 text-teal-400 animate-pulse" />
              <Code2 className="w-8 h-8 md:w-12 md:h-12 text-purple-400 animate-pulse" />
            </div>
            
            <div className="mb-6">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-2">Hi all, I'm</p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
                <span>Girish Najwani</span>
                <span className="text-4xl md:text-6xl animate-[wave_1s_ease-in-out_infinite]">👋</span>
              </h1>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Big Data Engineer with 4+ years of experience building large-scale data pipelines and ETL processes. Proficient in Python, SQL, PySpark, Databricks, and Airflow, delivering multi-terabyte, scalable big data solutions for leading pharmaceutical companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6 md:mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-sm md:text-base"
              >
                Contact Me
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 text-sm md:text-base">
                Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/najwanigirish/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://github.com/NajwaniGirish"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Cloud elements */}
              <div className="absolute top-10 left-10 w-12 h-6 md:w-16 md:h-8 bg-purple-200 rounded-full opacity-80"></div>
              <div className="absolute top-20 right-16 w-16 h-8 md:w-20 md:h-10 bg-blue-200 rounded-full opacity-80"></div>
              <div className="absolute bottom-20 left-8 w-14 h-7 md:w-18 md:h-9 bg-teal-200 rounded-full opacity-80"></div>
              
              {/* Central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border-4 border-blue-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 border-2 border-teal-400 rounded-full"></div>
              
              {/* Character illustration */}
              <div className="absolute bottom-0 right-8">
                <div className="w-20 h-28 md:w-24 md:h-32 bg-gradient-to-b from-blue-600 to-purple-600 rounded-t-full relative">
                  {/* Head */}
                  <div className="absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-yellow-300 rounded-full"></div>
                  {/* Arms */}
                  <div className="absolute top-4 -left-3 w-5 h-12 md:w-6 md:h-16 bg-yellow-300 rounded-full transform rotate-45"></div>
                  <div className="absolute top-4 -right-3 w-5 h-12 md:w-6 md:h-16 bg-yellow-300 rounded-full transform -rotate-45"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-12 w-5 h-5 md:w-6 md:h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-400 transition-colors z-10"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
