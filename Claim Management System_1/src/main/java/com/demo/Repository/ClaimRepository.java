package com.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Model.Claim;

public interface ClaimRepository extends JpaRepository<Claim, Long>{

	public Claim getClaimDetailsById(Long id);
	public List<Claim> getAllClaims();
	public Claim addClaim(Claim claim) ;
	public void deleteClaimById(Long id);
	public Optional<Claim> findById(Long id);
}
