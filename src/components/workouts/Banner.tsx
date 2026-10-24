"use client";
import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
	return (
		<section className="bg-black text-white my-8 lg:my-16 py-8">
			<div className="container mx-auto w-11/12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
					{/* left side */}
					<div className="space-y-4">
						<p>WORKOUT LIBRARY</p>
						<h1 className="text-5xl font-bold">
							TRAIN WITH INTENT. LOG EVERY SET.
						</h1>
						<p className="py-6">
							FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
							into today&apos;s plan, and watch the week&apos;s work add up.
						</p>
						<button
							className="fl-primary-btn"
							onClick={() =>
								document
									.getElementById("library")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							BROWSE WORKOUTS
						</button>
					</div>
					{/* right side */}
					<figure>
						<Image
							src={banner}
							alt="banner"
							loading="eager"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Banner;
