package com.example.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Course {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String date;
	public String time;
	public int size;
	public String users_id;
	public String users_name;
	public String horses_id;
	public String horses_name;
	public String description;
	
	public Course() {
		
	}
	
	public Course(int id, String date, String time, int size, String users_id, String users_name, String horses_id, String horses_name, String description) {
		super();
		this.id = id;
		this.date = date;
		this.time = time;
		this.size = size;
		this.users_id = users_id;
		this.users_name = users_name;
		this.horses_id = horses_id;
		this.horses_name = horses_name;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public String getUsers_id() {
		return users_id;
	}

	public void setUsers_id(String users_id) {
		this.users_id = users_id;
	}

	public String getUsers_name() {
		return users_name;
	}

	public void setUsers_name(String users_name) {
		this.users_name = users_name;
	}

	public String getHorses_id() {
		return horses_id;
	}

	public void setHorses_id(String horses_id) {
		this.horses_id = horses_id;
	}
	
	public String getHorses_name() {
		return horses_name;
	}

	public void setHorses_name(String horses_name) {
		this.horses_name = horses_name;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
