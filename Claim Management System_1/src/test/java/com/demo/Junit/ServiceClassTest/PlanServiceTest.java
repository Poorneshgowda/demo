package com.demo.Junit.ServiceClassTest;



import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.demo.Model.Plan;

import com.demo.Repository.PlanRepository;
import com.demo.Service.PlanService;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class PlanServiceTest {

	@Mock
	private PlanRepository planRepository;

	@InjectMocks
	private PlanService planService;

	private Plan plan;

	@BeforeEach
	public void init() {

		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void getAllPlansTest() {
		List<Plan> list = new ArrayList<Plan>();
		Plan planOne = new Plan(1, "Health Insurance Plus", 50000.0, "2000-10-10", "2025-10-10");
		Plan planTwo = new Plan(2, "Health Insurance Premium", 70000.0, "1999-10-10", "2020-10-10");

		list.add(planOne);
		list.add(planTwo);

		when(planRepository.getAllPlans()).thenReturn(list);

		// test
		List<Plan> planList = planService.getAllPlans();

		assertEquals(2, planList.size());
		verify(planRepository, times(1)).getAllPlans();
	}

	@Test
	public void getPlanByIdTest() {
		when(planRepository.getPlanDetailsById(1L))
				.thenReturn(new Plan(1, "Health Insurance Plus", 50000.0, "2000-10-10", "2025-10-10"));

		Plan plan = planService.getPlanDetailsById(1L);

		assertEquals("Health Insurance Plus", plan.getPlanName());
		assertEquals(50000.0, plan.getInsuredAmount());
		assertEquals("2000-10-10", plan.getStartDate());
		assertEquals("2025-10-10", plan.getEndDate());

	}

	@Test
	public void createPlanTest() {
		Plan plan = new Plan(1, "Health Insurance Plus", 50000.0, "2000-10-10", "2025-10-10");

		planService.addPlan(plan);

		verify(planRepository, times(1)).addPlan(plan);

	}
	
	
	@Test
	public void deletPlanTest() {
		
		       
		        doNothing().when(planRepository).deleteMemberById(1);
		        planService.deleteMemberById(1);
		        verify(planRepository, times(1)).deleteMemberById(1);
		        verifyNoMoreInteractions(planRepository);
		    }
	
	
}
