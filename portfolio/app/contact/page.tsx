import React from 'react';
import { personalInfo } from '../../data/personal';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-6 px-2 sm:px-4 lg:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Let's Connect
          </h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            I&apos;m always interested in discussing new opportunities, collaborating on projects, or just having a conversation about technology and mathematics.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-6 px-2 sm:px-4 lg:px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            {/* Left Column - Contact Details */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-white mb-3">
                Get in Touch
              </h2>
              <div className="space-y-2 inline-block text-left">
                {/* Email */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-base">📧</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-base">📱</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-base">📍</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Location</p>
                    <p className="text-blue-400 font-medium text-sm">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Profile Image */}
            <div className="flex justify-center">
              <img 
                src="/headshot.jpg" 
                alt="Michael Cronin"
                className="w-40 h-40 object-cover rounded-2xl border-4 border-blue-500/30"
              />
            </div>

            {/* Right Column - Social Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Find Me Online
              </h3>
              <div className="space-y-2 inline-block">
                {/* GitHub */}
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 rounded-lg p-3 transition-colors"
                >
                  <span className="text-xl">🐱</span>
                  <div>
                    <p className="text-white font-medium text-sm">GitHub</p>
                    <p className="text-slate-400 text-xs">{personalInfo.github}</p>
                  </div>
                </a>
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 rounded-lg p-3 transition-colors"
                >
                  <span className="text-xl">💼</span>
                  <div>
                    <p className="text-white font-medium text-sm">LinkedIn</p>
                    <p className="text-slate-400 text-xs">michael-cronin</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 px-2 sm:px-4 lg:px-6 bg-slate-800">
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