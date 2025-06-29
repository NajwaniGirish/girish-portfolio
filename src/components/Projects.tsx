
import { ExternalLink, Github, Database, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kaggle Case Studies",
      description: "Worked on 10+ case studies on Kaggle, covering diverse industries. The projects involved Exploratory Data Analysis (EDA), univariate and bivariate analysis, and hypothesis testing to extract meaningful insights and drive data-driven decision-making.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA", "Statistical Analysis"],
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
      metrics: ["10+ case studies completed", "Multiple industry domains", "Statistical analysis expertise"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of data analysis and engineering projects demonstrating practical skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                {project.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{metric}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <ExternalLink size={16} />
                  <span className="text-sm">View on Kaggle</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
