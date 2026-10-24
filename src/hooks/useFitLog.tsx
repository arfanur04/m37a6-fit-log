"use client";
import { FitLogContext } from "@/context/fit-log-context";
import { useContext } from "react";

export const useFitLog = () => {
	const context = useContext(FitLogContext);
	if (!context) {
		throw new Error("useFitLog must be used within a FitLogProvider");
	}
	return context;
};
