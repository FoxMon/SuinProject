package suinshop.suinbook.repository;


import lombok.Data;
import suinshop.suinbook.domain.Order;
import suinshop.suinbook.domain.OrderStatus;

import java.time.LocalDateTime;

@Data
public class OrderSimpleQueryDto {

    private Long orderId;
    private String name; // lazy 초기화
    private LocalDateTime orderDate;
    private OrderStatus orderStatus;
//        private Address address;

    public OrderSimpleQueryDto(Order order) {
        this.orderId = order.getId();
        this.name = order.getMember().getName();
        this.orderDate = order.getOrderDate();
        this.orderStatus = order.getStatus();
//            this.address = order.getDelivery().getAddress();
    }

    public OrderSimpleQueryDto(Long orderId, String name, LocalDateTime orderDate, OrderStatus orderStatus) {
        this.orderId = orderId;
        this.name = name;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
//            this.address = order.getDelivery().getAddress();
    }
}
