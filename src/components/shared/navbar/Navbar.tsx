import logo from "@/assets/logo.png";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";
import Image from "next/image";
import NavPlanBtn from "./NavPlanBtn";
import NavSaveBtn from "./NavSaveBtn";

const Navbar = () => {
	return (
		<section className="bg-black text-white sticky top-0 z-50">
			<div className="navbar shadow-sm container mx-auto w-11/12 pl-0">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								aria-label="Menu"
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={-1}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<NavbarLinks />
						</ul>
					</div>
					<Link
						href={"/"}
						className="btn btn-ghost text-xl pl-0"
					>
						<Image
							src={logo}
							alt="logo"
							loading="eager"
						/>
						FIT{""}LOG
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<NavbarLinks />
					</ul>
				</div>
				<div className="navbar-end gap-2">
					<NavPlanBtn />

					<NavSaveBtn />
				</div>
			</div>
		</section>
	);
};

export default Navbar;
