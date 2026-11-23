"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/work", label: "Work" },
	{ href: "/contact", label: "Contact" },
];

export function SiteHeader() {
	const pathname = usePathname();

	// Reset the mobile menu whenever navigation changes the current route.
	return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="border-b border-border/70 bg-background">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
				<Link
					href="/"
					onClick={() => setMenuOpen(false)}
					className="flex shrink-0 items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
				>
					<Image src="/images/Baby_J.png" alt="" width={48} height={48} />
					<span className="relative block h-6 w-40 overflow-hidden">
						<Image
							src="/images/Baby_J_Studios_Text.png"
							alt="Baby J Studios"
							width={170}
							height={170}
							className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 translate-y-[-52%]"
						/>
					</span>
				</Link>

				<nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							aria-current={pathname === href ? "page" : undefined}
							className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline hover:decoration-marigold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring aria-[current=page]:text-foreground"
						>
							{label}
						</Link>
					))}
				</nav>

				<button
					type="button"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					aria-controls="mobile-navigation"
					onClick={() => setMenuOpen(!menuOpen)}
					className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:hidden"
				>
					{menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
				</button>
			</div>

			<nav
				id="mobile-navigation"
				aria-label="Mobile navigation"
				hidden={!menuOpen}
				onKeyDown={(event) => {
					if (event.key === "Escape") {
						setMenuOpen(false);
					}
				}}
				className="border-t border-border/70 px-6 py-3 md:hidden"
			>
				{links.map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						aria-current={pathname === href ? "page" : undefined}
						onClick={() => setMenuOpen(false)}
						className="block rounded-md px-2 py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:bg-secondary hover:text-foreground hover:underline hover:decoration-marigold focus-visible:outline-2 focus-visible:outline-ring aria-[current=page]:text-foreground"
					>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
}