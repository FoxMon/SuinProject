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

    CreateMemberResponse createMemberResponse;

    @GetMapping("/api/v1/members")
    public List<Member> membersV1() {

        return memberService.findMembers();
    }

    /**
     * 이거 대신 members/login씀
     * */
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
        createMemberResponse = new CreateMemberResponse(findmember.getId());

        if(!passwordEncoder.matches(member.getPassword(), findmember.getPassword())) {
            throw new IllegalArgumentException("unknown user");
        }

        return jwtTokenProvider.createToken(findmember.getUsername());
    }

    @PostMapping("/api/v1/members/user")
    public Member user(@RequestBody Member member) {

        Member userInfo = memberService.findNameOne(member);

        return userInfo;
    }

    @PostMapping("/api/v1/members/update")
    public UpdateMemberResponse update(@RequestBody Member member) {

        Member updateMember = memberService.updateMember(member);

        return new UpdateMemberResponse(updateMember.getName(), updateMember.getEmail());
    }

    @GetMapping("/api/v1/members/id")
    public Long memberId() {

        return createMemberResponse.getId();
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

    @Data
    static class UpdateMemberResponse {

        private String name;
        private String email;

        public UpdateMemberResponse(String name, String email) {

            this.name = name;
            this.email = email;
        }
    }
}
