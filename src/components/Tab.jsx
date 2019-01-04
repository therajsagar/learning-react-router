import React from 'react';
import {NavLink} from 'react-router-dom';

const Tab = props => {
    return(
        <NavLink style={{margin: '25px', fontSize: '25x'}} activeStyle = {{color: 'green', fontWeight: 'bold'}} to={props.to}>
        {props.label}</NavLink>
    )
}


export default Tab;