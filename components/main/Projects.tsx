import React from 'react';
import ProjectCard from "@/components/sub/ProjectCard";

const Projects = () => {
    return (
        <div className={'flex flex-col items-center justify-center py-20'}>
            <h1 className={'text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'}>
                My Projects
            </h1>
            <div className={'h-full w-full flex flex-col md:flex-row gap-10 px-10'}>
                <ProjectCard
                    src={'/project1.png'}
                    title={'Learning Management System'}
                    description={'Fudemy by Fud00 Tech – a learning platform where teachers can upload study materials and quizzes, and students can access and complete them.'}
                />
                <ProjectCard
                    src={'/SpaceWebsite.png'}
                    title={'Space Themed Website'}
                    description={'A cosmic-themed portfolio showcasing innovative projects, creative design, and stellar development across the digital universe.'}
                />
                <ProjectCard
                    src={'/project2.png'}
                    title={'User Management System'}
                    description={'Effortlessly manage users and assign them to institution plans. Select multiple users and link them to schools with a smooth, streamlined process.'}
                />
            </div>
        </div>
    );
};

export default Projects;
