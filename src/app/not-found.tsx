import BackButton from "@/components/shared/BackButton";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "404 - Page Not Found",
	description: "The page you are looking for does not exist.",
};

const NotFound = () => {
	return (
		<div className="flex justify-center items-center flex-col my-12 space-y-2">
			<h1>404 - Page Not Found</h1>
			<p>This page does not exist.</p>

			<div className="flex items-center gap-3 pt-2">
				<BackButton />
				<Link
					className="cursor-pointer underline"
					href={"/"}
				>
					Back to Workouts
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
