package com.ec.springApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.springApp.entites.Course;
import com.ec.springApp.entites.Subscriber;
import com.ec.springApp.repository.ISubscriberRepository;

@Service
public class SubscriberService {
	
	@Autowired
	private ISubscriberRepository subscriberRepository;
	
	public Subscriber addSubscriber(Subscriber subscriber) {
		return this.subscriberRepository.save(subscriber);
	}
	
	public Subscriber findConsumerbyUsernameAndPassword(String username, String password) {
		return this.subscriberRepository.findSubscriberbyUsernameAndPassword(username, password);
	}


}
