package suinshop.suinbook.repository;

import lombok.Getter;
import lombok.Setter;
import suinshop.suinbook.domain.OrderStatus;

@Getter
@Setter
public class OrderSearch {

    private String memberName; // member name
    private OrderStatus orderStatus; // order, cancel
}
