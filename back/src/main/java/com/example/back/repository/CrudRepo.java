package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.back.model.Product;

public interface CrudRepo extends JpaRepository<Product, Integer> {
	//Product findById(int id);
}
