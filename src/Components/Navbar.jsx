import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen,setIsopen]=useState(false);

    const toggelmenu=()=>{
        setIsopen(!isOpen);
    }
    return (
    <div>
        <div className=''>
            <img className='' src=""/>
        </div>
    </div>
    )
}
export default Navbar;