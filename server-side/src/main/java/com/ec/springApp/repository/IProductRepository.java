package com.ec.springApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ec.springApp.entites.Product;

public interface IProductRepository extends JpaRepository<Product, Long> {

	@Query("SELECT product FROM Product product WHERE product.shortLabel LIKE %:shortLabel%")
	public List<Product> findByShortLabel(String shortLabel);

}
