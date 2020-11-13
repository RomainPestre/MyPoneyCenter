package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.back.model.Horse;

public interface HorseRepo extends JpaRepository<Horse, Integer> {

}
