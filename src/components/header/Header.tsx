import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<header className="fixed top-0 z-20 min-h-16 w-full p-1 bg-white shadow-md transition-height duration-1000 ease-in-out">
			<div className="flex flex-shrink-0 flex-col md:flex-row mx-auto bg-white justify-between items-center p-1 w-11/12 md:w-9/12 lg:w-8/12 transition-height duration-1000 ease-in-out">
				<div className="flex items-center justify-between w-full md:w-auto">
					<Link
						to="hero"
						smooth="easeInOutQuart"
						duration={100}
						ignoreCancelEvents={false}
					>
						<h1 className="font-bold text-3xl cursor-pointer z-10 mr-2 text-black hover:text-blue">
							CPSC 581 Portfolio
						</h1>
					</Link>
					<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<NavLinks />
				<MobileMenu isOpen={isOpen} />
			</div>
		</header>
	);
};
export default Header;
