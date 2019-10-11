package com.example.demo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrainingsRepository extends Repository<Trainings, Long> {
	
 void delete(Trainings trainings);
 
 List<Trainings> findAll();
 
 Trainings findOne(Long id);
 
 Trainings save(Trainings trainings);
 
// @Query("select * from Trainings t where t.mentor_id=?")
// List<Trainings> findTrainingByMentorId(Long mentorId);
 
 List<Trainings> findTrainingById(Long userId);
 
// @Query("select * from Trainings t where t.id=?")
 Trainings findByIdAndId(Long id, Long mentorId);
 
// Trainings findByIdAndUsersId(Long id, Long userId);
 
 List<Trainings> findByStartDateBetween(Date startDate,Date startDate2);
 
 @Query("from Trainings t where t.mentor.mentorId=?")
 List<Trainings> findByMentor(Long mentorId);
 
 @Query("from Trainings t where t.technologies.id=?")
 List<Trainings> findByTechnologies(Long id);
// List<Trainings> findByTrainigIdANdUserId(Long trainingId, Long userId);
}
