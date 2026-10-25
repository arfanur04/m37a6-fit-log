import WAddBtn from "@/components/workouts/WAddBtn";
import WSaveBtn from "@/components/workouts/WSaveBtn";
import { getWorkoutById } from "@/utility/api";
import Image from "next/image";

interface IWorkoutDetailsPageProps {
	params: Promise<{
		id: string;
	}>;
}
const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
	const { id } = await params;
	const workout = await getWorkoutById(id);

	const specs = [
		{ label: "Equipment", value: workout.equipment },
		{ label: "Difficulty", value: workout.difficulty },
		{ label: "Sets", value: workout.sets },
		{ label: "Reps", value: workout.reps },
		{ label: "Duration", value: `${workout.duration} min` },
		{ label: "Calories", value: `${workout.caloriesBurned} kcal` },
		{ label: "Rating", value: workout.rating },
	];

	return (
		<section className="bg-black text-white my-8 lg:my-16 py-8">
			<div className="container mx-auto w-11/12">
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Left: image */}
					<div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-130">
						<Image
							src={workout.image}
							alt={workout.name}
							fill
							loading="eager"
							sizes="(min-width: 1024px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Right: info */}
					<div>
						<h1 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">
							{workout.name}
						</h1>

						<p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
							{workout.description}
						</p>

						{/* Tags */}
						<div className="mt-4 flex flex-wrap gap-2">
							{workout.muscleGroups.map((group) => (
								<span
									key={group}
									className="rounded-full bg-[#ccff00] px-3 py-0.5 text-[11px] font-semibold text-black"
								>
									{group}
								</span>
							))}
						</div>

						{/* Key specs */}
						<div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#12141a]">
							{specs.map(({ label, value }) => (
								<div
									key={label}
									className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-sm last:border-b-0"
								>
									<span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
										{label}
									</span>
									<span className="font-medium text-white">{value}</span>
								</div>
							))}
						</div>

						{/* Instructions */}
						<div className="mt-8">
							<h2 className="text-sm font-bold uppercase tracking-wide text-white">
								Instructions
							</h2>
							<ol className="mt-4 space-y-3 text-sm text-gray-300">
								{workout.instructions.map((step, i) => (
									<li
										key={i}
										className="flex gap-2"
									>
										<span className="text-gray-500">{i + 1}.</span>
										<span>{step}</span>
									</li>
								))}
							</ol>
						</div>

						{/* Buttons */}
						<div className="mt-8 flex flex-wrap gap-3">
							<WAddBtn workout={workout} />
							<WSaveBtn workout={workout} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkoutDetailsPage;
