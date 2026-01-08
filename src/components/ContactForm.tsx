import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { Send, Loader2, MessageCircle, Smartphone } from "lucide-react";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔒 SECURITY CREDENTIALS (Get these from emailjs.com)
    const SERVICE_ID = 'service_7azt0a8'; 
    const TEMPLATE_ID = 'template_2ss0f6a';
    const PUBLIC_KEY = '4Ud5uUvOlCqdadH-J';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
          toast.success("TRANSMISSION COMPLETE: Message packet sent.", {
            className: "bg-black border border-brand-neon text-white font-mono"
          });
          formRef.current?.reset();
      }, (error) => {
          toast.error("TRANSMISSION ERROR: Network unreachable.", {
            className: "bg-black border border-red-500 text-white font-mono"
          });
          console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-black border border-brand-neon/30 p-6 md:p-8 relative overflow-hidden group">
      {/* Visual Decor */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-neon opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-neon opacity-50"></div>
      
      <h3 className="text-xl font-bold mb-6 text-brand-neon uppercase tracking-widest flex items-center gap-2">
        <Send className="w-5 h-5" />
        <span>/Secure_Gateway</span>
      </h3>
      
      <form ref={formRef} onSubmit={sendEmail} className="space-y-5 font-mono">
        {/* Name Input */}
        <div className="group/input relative">
          <label className="text-[10px] uppercase text-gray-500 mb-1 block">Identity_ID</label>
          <input required name="user_name" type="text" placeholder="ENTER NAME" 
            className="w-full bg-black/50 border-b border-gray-700 p-3 text-white focus:border-brand-neon focus:outline-none transition-colors placeholder:text-gray-800" />
        </div>
        
        {/* Email Input */}
        <div className="group/input relative">
          <label className="text-[10px] uppercase text-gray-500 mb-1 block">Return_Address</label>
          <input required name="user_email" type="email" placeholder="ENTER EMAIL" 
            className="w-full bg-black/50 border-b border-gray-700 p-3 text-white focus:border-brand-neon focus:outline-none transition-colors placeholder:text-gray-800" />
        </div>
        
        {/* Message Input */}
        <div className="group/input relative">
          <label className="text-[10px] uppercase text-gray-500 mb-1 block">Data_Payload</label>
          <textarea required name="message" rows={4} placeholder="TYPE MESSAGE..." 
            className="w-full bg-black/50 border-b border-gray-700 p-3 text-white focus:border-brand-neon focus:outline-none transition-colors resize-none placeholder:text-gray-800" />
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading}
          className="w-full bg-brand-neon/10 border border-brand-neon text-brand-neon py-3 px-6 hover:bg-brand-neon hover:text-black transition-all uppercase tracking-widest font-bold flex items-center justify-center gap-2 group/btn">
          {loading ? <Loader2 className="animate-spin" /> : <><span>EXECUTE_SEND()</span><Send size={16}/></>}
        </button>
      </form>

      {/* Alternative Uplinks (WhatsApp/Telegram) */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 text-center">
          :: OR SELECT DIRECT ENCRYPTED CHANNEL ::
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href="https://wa.me/2348082121149" target="_blank" rel="noreferrer" // REPLACE X WITH YOUR NUMBER
             className="flex items-center justify-center gap-2 py-2 border border-gray-700 text-gray-400 hover:border-green-500 bg-black hover:text-black/400 hover:bg-green-500/10 transition-all cursor-pointer">
            <Smartphone size={16} /> <span className="text-xs font-bold">WHATSAPP</span>
          </a>
          <a href="https://t.me/Darkieson" target="_blank" rel="noreferrer"
             className="flex items-center justify-center gap-2 py-2 border border-gray-700 text-gray-400 bg-black hover:border-blue-400 hover:text-black/400 hover:bg-blue-400/10 transition-all cursor-pointer">
            <MessageCircle size={16} /> <span className="text-xs font-bold">TELEGRAM</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;