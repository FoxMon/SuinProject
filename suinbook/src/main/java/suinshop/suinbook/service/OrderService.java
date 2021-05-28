package suinshop.suinbook.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.*;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.repository.ItemRepository;
import suinshop.suinbook.repository.MemberRepository;
import suinshop.suinbook.repository.OrderRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    /**
     * order
     * */

    @Transactional
    public Long order(Long memberId, Long itemId, int count) {

        // lookup entity
        Member member = memberRepository.findOne(memberId);
        Item item = itemRepository.findOne(itemId);

        // create delivery
        Delivery delivery = new Delivery();
//        delivery.setAddress(member.getAddress());
        delivery.setFullAddress(member.getFullAddress());
        delivery.setStatus(DeliveryStatus.ORDER);

        // create order item
        OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice(), count);

        // 주문 생성
        Order order = Order.createOrder(member, delivery, orderItem);

        // 주문 저장
        orderRepository.save(order);

        return order.getId();
    }

    /**
     * order cancel
     * */
    @Transactional
    public void cancelOrder(Long orderId) {

        // lookup entity
        Order order = orderRepository.findOne(orderId);

        // order cancel
        order.cancel();
    }
}
