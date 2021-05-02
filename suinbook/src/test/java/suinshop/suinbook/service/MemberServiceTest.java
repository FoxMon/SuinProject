package suinshop.suinbook.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.repository.MemberRepository;

import javax.persistence.EntityManager;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired
    MemberService memberService;

    @Autowired
    MemberRepository memberRepository;

    @Test
    // @Rollback(false) // -> query insert check
    public void 회원가입() throws Exception { // commit -> insert == rollback x

        // given
        Member member = new Member();
        member.setName("Kim");

        // when
        Long savedId = memberService.join(member);

        // then
        // em.flush(); // flush -> db, insert
        assertEquals(member, memberRepository.findOne(savedId));
    }

    @Test(expected = IllegalStateException.class)
    public void 중복_회원_예외() throws Exception {

        // given
        Member member1 = new Member();
        member1.setName("Kim");

        Member member2 = new Member();
        member2.setName("Kim");

        // when
        memberService.join(member1);
        memberService.join(member2); // exception

        // then
        Assert.fail("Exception here.");
    }
}
