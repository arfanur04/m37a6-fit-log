"use client";
import { useFitLog } from "@/hooks/useFitLog";
import { IFitLog } from "@/types/fit-log-types";
import { showInfoToast, showSuccessToast } from "@/utility/api";
import { Bookmark } from "lucide-react";

interface IWSaveBtnProps {
	workout: IFitLog;
}
const WSaveBtn = ({ workout }: IWSaveBtnProps) => {
	const { savedLog, setSavedLog } = useFitLog();

	const handleAddToSave = () => {
		const isExist = savedLog.some((item) => item.id === workout.id);
		if (!isExist) {
			setSavedLog((prev) => [...prev, workout]);
			showSuccessToast("Workout added to saved");
		} else {
			showInfoToast("Workout already exist in saved");
		}
	};

	return (
		<button
			onClick={handleAddToSave}
			type="button"
			className="btn gap-2 rounded-lg border border-white/20 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/5"
		>
			<Bookmark className="size-4" />
			Save for later
		</button>
	);
};

export default WSaveBtn;
