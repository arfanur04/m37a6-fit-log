"use client";
import { useFitLog } from "@/hooks/useFitLog";
import Link from "next/link";

const NavSaveBtn = () => {
	const { savedLog } = useFitLog();

	return (
		<Link
			href={"/my-plan"}
			className="btn btn-ghost"
		>
			Saved
			<span
				className={`badge rounded-full text-white ${savedLog.length > 0 ? "border-white" : ""}`}
			>
				{savedLog.length}
			</span>
		</Link>
	);
};

export default NavSaveBtn;
