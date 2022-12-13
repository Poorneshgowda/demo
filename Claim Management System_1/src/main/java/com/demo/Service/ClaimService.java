package com.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Model.Claim;
import com.demo.Repository.ClaimRepository;


@Service
public class ClaimService {
	
	@Autowired
	private ClaimRepository claimRepository;
	
	public Claim getClaimDetailsById(Long id) {
		Claim claim = claimRepository.getClaimDetailsById(id);
		return claim;		
	}

	public List<Claim> getAllClaims() {
		List<Claim> claims = claimRepository.getAllClaims();
		return claims;
	}
	
	public Claim addClaim(Claim claim) {
		return claimRepository.addClaim(claim);
	}
	
	public void deleteClaimById(Long id) {
		claimRepository.deleteClaimById(id);
	}
	
	public Optional<Claim> findById(Long id) {
		Optional<Claim> claim =  claimRepository.findById(id);
		return claim;
	}

	
	

}
