package com.ec.springApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ec.springApp.entites.Course;
import com.ec.springApp.entites.Subscriber;
import com.ec.springApp.service.SubscriberService;

@CrossOrigin
@RestController
public class SubscriberController {

	@Autowired
	private SubscriberService subscriberService;

	@PostMapping("addSubscriber")
	public void addCommand(@RequestBody Subscriber subscriber) {
		this.subscriberService.addSubscriber(subscriber);
	}

}
