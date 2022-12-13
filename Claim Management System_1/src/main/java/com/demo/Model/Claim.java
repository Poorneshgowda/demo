package com.demo.Model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "claim")
public class Claim {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long claimId;
	
	@JsonBackReference
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "member_id", referencedColumnName = "memberId" )

	private Member member;
	
	private double claimAmount;
	
	private String requestDate;
	
	private String claimStatus = "Pending";

	public Claim() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Claim(long claimId, Member member, double claimAmount, String string, String claimStatus) {
		super();
		this.claimId = claimId;
		this.member = member;
		this.claimAmount = claimAmount;
		this.requestDate = string;
		this.claimStatus = claimStatus;
	}

	

	public long getClaimId() {
		return claimId;
	}

	public void setClaimId(long claimId) {
		this.claimId = claimId;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public double getClaimAmount() {
		return claimAmount;
	}

	public void setClaimAmount(double claimAmount) {
		this.claimAmount = claimAmount;
	}

	public String getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(String requestDate) {
		this.requestDate = requestDate;
	}

	public String getClaimStatus() {
		return claimStatus;
	}

	public void setClaimStatus(String claimStatus) {
		this.claimStatus = claimStatus;
	}

	@Override
	public String toString() {
		return "Claim [claimId=" + claimId + ", member=" + member + ", claimAmount=" + claimAmount
				+ ", requestDate=" + requestDate + ", claimStatus=" + claimStatus + "]";
	}

	
}
