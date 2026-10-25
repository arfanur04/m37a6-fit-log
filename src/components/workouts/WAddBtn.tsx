"use client";
import { useFitLog } from "@/hooks/useFitLog";
import { IFitLog } from "@/types/fit-log-types";
import { showInfoToast, showSuccessToast } from "@/utility/api";
import { CalendarPlus } from "lucide-react";

interface IWAddBtnProps {
	workout: IFitLog;
}
const WAddBtn = ({ workout }: IWAddBtnProps) => {
	const { planLog, setPlanLog } = useFitLog();

	const handleAddToPlan = (workout: IFitLog) => {
		const isExist = planLog.some((item) => item.id === workout.id);
		if (isExist) {
			showInfoToast("Workout already exist in plan");
			return;
		}

		if (planLog.length >= 5) {
			showInfoToast("Plan is full. Finish a lift first.");
			return;
		}

		setPlanLog((prev) => [...prev, workout]);
		showSuccessToast("Workout added to plan");
	};

	return (
		<button
			onClick={() => handleAddToPlan(workout)}
			type="button"
			disabled={planLog.length >= 5}
			className="btn gap-2 rounded-lg border-none bg-[#ccff00] px-6 text-sm font-semibold text-black hover:bg-[#b8e600] disabled:bg-gray-400"
		>
			<CalendarPlus className="size-4" />
			Add to today&apos;s plan
		</button>
	);
};

export default WAddBtn;
