import React from 'react';


const ContactInfoCard = ({icon,text}) => {
    return (
        <div className='flex items-center gap-5 bg-blue-200 rounded border border-voilet-800 px-4 py-3 mb-5'>
        <div className='w-10 h-10 text-xl text-white flex items-center justify-center  bg-blue-400 '>{icon} </div>

        <p className='text-violet-700 text-[14px] md:text-sm'>{text}</p>
            </div>
    )
}


// #endregion

export default ContactInfoCard;