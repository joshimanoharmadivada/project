package com.example.demo;

import java.util.List;

public interface MentorService {
	Mentor create(Mentor mentor);
		 
	Mentor delete(Long id);
		 
		 List<Mentor> findAll();
		 
		 Mentor findById(Long mentorId);
		 
		 Mentor update(Mentor mentor);
		 
		 List<Mentor> findByUsernameAndPassword(String userName,String password);
		 List<Mentor> findByActive(Boolean active);
		 List<Mentor> findByUserName(String userName);
		 
	}
