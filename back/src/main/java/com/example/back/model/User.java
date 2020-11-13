package com.example.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String email;
	public String password;
	public String name;
	public String firstname;
	public String phone;
	public String license;
	public int privileges;
	public String session;
	public String expiration;
	public String courses;
	public String courses_date;
	
	public User() {
		
	}
	
	public User(int id, String email, String password, String name, String firstname, String phone, String license, int privileges, String session, String expiration, String courses, String courses_date) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.firstname = firstname;
		this.phone = phone;
		this.license = license;
		this.privileges = privileges;
		this.session = session;
		this.expiration = expiration;
		this.courses = courses;
		this.courses_date = courses_date;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getLicense() {
		return license;
	}
	public void setLicense(String license) {
		this.license = license;
	}
	public int getPrivileges() {
		return privileges;
	}
	public void setPrivileges(int privileges) {
		this.privileges = privileges;
	}
	
	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}
	
	public String getExpiration() {
		return expiration;
	}

	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}

	public String getCourses() {
		return courses;
	}

	public void setCourses(String courses) {
		this.courses = courses;
	}

	public String getCourses_date() {
		return courses_date;
	}

	public void setCourses_date(String courses_date) {
		this.courses_date = courses_date;
	}

}
