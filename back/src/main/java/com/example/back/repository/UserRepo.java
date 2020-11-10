package com.example.back.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.back.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	Optional<User> findByEmail(String email);
	
	Optional<User> findByEmailAndPassword(String email, String password);

	List<User> findByPrivilegesEquals(int privileges);
}
