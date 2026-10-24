"use client";
import PlanContainer from "@/components/my-plan/PlanContainer";
import MPSummary from "@/components/my-plan/MPSummary";
import SaveContainer from "@/components/my-plan/SaveContainer";
import { useFitLog } from "@/hooks/useFitLog";
import { useEffect, useState } from "react";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
	const { planLog, savedLog, setSummaryRow } = useFitLog();
	const [tab, setTab] = useState<Tab>("plan");

	useEffect(() => {
		if (tab === "plan") {
			setSummaryRow(planLog);
		}
		if (tab === "saved") {
			setSummaryRow(savedLog);
		}
	}, [planLog, savedLog, setSummaryRow, tab]);

	return (
		<section className="bg-black text-white my-8 lg:my-16 py-8">
			<div className="container mx-auto w-11/12">
				<header className="mb-6 space-y-3">
					<h2 className="text-3xl font-bold">MY PLAN</h2>
					<p>Cap of five lifts for today. Finish them, then load more.</p>
				</header>
				<main className="flex flex-col gap-6">
					<MPSummary />
					<div>
						<div></div>
						<div></div>
					</div>
					{/* name of each tab group should be unique */}
					<div className="tabs tabs-box">
						<input
							type="radio"
							name="my_tabs_6"
							className="tab"
							aria-label="Today's Plan"
							checked={tab === "plan"}
							onChange={() => setTab("plan")}
						/>
						<div className="tab-content bg-base-100 border-base-300 p-6">
							<PlanContainer />
						</div>

						<input
							type="radio"
							name="my_tabs_6"
							className="tab"
							aria-label="Saved"
							checked={tab === "saved"}
							onChange={() => setTab("saved")}
						/>
						<div className="tab-content bg-base-100 border-base-300 p-6">
							<SaveContainer />
						</div>
					</div>
				</main>
			</div>
		</section>
	);
};

export default MyPlanPage;
