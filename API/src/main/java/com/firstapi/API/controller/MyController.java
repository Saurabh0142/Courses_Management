package com.firstapi.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.firstapi.API.entities.Course;
import com.firstapi.API.services.CourseService;



@RestController
@CrossOrigin("http://localhost:3000")
public class MyController {
	@Autowired
    private CourseService courseSerivice;

    @GetMapping("/home")
    public String home(){
        return "Welcome to courses application ";
    }
    // course get
    @GetMapping("/courses")
    public List<Course> getCourses(){
        return this.courseSerivice.getCourses();   

    }
    // single course ko get karne me use kar rahe hai
    @GetMapping("/courses/{courseId}")
    public Course getCourse( @PathVariable  String courseId) {
    	return this.courseSerivice.getCourse(Long.parseLong(courseId));
    }
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
    	return this.courseSerivice.addCourse(course);  
    }
    @DeleteMapping("/courses/{courseId}")
    public String deleteCourse(@PathVariable  Integer courseId){
    	return this.courseSerivice.deleteCourse(courseId);   
    }

}
