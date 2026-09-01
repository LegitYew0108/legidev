"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const prevY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.pageYOffset; // 現在のスクロール位置を取得

      if (currentY < prevY.current) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }

      prevY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-1000 fixed top-0 left-0 w-full transition duration-300 ease-in ${headerVisible ? "translate-y-0" : "-translate-y-18"}`}
    >
      <div className="border-b-4 border-[#55e0ff] flex justify-between items-center h-18 px-4 bg-white">
        <Link href="/">
          <Image
            className="h-18 w-auto"
            src="/legit_logomark_black.svg"
            alt="Legit logo. Click to home"
            width="20"
            height="50"
            loading="eager"
          />
        </Link>
        <div className="flex gap-7 pr-15">
          <NavLink name="Home" link="/" />
          <NavLink name="Career" link="/pages/career" />
          <NavLink name="Blog" link="/pages/blog" />
          <NavLink name="About" link="/pages/about" />
          <NavLink name="Links" link="/pages/links" />
        </div>
      </div>
    </header>
  );
}

function NavLink({ name, link }: { name: string; link: string }) {
  return (
    <Link href={link} className="underline text-2xl">
      {name}
    </Link>
  );
}
