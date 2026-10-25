import Summary from "@/components/my-plan/Summary";
import TabSort from "@/components/my-plan/TabSort";
import TabContent from "@/components/my-plan/TabContent";

const MyPlanPage = () => {
	return (
		<section className="bg-black text-white my-8 lg:my-16 py-8">
			<div className="container mx-auto w-11/12">
				<header className="mb-6 space-y-3">
					<h2 className="text-3xl font-bold">MY PLAN</h2>
					<p>Cap of five lifts for today. Finish them, then load more.</p>
				</header>
				<main className="flex flex-col gap-12">
					<Summary />
					<TabSort />
					<TabContent />
				</main>
			</div>
		</section>
	);
};

export default MyPlanPage;
