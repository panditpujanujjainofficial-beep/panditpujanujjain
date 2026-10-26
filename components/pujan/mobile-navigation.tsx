"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { phone, whatsapp } from "@/app/data/pujan";
import { siteNavigation } from "@/app/data/navigation";

function NavigationLinks({
  mobile = false,
  pathname,
  close,
}: {
  mobile?: boolean;
  pathname?: string;
  close?: () => void;
}) {
  return siteNavigation.map((link, index) => {
    const active =
      link.href === "/#gallery"
        ? pathname === "/gallery"
        : pathname === link.href;
    return (
      <a
        href={link.href}
        key={link.href}
        aria-current={active ? "page" : undefined}
        onClick={() => {
          if (close) requestAnimationFrame(close);
        }}
      >
        {mobile ? (
          <>
            <span className="drawer-link-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <strong>{link.label}</strong>
              <small>{link.description}</small>
            </span>
            <ArrowUpRight size={18} />
          </>
        ) : (
          link.label
        )}
      </a>
    );
  });
}
function CurrentNavigationLinks(props: {
  mobile?: boolean;
  close?: () => void;
}) {
  return <NavigationLinks {...props} pathname={usePathname()} />;
}

export function ResponsiveNavigation() {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (disclosure.current) disclosure.current.open = false;
  };
  useEffect(() => {
    const viewport = window.matchMedia("(min-width: 1024px)");
    const resize = () => {
      if (viewport.matches) close();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && disclosure.current?.open) {
        close();
        disclosure.current.querySelector("summary")?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !disclosure.current?.contains(event.target)
      )
        close();
    };
    viewport.addEventListener("change", resize);
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      viewport.removeEventListener("change", resize);
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);

  return (
    <>
      <nav className="desktop-nav" aria-label="मुख्य नेविगेशन">
        <Suspense fallback={<NavigationLinks />}>
          <CurrentNavigationLinks />
        </Suspense>
      </nav>
      <div className="header-actions">
        <a
          href={phone}
          className="header-phone"
          aria-label="गुरु जी को कॉल करें: +91 62608 52654"
        >
          <Phone size={18} />
          <span>
            <small>गुरु जी से बात करें</small>
            <strong>62608 52654</strong>
          </span>
        </a>
        <details ref={disclosure} className="header-menu">
          <summary className="menu-trigger">
            <Menu className="menu-open-icon" size={21} />
            <X className="menu-close-icon" size={21} />
            <span>मेन्यू</span>
          </summary>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-title">
              <span>आचार्य राघव गुरु जी</span>
              <small>M.A. ज्योतिष आचार्य · उज्जैन</small>
            </div>
            <nav className="drawer-links" aria-label="मोबाइल नेविगेशन">
              <Suspense fallback={<NavigationLinks mobile close={close} />}>
                <CurrentNavigationLinks mobile close={close} />
              </Suspense>
            </nav>
            <a
              href={whatsapp()}
              className="pujan-button"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (close) requestAnimationFrame(close);
              }}
            >
              <MessageCircle size={18} />
              WhatsApp पर जानकारी लें
              <ArrowUpRight size={17} />
            </a>
          </div>
        </details>
      </div>
    </>
  );
}
