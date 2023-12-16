import React from 'react';
import { BsLightning, BsLaptop, BsPencil } from 'react-icons/bs';
import DetailCard from './DetailCard';

const DetailsContent: React.FC = () => {
	return (
		<div className="flex flex-col items-center break-words w-full space-y-14">
			<h2 className="text-center font-heading text-2xl md:text-4xl text-white font-bold">
				A little bit about me
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8 w-full">
				<DetailCard icon={<BsLightning className="w-10 h-10 text-blue-700" />}>
					I am an ambitious software engineer and skilled developer with more
					than eight years of programming experience. I have contributed to a
					diverse range of projects across multiple domains, including
					full-stack web development, desktop development, hardware interfacing
					(e.g., Arduino), and low-level programming with ARM64.
				</DetailCard>
				<DetailCard icon={<BsPencil className="w-10 h-10 text-blue-700" />}>
					I am currently a fifth-year Computer Science student with a
					concentration in HCI at the University of Calgary. Throughout my
					academic journey, I have acquired fundamental knowledge that is
					instrumental to my professional success, and I am actively
					incorporating these principles into my projects. Additionally, I have
					honed my collaborative skills and learned to thrive outside my comfort
					zone.
				</DetailCard>
				<DetailCard icon={<BsLaptop className="w-10 h-10 text-blue-700" />}>
					I have completed a 16-month internship at IBM as a Frontend Developer,
					where I successfully applied my knowledge and skills to construct
					aesthetically pleasing, reliable, and customer-ready websites. I
					learned to effectively dissect problems, leading to the development of
					robust designs and architectures that contribute to the success of a
					product. Upon graduation in May, I am excited to return to IBM as a
					full-time Frontend Developer.
				</DetailCard>
			</div>
		</div>
	);
};

export default DetailsContent;
