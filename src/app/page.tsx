import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
    {
        title: 'Crypto Card Fintech Backend',
        description:
            'Backend system for crypto card fintech platform with payment processing and transaction management.',
        date: '2024–Present',
    },
    {
        title: 'CSGO Trading Bot',
        description:
            'Automated trading system for CSGO marketplace transactions with real-time inventory management.',
        date: '2020-Present',
    },
    {
        title: 'Binance Futures Trading',
        description:
            'Automated futures trading system with risk management and strategy execution on Binance.',
        date: '2020',
    },
];

export default function Page() {
    return (
        <main className="max-w-4xl mx-auto px-5 py-12 space-y-24">
            {/* Hero Section */}
            <section className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold font-mono">
                    Hi, I&apos;m Gustavo<span className="cursor-blink"></span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-github-green font-mono">
                    Software Engineer • Systems Architect • Builder of Scalable
                    Things
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                    5+ years shipping production systems. I design backends that
                    don&apos;t break at 3 AM.
                </p>
            </section>

            {/* About Section */}
            <section className="space-y-4">
                <h2 className="text-3xl font-bold font-mono">About</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        I&apos;m a full-stack developer with a deep love for
                        system design, distributed architecture, and making
                        complex things feel simple.
                    </p>
                    <p>
                        Co-founded a fintech startup (privacy-first, no details
                        😉)
                    </p>
                    <p>Currently exploring AI + devtools.</p>
                </div>
            </section>

            {/* Skills & Architecture Focus */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold font-mono">
                    Skills & Architecture Focus
                </h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-github-green">
                            Core Stack:
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                • <span className="font-mono">Backend:</span>{' '}
                                NestJS, Spring Boot
                            </li>
                            <li>
                                •{' '}
                                <span className="font-mono">Architecture:</span>{' '}
                                Microservices, Event-Driven, CQRS, DDD
                            </li>
                            <li>
                                • <span className="font-mono">Cloud:</span> AWS
                                (ECS, Lambda, RDS), Docker, Kubernetes
                            </li>
                            <li>
                                • <span className="font-mono">Databases:</span>{' '}
                                PostgreSQL, Redis, DynamoDB
                            </li>
                            <li>
                                • <span className="font-mono">Frontend:</span>{' '}
                                React, Next.js, TypeScript
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Projects & Team Leadership */}
            <section id="management" className="space-y-6">
                <h2 className="text-3xl font-bold font-mono">
                    Projects & Team Leadership
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I don&apos;t just code — I ship products with distributed
                    teams, tight deadlines, and zero drama.
                </p>
                <div className="space-y-4">
                    <div className="bg-github-card border border-github-card rounded-md p-6 space-y-4 hover:border-github-green transition-all duration-200">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-bold font-mono text-github-green mb-2">
                                    Fintech MVP (Co-founder)
                                </h3>
                                <p className="text-gray-300">
                                    <strong>Role:</strong> CTO & Lead
                                    Architect/Developer
                                </p>
                            </div>
                            <span className="text-xs font-mono text-gray-400 bg-github-dark px-3 py-1 rounded border border-github-card">
                                2022–Present
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-400 italic font-mono text-sm">
                        &quot;I build things that work. Quietly. At scale.&quot;
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="space-y-6">
                <h2 className="text-3xl font-bold font-mono">Contact</h2>
                <p className="text-gray-300">
                    Find me on{' '}
                    <a
                        href="https://x.com/tavindev"
                        className="text-github-green hover:underline"
                    >
                        X
                    </a>
                </p>
            </section>

            {/* Footer */}
            <footer className="pt-8 pb-12 border-t border-github-card text-center text-gray-400 text-sm">
                <p>
                    © 2025 Gustavo • Brazilian developer • Building in public •
                    Português & English & Deutsch
                </p>
            </footer>
        </main>
    );
}
