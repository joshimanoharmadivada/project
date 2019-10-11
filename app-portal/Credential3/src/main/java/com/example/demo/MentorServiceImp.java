package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MentorServiceImp implements MentorService {

	@Autowired
	private MentorRepository repository;
	
	@Override
	public Mentor create(Mentor mentor) {
		// TODO Auto-generated method stub
		return repository.save(mentor);
	}

	@Override
	public Mentor delete(Long mentorId) {
		// TODO Auto-generated method stub
		Mentor mentor = findById(mentorId);
		if(mentor != null)
		{
			repository.delete(mentor);
		}
		return mentor;
	}

	@Override
	public List<Mentor> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public Mentor findById(Long mentorId) {
		// TODO Auto-generated method stub
		return repository.findOne(mentorId);
	}

	@Override
	public Mentor update(Mentor mentor) {
		// TODO Auto-generated method stub
		return repository.save(mentor);
	}

	@Override
	public List<Mentor> findByUsernameAndPassword(String userName, String password) {
		// TODO Auto-generated method stub
		return repository.findByUsernameAndPassword(userName, password);
	}

	@Override
	public List<Mentor> findByActive(Boolean active) {
		// TODO Auto-generated method stub
		return repository.findByActive(active);
	}

	@Override
	public List<Mentor> findByUserName(String userName) {
		// TODO Auto-generated method stub
		return repository.findByUserName(userName);
	}
	

}
