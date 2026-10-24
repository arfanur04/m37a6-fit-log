"use client";
import { useFitLog } from "@/hooks/useFitLog";
import Link from "next/link";

const NavPlanBtn = () => {
	const { planLog } = useFitLog();

	return (
		<Link
			href={"/my-plan"}
			className="btn btn-ghost"
		>
			Plan
			<span className="badge border-fl-primary bg-fl-primary rounded-full text-black">
				{planLog.length}
			</span>
		</Link>
	);
};

export default NavPlanBtn;
