"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
	const mounted = useSyncExternalStore(subscribe, () => true, () => false);
	const { resolvedTheme, setTheme } = useTheme();
	const isDark = mounted && resolvedTheme === "dark";
	const label = isDark ? "Switch to light mode" : "Switch to dark mode";

	return (
		<button
			type="button"
			aria-label={label}
			title={label}
			disabled={!mounted}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:opacity-50"
		>
			{isDark ? <Sun aria-hidden="true" className="size-5" /> : <Moon aria-hidden="true" className="size-5" />}
		</button>
	);
}