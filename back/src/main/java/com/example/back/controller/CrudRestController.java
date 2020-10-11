package com.example.back.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.back.model.Product;
import com.example.back.model.User;
import com.example.back.services.CrudService;

@RestController
public class CrudRestController {

	@Autowired
	private CrudService service;
	
	//@RequestMapping(path = "/getproductlist", method=RequestMethod.GET)
	@GetMapping("/getproductlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Product> fetchProductList(){
		List<Product> products = new ArrayList<Product>();
		
		//Logic to fetch list from database
		products = service.fetchproductList();
		return products;
	}
	
	@PostMapping("/addproduct")
	@CrossOrigin(origins = "http://localhost:4200")
	public Product saveProduct(@RequestBody Product product){
		return service.saveProductToDB(product);
	}
	
	@GetMapping("/getproductbyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Product fetchProductById(@PathVariable int id){
		return service.fetchProductById(id).get();
	}
	
	@DeleteMapping("/deleteproductbyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String DeleteProductById(@PathVariable int id){
		return service.deleteProductById(id);
	}
	

	@GetMapping("/getuserlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchUserList(){
		List<User> users = new ArrayList<User>();
		
		//Logic to fetch list from database
		users = service.fetchuserList();
		return users;
	}
}
