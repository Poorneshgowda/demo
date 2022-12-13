package com.demo.Junit.ServiceClassTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.demo.Model.Claim;
import com.demo.Model.Claim;
import com.demo.Repository.ClaimRepository;
import com.demo.Service.ClaimService;




public class ClaimServiceTest {
	
	@Mock
	private ClaimRepository claimRepository;

	@InjectMocks
	private ClaimService claimService;

	private Claim claim;
	@BeforeEach
	public void init() {

		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void getAllClaimsTest() {
		List<Claim> list = new ArrayList<Claim>();
		Claim claimOne = new Claim(1,null,50000.0,"2022-11-11","Pending");
		Claim claimTwo = new Claim(2,null,50000.0,"2022-11-11","Claimed"); 
		list.add(claimOne);
		list.add(claimTwo);

		when(claimRepository.getAllClaims()).thenReturn(list);

		// test
		List<Claim> claimList = claimService.getAllClaims();

		assertEquals(2, claimList.size());
		verify(claimRepository, times(1)).getAllClaims();
	}
	
	@Test
	public void getClaimByIdTest() {
		when(claimRepository.getClaimDetailsById(1L)).thenReturn(new Claim(1L,null,50000.0,"2022-11-11","Pending"));

		Claim claim = claimService.getClaimDetailsById(1L);

	
		assertEquals(null, claim.getMember());
		assertEquals(50000.0,claim.getClaimAmount());
		assertEquals("2022-11-11",claim.getRequestDate());
		assertEquals("Pending",claim.getClaimStatus());

	}

	@Test
	public void createClaimTest() {
		Claim claim = new Claim(1,null,50000.0,"2022-11-11","Pending");

		claimService.addClaim(claim);

		verify(claimRepository, times(1)).addClaim(claim);
	}
	
	@Test
	public void deletClaimTest() {
		
		       
		        doNothing().when(claimRepository).deleteClaimById(1L);
		        claimService.deleteClaimById(1L);
		        verify(claimRepository, times(1)).deleteClaimById(1L);
		        verifyNoMoreInteractions(claimRepository);
		    }


}
