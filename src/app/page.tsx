import Banner from "@/components/workouts/Banner";
import TheLibrary from "@/components/workouts/TheLibrary";

import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = (message: string) => {
	toast.success(message, {
		position: "top-right",
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
	});
};
export const showInfoToast = (message: string) => {
	toast.info(message, {
		position: "top-right",
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
	});
};

export default function Workouts() {
	return (
		<div>
			<Banner />
			<TheLibrary />
		</div>
	);
}
