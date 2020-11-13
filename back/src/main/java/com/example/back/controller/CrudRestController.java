package com.example.back.controller;
import java.util.ArrayList;
import java.util.List;
//import java.util.Optional;

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
import com.example.back.model.Course;
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
	
	
	
	
	
	
	
	
	//USER
	/*

	@GetMapping("/getuserlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchUserList(){
		List<User> users = new ArrayList<User>();
		
		//Logic to fetch list from database
		users = service.fetchuserList();
		return users;
	}
	
	@GetMapping("/getadminlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchAdminList(){
		List<User> admins = new ArrayList<User>();
		
		//Logic to fetch list from database
		admins = service.fetchadminList();
		return admins;
	}
	
	@PostMapping("/adduser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User saveUser(@RequestBody User user){
		return service.saveUserToDB(user);
	}
	
	@GetMapping("/getuserbyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserById(@PathVariable int id){
		return service.fetchUserById(id).get();
	}
	
	@GetMapping("/getuserbyemail/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserByEmail(@PathVariable String email){
		return service.fetchUserByEmail(email).get();
	}
	
	@GetMapping("/getuserbyemailandpassword/{email}/{password}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserByEmailAndPassword(@PathVariable String email, @PathVariable String password){
		return service.fetchUserByEmailAndPassword(email, password).get();
	}
	
	*/
	
	
	

	
	
	

	/*
	@PostMapping("/test")
	@CrossOrigin(origins = "http://localhost:4200")
	public void saveProductTest(@RequestBody String p){
		service.addProductTest(p);
	}
	
	@PostMapping("/test2")
	@CrossOrigin(origins = "http://localhost:4200")
	public Product updateProductTest(@RequestBody Product p){
		service.updateProductTest(p.id, p.name, p.desc, p.price);
		return p;
	}
	*/
	
	
	/*
	 * 
	 * 
	 * 
	 * 
	 * NEW
	 * 
	 * 
	 * 
	 * 
	 * 
	 */
	
	
	///USER

	
	@PostMapping("/updateuser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User updateUser(@RequestBody User u){
		service.updateUser(
				u.id,
				u.email,
				u.password,
				u.name,
				u.firstname,
				u.phone,
				u.license,
				u.privileges,
				u.session,
				u.expiration,
				u.courses
		);
		return u;
	}
	
	@PostMapping("/updateadmin")
	@CrossOrigin(origins = "http://localhost:4200")
	public User updateAdmin(@RequestBody User u){
		service.updateAdmin(
				u.id,
				u.email,
				u.name,
				u.firstname,
				u.phone,
				u.license,
				u.privileges,
				u.session,
				u.expiration,
				u.courses,
				u.courses_date
		);
		return u;
	}
	

	@GetMapping("/getuserlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchUserList(){
		List<User> users = new ArrayList<User>();
		
		//Logic to fetch list from database
		users = service.fetchuserList();
		return users;
	}
	
	@GetMapping("/getadminlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchAdminList(){
		List<User> admins = new ArrayList<User>();
		
		//Logic to fetch list from database
		admins = service.fetchadminList();
		return admins;
	}
	
	@PostMapping("/adduser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User saveUser(@RequestBody User user){
		return service.saveUserToDB(user);
	}
	
	@GetMapping("/getuserbyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserById(@PathVariable int id){
		return service.fetchUserById(id).get();
	}
	
	@GetMapping("/getuserbyemail/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserByEmail(@PathVariable String email){
		return service.fetchUserByEmail(email).get();
	}
	
	@GetMapping("/getuserbyemailandpassword/{email}/{password}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserByEmailAndPassword(@PathVariable String email, @PathVariable String password){
		return service.fetchUserByEmailAndPassword(email, password).get();
	}
	
	@GetMapping("/getuserlistbyprivileges/{privileges}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchUserListByPrivileges(@PathVariable int privileges){
		List<User> users = new ArrayList<User>();
		
		//Logic to fetch list from database
		users = service.fetchUserListByPrivileges(privileges);
		return users;
	}
	
	@DeleteMapping("/deleteuserbyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String DeleteUserById(@PathVariable int id){
		return service.deleteUserById(id);
	}

	
	//COURSE
	

	@GetMapping("/getcourselist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Course> fetchCourseList(){
		List<Course> courses = new ArrayList<Course>();
		
		//Logic to fetch list from database
		courses = service.fetchcourseList();
		return courses;
	}
	
	@PostMapping("/addcourse")
	@CrossOrigin(origins = "http://localhost:4200")
	public Course saveCourse(@RequestBody Course course){
		return service.saveCourseToDB(course);
	}
	

	@PostMapping("/updatecourse")
	@CrossOrigin(origins = "http://localhost:4200")
	public Course updateCourse(@RequestBody Course c){
		service.updateCourse(
				c.id,
				c.date,
				c.time,
				c.size,
				c.users_id,
				c.users_name,
				c.horses_id,
				c.horses_name,
				c.description
		);
		return c;
	}
	
	@GetMapping("/getcoursebyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Course fetchCourseById(@PathVariable int id){
		return service.fetchCourseById(id).get();
	}
	
	@DeleteMapping("/deletecoursebyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String DeleteCourseById(@PathVariable int id){
		return service.deleteCourseById(id);
	}
	
}
