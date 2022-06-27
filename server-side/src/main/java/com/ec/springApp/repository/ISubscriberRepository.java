package com.ec.springApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ec.springApp.entites.Subscriber;


public interface ISubscriberRepository extends JpaRepository<Subscriber, Long>{
	
	@Query("SELECT subscriber FROM Subscriber subscriber WHERE subscriber.username = :username AND subscriber.password = :password")
	public Subscriber findSubscriberbyUsernameAndPassword(@Param("username") String username, @Param("password") String password);
	
}
