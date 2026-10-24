import { IFitLog } from "@/types/fit-log-types";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ITheLibraryCardProps {
	workout: IFitLog;
}
const TheLibraryCard = ({ workout }: ITheLibraryCardProps) => {
	return (
		<Link
			href={`/workouts/${workout.id}`}
			className="card overflow-hidden rounded-2xl border border-white/10 bg-[#14151a] transition hover:-translate-y-1 hover:border-[#ccff00]/40"
		>
			{/* Image */}
			<figure className="relative aspect-16/10 w-full">
				<Image
					src={workout.image}
					alt={workout.name}
					fill
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
					className="object-cover"
					loading="lazy"
				/>
			</figure>

			{/* Body */}
			<div className="card-body gap-3 p-6">
				{/* Tags */}
				<div className="flex flex-wrap gap-2">
					{workout.muscleGroups.map((group) => (
						<span
							key={group}
							className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-bold uppercase tracking-wide text-black"
						>
							{group}
						</span>
					))}
				</div>

				{/* Title + equipment */}
				<div>
					<h3 className="font-display text-xl font-bold uppercase text-white">
						{workout.name}
					</h3>
					<p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>
				</div>

				{/* Stats */}
				<div className="mt-2 flex items-center gap-5 border-t border-white/10 pt-4 text-sm text-gray-300">
					<span className="flex items-center gap-1.5">
						<Clock className="size-4 text-gray-400" />
						{workout.duration} min
					</span>
					<span className="flex items-center gap-1.5">
						<Flame className="size-4 text-gray-400" />
						{workout.caloriesBurned} kcal
					</span>
					<span className="flex items-center gap-1.5">
						<Star className="size-4 text-gray-400" />
						{workout.rating}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default TheLibraryCard;
