import Link from "next/link";

const NavPlanBtn = () => {
	return (
		<Link
			href={"/my-plan"}
			className="btn btn-ghost"
		>
			Plan
			<span className="badge border-fl-primary bg-fl-primary rounded-full text-black">
				0
			</span>
		</Link>
	);
};

export default NavPlanBtn;
