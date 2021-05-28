package suinshop.suinbook.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Cart {

    @Id
    @GeneratedValue
    private Long id;

    private Long itemId;
    private Long memberId;

    private int count;

    private String memberName;
}
