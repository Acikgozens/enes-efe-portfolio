"use client";

import { useState } from 'react';
import DOMPurify from 'dompurify';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        hp: '' // Honeypot field
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. HONEYPOT CHECK (Strictly first step)
        if (formData.hp !== '') {
            console.warn("Spam detected via Honeypot.");
            return; // Silent fail for bots
        }

        setLoading(true);
        setStatus('IDLE');

        // 2. STRICT SANITIZATION
        const cleanName = DOMPurify.sanitize(formData.name.trim());
        const cleanEmail = DOMPurify.sanitize(formData.email.trim());
        const cleanMessage = DOMPurify.sanitize(formData.message.trim());

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                {
                    from_name: cleanName,
                    reply_to: cleanEmail,
                    message: cleanMessage,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            setStatus('SUCCESS');
            setFormData({ name: '', email: '', message: '', hp: '' });
        } catch {
            // 3. SECURE ERROR HANDLING (Masking sensitive details)
            console.error('Submission technical failure avoided disclosure');
            setStatus('ERROR');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus('IDLE'), 5000);
        }
    };

    return (
        <div className="w-full max-w-2xl mt-12 md:mt-24">
            <h2 className="font-pressStart text-xl md:text-3xl text-accent dark:text-white uppercase border-b-4 border-black dark:border-[#333] pb-4 mb-12 self-start">
                Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Honeypot Field (Hidden from humans) */}
                <div className="hidden" aria-hidden="true">
                    <input
                        type="text"
                        name="hp_field"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.hp}
                        onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label className="font-pressStart text-[10px] text-gray-400 uppercase">Input Name:</label>
                    <input
                        type="text"
                        required
                        className="bg-white dark:bg-[#111] border-4 border-gray-200 dark:border-[#333] px-4 py-4 font-sans text-black dark:text-white focus:outline-none focus:border-accent transition-colors"
                        placeholder="TYPE YOUR NAME..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label className="font-pressStart text-[10px] text-gray-400 uppercase">Input Email:</label>
                    <input
                        type="email"
                        required
                        className="bg-white dark:bg-[#111] border-4 border-gray-200 dark:border-[#333] px-4 py-4 font-sans text-black dark:text-white focus:outline-none focus:border-accent transition-colors"
                        placeholder="EMAIL@EXAMPLE.COM"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label className="font-pressStart text-[10px] text-gray-400 uppercase">Input Message:</label>
                    <textarea
                        required
                        rows={5}
                        className="bg-white dark:bg-[#111] border-4 border-gray-200 dark:border-[#333] px-4 py-4 font-sans text-black dark:text-white focus:outline-none focus:border-accent transition-all resize-none"
                        placeholder="WRITE YOUR MESSAGE HERE..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                {/* Arcade Style Button */}
                <button
                    type="submit"
                    disabled={loading || status === 'SUCCESS'}
                    className={`mt-4 font-pressStart text-sm px-10 py-6 uppercase transition-all
                        ${status === 'SUCCESS' ? 'bg-green-500 border-green-500 text-white cursor-default' :
                            status === 'ERROR' ? 'bg-red-500 border-red-500 text-white' :
                                'bg-accent text-black border-accent active:translate-x-[6px] active:translate-y-[6px] active:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_var(--accent-hover)]'}
                        shadow-[6px_6px_0_0_#000] border-2 disabled:opacity-70 disabled:cursor-not-allowed
                        self-center sm:self-start mb-4`}
                >
                    {loading ? 'SENDING...' :
                        status === 'SUCCESS' ? 'SENT!' :
                            status === 'ERROR' ? 'RETRY' :
                                'Insert Coin & Send'}
                </button>

                {/* Status Messages */}
                {status === 'SUCCESS' && (
                    <p className="font-pressStart text-[8px] text-green-500 animate-pulse">MISSION ACCOMPLISHED! MESSAGE SENT.</p>
                )}
                {status === 'ERROR' && (
                    <p className="font-pressStart text-[8px] text-red-500">SYSTEM ERROR. PLEASE TRY AGAIN LATER.</p>
                )}
            </form>
        </div>
    );
}
