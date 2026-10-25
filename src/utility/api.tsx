import { IFitLog, TSortBy } from "@/types/fit-log-types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getWorkouts = async (): Promise<IFitLog[]> => {
	try {
		const res = await fetch(`${BASE_URL}`, {
			cache: "force-cache",
		});
		return res.json();
	} catch (error) {
		console.error(`Error fetching workouts: ${error}`);
		return [];
	}
};

export const getWorkoutById = async (id: string): Promise<IFitLog> => {
	try {
		const res = await fetch(`${BASE_URL}/${id}`, {
			cache: "force-cache",
		});
		return res.json();
	} catch (error) {
		console.error(`Error fetching workouts: ${error}`);
		return {} as IFitLog;
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
