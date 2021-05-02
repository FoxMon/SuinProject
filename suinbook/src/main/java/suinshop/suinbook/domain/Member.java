package suinshop.suinbook.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 필요한 setter만 남겨두고 나중엔 제거.
 * */

@Entity
@Getter
@Setter
public class Member {

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;
    private String password;
    private String phone_num1;
    private String phone_num2;
    private String email;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "member") // 주인잡힘
    private List<Order> orders = new ArrayList<>();
}
