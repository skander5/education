package com.ec.springApp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ec.springApp.entites.Category;
import com.ec.springApp.entites.Course;
import com.ec.springApp.entites.Subscriber;
import com.ec.springApp.repository.ICategoryRepository;
import com.ec.springApp.service.CourseService;
import com.ec.springApp.service.SubscriberService;

@SpringBootApplication
public class ECommerceApplication implements CommandLineRunner {
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	public SubscriberService subscriberService;
	
	@Autowired
	public ICategoryRepository categoryRepository;

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
		
		Subscriber subscriberAdmin = new Subscriber();
		subscriberAdmin.setLastName("ahmed");
		subscriberAdmin.setFirstName("amir");
		subscriberAdmin.setUsername("amir");
		subscriberAdmin.setPassword("1234");
		subscriberAdmin.setRole("admin");
		subscriberService.addSubscriber(subscriberAdmin);
		
		Category scienceCategory = new Category();
		scienceCategory.setTitle("Science");
		
		Category languageCategory = new Category();
		languageCategory.setTitle("Langue");
		
		this.categoryRepository.save(scienceCategory);
		this.categoryRepository.save(languageCategory);

		
		Course course = new Course();
		course.setDescription("Stats");
		course.setTitle("Math");
		course.setBeginDate(new Date());
		course.setDuree(3);
		course.setCategory(languageCategory);
		Course cours = new Course();
		cours.setDescription("Stats");
		cours.setTitle("Physique");
		cours.setBeginDate(new Date());
		cours.setDuree(3);
		cours.setCategory(scienceCategory);
		//List<Subscriber> sblist = new ArrayList<>();
		//sblist.add(subscriber);
		//course.setSubscriberList(sblist);
		courseService.addCourse(cours);
		courseService.addCourse(course);

	}

}
