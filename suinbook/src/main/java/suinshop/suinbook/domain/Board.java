package suinshop.suinbook.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
public class Board {

    @Id
    @GeneratedValue
    private Integer id;

    private Integer counts;

    private String title;
    private String content;

    private Date createdTime;
}
