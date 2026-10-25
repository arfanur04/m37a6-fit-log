import { IFitLog, TSortBy } from "@/types/fit-log-types";
import { Bounce, toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getWorkouts = async (): Promise<IFitLog[]> => {
	try {
		const res = await fetch(`${BASE_URL}`, { cache: "force-cache" });
		if (!res.ok) return [];
		return await res.json();
	} catch (error) {
		console.error(`Error fetching workouts: ${error}`);
		return [];
	}
};

export const getWorkoutById = async (id: string): Promise<IFitLog | null> => {
	try {
		const res = await fetch(`${BASE_URL}/${id}`, { cache: "force-cache" });
		if (!res.ok) return null;
		const data = await res.json();
		return data?.name ? data : null;
	} catch (error) {
		console.error(`Error fetching workouts: ${error}`);
		return null;
	}
};

export const sortedWorkouts = (
	workouts: IFitLog[],
	sortBy: TSortBy,
): IFitLog[] => {
	const sorted = [...workouts].sort((a, b) => {
		if (sortBy === "duration") {
			return b.duration - a.duration;
		} else if (sortBy === "calories") {
			return b.caloriesBurned - a.caloriesBurned;
		} else {
			return b.rating - a.rating;
		}
	});
	return sorted;
};

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
