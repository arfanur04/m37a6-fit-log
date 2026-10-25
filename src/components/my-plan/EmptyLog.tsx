import Link from "next/link";

const EmptyLog = () => {
	return (
		<div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111216] px-4 py-24 text-center">
			<h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
				Nothing here yet
			</h3>
			<p className="mt-1 text-sm text-gray-400">
				Browse the library and add a lift to get today moving.
			</p>
			<Link
				href="/"
				className="btn mt-6 rounded-full border-none bg-[#c4f20a] px-6 font-semibold text-black shadow-[0_8px_24px_rgba(196,242,10,0.25)] hover:bg-[#b3de09]"
			>
				Go to workouts
			</Link>
		</div>
	);
};

export default EmptyLog;
