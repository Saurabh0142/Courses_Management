package com.firstapi.API.services;

import java.util.List;

import com.firstapi.API.entities.Course;

public interface CourseService {
	public List<Course> getCourses();

	public Course getCourse(long courseId);

	public Course addCourse(Course course);

	public String deleteCourse(Integer courseId);

	// YHA bas define kiya ja rha hai ->> jese addCourse , get Course aur inne call
	// karege
}
