import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from './Projects';

interface ProjectsProps {
	projects: Project[];
}

const ProjectsContent: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className="flex flex-col items-center break-words w-full space-y-14">
			<h2 className="text-center font-heading text-2xl md:text-4xl text-black font-bold">
				Course projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 w-full">
				{projects?.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
};

export default ProjectsContent;
