import React from "react";
import { Mail, MapPin, ShieldAlert } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="space-y-8 font-mono bg-gray-50 dark:bg-gray-900 p-6 border border-gray-800">
      <div className="border border-brand-neon/30 bg-brand-neon/5 p-4 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-black border border-brand-neon text-brand-neon">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h4 className="dark:text-white text-gray-900 font-bold mb-1">SECURE_CHANNEL_ACTIVE</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              All transmissions are encrypted end-to-end. 
              <br/>
              Response time: &lt; 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="group flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center border border-gray-800 bg-gray-900 group-hover:border-brand-neon group-hover:text-brand-neon transition-colors">
            <Mail size={18} className="text-white" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
              Direct_Uplink (Email)
            </div>
            <a 
              href="mailto:darkiesoncodestudio@gmail.com" 
              className="dark:text-white text-gray-950 hover:text-brand-neon transition-colors text-lg font-bold"
            >
              darkiesoncodestudio@gmail.com
            </a>
          </div>
        </div>

        <div className="group flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center border border-gray-800 bg-gray-900 group-hover:border-brand-neon group-hover:text-brand-neon transition-colors">
            <MapPin size={18} className="text-white" />
          </div>
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
              Current_Coordinates
            </div>
            <div className="dark:text-white text-gray-900 text-lg font-bold">
              Remote / Worldwide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;