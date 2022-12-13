package com.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Model.Member;
import com.demo.Repository.MemberRepository;

@Service
public class MemberService {

	@Autowired
	private MemberRepository memberRepository;
	
	public Member getMemberDetailsById(Long id) {
		Member member = memberRepository.getMemberDetailsById(id);
		return member;
	}
	
	public List<Member> getAllMembers() {
		List<Member> members = memberRepository.getAllMembers();
		return members;
	}
	
	public Member addMember(Member member) {
		return memberRepository.addMember(member);
	}
	
	public void deleteMemberById(Long id) {
		memberRepository.deleteMemberById(id);
	}
	
	public Optional<Member> findById(Long id) {
		Optional<Member> member =  memberRepository.findById(id);
		return member;
	}

	
}

	

