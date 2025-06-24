import React from 'react'
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react'

const About: React.FC = () => {
  const personalInfo = [
    { icon: <User className="w-5 h-5" />, label: 'Name', value: 'Hansal' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Your City, Country' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Experience', value: '3+ Years' },
    { icon: <GraduationCap className="w-5 h-5" />, label: 'Education', value: 'Bachelor\'s Degree' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-8xl font-bold text-white">H</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3+</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-600">{info.icon}</div>
                    <span className="text-gray-600 font-medium">{info.label}:</span>
                    <span className="text-gray-800">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - About Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                I love creating user-friendly applications that solve real-world problems and deliver exceptional user experiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                My journey in software development began with curiosity and has evolved into a passion for building 
                scalable, maintainable applications. I've worked on various projects ranging from small business websites 
                to complex enterprise applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What I Do</h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Node.js, and modern web technologies. 
                I'm always eager to learn new technologies and best practices to stay current in this ever-evolving field.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 