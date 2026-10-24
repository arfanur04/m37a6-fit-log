import PlanCard from "./PlanCard";
import { IFitLog } from "@/types/fit-log-types";

const PlanContainer = ({ workoutsToShow }: { workoutsToShow: IFitLog[] }) => {
	return (
		<section className="flex flex-col gap-6">
			{workoutsToShow.map((workout) => (
				<PlanCard
					workout={workout}
					key={workout.id}
				/>
			))}
		</section>
	);
};

export default PlanContainer;
