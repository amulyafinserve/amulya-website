"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  User,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface LeadFormProps {
  prefilledNote?: string;
}

export default function LeadForm({ prefilledNote }: LeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledNote) {
      setMessage((prev) => (prev ? `${prev}\n[Note: ${prefilledNote}]` : `[Note: ${prefilledNote}]`));
    }
  }, [prefilledNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Amulya Financial Services, I would like to get in touch regarding wealth advisory.\nName: ${fullName || "Website Visitor"}\nPhone: ${phone}\nEmail: ${email}`
  );

  return (
    <section id="contact" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Exact Section Header from Original Site */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            CONTACT US
          </h2>
          <div className="w-16 h-1 bg-amulya-orange mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Get in Touch with us for customized financial planning and advisory services.
          </p>
        </div>

        {/* Google Map of Mansi Circle, Vastrapur, Ahmedabad */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72 sm:h-80 w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697664658097!2d72.52843477591646!3d23.03487401586561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b80e8e9cf9%3A0x6b3f7f897858c2be!2sMansi%20Circle%2C%20Vastrapur%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amulya Financial Services Office Location - Vastrapur, Ahmedabad"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Original Site Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                Contact Info
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                <div>
                  <div className="font-extrabold text-slate-900 text-base">
                    Amulya Financial Services
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-amulya-orange shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Address:</div>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      129, Sunrise Mall, Nr. Mansi Crossroads,<br />
                      Vastrapur, Ahmedabad – 380015,<br />
                      Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-amulya-orange shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Phone Numbers:</div>
                    <div className="mt-0.5 space-y-1">
                      <div>
                        <span className="text-xs text-slate-500">Mobile: </span>
                        <a href="tel:9879583119" className="font-bold text-slate-900 hover:text-amulya-orange transition-colors">
                          9879583119
                        </a>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500">Office: </span>
                        <a href="tel:07948009211" className="font-bold text-slate-900 hover:text-amulya-orange transition-colors">
                          079-48009211
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-amulya-orange shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email:</div>
                    <a
                      href="mailto:info.amulyawealth@gmail.com"
                      className="text-slate-700 hover:text-amulya-orange transition-colors font-medium break-all block mt-0.5"
                    >
                      info.amulyawealth@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original "Get in Touch with us!" Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-card">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Thank You! Message Received
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{fullName || "Visitor"}</strong>. We have received your inquiry. Our advisory desk will get in touch with you shortly.
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
                      Get in Touch with us!
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and we will contact you right away.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase">
                        Mobile No *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Mobile Number"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Direct WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/919879583119?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Connect on WhatsApp"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-1 -right-1" />
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </section>
  );
}
