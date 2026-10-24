import SaveCard from "./SaveCard";
import { IFitLog } from "@/types/fit-log-types";

const SaveContainer = ({ workoutsToShow }: { workoutsToShow: IFitLog[] }) => {
	return (
		<section className="flex flex-col gap-6">
			{workoutsToShow.map((workout) => (
				<SaveCard
					key={workout.id}
					workout={workout}
				/>
			))}
		</section>
	);
};

export default SaveContainer;
