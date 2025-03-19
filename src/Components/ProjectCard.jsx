import React from 'react';


/**
 * 
 */
const ProjectCard = ({ imageUrl, title, tags }) => {
    return (
        <div className='h-full bg-hwhite rounded-xl overflow-hidden shadow-md mx-2'>

            <img src={imageUrl} alt={title} className='w-full h-72 md:h-80 object-cover' />
            <div className='px-4 py-4'>
                {/* text-base doubt  line-clamp-2 overflow-hidden doubt*/}
                <h3 className='text-base font-semibold line-clamp-2 overflow-hidden'>
                    {title}
                </h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className='text-[14px] text-violet-800 bg-blue-200 px-3 py-1 rounded'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}


// #endregion

export default ProjectCard;