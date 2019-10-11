package com.example.demo;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface MentorRepository extends Repository<Mentor, Long>
   {
  	 void delete(Mentor mentor);
		 
		 List<Mentor> findAll();
		 
		 Mentor findOne(Long mentorId);
		 
		 Mentor save(Mentor mentor);
		 @Query("from Mentor where userName=? and password=?")
		 List<Mentor> findByUsernameAndPassword(String userName,String password);
		 List<Mentor> findByActive(Boolean active);
			List<Mentor> findByMentorId(Long id);
			List<Mentor> findByUserName(String userName);
}