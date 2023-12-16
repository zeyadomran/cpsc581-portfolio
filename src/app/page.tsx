'use client';
import Details from '@/components/details/Details';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Projects, { Project } from '@/components/projects/Projects';

export default function Home() {
	const data: Project[] = [
		{
			name: 'Odd one out',
			description:
				"Odd One Out is an engaging and educational children's app designed to enhance pattern recognition skills while providing hours of entertainment.",
			year: 2023,
			url: 'https://odd-one-out-cpsc581.carrd.co/',
			technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
		},
		{
			name: 'Unlock me',
			description:
				'Unlock me is an exploration into how we could utilize new methods of unlocking your phone, using touch as well as sensors',
			year: 2023,
			url: 'https://cpsc581project2.carrd.co/',
			technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'P5.js'],
		},
		{
			name: 'Access Mate',
			description:
				'Access Mate is a wearable tool for people who suffer from partial or complete blindness, and people who are hard of hearing to help them navigate the world with ease.',
			year: 2023,
			url: 'https://project3cpsc581.carrd.co/',
			technologies: ['Arduino'],
		},
		{
			name: 'Emoji chat',
			description: 'TBD',
			year: 2023,
			url: 'TBD',
			technologies: [
				'TypeScript',
				'Next.js',
				'Tailwind CSS',
				'Hugging face API',
				'Firebase',
				'Web speech API',
			],
		},
	] as any;
	return (
		<main className="flex flex-col min-h-screen items-center">
			<Header />
			<Hero />
			<Details />
			<Projects projects={data} />
			<Footer />
		</main>
	);
}
