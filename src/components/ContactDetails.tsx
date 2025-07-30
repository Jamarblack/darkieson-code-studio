
import React from "react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const ContactDetails: React.FC = () => (
  <div className="space-y-6 dark:bg-gray-950">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
        <a href="mailto:darkiesoncodestudio@gmail.com" className="text-gray-700 hover:text-brand-blue transition-colors">
          darkiesoncodestudio@gmail.com
        </a>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-500 mb-1">Location</h4>
        <p className="text-gray-700">
          Available for remote work worldwide
        </p>
      </div>
    </div>

    {/* Connect With Me */}
    {/* <div className="mt-10">
      <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
      <div className="flex space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://github.com/Jamarblack" 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                aria-label="GitHub"
              >
                <img 
                  src="/github.svg"
                  alt="github"
                  className="w-10 h-10"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://www.linkedin.com/in/mubaraq-abdulraheem-8749892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                aria-label="LinkedIn"
              >
                <img 
                  src="/linkedin.svg"
                  alt="linkedin"
                  className="w-10 h-10"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://t.me/Darkieson" 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-brand-blue transition-all hover-up"
                aria-label="Telegram"
              >
                <img
                  src="/telegram.svg"
                  alt="telegram"
                  className="w-10 h-10"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Telegram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div> */}
  </div>
);

export default ContactDetails;
