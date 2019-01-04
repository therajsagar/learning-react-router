import React from 'react';
import Tab from './Tab.jsx'

const Bar = ()=>{
    return(
        <div>
            <hr/>
            <Tab to='/home' label='Home' />
            <Tab to='/resume' label='Resume' />
            <Tab to='/project' label='Projects' />
            <Tab to='/contact' label='Contact Me' />
            <hr/>
        </div>
    )
}


export default Bar;