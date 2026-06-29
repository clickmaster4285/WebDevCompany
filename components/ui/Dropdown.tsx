// components/ui/Dropdown.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
  tag?: string;
  description?: string;
  metrics?: Record<string, string>;
}

export interface DropdownSection {
  title: string;
  href: string;
  description?: string;
  items: DropdownItem[];
}

interface DropdownProps {
  trigger: React.ReactNode;
  sections: DropdownSection[];
  variant?: "cards" | "links";
  layout?: "list" | "grid" | "simple-grid";
  width?: string;
  showViewAll?: boolean;
  showSidebar?: boolean;
  maxItems?: number; // New prop to limit items shown
}

export function Dropdown({ 
  trigger, 
  sections, 
  variant = "links",
  layout = "list",
  width = "w-[680px]",
  showViewAll = true,
  showSidebar = true,
  maxItems
}: DropdownProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle mouse enter - open dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  // Handle mouse leave - close dropdown with delay
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle item click
  const handleItemClick = (section: DropdownSection, item: DropdownItem, e: React.MouseEvent) => {
    e.preventDefault();
    router.push(item.href);
    setIsOpen(false);
  };

  // Handle "View All" click
  const handleViewAll = (section: DropdownSection, e: React.MouseEvent) => {
    e.preventDefault();
    router.push(section.href);
    setIsOpen(false);
  };

  // Get items with optional limit
  const getItems = (items: DropdownItem[]) => {
    if (maxItems) {
      return items.slice(0, maxItems);
    }
    return items;
  };

  // Render items as cards (for Resources)
  const renderCards = (section: DropdownSection) => {
    const items = getItems(section.items);
    return (
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleItemClick(section, item, e)}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ${
              hoveredItem === item.label 
                ? "shadow-lg scale-[1.02] border-violet/20" 
                : "hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div className="relative h-36 bg-slate-100 p-4">
              {item.tag && (
                <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                  • {item.tag}
                </span>
              )}

              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-3xl shadow-md">
                {item.icon}
              </div>

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet/10" />
              <div className="absolute bottom-5 left-10 h-16 w-16 rounded-full bg-slate-200/70" />
            </div>

            <div className="p-4">
              <h4 className="line-clamp-2 text-sm font-bold text-slate-900">
                {item.label}
              </h4>

              {item.description && (
                <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                  {item.description}
                </p>
              )}

              {item.metrics && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <span 
                      key={key}
                      className="inline-flex items-center gap-1 rounded-full bg-violet/10 px-2 py-0.5 text-xs font-medium text-violet"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Click to read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  // Render items as simple links (for Services)
  const renderLinks = (section: DropdownSection) => {
    const items = getItems(section.items);
    
    if (layout === "simple-grid") {
      // Split items into two columns for clean text links
      const mid = Math.ceil(items.length / 2);
      const leftColumn = items.slice(0, mid);
      const rightColumn = items.slice(mid);

      return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-0">
          {/* Left Column */}
          <div className="space-y-0.5">
            {leftColumn.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(section, item, e)}
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-all duration-200 hover:bg-violet/10 hover:text-violet hover:translate-x-0.5"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-0.5">
            {rightColumn.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(section, item, e)}
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-all duration-200 hover:bg-violet/10 hover:text-violet hover:translate-x-0.5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (layout === "grid") {
      // Split items into two columns with icons
      const mid = Math.ceil(items.length / 2);
      const leftColumn = items.slice(0, mid);
      const rightColumn = items.slice(mid);

      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            {leftColumn.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(section, item, e)}
                className="group flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-violet/10 hover:text-violet hover:translate-x-0.5"
              >
                {item.icon && <span className="text-base">{item.icon}</span>}
                <span className="text-sm font-medium text-slate-900 group-hover:text-violet transition-colors line-clamp-1">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="space-y-1">
            {rightColumn.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(section, item, e)}
                className="group flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-violet/10 hover:text-violet hover:translate-x-0.5"
              >
                {item.icon && <span className="text-base">{item.icon}</span>}
                <span className="text-sm font-medium text-slate-900 group-hover:text-violet transition-colors line-clamp-1">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    // Default list layout
    return (
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleItemClick(section, item, e)}
            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-violet/10 hover:text-violet hover:translate-x-0.5"
          >
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <div className="flex-1 min-w-0">
              <span className="block text-sm font-medium text-slate-900 group-hover:text-violet transition-colors">
                {item.label}
              </span>
              {item.description && (
                <span className="block text-xs text-slate-500 truncate">
                  {item.description}
                </span>
              )}
            </div>
            {item.tag && (
              <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 group-hover:bg-violet/10 group-hover:text-violet transition-colors">
                {item.tag}
              </span>
            )}
            <span className="text-slate-300 group-hover:text-violet transition-colors">
              →
            </span>
          </Link>
        ))}
      </div>
    );
  };

  // Determine grid columns based on variant and sidebar visibility
  const getGridCols = () => {
    if (!showSidebar) return "grid-cols-1";
    if (variant === "cards") return "grid-cols-[240px_1fr]";
    if (layout === "simple-grid" || layout === "grid") return "grid-cols-[180px_1fr]";
    return "grid-cols-[200px_1fr]";
  };

  // Get sidebar width
  const getSidebarWidth = () => {
    if (variant === "cards") return "w-[240px]";
    if (layout === "simple-grid" || layout === "grid") return "w-[180px]";
    return "w-[200px]";
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div 
          className={`absolute left-1/2 top-full mt-4 ${width} -translate-x-1/2 rounded-2xl border border-slate-200 bg-white shadow-2xl`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`grid ${getGridCols()} overflow-hidden rounded-2xl`}>
            {/* Left sidebar - Categories (hidden when showSidebar is false) */}
            {showSidebar && (
              <div className={`${getSidebarWidth()} bg-slate-100 p-5`}>
                <h3 className="text-lg font-bold text-slate-950">
                  {sections[0]?.title?.split(" ")[0] || "Menu"}
                </h3>

                <div className="mt-4 space-y-2">
                  {sections.map((section) => {
                    const isActive = activeSection.title === section.title;

                    return (
                      <button
                        key={section.title}
                        onMouseEnter={() => setActiveSection(section)}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(section.href);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-violet text-white shadow-lg shadow-violet/20"
                            : "text-slate-700 hover:bg-white hover:text-violet hover:translate-x-0.5"
                        }`}
                      >
                        <span>{section.title}</span>
                        <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Right content - Items */}
            <div className={`p-5 ${!showSidebar ? "w-full" : ""}`}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-violet">
                    {activeSection.title}
                  </h3>
                  {activeSection.description && (
                    <p className="mt-1 text-sm text-slate-500">
                      {activeSection.description}
                    </p>
                  )}
                </div>

                {/* Conditionally render View All link */}
                {showViewAll && (
                  <Link
                    href={activeSection.href}
                    onClick={(e) => handleViewAll(activeSection, e)}
                    className="flex items-center gap-1 text-sm font-medium text-violet hover:underline transition-all duration-200 hover:gap-2"
                  >
                    View All <span>›</span>
                  </Link>
                )}
              </div>

              {/* Conditionally render cards or links */}
              {variant === "cards" ? renderCards(activeSection) : renderLinks(activeSection)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}