package com.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
	
	Member getMemberDetailsById(Long id);
	List<Member> getAllMembers();
	 Member addMember(Member member);
	 void deleteMemberById(Long id);
	 Optional<Member> findById(Long id) ;

}
