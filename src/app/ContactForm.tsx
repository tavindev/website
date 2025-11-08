'use client';

import { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        const mailtoLink = `mailto:you@domain.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-github-card border border-github-card rounded-md text-github-light placeholder:text-gray-400 focus:outline-none focus:border-github-green transition-colors"
                required
            />
            <input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-github-card border border-github-card rounded-md text-github-light placeholder:text-gray-400 focus:outline-none focus:border-github-green transition-colors"
                required
            />
            <textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-github-card border border-github-card rounded-md text-github-light placeholder:text-gray-400 focus:outline-none focus:border-github-green transition-colors resize-none"
                required
            />
            <button
                type="submit"
                className="px-6 py-3 bg-github-green text-white rounded-md hover:bg-[#2ea043] transition-colors font-medium"
            >
                Send →
            </button>
        </form>
    );
}

