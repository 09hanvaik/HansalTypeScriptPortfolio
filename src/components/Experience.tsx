import React from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using modern technologies.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      achievements: [
        'Led a team of 5 developers to deliver a major e-commerce platform',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Startup Solutions',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      technologies: ['React', 'JavaScript', 'Express.js', 'MongoDB', 'Docker'],
      achievements: [
        'Built 15+ client websites with 100% client satisfaction',
        'Reduced bug reports by 50% through improved testing practices',
        'Mentored 3 junior developers in best practices'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'San Francisco, CA',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces for various client projects.',
      technologies: ['React', 'CSS3', 'HTML5', 'JavaScript', 'Git'],
      achievements: [
        'Developed 20+ responsive websites for diverse clients',
        'Improved page load times by 30% through optimization',
        'Collaborated with designers to implement pixel-perfect designs'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href="#"
                        className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-2 sm:mt-0"
                      >
                        <span>View Company</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 