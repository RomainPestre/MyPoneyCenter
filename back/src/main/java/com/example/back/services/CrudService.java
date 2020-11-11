package com.example.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.model.Product;
import com.example.back.model.User;
import com.example.back.model.Course;
import com.example.back.repository.CrudRepo;
import com.example.back.repository.UserRepo;
import com.example.back.repository.CourseRepo;

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
	
	/*
	
	@Autowired
	private UserRepo userRepo;
	
	public List<User> fetchuserList(){
		return userRepo.findAll();
	}
	
	public List<User> fetchadminList(){
		return userRepo.findByPrivilegesEquals(4);
	}
	
	public User saveUserToDB(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> fetchUserById(int id) {
		return userRepo.findById(id);
	}
	
	public Optional<User> fetchUserByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
	public Optional<User> fetchUserByEmailAndPassword(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}
	
	@Autowired
	private CourseRepo courseRepo;
	
	public List<Course> fetchcourseList(){
		return courseRepo.findAll();
	}
	
	public Course saveCourseToDB(Course course) {
		return courseRepo.save(course);
	}
	*/
	
	
	
	/*
	 * 
	 * 
	 * 
	 * NEW
	 * 
	 * 
	 * 
	 * 
	 */
	

	
	/* TEST */
	/*
	@Autowired
	private CrudRepo repoTest;
	
	public void addProductTest(String name) {
		Product p = new Product();
		p.name = name;
		repoTest.save(p);
	}
	
	public void updateProductTest(int id, String name, String desc,	int price) {
		Product myProduct = repoTest.findById(id);
		myProduct.name = name;
		myProduct.desc = desc;
		myProduct.price = price;
		repoTest.save(myProduct);
	}
	*/
	
	public void updateUser(
			int id,
			String email,
			String password,
			String name,
			String firstname,
			String phone,
			String license,
			int privileges,
			String session,
			String expiration,
			String courses) {
		Optional<User> myUser = userRepo.findById(id);
		User user = myUser.get();
		user.email = email;
		user.password = password;
		user.name = name;
		user.firstname = firstname;
		user.phone = phone;
		user.license = license;
		user.privileges = privileges;
		user.session = session;
		user.expiration = expiration;
		user.courses = courses;
		userRepo.save(user);
	}
	
	

	@Autowired
	private UserRepo userRepo;
	
	public List<User> fetchuserList(){
		return userRepo.findAll();
	}
	
	public List<User> fetchadminList(){
		return userRepo.findByPrivilegesEquals(4);
	}
	
	public User saveUserToDB(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> fetchUserById(int id) {
		return userRepo.findById(id);
	}
	
	public Optional<User> fetchUserByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
	public Optional<User> fetchUserByEmailAndPassword(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}
	
	@Autowired
	private CourseRepo courseRepo;
	
	public List<Course> fetchcourseList(){
		return courseRepo.findAll();
	}
	
	public Course saveCourseToDB(Course course) {
		return courseRepo.save(course);
	}
	
}
