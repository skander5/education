package com.ec.springApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ec.springApp.entites.SubscriberCourses;


public interface ISubscriberCourseRepository extends JpaRepository<SubscriberCourses, Long>{

}
