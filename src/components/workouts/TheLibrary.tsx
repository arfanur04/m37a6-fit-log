import { getWorkouts } from "@/utility/api";
import TheLibraryCard from "./TheLibraryCard";

const TheLibrary = async () => {
	const workouts = await getWorkouts();

	return (
		<section
			id="library"
			className="bg-black text-white my-8 lg:my-16 py-8"
		>
			<div className="container mx-auto w-11/12">
				<header className="mb-6">
					<h2 className="text-3xl font-bold">THE LIBRARY</h2>
					<p>Twelve lifts covering every major muscle group.</p>
				</header>
				<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{workouts.map((workout) => (
						<TheLibraryCard
							key={workout.id}
							workout={workout}
						/>
					))}
				</main>
			</div>
		</section>
	);
};

export default TheLibrary;
