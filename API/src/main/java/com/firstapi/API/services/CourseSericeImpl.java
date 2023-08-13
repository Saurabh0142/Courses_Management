package com.firstapi.API.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.firstapi.API.entities.Course;

@Service
public class CourseSericeImpl implements CourseService { // courseservice ke 
	
	List<Course> list;
	
	public CourseSericeImpl() {
		list=new ArrayList<>();
		list.add(new Course(145,"java course only available"," this is java course is on java language "));
		list.add(new Course(5145,"python course only available"," this is python course is on java language "));
	} 
	
	// printing whole list of courses here because of this 

	@Override
	public List<Course> getCourses() {
		
		return list;
	}
	
	// hum id wise data print kar rahe hai
	

	@Override
	public Course getCourse(long courseId) {
		Course c=null;
		for(Course course:list) {
			if(course.getId()==courseId) {
				c=course;
				break;
			}
		}
		return c;
	}
	
	// data jo add karne ke liya commands
	@Override
	public Course addCourse(Course course) { 
		list.add(course); 
		return course;
	}
	
	@Override
	public String deleteCourse(Integer courseId ){ 
		return new String("course deleted success");
	}
	
	
	

}
