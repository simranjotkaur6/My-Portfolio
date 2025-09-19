const Projects = () => {
  const projects = [
    {
      title: 'Meal Nutrition Analysis',
      type: 'AI/ML',
      description: 'Developed a deep learning model to predict daily calorie intake using CGM data, food images, demographics, and microbiome profiles. Used CNNs for image features and feedforward networks for time-series data.',
      tech: ['PyTorch', 'CNN', 'Multimodal', 'Deep Learning'],
      icon: 'fas fa-brain',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'ScoutNFT',
      type: 'Web App',
      description: 'Built a personalized NFT discovery platform using item-item collaborative filtering and CLIP-based visual embeddings. Enhanced recommendation relevance with Fast Maximal Marginal Relevance (MMR).',
      tech: ['React', 'CLIP', 'ML', 'Collaborative Filtering'],
      icon: 'fas fa-cube',
      color: 'from-blue-500 to-blue-600',
      github: 'https://github.com/LOGiC31/ScoutNFT'
    },
    {
      title: 'Capstone Inventory Management',
      type: 'Full-Stack',
      description: 'Built a smart inventory management platform for TAMU professors using Ruby on Rails. Features include SSO login, admin controls, item tracking, and user profile management.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'SSO', 'Full-Stack'],
      icon: 'fas fa-boxes',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group animate-slide-up p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 ${
                project.type === 'AI/ML' 
                  ? 'bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200' 
                  : project.type === 'Web App' 
                  ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
                  : 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xl`}>
                  <i className={project.icon}></i>
                </div>
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.github && (
                <div className="pt-4 border-t border-gray-200">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <i className="fab fa-github"></i>
                    <span>View Code</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, and innovative ideas. 
              Let's connect and build something amazing together!
            </p>
            <a 
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
