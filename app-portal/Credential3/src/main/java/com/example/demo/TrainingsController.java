package com.example.demo;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/trainings"})
public class TrainingsController {
	
	@Autowired
	private TrainingsServiceImpl trainingsService;
	
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping
	public Trainings create(@RequestBody Trainings trainings)
	{
		return trainingsService.create(trainings);
	}
	@GetMapping(path = {"/{id}"})
	public Trainings findOne(@PathVariable("id") Long id)
	{
		return trainingsService.findById(id);
	}
	@PutMapping(path = {"/{id}"})
	public Trainings update(@PathVariable("id") Long id, @RequestBody Trainings trainings)
	{
		trainings.setId(id);
		return trainingsService.update(trainings);
	}
	 @DeleteMapping(path= {"/{id}"}) 
	 public Trainings delete(@PathVariable("id") Long id)
	 {
		 return  trainingsService.delete(id);
	 }
	 @GetMapping
	 public List<Trainings> findAll()
	 {
		 return trainingsService.findAll();
	 }
	 
	 @GetMapping("/findByStartDateBetween/{startDate}/{startDate2}")
	 public List<Trainings> getData(@PathVariable(value="startDate") Date startDate,@PathVariable("startDate2") Date startDate2){
		 return trainingsService.findByStartDateBetween(startDate,startDate2);
	 }
	 @GetMapping("/findByMentorId/{mentorId}")
	 public List<Trainings> getMentor(@PathVariable(value="mentorId") Long mentorId)
	 {
		 return trainingsService.findByMentor(mentorId);
	 }
	 
	 @GetMapping("/findByTechnologies/{techId}")
	 public List<Trainings> getTechnologies(@PathVariable(value="techId") Long techId)
	 {
		 return trainingsService.findByTechnologies(techId);
	 }
//	 @GetMapping("/findTrainingByMentorId/{mentorId}")
//	 public List<Trainings> getCoursesByInstructor(@PathVariable(value = "mentorId") Long mentorId){
//		 return trainingsService.findTrainingByMentorId(mentorId); 
//	 }
//	 @GetMapping("/User/{userId}/users")
//	    public List < User > getUserByInstructor(@PathVariable(value = "userId") Long id) {
//	        return userRepository.findById(id);
//	    }
//	 @GetMapping("/Mentor/{mentorId}/mentor")
//	    public List < Mentor > getMentorByInstructor(@PathVariable(value = "mentorId") Long id) {
//	        return mentorRepository.findByMentorId(id);
//	    }
	 @GetMapping("/findByTrainingIdAndUserId/{trainingId}/{userId}")
	 public List<Trainings> findByTrainingIdAndUserId(@PathVariable(value="trainingId") Long trainingId, @PathVariable(value="userId") Long userId)
	 {
		 Trainings trainings = trainingsService.findById(trainingId);
		 User users = userService.findById(userId);
		 trainings.getUsers().add(users);
		 trainingsService.create(trainings);
		 return null;
	 }
}
