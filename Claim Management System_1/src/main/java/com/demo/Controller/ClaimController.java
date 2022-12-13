package com.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Model.Claim;
import com.demo.Service.ClaimService;

@RestController
@RequestMapping("/claim")
public class ClaimController {
	
	@Autowired
	private ClaimService claimService;
	
	@GetMapping("/all")
	public List<Claim> getAllClaims(){
		List<Claim> claims = claimService.getAllClaims();
		return claims;
	}
	
	@GetMapping("/{id}")
	public Claim getClaimDetailById(@PathVariable("id") Long id){
		Claim claim = claimService.getClaimDetailsById(id);
		return claim;
	}
	
	@PostMapping("/add")
	public Claim save(@RequestBody Claim claim) {
		return claimService.addClaim(claim);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteClaim(@PathVariable("id") long id) {
		claimService.deleteClaimById(id);
	}
	
	
}
