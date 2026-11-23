type StarterPageProps = {
	eyebrow: string;
	title: string;
	description: string;
};

export function StarterPage({ eyebrow, title, description }: StarterPageProps) {
	return (
		<main className="flex flex-1 items-center px-6 py-24 sm:px-10">
			<div className="mx-auto w-full max-w-6xl">
				<p className="mb-6 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
					{eyebrow}
				</p>
				<h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{title}<span className="text-siamese-gray">.</span></h1>
				<p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">{description}</p>
			</div>
		</main>
	);
}