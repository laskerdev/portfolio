import Link from "next/link";
import Nav from "@/components/layouts/Nav";
import { Button } from "@/components/ui/button";
import NavMobile from "@/components/layouts/NavMobile";

const Header = () => {
	return (
		<header className="py-6 xl:py-8 text-white">
			<div className="flex justify-between items-center container mx-auto">
				{/* logo */}
				<Link href={"/"}>
					<h1 className="text-3xl font-semibold one1pm-logo">
						11PM<span className="text-accent">.dev</span>
					</h1>
				</Link>
				{/* desktop: nav menu */}
				<div className="hidden lg:flex items-center gap-8">
					<Nav />
					<Link href={"/about-me"}>
						<Button className="">Hire me</Button>
					</Link>
				</div>
				{/* moblie: nav menu */}
				<div className="lg:hidden">
					<NavMobile />
				</div>
			</div>
		</header>
	)
}

export default Header;