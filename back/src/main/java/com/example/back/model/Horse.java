package com.example.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Horse {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String name;
	public String courses;
	public String courses_date;
	
	public Horse() {
		
	}

	public Horse(int id, String name, String courses, String courses_date) {
		super();
		this.id = id;
		this.name = name;
		this.courses = courses;
		this.courses_date = courses_date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
