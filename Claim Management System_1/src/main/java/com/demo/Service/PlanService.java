package com.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Model.Plan;
import com.demo.Repository.PlanRepository;

@Service
public class PlanService {
	
	@Autowired
	private PlanRepository planRepository;

	public List<Plan> getAllPlans() {
		List<Plan> plans = planRepository.getAllPlans();
		return plans;
	}

	public Plan addPlan(Plan plan) {
		return planRepository.addPlan(plan);
	}

	public void deleteMemberById(long id) {
		planRepository.deleteMemberById(id);
	}

	public Optional<Plan> findById(Long id) {
		Optional<Plan> plan = planRepository.findById(id);
		return plan;
	}

	public Plan getPlanDetailsById(Long id) {
		Plan plan = planRepository.getPlanDetailsById(id);
		return plan;
	}

}
