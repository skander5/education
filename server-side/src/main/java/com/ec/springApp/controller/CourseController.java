package com.ec.springApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ec.springApp.entites.Category;
import com.ec.springApp.entites.Course;
import com.ec.springApp.entites.Subscriber;
import com.ec.springApp.entites.SubscriberCourses;
import com.ec.springApp.service.CourseService;

@CrossOrigin
@RestController
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@PostMapping("addCourse")
	public void addCommand(@RequestBody Course course) {
		this.courseService.addCourse(course);
	}
	
	@GetMapping("findAllCourses")
	public List<Course> findAll(){
		return this.courseService.findAllCourses();
	}
	
	@GetMapping("findAllCategory")
	public List<Category> findAllCategory(){
		return this.courseService.findAllCategory();
	}
	
	@PostMapping("findAllCoursesBySubscriber")
	public List<Course> findAllCoursesBySubscriber(@RequestBody Subscriber subscriber){
		return this.courseService.findAllCoursesBySubscriber(subscriber);
	}
	
	@PostMapping("reserver")
	public void reserverCourse(@RequestBody SubscriberCourses subscriberCourses) {
		this.courseService.reserverCourse(subscriberCourses);
	}
	
	@GetMapping("findAllReservation")
	public List<SubscriberCourses> findAllReservation(){
		return this.courseService.findAllReservation();
	}

}
