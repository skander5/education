package com.ec.springApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ec.springApp.entites.Course;


public interface ICourseRepository extends JpaRepository<Course, Long>{

}
