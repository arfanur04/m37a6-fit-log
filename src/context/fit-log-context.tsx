"use client";
import { IFitLog, TSortBy, TTab } from "@/types/fit-log-types";
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
	// tab sort
	tab: TTab;
	setTab: Dispatch<SetStateAction<TTab>>;
	sortBy: TSortBy;
	setSortBy: Dispatch<SetStateAction<TSortBy>>;
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
	// tab sort
	const [tab, setTab] = useState<TTab>("plan");
	const [sortBy, setSortBy] = useState<TSortBy>("duration");

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
		// tab sort
		tab,
		setTab,
		sortBy,
		setSortBy,
	};

	return (
		<FitLogContext.Provider value={sharedData}>
			{children}
		</FitLogContext.Provider>
	);
};

export default FitLogProvider;
