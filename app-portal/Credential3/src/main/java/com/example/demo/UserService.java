package com.example.demo;

import java.util.List;

public interface UserService {
	
	User create(User user);
	User delete(Long id);
	List<User> findAll();
	User findById(Long id);
	User update(User user);
	List<User> findByUsernameandPassword(String userName,String password);
	List<User> findByActive(Boolean active);
	List<Mentor> findByMentorId(Long id);
}
