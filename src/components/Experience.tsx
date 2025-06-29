
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "ZS Associates",
      location: "Pune, India",
      period: "June 2024 - Present",
      description: [
        "Optimized existing processes, reducing run time by 70% and overall resource consumption, leading to cost-effective operations",
        "Scaled existing pipelines to handle increased data volume and finer granularity without impacting overall runtime, ensuring consistent SLAs and system performance",
        "Played a key role in requirements gathering with clients and onshore teams",
        "Established pipelines on Azure DevOps for streamlined code deployment",
        "Managed and mentored a 3-member team, ensuring timely delivery and issue resolution",
        "Independently executed 2 short-term projects from requirements to production within 1 week"
      ]
    },
    {
      title: "Data Engineer",
      company: "ZS Associates",
      location: "Pune, India",
      period: "June 2021 - May 2024",
      description: [
        "Contributed to a renowned Fortune 500 pharmaceutical company in the USA",
        "Developed a comprehensive data quality framework aimed at standardizing and validating data",
        "Revamped existing processes, transitioning from SparkSQL to the PySpark ecosystem",
        "Established strong client relationships with a client portfolio exceeding 50 million and consistently met data delivery expectations",
        "Delivered a high-impact project that led to the client receiving a prestigious internal award, driven by the project's significant business value and data innovation",
        "Led a 2-member team, offering technical guidance and resolving data engineering challenges"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>

            {experiences.map((experience, index) => (
              <div key={experience.title} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>

                <div className="ml-20 bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 font-medium mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed flex items-start">
                        <span className="text-blue-600 mr-3 flex-shrink-0 text-lg font-bold leading-6">•</span>
                        <span className="leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
