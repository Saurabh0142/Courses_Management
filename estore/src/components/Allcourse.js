import React, { useState, useEffect} from "react";
import Courses from "./Courses";
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const Allcourse=()=>{
    useEffect(()=>{
        document.title="Allcoursess";
    },[]);

    // function to call server

    const getallcoursesfromserver=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response); 
                toast.success("all good everything is working ");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("error please fix this error");
            }
        );
    };

    // calling loading course function 
    useEffect(()=>{
        getallcoursesfromserver();
        console.log("hello this is very good");
    },[]);

    const [courses,setCourses]=useState([]);
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));// filter hum use karte jiski id match nhi hogi usko remove karne ke liye
    };

    return(
        <div>
            <h1>ALL course here</h1>
            <p>list of all courses available </p>
            

            { courses.length >0 
               ? courses.map((item)=> <Courses key={item.id} course={item} update={updateCourses}/>):"No course"}
        </div>
    )
};
export default Allcourse;