
import { Database, Code, Cloud, GitBranch, Server, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["PySpark", "Python (Pandas, NumPy, Matplotlib)", "SQL", "Spark-SQL", "Hive"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Big Data & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Apache Spark", "Databricks", "Airflow", "AWS EMR", "Viva Nitro"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS S3", "Azure DevOps"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Other Tools",
      icon: <Server className="w-6 h-6" />,
      skills: ["Excel (Advanced)", "JIRA"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
