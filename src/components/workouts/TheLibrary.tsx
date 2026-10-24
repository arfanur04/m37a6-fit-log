import { getWorkouts } from "@/utility/api";

const TheLibrary = async () => {
	const workouts = await getWorkouts();

	return (
		<section
			id="library"
			className="bg-black text-white my-8 lg:my-16 py-8"
		>
			<div className="container mx-auto w-11/12">
				<header>
					<h2 className="text-3xl font-bold">THE LIBRARY</h2>
					<p>Twelve lifts covering every major muscle group.</p>
				</header>
				<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{workouts.map((workout) => (
						<div
							key={workout.id}
							className="bg-gray-800 p-4 rounded-md my-4"
						>
							<h3 className="text-2xl font-bold">{workout.name}</h3>
							<p>{workout.description}</p>
							<a
								href={`/workouts/${workout.id}`}
								className="text-blue-500 hover:underline"
							>
								View Workout
							</a>
						</div>
					))}
				</main>
			</div>
		</section>
	);
};

export default TheLibrary;
