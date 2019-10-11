package com.example.demo;

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

@CrossOrigin(origins = "*",maxAge=3600)
@RestController
@RequestMapping({"/mentor"})
public class MentorController  {
	
	@Autowired	
	private MentorService mentorService;
	
	 @PostMapping
	public Mentor create(@RequestBody Mentor mentor)
	{
		return mentorService.create(mentor);
	}
	 @GetMapping(path = {"/{id}"})
	 public Mentor findOne(@PathVariable("id") Long id) {
		 return mentorService.findById(id);
	 }
	 @PutMapping(path = {"/{id}"})
	 public Mentor update(@PathVariable("id") Long id,@RequestBody Mentor mentor)
	 {
		return  mentorService.update(mentor);
	 }
	 @DeleteMapping(path= {"/{id}"})
	 public Mentor delete(@PathVariable("id") Long id)
	{
		return mentorService.delete(id);
	}
	@GetMapping
	public List<Mentor> findAll()
	{
		return mentorService.findAll();
	}
	  @GetMapping(path= {"/{username}/{password}"})
		public List<Mentor> findByUserNameAndPassword(@PathVariable("username") String username,@PathVariable("password") String password) {
//			return userService.findById(id);
			return mentorService.findByUsernameAndPassword(username, password);
		}
	  @GetMapping(path= {"/active/{active}"})
		public List<Mentor> findByActive(@PathVariable("active") Boolean active) {
//			return userService.findById(id);
			return mentorService.findByActive(active);
		}
}
