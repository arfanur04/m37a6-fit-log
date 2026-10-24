"use client";

import { useFitLog } from "@/hooks/useFitLog";
import PlanCard from "./PlanCard";

const PlanContainer = () => {
	const { planLog } = useFitLog();

	return (
		<section className="flex flex-col gap-6">
			{planLog.map((workout) => (
				<PlanCard
					workout={workout}
					key={workout.id}
				/>
			))}
		</section>
	);
};

export default PlanContainer;
