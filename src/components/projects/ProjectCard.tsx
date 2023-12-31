import React from 'react';
import useAnimate from '../../hooks/useAnimate';
import Badge from '../Badge';
import CTAButton from '../CTAButton';
import { Project } from './Projects';

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const ref = React.useRef(null);
	useAnimate(ref, 'motion-safe:animate-fadeIn');
	return (
		<div
			ref={ref}
			className="flex flex-col items-center justify-between p-4 w-full rounded-lg bg-blue-800 text-white hover:-translate-y-1 transition duration-300 ease-in-out gap-2"
		>
			<div className="flex items-center justify-between w-full">
				<h3 className="font-heading text-3xl text-white font-bold">
					{project.name}
				</h3>
				<Badge>{project.year}</Badge>
			</div>
			<div className="flex flex-row items-left justify-start flex-wrap w-full mb-1">
				{project.technologies.map((name, index) => (
					<Badge key={index}>{name}</Badge>
				))}
			</div>
			<p className="text-lg text-white text-left font-body mb-1">
				{project.description}
			</p>
			<CTAButton href={project.url}>View project</CTAButton>
		</div>
	);
};

export default ProjectCard;
