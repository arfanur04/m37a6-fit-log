"use client";
import { showInfoToast, showSuccessToast } from "@/app/page";
import { useFitLog } from "@/hooks/useFitLog";
import { IFitLog } from "@/types/fit-log-types";
import { CalendarPlus } from "lucide-react";

interface IWAddBtnProps {
	workout: IFitLog;
}
const WAddBtn = ({ workout }: IWAddBtnProps) => {
	const { planLog, setPlanLog } = useFitLog();

	const handleAddToPlan = (workout: IFitLog) => {
		// check first use some
		const isExist = planLog.some((item) => item.id === workout.id);
		if (!isExist) {
			setPlanLog((prev) => [...prev, workout]);
			showSuccessToast("Workout added to plan");
		} else {
			showInfoToast("Workout already exist in plan");
		}
	};

	return (
		<button
			onClick={() => handleAddToPlan(workout)}
			type="button"
			className="btn gap-2 rounded-lg border-none bg-[#ccff00] px-6 text-sm font-semibold text-black hover:bg-[#b8e600]"
		>
			<CalendarPlus className="size-4" />
			Add to today&apos;s plan
		</button>
	);
};

export default WAddBtn;
