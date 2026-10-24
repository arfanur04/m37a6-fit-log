"use client";
import { useFitLog } from "@/hooks/useFitLog";
import SaveCard from "./SaveCard";

const SaveContainer = () => {
	const { savedLog } = useFitLog();
	return (
		<section className="flex flex-col gap-6">
			{savedLog.map((workout) => (
				<SaveCard
					key={workout.id}
					workout={workout}
				/>
			))}
		</section>
	);
};

export default SaveContainer;
