package com.ec.springApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.springApp.entites.Category;
import com.ec.springApp.entites.Course;
import com.ec.springApp.entites.Subscriber;
import com.ec.springApp.entites.SubscriberCourses;
import com.ec.springApp.repository.ICategoryRepository;
import com.ec.springApp.repository.ICourseRepository;
import com.ec.springApp.repository.ISubscriberCourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private ICourseRepository courseRepository ;
	
	@Autowired
	private ISubscriberCourseRepository subscriberCourseRepository ;
	
	@Autowired
	public ICategoryRepository categoryRepository;
	
	public Course addCourse(Course course) {
		return this.courseRepository.save(course);
	}
	
	public List<Course> findAllCourses(){
		return this.courseRepository.findAll();
	}
	
	public List<Category> findAllCategory(){
		return this.categoryRepository.findAll();
	}
	
	public List<SubscriberCourses> findAllReservation(){
		return this.subscriberCourseRepository.findAll();
	}
	
	public SubscriberCourses reserverCourse(SubscriberCourses subscriberCourses) {
		List<SubscriberCourses> listAllSubscriberCourses = this.subscriberCourseRepository.findAll();
		List<Subscriber> listAllSubscriber = new ArrayList<>();
		listAllSubscriberCourses.stream().forEach(e->{
				if(e.getCourse().getId() == subscriberCourses.getCourse().getId() 
						&& e.getSubscriber().getId() == subscriberCourses.getSubscriber().getId())
					listAllSubscriber.add(e.getSubscriber());
			});
		if(listAllSubscriber.isEmpty())
			return this.subscriberCourseRepository.save(subscriberCourses);
		return null ;
	}
	
	
	public List<Course> findAllCoursesBySubscriber(Subscriber subscriber){
		List<SubscriberCourses> listAllSubscriberCourses = this.subscriberCourseRepository.findAll();
		List<SubscriberCourses> subscriberCoursesFiltred = listAllSubscriberCourses.stream().filter(e->e.getSubscriber().getId() == subscriber.getId()).toList();
		List<Course> coursesBySubscriber = new ArrayList<Course>() ;
		subscriberCoursesFiltred.stream().forEach(e-> {
			Course course = this.courseRepository.findById(e.getCourse().getId()).get();
			coursesBySubscriber.add(course);
		});
		return coursesBySubscriber ;
	}

}
