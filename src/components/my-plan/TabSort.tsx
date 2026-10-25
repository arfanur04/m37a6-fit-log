"use client";
import { useFitLog } from "@/hooks/useFitLog";
import { useEffect } from "react";

const TabSort = () => {
	const { tab, setTab, sortBy, setSortBy, planLog, savedLog, setSummaryRow } =
		useFitLog();

	useEffect(() => {
		if (tab === "plan") {
			setSummaryRow(planLog);
		}
		if (tab === "saved") {
			setSummaryRow(savedLog);
		}
	}, [planLog, savedLog, setSummaryRow, tab]);

	return (
		<>
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
		</>
	);
};

export default TabSort;
