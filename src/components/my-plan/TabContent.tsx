"use client";
import { useFitLog } from "@/hooks/useFitLog";
import EmptyLog from "./EmptyLog";
import PlanContainer from "./PlanContainer";
import SaveContainer from "./SaveContainer";
import { sortedWorkouts } from "@/utility/api";

const TabContent = () => {
	const { tab, sortBy, planLog, savedLog } = useFitLog();

	const workoutsToShow =
		tab === "plan"
			? sortedWorkouts(planLog, sortBy)
			: sortedWorkouts(savedLog, sortBy);

	return (
		<>
			{/* Content below the row */}
			{workoutsToShow.length !== 0 ? (
				<>
					{tab === "plan" ? (
						<PlanContainer workoutsToShow={workoutsToShow} />
					) : (
						<SaveContainer workoutsToShow={workoutsToShow} />
					)}
				</>
			) : (
				<EmptyLog />
			)}
		</>
	);
};

export default TabContent;
