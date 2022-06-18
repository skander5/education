package com.ec.springApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.springApp.entites.Product;
import com.ec.springApp.repository.IProductRepository;

@Service
public class ProductService {

	@Autowired
	IProductRepository productRepository;

	public List<Product> findProducts() {
		return this.productRepository.findAll();
	}

	public void addProduct(Product product) {
		this.productRepository.save(product);
	}

	public List<Product> findProductByShortLabel(String shortLabel) {
		return this.productRepository.findByShortLabel(shortLabel);
	}
	
	public Product updateProduct(Product product) {
		return this.productRepository.save(product);
	}
}
