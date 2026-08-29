import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b-4 border-[#55e0ff] flex justify-between items-center h-18 px-4 bg-white">
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
        <NavLink name="About" link="/about" />
        <NavLink name="Career" link="/career" />
        <NavLink name="Links" link="/link" />
        <NavLink name="Blog" link="/blog" />
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
