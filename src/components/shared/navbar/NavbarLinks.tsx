"use client";
import { useFitLog } from "@/hooks/useFitLog";
import { getWorkouts } from "@/utility/api";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
	const pathname = usePathname();
	const { setPlanLog, setSavedLog } = useFitLog();

	//> need to remove this
	const fetchWorkouts = async () => {
		const data = await getWorkouts();
		setPlanLog(data);
		setSavedLog(data);
	};

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
					onClick={fetchWorkouts} //> need to remove this
					className={`${pathname === "/my-plan" ? "active" : ""}`}
				>
					My Plan
				</Link>
			</li>
		</>
	);
};

export default NavbarLinks;
