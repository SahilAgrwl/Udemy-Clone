import React, { useState } from "react";
import logo from '../ui/logo-coral.svg';

import {
    NavLink,    
} from "react-router-dom";


function Sidebar(){

    const [nav, setNav] = useState([
        {label: "Home", slug: "/", icon: "icon-home"},
        {label: "Discover", slug: "discover", icon: "icon-ul"},
        {label: "My Courses", slug: "my-courses", icon: "icon-briefcase"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link noul flex c333"}>
                    <div className={"ico s20 " + nav[i].icon} />
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </NavLink>
            </li>
        );
    }

    console.log(global.fire);

    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={logo} className="bl" />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lamp-bright cfff s24 ico" />
                <div className="lbl s15 fontb c333">
                    Updated Courses
                    <h2 className="author s13 c777">by Sahil Agrawal</h2>
                </div>
            </div>

            <div className="stats aic flex">

                <div className="stats-box flex">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">1800</h2>
                    <h2 className="lbl s13 c777">points</h2>
                </div>

                <div className="stats-box flex">
                    <div className="ico ico-battery s24 icon-battery-90" />
                    <h2 className="val s15 c333 fontb">45.3%</h2>
                    <h2 className="lbl s13 c777">complete</h2>
                </div>

            </div>


            <div className="me flex aic">
                 <React.Fragment><div className="photo cfff s24">
                    <img src="https://source.unsplash.com/random/200x300" className="bl" />
                </div>
                <div className="lbl s15 fontb c333">
                    Sahil Agrawal 
                    <h2 className="uname s13 c777">@sahilagrawal</h2>                 
                </div>
                </React.Fragment>
            
                
            </div>

        </div>
    )
}

export default Sidebar;