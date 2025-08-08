import { Icon } from '@/components/icon';
import { type NavItem } from '@/types';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import AppLogo from '@/components/app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'POLITIQUE DE CONFIDENTIALITE',
        href: '/',
    },
    {
        title: 'MENTIONS LEGALES ET VIE PRIVEE',
        href: '/mentionsLegalesViePrivee',
    },
    {
        title: 'CONDITIONS GENERALES DE VENTE',
        href: '/',
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/sandrine-poireault',
        icon: Linkedin,
    },
];

export function Footer() {
    return (
        <footer className="bg-white border-t border-sidebar-border/80 text-sm">
            <div className="mx-auto flex flex-col items-center justify-center gap-2 px-4 py-4 md:max-w-7xl md:flex-row md:justify-between md:gap-0">
                
                {/* Logo */}
                <Link href="/" prefetch className="flex items-center space-x-2 flex-shrink-0">
                    <AppLogo />
                </Link>

                {/* Main navigation */}
                <div className="flex flex-wrap justify-center gap-3 text-center">
                    {mainNavItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition whitespace-nowrap"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Social icons */}
                <div className="flex gap-4 mt-2 md:mt-0 flex-shrink-0">
                    {rightNavItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition"
                        >
                            {item.icon && <Icon iconNode={item.icon} className="h-4 w-4" />}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
