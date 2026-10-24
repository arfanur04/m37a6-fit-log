import { useFitLog } from "@/hooks/useFitLog";
import { IFitLog } from "@/types/fit-log-types";
import { X } from "lucide-react";

interface ISaveDeleteBtnProps {
	workout: IFitLog;
}
const SaveDeleteBtn = ({ workout }: ISaveDeleteBtnProps) => {
	const { setSavedLog, setSummaryRow } = useFitLog();

	const handleDelete = () => {
		setSavedLog((prev) => prev.filter((item) => item.id !== workout.id));
		setSummaryRow((prev) => prev.filter((item) => item.id !== workout.id));
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

export default SaveDeleteBtn;
