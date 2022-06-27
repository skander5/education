package com.ec.springApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.springApp.entites.Course;
import com.ec.springApp.repository.ICourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private ICourseRepository courseRepository ;
	
	
	public Course addCourse(Course course) {
		return this.courseRepository.save(course);
	}
	
	public List<Course> findAllCourses(){
		return this.courseRepository.findAll();
	}

}
