
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-gray-300 text-sm">Email</p>
                <a href="mailto:GIRISH67678@gmail.com" className="text-white hover:text-blue-400 transition-colors text-base">
                  GIRISH67678@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-teal-600 p-2 rounded-lg group-hover:bg-teal-700 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-gray-300 text-sm">Phone</p>
                <a href="tel:+917530889843" className="text-white hover:text-teal-400 transition-colors text-base">
                  +91 7530889843
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-700 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-gray-300 text-sm">Location</p>
                <p className="text-white text-base">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/najwanigirish/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/NajwaniGirish"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
