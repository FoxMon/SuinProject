package suinshop.suinbook.api;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import suinshop.suinbook.service.MemberService;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    @Data
    static class CreateMemberRequest {

        // name, email, etc...
    }
}
