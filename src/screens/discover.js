import React, {useEffect, useState} from "react";
import Course1 from "../ui/course-1.png";
import Course2 from "../ui/course-2.jpg";

import {
    NavLink,    
} from "react-router-dom";

function DiscoverPage(){

    useEffect(()=>{
        document.title = "Discover";
    })

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "https://source.unsplash.com/random/200x300" + 1,
            },
            duration: "82 min",            
            poster: Course1
        },
        {
            ID: 2,
            title: "Creating a beautiful Portrait Illustration. Learning new Technics and Tricks.",
            tutor: {
                ID: 2,
                name: "Uran Design",
                username: "urancd",
                dp: "https://source.unsplash.com/random/200x300" + 2,
            },
            duration: "1 hr 13 min",            
            poster: Course2
        }
    ]);

   

    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        courseList.push(
            <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course-" + i}>
                <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
                }}>

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>

                </div>
            </NavLink>
        );
    }

   
    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">Discover</h1>

         <div className="home-page rel">


         {/**Popular Courses */}
         <div className="section section-b rel">
             <h2 className="title s24 fontb">All Courses <span  className="fontn">This Week</span></h2>
             <div className="courses rel flex">
                 {courseList}
             </div>
         </div>

     </div>
     </div>
    )
}

export default DiscoverPage;