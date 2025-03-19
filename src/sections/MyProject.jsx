import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from '../utils/data'; // Ensure this path is correct
import ProjectCard from '../Components/ProjectCard'; // Ensure this path is correct

const MyProject = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [canScrollPrev, setCanScrollPrev] = useState(false);

    const handleScrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const handleScrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        
        const updateState = () => {
            setCanScrollNext(emblaApi.canScrollNext());
            setCanScrollPrev(emblaApi.canScrollPrev());
        };
        
        emblaApi.on("select", updateState);
        updateState();
        
        return () => emblaApi.off("select", updateState);
    }, [emblaApi]);

    return (
        <section id='project' className='mt-14'>
            <div className='container mx-auto px-8 md:px-10 py-10'>
                <div className='w-full lg:w-[60vw] mx-auto'>
                    <h4 className='section-title'>Recent Projects</h4>
                    <p className='text-sm text-center mt-4 leading-6'>
                        From concept to deployment, my projects highlight my technical expertise in clean code, performance, and user experience.
                    </p>
                </div>
                <div className='relative'>
                    {/* Add navigation buttons */}
                    {canScrollPrev && (
                        <button 
                            onClick={handleScrollPrev}
                            className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
                            aria-label="Previous project"
                        >
                            <IoIosArrowBack className="text-3xl arrow-buton"/>
                        </button>
                    )}
                    
                    {canScrollNext && (
                        <button
                            onClick={handleScrollNext}
                            className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
                            aria-label="Next project"
                        >
                            <IoIosArrowForward className="text-3xl arrow-buton" />
                        </button>
                    )}
                    
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex pt-14 pb-8'>
                            {PROJECTS.map((project) => (
                                <div key={project.id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]'>
                                    <ProjectCard
                                        imageUrl={project.image}
                                        title={project.title}
                                        tags={project.tags}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyProject;
