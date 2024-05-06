/* eslint-disable react/jsx-no-undef */

import { Routes} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/logo-coral.svg";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import MyCoursesPage from "./screens/mycourses";






export default function AppLoader(){



    return (
        
                    <div className="App flex">      
                        <HashRouter>
                            <Sidebar />
                            <div className="app-content">
                                <Routes>
                                    <Route exact path="/" element={<HomePage />} />
                                    <Route path="/course/:courseid" element={<CoursePage />} />
                                    <Route path="/discover" element={<DiscoverPage />} />
                                  
                                    <Route path="/my-courses" element={<MyCoursesPage />} />
                                </Routes>
                            </div>    
                        </HashRouter>    
                    </div>
                
            

    )
    
    

}
