"use client";
import PlanContainer from "@/components/my-plan/PlanContainer";
import MPSummary from "@/components/my-plan/MPSummary";
import SaveContainer from "@/components/my-plan/SaveContainer";
import { useFitLog } from "@/hooks/useFitLog";
import { useEffect, useState } from "react";
import { IFitLog } from "@/types/fit-log-types";

type Tab = "plan" | "saved";
type SortBy = "duration" | "calories" | "rating";

const MyPlanPage = () => {
	const { planLog, savedLog, setSummaryRow } = useFitLog();
	const [tab, setTab] = useState<Tab>("plan");
	const [sortBy, setSortBy] = useState<SortBy>("duration");

	useEffect(() => {
		if (tab === "plan") {
			setSummaryRow(planLog);
		}
		if (tab === "saved") {
			setSummaryRow(savedLog);
		}
	}, [planLog, savedLog, setSummaryRow, tab]);

	const sortedWorkouts = (workouts: IFitLog[]): IFitLog[] => {
		const sorted = [...workouts].sort((a, b) =>
			sortBy === "duration"
				? b.duration - a.duration
				: sortBy === "calories"
					? b.caloriesBurned - a.caloriesBurned
					: b.rating - a.rating,
		);
		return sorted;
	};

	const workoutsToShow =
		tab === "plan" ? sortedWorkouts(planLog) : sortedWorkouts(savedLog);

	return (
		<section className="bg-black text-white my-8 lg:my-16 py-8">
			<div className="container mx-auto w-11/12">
				<header className="mb-6 space-y-3">
					<h2 className="text-3xl font-bold">MY PLAN</h2>
					<p>Cap of five lifts for today. Finish them, then load more.</p>
				</header>
				<main className="flex flex-col gap-6">
					<MPSummary />
					<div className="flex flex-wrap items-center justify-between gap-3">
						{/* Tabs */}
						<div
							role="tablist"
							className="tabs tabs-box bg-[#14161d]"
						>
							<button
								role="tab"
								onClick={() => setTab("plan")}
								className={`tab ${tab === "plan" ? "tab-active" : ""}`}
							>
								Today&apos;s Plan
							</button>
							<button
								role="tab"
								onClick={() => setTab("saved")}
								className={`tab ${tab === "saved" ? "tab-active" : ""}`}
							>
								Saved
							</button>
						</div>

						{/* Sort */}
						<div className="flex items-center gap-3 text-sm text-gray-400">
							<span>Sort By</span>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
								className="select select-sm w-auto rounded-lg border-white/10 bg-[#14161d] text-white"
							>
								<option value="duration">Duration</option>
								<option value="calories">Calories</option>
								<option value="rating">Rating</option>
							</select>
						</div>
					</div>

					{/* Content below the row */}
					{tab === "plan" ? (
						<PlanContainer workoutsToShow={workoutsToShow} />
					) : (
						<SaveContainer workoutsToShow={workoutsToShow} />
					)}
				</main>
			</div>
		</section>
	);
};

export default MyPlanPage;
