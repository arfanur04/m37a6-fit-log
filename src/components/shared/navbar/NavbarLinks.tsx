"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
	const pathname = usePathname();

	return (
		<>
			<li>
				<Link
					href={`/`}
					className={`${pathname === "/" || pathname === "/workouts" ? "active" : ""}`}
				>
					Workouts
				</Link>
			</li>
			<li>
				<Link
					href={`/my-plan`}
					className={`${pathname === "/my-plan" ? "active" : ""}`}
				>
					My Plan
				</Link>
			</li>
		</>
	);
};

export default NavbarLinks;
