import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
	return (
		<footer className="bg-black">
			<div className="container mx-auto w-11/12">
				<div className="mx-auto flex flex-col items-center justify-between gap-3 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
					{/* Left: logo + name */}
					<Link
						href="/"
						className="flex items-center gap-2"
					>
						<Image
							src={logo}
							alt="FitLog"
							width={20}
							height={20}
							className="-rotate-45"
						/>
						<span className="font-display text-sm font-bold tracking-wide text-white">
							FIT{""}LOG
						</span>
					</Link>

					{/* Right: copyright */}
					<p className="text-center text-xs text-gray-500 md:text-right">
						© 2026 FitLog — Workout Library. Train hard, log honest.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
