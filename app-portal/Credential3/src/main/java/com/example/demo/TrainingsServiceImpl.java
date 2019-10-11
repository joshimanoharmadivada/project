package com.example.demo;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class TrainingsServiceImpl implements TrainingsService {
	@Autowired
	private TrainingsRepository repository;
	
	@Override
	public Trainings create(Trainings trainings) {
		// TODO Auto-generated method stub
		return repository.save(trainings);
	}

	@Override
	public Trainings delete(Long id) {
		// TODO Auto-generated method stub
		Trainings trainings = findById(id);
		if(trainings != null)
		{
			repository.delete(trainings);
		}
		return trainings;
	}

	@Override
	public List<Trainings> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public Trainings findById(Long id) {
		// TODO Auto-generated method stub
		return repository.findOne(id);
	}

	@Override
	public Trainings update(Trainings trainings) {
		// TODO Auto-generated method stub
		return repository.save(trainings);
	}

	

//	@Override
//	public List<Trainings> findTrainingByMentorId(Long mentorId) {
//		// TODO Auto-generated method stub
//		return repository.findTrainingByMentorId(mentorId);
//	}

	@Override
	public List<Trainings> findTrainingById(Long userId) {
		// TODO Auto-generated method stub
		return repository.findTrainingById(userId);
	}

	@Override
	public Trainings findByIdAndId(Long id, Long mentorId) {
		// TODO Auto-generated method stub
		return repository.findByIdAndId(id, mentorId);
	}

//	@Override
//	public Trainings findByIdAndUserId(Long id, Long userId) {
//		// TODO Auto-generated method stub
//		return repository.findByIdAndUsersId(id, userId);
//	}

	@Override
	public List<Trainings> findByStartDateBetween(Date startDate,Date startDate2) {
		// TODO Auto-generated method stub
		return repository.findByStartDateBetween(startDate,startDate2);
	}

	@Override
	public List<Trainings> findByMentor(Long mentorId) {
		// TODO Auto-generated method stub
		return repository.findByMentor(mentorId);
	}

	@Override
	public List<Trainings> findByTechnologies(Long id) {
		// TODO Auto-generated method stub
		return repository.findByTechnologies(id);
	}

	
	}


