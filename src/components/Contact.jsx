import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'simranjotkaur@tamu.edu',
      link: 'mailto:simranjotkaur@tamu.edu',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: 'fab fa-linkedin-in',
      title: 'LinkedIn',
      value: 'linkedin.com/in/simran79',
      link: 'https://www.linkedin.com/in/simran79/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/simranjotkaur6',
      link: 'https://github.com/simranjotkaur6',
      color: 'from-gray-700 to-gray-900'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = `Portfolio Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      
      // Open email client
      const mailtoLink = `mailto:simranjotkaur@tamu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink, '_blank')
      
      // Show success message
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error) {
      console.error('Error opening email client:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just want to say hello. Feel free to reach out through any of these channels!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-gray-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg`}>
                    <i className={info.icon}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                  <div className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <i className="fas fa-external-link-alt text-sm"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
                <span className="text-gray-800 font-medium">
                  Currently available for new opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="form-input resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium transition-all duration-300 w-full hover:bg-gray-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 text-green-800">
                  <i className="fas fa-check-circle"></i>
                  <span>Email client opened! Please send the message from your email app.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2 text-red-800">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Contact Methods */}
        
      </div>
    </section>
  )
}

export default Contact
