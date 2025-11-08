import React from 'react';

type ProjectCardProps = {
    title: string;
    description: string;
    date: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, date }) => {
    return (
        <div className="bg-github-card border border-github-card rounded-md p-5 space-y-3 hover:border-github-green hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-start justify-between">
                <h3 className="font-bold text-lg font-mono text-github-green">{title}</h3>
                <span className="text-xs font-mono text-gray-400 bg-github-dark px-3 py-1 rounded border border-github-card whitespace-nowrap ml-2">
                    {date}
                </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
    );
};
