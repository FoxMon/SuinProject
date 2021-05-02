package suinshop.suinbook.domain;

import lombok.Getter;
import lombok.Setter;
import suinshop.suinbook.domain.Item.Item;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class OrderItem {

    @Id
    @GeneratedValue
    @Column(name = "order_item_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    private int orderPrice;
    private int count;

    /**
     * create order item
     * */
    public static OrderItem createOrderItem(Item item, int orderPrice, int count) {

        OrderItem orderItem = new OrderItem();
        orderItem.setItem(item);
        orderItem.setOrderPrice(orderPrice);
        orderItem.setCount(count);

        item.removeStock(count);

        return orderItem;
    }

    /**
     * business logic
     * */
    public void cancel() { // add stock

        getItem().addStock(count);
    }

    public int getTotalPrice() {

        return getOrderPrice() * getCount();
    }
}
