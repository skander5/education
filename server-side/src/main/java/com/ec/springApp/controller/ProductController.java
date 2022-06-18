package com.ec.springApp.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ec.springApp.entites.Product;
import com.ec.springApp.service.ProductService;

@RestController
@CrossOrigin
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping("/findProducts")
	public List<Product> findProducts() {
		return this.productService.findProducts();
	}

	@PostMapping("/addProduct")
	public void addProduct(@RequestBody Product product) {
		this.productService.addProduct(product);
	}

	@GetMapping("/findProductByLabel")
	public List<Product> findProductByShortLabel(@PathParam("shortLabel") String shortLabel) {
		return this.productService.findProductByShortLabel(shortLabel);
	}
	
	@PostMapping("/updateProduct")
	public Product updateProduct(@RequestBody Product product) {
		return this.productService.updateProduct(product);
	}

}
