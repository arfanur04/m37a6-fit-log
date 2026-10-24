import Link from "next/link";

const NavSaveBtn = () => {
	return (
		<Link
			href={"/my-plan"}
			className="btn btn-ghost"
		>
			Saved
			{/* border add if > 0 */}
			<span className="badge border-white rounded-full text-white">0</span>
		</Link>
	);
};

export default NavSaveBtn;
