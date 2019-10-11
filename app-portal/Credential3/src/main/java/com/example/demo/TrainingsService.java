package com.example.demo;

import java.util.Date;
import java.util.List;

public interface TrainingsService {

	 Trainings create(Trainings trainings);
	 
	 Trainings delete(Long id);
	 
	 List<Trainings> findAll();
	 
	 Trainings findById(Long id);
	 
	 Trainings update(Trainings trainings);
	 
//	 List<Trainings> findTrainingByMentorId(Long mentorId);
	 
	 List<Trainings> findTrainingById(Long userId);
	 
	 Trainings findByIdAndId(Long id, Long mentorId);
	 
//	 Trainings findByIdAndUserId(Long id, Long userId);
	 List<Trainings> findByStartDateBetween(Date startDate,Date startDate2);
	 List<Trainings> findByMentor(Long mentorId);
	 List<Trainings> findByTechnologies(Long techid);
	 
}
