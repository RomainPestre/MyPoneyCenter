package com.example.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.model.Product;
import com.example.back.model.User;
import com.example.back.model.Course;
import com.example.back.model.Horse;
import com.example.back.repository.CrudRepo;
import com.example.back.repository.UserRepo;
import com.example.back.repository.CourseRepo;
import com.example.back.repository.HorseRepo;

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
	
	

	@Autowired
	private UserRepo userRepo;
	
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
		user.id = id;
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
	
	public void updateAdmin(
			int id,
			String email,
			String name,
			String firstname,
			String phone,
			String license,
			int privileges,
			String session,
			String expiration,
			String courses,
			String courses_date) {
		Optional<User> myUser = userRepo.findById(id);
		User user = myUser.get();
		user.id = id;
		user.email = email;
		user.name = name;
		user.firstname = firstname;
		user.phone = phone;
		user.license = license;
		user.privileges = privileges;
		user.session = session;
		user.expiration = expiration;
		user.courses = courses;
		user.courses_date = courses_date;
		userRepo.save(user);
	}
	
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
	
	public List<User> fetchUserListByPrivileges(int privileges){
		return userRepo.findByPrivilegesEquals(privileges);
	}
	
	public String deleteUserById(int id) {
		String result;
		try {
			userRepo.deleteById(id);
			result = "User succesfully deleted.";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "ERROR : id is null.";
		}
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	@Autowired
	private CourseRepo courseRepo;
	
	public List<Course> fetchcourseList(){
		return courseRepo.findAll();
	}
	
	public Course saveCourseToDB(Course course) {
		return courseRepo.save(course);
	}

	public void updateCourse(
			int id,
			String date,
			String time,
			int size,
			String users_id,
			String users_name,
			String horses_id,
			String horses_name,
			String description) {
		Optional<Course> myCourse = courseRepo.findById(id);
		Course course = myCourse.get();
		course.date = date;
		course.description = description;
		course.horses_id = horses_id;
		course.horses_name = horses_name;
		course.id = id;
		course.size = size;
		course.time = time;
		course.users_id = users_id;
		course.users_name = users_name;
		courseRepo.save(course);
	}
	
	public Optional<Course> fetchCourseById(int id) {
		return courseRepo.findById(id);
	}
	
	public String deleteCourseById(int id) {
		String result;
		try {
			courseRepo.deleteById(id);
			result = "Course succesfully deleted.";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "ERROR : id is null.";
		}
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	@Autowired
	private HorseRepo horseRepo;
	
	public List<Horse> fetchhorseList(){
		return horseRepo.findAll();
	}
	
	public Horse saveHorseToDB(Horse horse) {
		return horseRepo.save(horse);
	}

	public void updateHorse(
			int id,
			String name,
			String courses,
			String courses_date) {
		Optional<Horse> myHorse = horseRepo.findById(id);
		Horse horse = myHorse.get();
		horse.id = id;
		horse.name = name;
		horse.courses = courses;
		horse.courses_date = courses_date;
		horseRepo.save(horse);
	}
	
	public Optional<Horse> fetchHorseById(int id) {
		return horseRepo.findById(id);
	}
	
	public String deleteHorseById(int id) {
		String result;
		try {
			horseRepo.deleteById(id);
			result = "Horse succesfully deleted.";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "ERROR : id is null.";
		}
		return result;
	}
	
}
