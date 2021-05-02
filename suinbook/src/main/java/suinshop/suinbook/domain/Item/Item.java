package suinshop.suinbook.domain.Item;

import lombok.Getter;
import lombok.Setter;
import suinshop.suinbook.exception.NotEnoughStockException;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "dtype")
public abstract class Item {

    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private String standard; // 규격

    private int price;
    private int stockQuantity;

    /**
     * business logic
     * */
    public void addStock(int quantity) { // add stock

        this.stockQuantity += quantity;
    }

    public void removeStock(int quantity) { // not enough stock

        int restStock = this.stockQuantity - quantity;

        if(restStock < 0) {
            throw new NotEnoughStockException("need more stock");
        }

        this.stockQuantity = restStock;
    }
}
