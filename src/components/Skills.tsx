import React from 'react'
import { Code, Database, Cloud, Smartphone, Palette, Settings } from 'lucide-react'

interface SkillCategory {
  id: string
  title: string
  icon: React.ReactNode
  skills: Array<{
    name: string
    level: number
    color: string
  }>
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Next.js', level: 85, color: 'bg-black' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-600' },
        { name: 'Express.js', level: 88, color: 'bg-gray-600' },
        { name: 'Python', level: 75, color: 'bg-blue-500' },
        { name: 'REST APIs', level: 92, color: 'bg-purple-500' },
        { name: 'GraphQL', level: 80, color: 'bg-pink-600' },
        { name: 'Microservices', level: 85, color: 'bg-indigo-500' }
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 80, color: 'bg-green-500' },
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        { name: 'Docker', level: 82, color: 'bg-blue-600' },
        { name: 'Redis', level: 70, color: 'bg-red-600' },
        { name: 'Firebase', level: 78, color: 'bg-yellow-600' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'React Native', level: 75, color: 'bg-blue-500' },
        { name: 'Flutter', level: 65, color: 'bg-blue-400' },
        { name: 'Progressive Web Apps', level: 85, color: 'bg-purple-500' },
        { name: 'Mobile UI/UX', level: 80, color: 'bg-pink-500' }
      ]
    },
    {
      id: 'design',
      title: 'Design & Tools',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 70, color: 'bg-purple-600' },
        { name: 'Adobe XD', level: 65, color: 'bg-pink-500' },
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'Jest', level: 85, color: 'bg-red-500' },
        { name: 'Webpack', level: 75, color: 'bg-blue-600' },
        { name: 'CI/CD', level: 80, color: 'bg-green-600' }
      ]
    },
    {
      id: 'cloud',
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        { name: 'Docker', level: 82, color: 'bg-blue-600' },
        { name: 'Kubernetes', level: 60, color: 'bg-blue-700' },
        { name: 'Jenkins', level: 70, color: 'bg-red-600' },
        { name: 'Terraform', level: 65, color: 'bg-purple-600' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Agile/Scrum', 'Team Leadership', 'Problem Solving', 'System Design',
              'Performance Optimization', 'Security Best Practices', 'API Design',
              'Testing Strategies', 'Code Review', 'Documentation', 'Mentoring',
              'Project Management'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 