import React from 'react';
import CopyrightFooter from './CopyrightFooter';
import SocialFooter from './SocialFooter';

const Footer: React.FC = () => {
	return (
		<footer className="z-10 w-full p-1 bg-blue-900">
			<div className="flex flex-shrink-0 flex-col md:flex-row mx-auto justify-between items-center p-2 space-y-2 md:space-y-0 w-11/12 md:w-9/12 lg:w-8/12">
				<CopyrightFooter />
				<SocialFooter />
			</div>
		</footer>
	);
};

export default Footer;
