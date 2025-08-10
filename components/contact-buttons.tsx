import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactButtons() {
  return (
    <div>
      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col items-end gap-3 sm:gap-4 z-50">
        {/* Call Button */}
        <div className="group relative">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <a href="tel:+27634582860" aria-label="Call us" title="Call us" className="flex items-center justify-center w-full h-full">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </a>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Call +27 634 582 860
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="group relative">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <a
              href="https://wa.me/27634582860"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              title="Chat on WhatsApp"
              className="flex items-center justify-center w-full h-full"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </a>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>

        {/* Pulsing animation for attention */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-600/30 animate-ping absolute top-0"></div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-green-500/30 animate-ping absolute bottom-0 delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
