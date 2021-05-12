package suinshop.suinbook.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.encode.EncryptHandler;
import suinshop.suinbook.jwt.JwtTokenProvider;
import suinshop.suinbook.repository.MemberRepository;
import suinshop.suinbook.service.MemberService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("/api/v1/members")
    public List<Member> membersV1() {

        return memberService.findMembers();
    }

    @PostMapping("/api/v1/members/signin")
    public CheckMemberResponse memberLogin(@RequestBody Member member) {

        Member findMember =  memberService.login(member);
        CheckMemberResponse checkMemberResponse = new CheckMemberResponse();

        if(!passwordEncoder.matches(member.getPassword(), findMember.getPassword())) {
            return checkMemberResponse;
        }

        return new CheckMemberResponse(findMember.getName(), findMember.getPassword(), true);
    }

    @PostMapping("/api/v1/members/signup")
    public CreateMemberResponse saveMember(@RequestBody Member member) {

        Long id = memberService.join(member);

        return new CreateMemberResponse(id);
    }

    @PostMapping("/api/v1/members/login")
    public String login(@RequestBody Member member) {

        Member findmember = memberService.login(member);

        if(!passwordEncoder.matches(member.getPassword(), findmember.getPassword())) {
            throw new IllegalArgumentException("unknown user");
        }

        return jwtTokenProvider.createToken(findmember.getUsername());
    }

    @Data
    @AllArgsConstructor
    static class Result<T> {

        private T data;
    }

    @Data
    @AllArgsConstructor
    public static class MemberDto {

        private String name;
        private String password;
    }

    @Data
    static class CreateMemberRequest {

        // name, email, etc...
        private String name;
    }

    @Data
    static class CreateMemberResponse {

        private Long id;

        public CreateMemberResponse(Long id) {

            this.id = id;
        }
    }

    @Data
    static class CheckMemberResponse {

        private String name;
        private String password;
        
        private boolean loginFlag;

        public CheckMemberResponse() {

            this.loginFlag = false;
        }

        public CheckMemberResponse(String name, String password, boolean loginFlag) {

            this.name = name;
            this.password = password;
            this.loginFlag = loginFlag;
        }
    }
}
