import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
	return (
		<main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-24">
			<header className="max-w-4xl">
				<p className="mb-5 text-xs font-semibold tracking-[0.22em] text-logo-blue uppercase">
					About Baby J Studios
				</p>
				<h1 className="text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
					Custom software. Built by humans, for humans<span className="text-logo-blue">.</span>
				</h1>
				<p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
					Baby J Studios is an independent software development studio focused on creating
					custom websites and web applications that are practical, reliable, and built with care.
				</p>
			</header>

			<div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
				<section className="max-w-3xl space-y-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
					<p>
						Founded by a software developer with a background in mathematics and experience in
						modern web development, Baby J Studios was created around a simple idea: good
						software starts with understanding the problem you&apos;re trying to solve.
					</p>
					<p>
						We believe in writing code we understand, making thoughtful technical decisions,
						and being honest about what we can deliver. No unnecessary complexity, no empty
						promises, and no mysterious black boxes.
					</p>
				</section>

				<aside className="rounded-3xl bg-secondary p-6">
					<p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
						Our approach
					</p>
					<p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
						Good software starts with people, not code.
                    </p>
                    <p className="mt-3 leading-7 text-muted-foreground">
                        We focus on thoughtful development, clear communication, and writing code we actually understand. Technology is a tool, not a replacement for experience, creativity, or good judgment.
                    </p>
				</aside>
			</div>

			<section className="mt-20">
				<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					What We Do<span className="text-marigold">.</span>
				</h2>
				<div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
					{[
						["Custom Websites", "Responsive, accessible websites built around your needs and brand."],
						["Web Applications", "Interactive applications with functionality beyond a traditional website."],
						["Frontend Development", "Building and improving user interfaces with modern web technologies."],
						["API Integration", "Connecting applications with external services and backend systems."],
						["Existing Projects", "Improving, updating, and maintaining existing web applications when they're a good fit for our expertise."],
					].map(([title, description]) => (
						<article key={title} className="bg-card p-7 sm:p-8">
							<h3 className="text-lg font-semibold">{title}</h3>
							<p className="mt-3 leading-7 text-muted-foreground">{description}</p>
						</article>
					))}
				</div>
			</section>

			<section className="mt-20 grid gap-10 rounded-3xl bg-ink-navy px-7 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[16rem_1fr]">
				<div>
					<p className="text-xs font-semibold tracking-[0.18em] text-logo-blue uppercase">
						Technical background
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight">
						Tools we know and understand.
					</h2>
				</div>
				<div>
					<p className="leading-8 text-white/75">
						Our experience includes JavaScript, TypeScript, React, Next.js, HTML, CSS,
						Tailwind CSS, Python, and FastAPI, along with experience working with databases
						and APIs.
					</p>
					<p className="mt-5 leading-8 text-white/75">
						We focus on technologies we know and understand, and we&apos;re upfront when a
						project requires expertise outside our primary skill set.
					</p>
				</div>
			</section>

			<section className="mt-20 grid items-center gap-10 lg:grid-cols-[18rem_1fr]">
				<div className="relative mx-auto aspect-square w-full max-w-72 overflow-hidden rounded-full border border-border bg-secondary">
					<Image
						src="/images/Baby_J.png"
						alt="Jimin, the cat behind Baby J Studios"
						fill
						sizes="(max-width: 1024px) 288px, 288px"
						className="object-contain p-4"
						priority
					/>
				</div>
				<div className="max-w-3xl">
					<p className="text-xs font-semibold tracking-[0.18em] text-blush-pink uppercase">
						Meet the developer
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
						Hi, I&apos;m Lexie<span className="text-logo-blue">.</span>
					</h2>
					<div className="mt-6 space-y-5 leading-7 text-muted-foreground sm:text-lg sm:leading-8">
						<p>
							I&apos;m the developer behind Baby J Studios. My background is in mathematics and
							statistics, but my career led me into software development, where I&apos;ve worked on
							web applications, user interfaces, and backend integrations.
						</p>
						<p>
							I enjoy taking an idea, figuring out how the pieces fit together, and turning it
							into something people can actually use. I started Baby J Studios to focus on building
							useful software, solving problems, and working directly with the people who need
							something made.
						</p>
					</div>
				</div>
			</section>

			<section className="mt-20 border-t border-border pt-12">
				<div className="grid gap-8 md:grid-cols-[12rem_1fr]">
					<h2 className="text-3xl font-semibold tracking-tight">Why Baby J?</h2>
					<div className="max-w-3xl space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
						<p>
							Baby J Studios is named after my cat, Jimin, affectionately known as Baby J.
						</p>
						<p>
							She&apos;s the inspiration behind our name and mascot, and a very dedicated supervisor
							of day-to-day operations. Her technical contributions are limited, but her enthusiasm
							is appreciated.
						</p>
					</div>
				</div>
			</section>

			<section className="mt-20 rounded-3xl border border-logo-blue/40 bg-secondary px-7 py-10 text-center sm:px-10 sm:py-14">
				<p className="text-xs font-semibold tracking-[0.18em] text-logo-blue uppercase">
					Have a project in mind?
				</p>
				<h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
					Let&apos;s talk about what you&apos;re looking to build.
				</h2>
				<p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
					Whether you need a website, have an idea for a web application, or want help improving
					an existing project, we&apos;d love to hear about it.
				</p>
				<Link
					href="/contact"
					className="mt-8 inline-flex items-center gap-3 rounded-full bg-logo-blue px-6 py-3.5 text-sm font-medium text-ink-navy transition-colors hover:bg-marigold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
				>
					Start a conversation <ArrowRight aria-hidden="true" className="size-4" />
				</Link>
			</section>
		</main>
	);
}