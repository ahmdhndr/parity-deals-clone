import Link from "next/link";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import BrandLogo from "@/components/brand-logo";

const menuItems: { label: string; href: string }[] = [
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
  {
    label: "About",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <header className="bg-background/95 fixed top-0 z-10 flex w-full py-6 shadow-xl">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>

        {menuItems.map((item) => (
          <Link className="text-lg" key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
