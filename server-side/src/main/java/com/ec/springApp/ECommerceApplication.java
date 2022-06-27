package com.ec.springApp;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ec.springApp.entites.Course;
import com.ec.springApp.entites.Subscriber;
import com.ec.springApp.service.CourseService;
import com.ec.springApp.service.SubscriberService;

@SpringBootApplication
public class ECommerceApplication implements CommandLineRunner {
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	public SubscriberService subscriberService;

	public static void main(String[] args) {
		SpringApplication.run(ECommerceApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Subscriber subscriber = new Subscriber();
		subscriber.setLastName("mohamed");
		subscriber.setFirstName("ahmed");
		subscriber.setUsername("mohamed");
		subscriber.setPassword("1234");
		subscriberService.addSubscriber(subscriber);
		
		Course course = new Course();
		course.setDescription("Stats");
		course.setTitle("Math");
		course.setBeginDate(new Date());
		course.setDuree(3);
		Course cours = new Course();
		cours.setDescription("Stats");
		cours.setTitle("Physique");
		cours.setBeginDate(new Date());
		cours.setDuree(3);
		courseService.addCourse(cours);
		courseService.addCourse(course);

	}

}
