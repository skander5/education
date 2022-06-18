package com.ec.springApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ec.springApp.entites.Command;
import com.ec.springApp.entites.Consumer;

public interface ICommandeRepository extends JpaRepository<Command, Long>{

	public List<Command> findByConsumer(Consumer consumer);
}
