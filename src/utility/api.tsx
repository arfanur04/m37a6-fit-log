import { IFitLog } from "@/types/fit-log-types";

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
