import type { ReactNode } from 'react';

interface ContentSectionProps {
    title?: string;
    children?: ReactNode;
    className?: string;
}

const ContentSection = ({ title, children, className }: ContentSectionProps) => {
    return (
            <section className={`max-w-7xl mx-auto px-0 py-2 ${className || ''}`}>
            {title && <h2 className="text-3xl font-bold mb-6 font-title text-primary">{title}</h2>}
            {children}
        </section>
    );
};

export default ContentSection;
