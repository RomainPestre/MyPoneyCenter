package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.back.model.Course;

public interface CourseRepo  extends JpaRepository<Course, Integer> {

}
