import React, { useRef } from 'react'; // Import useRef
import { ABOUT_ME } from '../utils/data';
import emailjs from 'emailjs-com';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import ContactInfoCard from '../Components/ContactInfoCard';

const ContactMe = () => {
    const form = useRef(); // Create a ref for the form

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        emailjs.sendForm('service_eigr5nw', 'template_1zxt4ti', form.current, 'A6EZmgllgMMDYWtNq') // Replace with your actual User ID
            .then((result) => {
                console.log(result.text); // Log success message
                alert('Message sent successfully!'); // Show success message
            }, (error) => {
                console.log(error.text); // Log error message
                alert('Failed to send message. Please try again later.'); // Show error message
            });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <section id="contact">
            <div className='container mx-auto p-10'>
                <div className='w-full lg:w-[60vw] mx-auto'>
                    <h4 className='section-title text-center'>
                        Contact Me
                    </h4>
                    <p>A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16 px-20'>
                    <div>
                        <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
                        <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
                        <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
                    </div>
                    <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder='Full Name'
                            id='name'
                            className='input-box'
                            autoComplete='off'
                            required // Ensure this field is required
                        />
                        <input
                            type="email" // Change type to email for validation
                            name="email"
                            placeholder='Email'
                            id='email'
                            className='input-box'
                            autoComplete='off'
                            required // Ensure this field is required
                        />
                        <textarea // Use textarea for messages
                            name="message"
                            placeholder='Message'
                            id='message'
                            className='input-box'
                            autoComplete='off'
                            required // Ensure this field is required
                        />
                        <button type="submit" className='action-btn-two btn-scale-anim'>Submit</button> {/* Set button type to submit */}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
