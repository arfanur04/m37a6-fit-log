"use client";
import { showSuccessToast } from "@/app/page";
import { useFitLog } from "@/hooks/useFitLog";
import { IFitLog } from "@/types/fit-log-types";
import { Check } from "lucide-react";

const PlanMarkBtn = ({ workout }: { workout: IFitLog }) => {
	const { markDoneLog, setMarkDoneLog } = useFitLog();

	const markDone = markDoneLog.some((log) => log.id === workout.id);
	const handleMarkAsDone = (workout: IFitLog) => {
		if (!markDone) {
			setMarkDoneLog([...markDoneLog, workout]);
			showSuccessToast(`"${workout.name}" marked as done!`);
		}
	};
	return (
		<button
			onClick={() => handleMarkAsDone(workout)}
			type="button"
			className={`btn btn-sm h-10 gap-2 rounded-full border-none bg-[#ccff00] px-5 text-sm font-semibold text-black hover:bg-[#b8e600] ${markDone ? "btn-disabled bg-gray-400 cursor-not-allowed" : ""}`}
		>
			<Check className="size-4" />
			{markDone ? "Marked" : "Mark as Done"}
		</button>
	);
};

export default PlanMarkBtn;
