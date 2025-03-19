import React from 'react';
import Profile_Pic from '../assets/Images/Profile.jpg'
import { ABOUT_ME } from '../utils/data';
const AboutMe = () => {
    return(
<section id="About" className='container mx-auto px-8 py-16'>
<div className='flex flex-col lg:flex-row gap-16 items-start justify between'>
<h4 className=' lg:hidden block w-[200px] section-tittle text-left'>ABout Me</h4>

<div className='w-[300px] md:w-[310px] h-[300px] md:h-[280px] bg-blue-300/50 rounded-2xl mx-auto'>
    <img src={Profile_Pic} alt="profilePic" className='Profile-pic'/>
</div>

<div className='flex-1'>
    <h4 className=' hidden lg:block w-[200px] section-tittle text-left'>ABout Me</h4>
    {/* leading-6 whitespace-pre-line doubt */}
<p className='text-sm text-justify leading-6 whitespace-pre-line mt-4'>
    {ABOUT_ME.content}
</p>
<div> 

</div>
<div className='flex gap-4 mt-6'>
{ABOUT_ME.socialLinks.map((item)=>(
    <a key={item.label} className="cursor-pointer group">
<item.icon className='text-2xl text-blue-700 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-115
group-hover:translate-y-[-2px] group-hover:text-violet-800'/>

    </a>
))}
</div>

</div>
</div>
</section>
    )
   
                

}

export default AboutMe;