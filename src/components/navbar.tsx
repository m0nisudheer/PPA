"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "#" },
  { name: "Programs", href: "#" },
  { name: "Impact", href: "#" },
  { name: "Stories", href: "#" },
  { name: "Get Involved", href: "#" },
];

const resourceLinks = [
  { name: "Blog", href: "#" },
  { name: "News & Updates", href: "#" },
  { name: "Annual Report", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Media Kit", href: "#" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<"main" | "resources">("main");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setPage("main");
  };

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link
            href="/"
            className="relative z-50 flex h-16 w-16 xl:w-24 xl:h-24 2xl:h-28 2xl:w-28 lg:translate-y-6 items-center justify-center rounded-full bg-white lg:shadow-md"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
              priority
              className="object-contain w-16 h-16 xl:w-18 md:h-18 2xl:w-20 2xl:h-20"
            />
          </Link>

          <div className="hidden items-center gap-6 xl:gap-8 2xl:gap-10 lg:flex">
            <nav className="flex items-center gap-5 xl:gap-6 2xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-montserrat text-[14px] 2xl:text-[16px] font-medium transition hover:text-[#2E8B3D]"
                >
                  {item.name}
                </Link>
              ))}
              <button className="cursor-pointer  font-montserrat flex items-center gap-1 text-[15px] font-medium hover:text-[#6F962C]">
                Resources
                <ChevronDown size={16} />
              </button>
            </nav>
            <button
              // onClick={() => {
              //   document.getElementById("donate-card")?.scrollIntoView({
              //     behavior: "smooth",
              //     block: "start",
              //   });
              // }}
              onClick={() => router.push("/donate")}
              className="inline-flex items-center gap-2 rounded bg-[#6F962C] px-6 py-2 text-[14px] 2xl:text-sm font-normal text-white transition hover:bg-[#011C3E] cursor-pointer"
            >
              <span>DONATE NOW</span>
              <Heart className="h-4 w-4 fill-white text-white" />
            </button>
          </div>

          <button
            onClick={() => {
              setOpen(true);
              setPage("main");
            }}
            className="lg:hidden p-2 text-gray-800"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[9999]  lg:hidden transition-all duration-300 ${open ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
        />

        <div
          className={`
            absolute top-0 right-0 h-full w-[80vw] max-w-sm md:max-w-2xl bg-white flex flex-col
            transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex h-16 items-center justify-between px-5 border-b border-gray-100">
            {page === "resources" ? (
              <button
                onClick={() => setPage("main")}
                className="flex items-center font-montserrat gap-1 text-[15px] md:text-[25px] font-medium"
              >
                <ChevronLeft size={24} className="text-[#6F962C]" />
                Back
              </button>
            ) : (
              <span className="text-[15px] md:text-[25px] font-montserrat font-semibold ">
                Menu
              </span>
            )}
            <button onClick={closeMenu} className="p-1">
              <X size={24} />
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div
              className={`
                absolute inset-0 flex w-[200%] h-full
                transition-transform duration-300 ease-in-out
                ${page === "resources" ? "-translate-x-1/2" : "translate-x-0"}
              `}
            >
              <div className="w-1/2 h-full font-montserrat overflow-y-auto flex flex-col gap-0 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="w-full text-center py-2 md:py-4 text-[18px] md:text-[25px] font-medium text-gray-800 hover:text-[#2E8B3D] transition border-b border-gray-100 last:border-0 no-underline"
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={() => setPage("resources")}
                  className="w-full flex items-center justify-center gap-2 py-4 text-[18px] md:text-[25px] font-medium text-gray-800 hover:text-[#6F962C] transition border-b border-gray-100"
                >
                  Resources
                  <ChevronRight size={18} className="text-[#6F962C]" />
                </button>

                <button
                  onClick={() => {
                    closeMenu();
                    router.push("/donate");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#6F962C] px-6 py-3 text-[15px] md:text-[25px] font-semibold text-white transition hover:bg-[#011C3E]"
                >
                  DONATE NOW
                  <Heart className="h-4 w-4 md:h-8 md:w-8 fill-white text-white" />
                </button>
              </div>

              <div className="w-1/2 h-full overflow-y-auto flex flex-col px-6 pt-6">
                <p className="text-[14px] md:text-[25px] font-bold uppercase font-montserrat text-[#6F962C] text-center">
                  Resources
                </p>
                {resourceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="w-full text-center py-2 md:py-4 text-[17px] md:text-[25px] font-montserrat font-medium text-gray-800 hover:text-[#2E8B3D] transition border-b border-gray-100 last:border-0 no-underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
