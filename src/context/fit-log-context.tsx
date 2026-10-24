"use client";
import { IFitLog } from "@/types/fit-log";
import { createContext, useState } from "react";

interface IFitLogContext {
	planLog: IFitLog[];
	setPlanLog: React.Dispatch<React.SetStateAction<IFitLog[]>>;
	savedLog: IFitLog[];
	setSavedLog: React.Dispatch<React.SetStateAction<IFitLog[]>>;
}
export const FitLogContext = createContext<IFitLogContext | null>(null);

interface IFitLogProviderProps {
	children: React.ReactNode;
}
const FitLogProvider = ({ children }: IFitLogProviderProps) => {
	const [planLog, setPlanLog] = useState<IFitLog[]>([]);
	const [savedLog, setSavedLog] = useState<IFitLog[]>([]);

	const sharedData = {
		planLog,
		setPlanLog,
		savedLog,
		setSavedLog,
	};

	return (
		<FitLogContext.Provider value={sharedData}>
			{children}
		</FitLogContext.Provider>
	);
};

export default FitLogProvider;
