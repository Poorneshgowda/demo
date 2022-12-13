package com.demo.Junit.ServiceClassTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.demo.Model.Member;
import com.demo.Repository.MemberRepository;
import com.demo.Service.MemberService;

import java.util.ArrayList;
import java.util.List;

public class MemberServiceTest {

	@Mock
	private MemberRepository memberRepository;

	@InjectMocks
	private MemberService memberService;

	private Member member;

	@BeforeEach
	public void init() {

		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void getAllMembersTest() {
		List<Member> list = new ArrayList<Member>();
		Member memOne = new Member(1, "John", "2000-10-19", "howtodoinjava@gmail.com", "9874563210", "Pune",
				"Maharashtra", "JohnP", "JohnA123.", null);
		Member memTwo = new Member(2, "Jonn", "2000-10-19", "howtodoin@gmail.com", "9874553210", "Pune", "Maharashtra",
				"JonP", "Jonn123.", null);

		list.add(memOne);
		list.add(memTwo);

		when(memberRepository.getAllMembers()).thenReturn(list);

		// test
		List<Member> memList = memberService.getAllMembers();

		assertEquals(2, memList.size());
		verify(memberRepository, times(1)).getAllMembers();
	}

	@Test
	public void getMemberByIdTest() {
		when(memberRepository.getMemberDetailsById(1L)).thenReturn(new Member(1, "John", "2000-10-19",
				"howtodoinjava@gmail.com", "9874563210", "Pune", "Maharashtra", "JohnP", "JohnA123.", null));

		Member mem = memberService.getMemberDetailsById(1L);

		assertEquals("John", mem.getMemberName());
		assertEquals("2000-10-19", mem.getDob());
		assertEquals("howtodoinjava@gmail.com", mem.getEmailId());
		assertEquals("9874563210", mem.getContactNo());
		assertEquals("Pune", mem.getCity());
		assertEquals("Maharashtra", mem.getState());
		assertEquals("JohnP", mem.getUsername());
		assertEquals("JohnA123.", mem.getPassword());
		assertEquals(null, mem.getPlan());

	}

	@Test
	public void createMemberTest() {
		Member mem = new Member(1L, "John", "2000-10-19", "howtodoinjava@gmail.com", "9874563210", "Pune",
				"Maharashtra", "JohnP", "JohnA123.", null);

		memberService.addMember(mem);

		verify(memberRepository, times(1)).addMember(mem);
	}
	
	@Test
	public void deletMemberTest() {
		
		       
		        doNothing().when(memberRepository).deleteMemberById(1L);
		        memberService.deleteMemberById(1L);
		        verify(memberRepository, times(1)).deleteMemberById(1L);
		        verifyNoMoreInteractions(memberRepository);
		    }
}
