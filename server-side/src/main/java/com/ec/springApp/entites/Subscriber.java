package com.ec.springApp.entites;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Subscriber implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstName;

	private String lastName;

	@Column(unique=true)
	private String email;

	@Column(unique=true)
	private String mobileNumber;

	@Column(unique=true)
	private String username;

	private String password;

	private String role;
	
	@ManyToMany
	private List<Course> coursList ;

	

}
