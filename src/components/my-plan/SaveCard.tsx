import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { IFitLog } from "@/types/fit-log-types";
import SaveDeleteBtn from "./SaveDeleteBtn";

interface IMPPlanCardProps {
	workout: IFitLog;
}
const SaveCard = ({ workout }: IMPPlanCardProps) => {
	return (
		<div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#14161d] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
			{/* Left: thumbnail + info */}
			<div className="flex flex-col lg:flex-row lg:items-center gap-4">
				<Image
					src={workout.image}
					alt={workout.name}
					width={165}
					height={92}
					className="h-23 w-41.25 shrink-0 rounded-xl object-cover"
				/>

				<div>
					<h3 className="font-display text-lg font-bold uppercase text-white">
						{workout.name}
					</h3>
					<p className="mt-0.5 text-sm font-medium text-gray-400">
						{workout.equipment}
					</p>

					<div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-300">
						<span className="flex items-center gap-1.5">
							<Clock className="size-4 text-[#ccff00]" />
							{workout.duration} min
						</span>
						<span className="flex items-center gap-1.5">
							<Flame className="size-4 text-[#ccff00]" />
							{workout.caloriesBurned} kcal
						</span>
						<span className="flex items-center gap-1.5">
							<Star className="size-4 text-[#ccff00]" />
							{workout.rating}
						</span>
					</div>
				</div>
			</div>

			{/* Right: actions */}
			<div className="flex items-center gap-3">
				<Link
					href={`/workouts/${workout.id}`}
					className="btn btn-sm h-10 rounded-full border border-white/20 bg-transparent px-5 text-sm font-normal text-white hover:bg-white/5"
				>
					View Details
				</Link>

				<SaveDeleteBtn workout={workout} />
			</div>
		</div>
	);
};

export default SaveCard;
