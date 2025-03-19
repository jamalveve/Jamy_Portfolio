import React from 'react';
import { ABOUT_ME } from '../utils/data';

import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import ContactInfoCard from '../Components/ContactInfoCard';
const ContactMe = () => {
    return (
        <section id="contact">
            <div className='container mx-auto p-10'>
                <div className='w-full lg:w-[60vw] mx-auto'>
                    <h4 className='section-tittle text-center'>
                        Contact Me
                    </h4>
                    <p>A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.</p>
                </div>
                <div className='grid grid-cols-1 md;grid-cols-2 md:gap-16 mt-16'>
                    <div>
                        <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
                        <ContactInfoCard icon={<IoPhonePortraitOutline/>} text={ABOUT_ME.phone} />
                        <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />

                    </div>
                </div>
            </div>

        </section>

    );
}



export default ContactMe;