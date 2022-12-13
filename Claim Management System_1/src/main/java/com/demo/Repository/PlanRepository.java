package com.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Model.Plan;

public interface PlanRepository extends JpaRepository<Plan, Long>{

	public List<Plan> getAllPlans();
	public Plan addPlan(Plan plan);
	public void deleteMemberById(long id);
	public Optional<Plan> findById(Long id);
	public Plan getPlanDetailsById(Long id);

}
