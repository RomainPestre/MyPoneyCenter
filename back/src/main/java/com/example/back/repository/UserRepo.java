package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.back.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
