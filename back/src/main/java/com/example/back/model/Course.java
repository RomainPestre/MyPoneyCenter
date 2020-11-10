package com.example.back.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {

	@Id
	private int id;
	private String date;
	private String time;
	private int size;
	private String users_id;
	private String horses_id;
	private String description;
	
	public Course() {
		
	}
	
	public Course(int id, String date, String time, int size, String users_id, String horses_id, String description) {
		super();
		this.id = id;
		this.date = date;
		this.time = time;
		this.size = size;
		this.users_id = users_id;
		this.horses_id = horses_id;
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

	public String getHorses_id() {
		return horses_id;
	}

	public void setHorses_id(String horses_id) {
		this.horses_id = horses_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
