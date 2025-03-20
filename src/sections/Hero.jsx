import React from 'react';
import Profile_Pic from '../assets/Images/Profile_Pic.png'
import { STATS } from '../utils/data';
import StatInfoCard from '../Components/StatInfoCard'; // Ensure this path is correct
import resumeFile from '../assets/Jamal Veve Updated Resume.pdf'; // Correctly import your resume file

const Hero = () => {

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('project'); // Target the element with ID 'projects'
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a'); // Create an anchor element
        link.href = resumeFile; // Set the href to the resume file
        link.download = 'Jamal_Veve_Resume.pdf'; // Set the download attribute with a filename
        document.body.appendChild(link); // Append the link to the body
        link.click(); // Programmatically click the link to trigger the download
        document.body.removeChild(link); // Remove the link after triggering download
    };

    return (
        <section id="hero" className='container  mx-auto px-8 md:mt-8'>
            <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>
                <div className='order-2 lg:order-1 text-center lg:text-left mt-14 mx-13'>
                    <h3 className='text-2xl font medium text-black'>👋🏻 Hi,I'm Jamal Veve</h3>
                    <h1 className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] 
                    mt-3 bg-gradient-to-r from-blue-500 to-purple-500  bg-clip-text text-transparent'>Building scalable & usercenteric web Apps</h1>
                    <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4'>I'm a passionate Full Stack Developer Crafiting responsive,accessible,and dynamic
                        web experiences using React,Js,Node.js,Tailwindcss,Java,SQL.
                    </p>
                    <div className='flex justify-center lg;justify-start gap-4 md:gap-8 mt-6'>
                        <button className='flex-1 md:flex-none action-btn-one btn-scale-anim ' onClick={scrollToProjects}
                        >View My Work</button>
                        <button
                            className='flex-1 md:flex-none action-btn-two btn-scale-anim'
                            onClick={handleDownload} // Trigger download on click
                        >
                            Download Resume
                        </button>
                    </div>

                </div>

                <div className=' w-[300px]  md:w-[300px] h-[300px] lg:h-[300px] bg-gradient-to-r from-blue-300 to-purple-300 rounded-3xl relative order-1 lg:order-2'>
                    <img src={Profile_Pic} alt="Profile pic" className='Profile-pic' />


                </div>
            </div>

            {/* flex wrap doubt */}

            <div className='flex gap-12 mt-16 md:mt-24 flex-wrap '>
                {STATS.map((item) => (
                    <StatInfoCard key={item.id} count={item.count} label={item.label} />

                )
                )}
            </div>


        </section>
    )


}



export default Hero;