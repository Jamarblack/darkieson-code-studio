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

    const SERVICE_ID = 'YOUR_SERVICE_ID'; 
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
          toast.success("TRANSMISSION COMPLETE", {
            className: "bg-background border border-primary text-foreground font-mono"
          });
          formRef.current?.reset();
      }, (error) => {
          toast.error("TRANSMISSION ERROR", {
            className: "bg-background border border-destructive text-foreground font-mono"
          });
          console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-card/40 border border-primary/30 p-6 md:p-8 relative overflow-hidden group">
      {/* Decorative Corners */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-50"></div>
      
      <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-widest flex items-center gap-2">
        <Send className="w-5 h-5" />
        <span>/Secure_Gateway</span>
      </h3>
      
      <form ref={formRef} onSubmit={sendEmail} className="space-y-5 font-mono">
        <div className="group/input relative">
          <label className="text-[10px] uppercase text-muted-foreground mb-1 block">Identity_ID</label>
          <input required name="user_name" type="text" placeholder="ENTER NAME" 
            className="w-full bg-secondary/50 border-b border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50" />
        </div>
        
        <div className="group/input relative">
          <label className="text-[10px] uppercase text-muted-foreground mb-1 block">Return_Address</label>
          <input required name="user_email" type="email" placeholder="ENTER EMAIL" 
            className="w-full bg-secondary/50 border-b border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50" />
        </div>
        
        <div className="group/input relative">
          <label className="text-[10px] uppercase text-muted-foreground mb-1 block">Data_Payload</label>
          <textarea required name="message" rows={4} placeholder="TYPE MESSAGE..." 
            className="w-full bg-secondary/50 border-b border-border p-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/50" />
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-primary/10 border border-primary text-primary py-3 px-6 hover:bg-primary hover:text-background transition-all uppercase tracking-widest font-bold flex items-center justify-center gap-2 group/btn">
          {loading ? <Loader2 className="animate-spin" /> : <><span>EXECUTE_SEND()</span><Send size={16}/></>}
        </button>
      </form>

      {/* Alternative Uplinks */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-3 text-center">
          :: OR SELECT DIRECT ENCRYPTED CHANNEL ::
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noreferrer"
             className="flex items-center justify-center gap-2 py-2 border border-border text-muted-foreground hover:border-green-500 hover:text-green-500 hover:bg-green-500/10 transition-all cursor-pointer">
            <Smartphone size={16} /> <span className="text-xs font-bold">WHATSAPP</span>
          </a>
          <a href="https://t.me/Darkieson" target="_blank" rel="noreferrer"
             className="flex items-center justify-center gap-2 py-2 border border-border text-muted-foreground hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all cursor-pointer">
            <MessageCircle size={16} /> <span className="text-xs font-bold">TELEGRAM</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;