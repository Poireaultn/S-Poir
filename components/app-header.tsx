"use client";

import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {type NavItem} from '@/types';
import Link from 'next/link';
import { LayoutGrid, Menu, Linkedin, SquareUserRound, BriefcaseBusiness, House, PiggyBank, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { useState } from 'react'
import { usePathname } from 'next/navigation';


const mainNavItems: NavItem[] = [
    {
        title: 'Accueil',
        href: '/',
        icon: LayoutGrid,
    },
    {
        title: 'Presentation',
        href: '/presentation',
        icon: SquareUserRound,
    },
    {
        title: 'Professionnels',
        href: '/professionnels',
        icon: BriefcaseBusiness,
        list: [
                { title: "Administratif", href: "/professionnels/administratif" },
                { title: "Comptabilité", href: "/professionnels/comptabilite" },
                { title: "Missions et Conseils RH", href: "/professionnels/missionsConseilsRH" },
                { title: "Formations", href: "/professionnels/formations" }
            ],
    },
    {
        title: 'Particuliers',
        href: '/Particuliers',
        icon: House,
        list: [
                { title: "Administratif et numérique", href: "/particuliers/administratifNumerique" },
                { title: "Demandeurs d'emploi", href: "/particuliers/demandeursEmploi" }
            ],
    },
    {
        title: 'Tarifs',
        href: '/tarifs',
        icon: PiggyBank,
    },
    {
        title: 'Contact',
        href: '/contact',
        icon: Mail,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/sandrine-poireault',
        icon: Linkedin,
    },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function Header() {
    const pathname = usePathname();

    // État pour stocker quel menu est ouvert, null = aucun
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <>
            <div className="sticky top-0 z-50 bg-white border-b border-sidebar-border/80">
                <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-2 h-[34px] w-[34px]">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex h-full flex-col justify-between text-sm">
                                        <div className="flex flex-col space-y-4">
                                            {mainNavItems.map((item) => {
                                                const hasChildren = item.list && item.list.length > 0;
                                                const isOpen = openMenu === item.title;

                                                return (
                                                    <div key={item.title} className="flex flex-col">
                                                        <div
                                                            className="flex items-center justify-between space-x-2 font-medium cursor-pointer"
                                                            onClick={() => hasChildren ? setOpenMenu(isOpen ? null : item.title) : null}
                                                        >
                                                            {hasChildren ? (
                                                                <div className="flex items-center space-x-2">
                                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                                    <span>{item.title}</span>
                                                                    <span className="text-xs text-gray-500">{isOpen ? <ChevronUp/> : <ChevronDown/>}</span>
                                                                </div>                                                        
                                                            ) : (
                                                                <Link href={item.href} className="flex items-center space-x-2">
                                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                                    <span>{item.title}</span>
                                                                </Link>
                                                            )}
                                                        </div>

                                                        {hasChildren && isOpen && (
                                                            <div className="ml-6 mt-2 flex flex-col space-y-1">
                                                                {item.list!.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.href}
                                                                        href={subItem.href}
                                                                        className="text-muted-foreground hover:text-foreground transition"
                                                                    >
                                                                        {subItem.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            {rightNavItems.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                    <span>{item.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Link href="/" prefetch className="flex items-center space-x-2">
                        <AppLogo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="ml-6 hidden h-full items-center space-x-6 lg:flex">
                        <NavigationMenu className="flex h-full items-stretch" viewport={false}>
                            <NavigationMenuList className="flex h-full items-stretch space-x-2">
                                {mainNavItems.map((item, index) => (
                                    
                                    <NavigationMenuItem key={index} className="relative flex h-full items-center">
                                        { item.list && item.list.length > 0 ? (
                                            <>
                                                <NavigationMenuTrigger
                                                className={cn(
                                                                navigationMenuTriggerStyle(),
                                                                pathname === item.href && activeItemStyles,
                                                                'h-9 cursor-pointer px-3',
                                                            )}
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />}
                                                    {item.title}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-1 rounded-md border bg-popover shadow-md">
                                                    <ul className="w-auto p-2 flex flex-col gap-2">
                                                    {item.list.map((subItem) => (
                                                        <li key={subItem.href}>
                                                        <NavigationMenuLink asChild>
                                                            <Link href={subItem.href}
                                                            className={cn(
                                                                navigationMenuTriggerStyle(),
                                                                pathname === item.href && activeItemStyles,
                                                                'h-9 cursor-pointer px-3',
                                                            )}
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                                {item.list.map((subItem) =>
                                                    pathname === subItem.href && (
                                                        <div key={subItem.href} className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                                    )
                                                )}

                                            </>

                                        ): (
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    pathname === item.href && activeItemStyles,
                                                    'h-9 cursor-pointer px-3',
                                                )}
                                            >
                                                {item.icon && <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />}
                                                {item.title}
                                            </Link>
                                        )}
                                        
                                        {pathname === item.href && (
                                            <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="ml-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            <div className="hidden lg:flex">
                                {rightNavItems.map((item) => (
                                    <TooltipProvider key={item.title} delayDuration={0}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium text-accent-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                >
                                                    <span className="sr-only">{item.title}</span>
                                                    {item.icon && <Icon iconNode={item.icon} className="size-5 opacity-80 group-hover:opacity-100" />}
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
