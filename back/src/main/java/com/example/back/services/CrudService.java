package com.example.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.model.Product;
import com.example.back.repository.CrudRepo;

@Service
public class CrudService {
	
	@Autowired
	private CrudRepo repo;

	public List<Product> fetchproductList(){
		return repo.findAll();
	}
	
	public Product saveProductToDB(Product product) {
		return repo.save(product);
	}
	
	public Optional<Product> fetchProductById(int id) {
		return repo.findById(id);
	}
	
	public String deleteProductById(int id) {
		String result;
		try {
			repo.deleteById(id);
			result = "Product succesfully deleted.";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "ERROR : id is null.";
		}
		return result;
	}
}
