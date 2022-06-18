package com.ec.springApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.springApp.entites.Consumer;
import com.ec.springApp.repository.IConsumerRepository;

@Service
public class ConsumerService {

	@Autowired
	private IConsumerRepository consumerRepository;

	public void addConsumer(Consumer consumer) {
		this.consumerRepository.save(consumer);
	}

	public List<Consumer> findAllConsumer() {
		return this.consumerRepository.findAll();
	}

	public Consumer findConsumerbyUsernameAndPassword(String username, String password) {
		return this.consumerRepository.findConsumerbyUsernameAndPassword(username, password);
	}
	
	public Consumer updateCosumer(Consumer consumer) {
		return this.consumerRepository.save(consumer);
	}
}
