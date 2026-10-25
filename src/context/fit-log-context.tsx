"use client";
import { IFitLog } from "@/types/fit-log-types";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from "react";

interface IFitLogContext {
	planLog: IFitLog[];
	setPlanLog: Dispatch<SetStateAction<IFitLog[]>>;
	savedLog: IFitLog[];
	setSavedLog: Dispatch<SetStateAction<IFitLog[]>>;
	// /my-plan summary metrics row
	summaryRow: IFitLog[];
	setSummaryRow: Dispatch<SetStateAction<IFitLog[]>>;
	markDoneLog: IFitLog[];
	setMarkDoneLog: Dispatch<SetStateAction<IFitLog[]>>;
}
export const FitLogContext = createContext<IFitLogContext | null>(null);

interface IFitLogProviderProps {
	children: ReactNode;
}
const FitLogProvider = ({ children }: IFitLogProviderProps) => {
	const [planLog, setPlanLog] = useState<IFitLog[]>([]);
	const [savedLog, setSavedLog] = useState<IFitLog[]>([]);
	// /my-plan summary metrics row
	const [summaryRow, setSummaryRow] = useState<IFitLog[]>([]);
	const [markDoneLog, setMarkDoneLog] = useState<IFitLog[]>([]);

	const sharedData = {
		planLog,
		setPlanLog,
		savedLog,
		setSavedLog,
		// /my-plan summary metrics row
		summaryRow,
		setSummaryRow,
		markDoneLog,
		setMarkDoneLog,
	};

	return (
		<FitLogContext.Provider value={sharedData}>
			{children}
		</FitLogContext.Provider>
	);
};

export default FitLogProvider;
