package com.ec.springApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ec.springApp.entites.Category;

public interface ICategoryRepository extends JpaRepository<Category, Long>{

}
