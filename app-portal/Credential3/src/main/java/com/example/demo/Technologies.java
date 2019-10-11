package com.example.demo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "technologies1")
public class Technologies extends AuditModel {
	
	@Id
	@Column(name = "techid",unique = true,nullable=false)
	private Long techid;
	
	@Column(name = "technologies")
	private String technologies;
	
	@Column(name = "description")
	private String description;
	
//	private Integer training;
	
public Long getTechid() {
		return techid;
	}

	public void setTechid(Long techid) {
		this.techid = techid;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	//	@OneToOne(fetch = FetchType.LAZY, mappedBy = "technology", cascade = CascadeType.ALL)
//	public Integer getTraining() {
//		return training;
//	}
//
//	public void setTraining(Integer training) {
//		this.training = training;
//	}
//	@OneToOne(fetch = FetchType.LAZY, mappedBy = "technology", cascade = CascadeType.ALL,targetEntity = Trainings.class)
	public Long getId() {
		return techid;
	}

	public void setId(Long id) {
		this.techid = id;
	}

	@OneToMany(mappedBy = "technologies", cascade = { CascadeType.ALL})
	private List < Trainings > trainings;
	
	public String getTechnologies() {
		return technologies;
	}

	public void setTechnologies(String technologies) {
		this.technologies = technologies;
	}

}
