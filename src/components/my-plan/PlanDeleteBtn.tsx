"use client";
import { showInfoToast, showSuccessToast } from "@/app/page";
import { useFitLog } from "@/hooks/useFitLog";
import { IFitLog } from "@/types/fit-log-types";
import { X } from "lucide-react";

interface IPlanDeleteBtnProps {
	workout: IFitLog;
}
const PlanDeleteBtn = ({ workout }: IPlanDeleteBtnProps) => {
	const { setPlanLog, setSummaryRow, setMarkDoneLog } = useFitLog();

	const handleDelete = () => {
		setPlanLog((prev) => prev.filter((item) => item.id !== workout.id));
		setSummaryRow((prev) => prev.filter((item) => item.id !== workout.id));
		setMarkDoneLog((prev) => prev.filter((item) => item.id !== workout.id));
		showInfoToast(`"${workout.name}" deleted successfully`);
	};

	return (
		<button
			onClick={handleDelete}
			type="button"
			aria-label="Remove"
			className="btn btn-ghost btn-sm size-9 p-0 text-gray-400 hover:text-white"
		>
			<X className="size-5" />
		</button>
	);
};

export default PlanDeleteBtn;
