import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
	return (
		<main className="flex flex-1 items-center px-6 py-24 sm:px-10">
			<div className="mx-auto w-full max-w-6xl">
				<p className="mb-6 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
					Welcome to Baby J Studios
				</p>
				<h1 className="max-w-3xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
					A little space for big ideas<span className="text-siamese-gray">.</span>
				</h1>
				<p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
					Welcome in. This is the beginning of something new.
				</p>
				<Link
					href="/about"
					className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
				>
					Get to know us <ArrowRight aria-hidden="true" className="size-4" />
				</Link>
			</div>
		</main>
	);
}