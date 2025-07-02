import React from 'react';
import { personalInfo } from '../../data/personal';
import { Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-3 px-2 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Let's Connect
          </h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            I&apos;m always interested in discussing new opportunities, collaborating on projects, or just having a conversation about technology and mathematics.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="flex-1 flex items-center py-4 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Contact Details */}
            <div className="text-center">
              <div className="bg-slate-800/80 rounded-2xl p-6 shadow-lg inline-block">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-4 text-left">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-base">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-blue-400 hover:text-blue-300 font-medium text-lg"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-base">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-blue-400 hover:text-blue-300 font-medium text-lg"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-base">Location</p>
                      <p className="text-blue-400 font-medium text-lg">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Profile Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/headshot.jpg" 
                alt="Michael Cronin"
                className="w-64 h-64 object-cover rounded-2xl border-4 border-blue-500/30"
              />
            </div>

            {/* Right Column - Social Links */}
            <div className="text-center">
              <div className="bg-slate-800/80 rounded-2xl p-6 shadow-lg inline-block">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Find Me Online
                </h3>
                <div className="space-y-4 text-left">
                  {/* GitHub */}
                  <a
                    href={`https://github.com/${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Github className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-base">GitHub</p>
                      <span className="text-blue-400 font-medium text-lg">{personalInfo.github}</span>
                    </div>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/in/${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">💼</span>
                    </div>
                    <div>
                      <p className="text-slate-400 text-base">LinkedIn</p>
                      <span className="text-blue-400 font-medium text-lg">michael-cronin</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-base text-slate-300 mb-4">
            Whether you&apos;re looking for an intern, collaborator, or just want to chat about technology, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-base"
            >
              Send Email
            </a>
            <a 
              href="/Michael Cronin Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors text-base"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 