import React, { useState } from 'react'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'fullstack'
  liveUrl?: string
  githubUrl?: string
  features: string[]
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user management, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for inventory management',
        'Order tracking & notifications'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      features: [
        'Real-time task updates',
        'Team collaboration',
        'Task categories & priorities',
        'Progress tracking',
        'File attachments',
        'Mobile responsive design'
      ]
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness goals with social features.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Expo'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      features: [
        'Workout tracking & planning',
        'Nutrition logging',
        'Progress analytics',
        'Social features & challenges',
        'Offline functionality',
        'Push notifications'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      features: [
        'Responsive design',
        'Smooth animations',
        'Contact form',
        'Project showcase',
        'SEO optimized',
        'Fast loading times'
      ]
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'A real-time messaging application with video calling capabilities and file sharing.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Express.js'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      features: [
        'Real-time messaging',
        'Video & voice calls',
        'File sharing',
        'Group chats',
        'Message encryption',
        'Online status indicators'
      ]
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A weather application with detailed forecasts, maps, and location-based services.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      features: [
        'Current weather & forecasts',
        'Interactive weather maps',
        'Location-based services',
        'Weather alerts',
        'Historical data charts',
        'Multiple location support'
      ]
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Globe className="w-4 h-4" />
      case 'mobile': return <Smartphone className="w-4 h-4" />
      case 'fullstack': return <Code className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'web', label: 'Web Apps' },
              { key: 'mobile', label: 'Mobile Apps' },
              { key: 'fullstack', label: 'Full Stack' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{project.title.charAt(0)}</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  {getCategoryIcon(project.category)}
                  <span className="text-xs font-medium text-gray-700 capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-secondary">
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 