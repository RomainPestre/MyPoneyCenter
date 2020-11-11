package com.example.back.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.back.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	//User superuser = new User(0, "superuser@email.com", "c2cb3e42784ad8ced8946dfc61f5de2318ec83164fe59f6561c184fd4b38a9cf", "Utilisateur", "Super", "0666666666", null, 4, null, null);;

	Optional<User> findByEmail(String email);
	
	Optional<User> findByEmailAndPassword(String email, String password);

	List<User> findByPrivilegesEquals(int privileges);
}
