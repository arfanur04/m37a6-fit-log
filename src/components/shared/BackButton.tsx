"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.back()}
			className="cursor-pointer underline"
		>
			Go Back
		</button>
	);
};

export default BackButton;
