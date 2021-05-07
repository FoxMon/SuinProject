package suinshop.suinbook.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.encode.EncryptHandler;
import suinshop.suinbook.repository.MemberRepository;

import java.util.List;

@Service
@Transactional(readOnly = true) // optimization
@RequiredArgsConstructor
public class MemberService {

//    @Autowired
    private final MemberRepository memberRepository;

    @Autowired
    private EncryptHandler encryptHandler;

    /**
     * signup
     * */
    @Transactional // join -> readonly false
    public Long join(Member member) {

        validateDuplicateMember(member); // check overlap member
        member.setPassword(encryptHandler.encrypt(member.getPassword()));
        memberRepository.save(member);

        return member.getId();
    }

    private void validateDuplicateMember(Member member) {

        // exception
        // 근데 이거는 동시에 같은 이름으로 가입 시, 문제가 될 수 있음. 한 번 더 방지해 줘야함.
        List<Member> findMembers = memberRepository.findByName(member.getName()); // check overlap name?

        if(!findMembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    // get all member
    public List<Member> findMembers() {

        return memberRepository.findAll();
    }

    // find member
    public Member findOne(Long id) {

        return memberRepository.findOne(id);
    }

    public Member login(Member member) {

        Member findMember = memberRepository.findOneByName(member.getName());

        if(findMember == null) {

            return null;
        }

        if(encryptHandler.isMathch(member.getPassword(), findMember.getPassword())) {

            System.out.println(encryptHandler.isMathch(member.getPassword(), findMember.getPassword()));
            findMember.setPassword(member.getPassword());

            return findMember;
        } else {

            member.setPassword("error");

            return member;
        }
    }

    @Transactional
    public void update(Long id, String name) {

        Member member = memberRepository.findOne(id);
        member.setName(name);
    }
}
