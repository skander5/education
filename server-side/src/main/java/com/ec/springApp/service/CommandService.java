package com.ec.springApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.springApp.entites.Command;
import com.ec.springApp.entites.Consumer;
import com.ec.springApp.entites.Product;
import com.ec.springApp.repository.ICommandeRepository;

@Service
public class CommandService {

	@Autowired
	private ICommandeRepository commandeRepository;

	public List<Command> getCommandsByUser(Consumer consumer) {
		return this.commandeRepository.findByConsumer(consumer);
	}

	public void addCommand(Command command) {
		command.setStatus("En attente");
		command.setReference("Ref001");
		this.commandeRepository.save(command);
	}

	public List<Command> findAllCommand() {
		return this.commandeRepository.findAll();
	}
}
