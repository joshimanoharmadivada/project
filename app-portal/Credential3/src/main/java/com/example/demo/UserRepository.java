package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, Long> {
	
	void delete(User user);
	List<User> findAll();
	User findOne(Long id);
	User save(User user);
	@Query("from User where userName=?  and password=?")
	List<User> findByUsernameAndPassword(String userName,String password);
	List<User> findByActive(Boolean active);
	//List<Mentor> findByMentorId(Long id);
}
