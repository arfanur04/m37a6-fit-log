"use client";
import { useFitLog } from "@/hooks/useFitLog";

const Summary = () => {
	const { summaryRow } = useFitLog();

	const totalMinutes = summaryRow
		.map((log) => log.duration)
		.reduce((a, b) => a + b, 0);

	const totalCalories = summaryRow
		.map((log) => log.caloriesBurned)
		.reduce((a, b) => a + b, 0);

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-gray-800 rounded-lg bg-gray-900/80 py-2">
			<div className="px-8 py-6">
				<p className="text-sm text-gray-400">Exercises</p>
				<p className="font-display mt-1 text-5xl font-bold text-[#ccff00]">
					{summaryRow.length}
				</p>
			</div>
			<div className="px-8 py-6">
				<p className="text-sm text-gray-400">Minutes</p>
				<p className="font-display mt-1 text-5xl font-bold text-white">
					{totalMinutes}
				</p>
			</div>
			<div className="px-8 py-6">
				<p className="text-sm text-gray-400">Calories</p>
				<p className="font-display mt-1 text-5xl font-bold text-white">
					{totalCalories}
				</p>
			</div>
		</section>
	);
};

export default Summary;
