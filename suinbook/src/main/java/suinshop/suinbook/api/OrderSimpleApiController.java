package suinshop.suinbook.api;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import suinshop.suinbook.domain.Cart;
import suinshop.suinbook.domain.Delivery;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.domain.Order;
import suinshop.suinbook.repository.CartRepository;
import suinshop.suinbook.repository.MemberRepository;
import suinshop.suinbook.repository.OrderRepository;
import suinshop.suinbook.repository.OrderSimpleQueryDto;
import suinshop.suinbook.service.OrderService;

import java.util.List;
import java.util.stream.Collectors;

/**
 * xToOne(Many to One, One to One)
 * Order
 * Order -> Member
 * Order -> Delivery
 * */

@RestController
@RequiredArgsConstructor
public class OrderSimpleApiController {

    private final OrderService orderService;
    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;

    @GetMapping("/api/v1/orders")
    public List<OrderSimpleQueryDto> odersV3() {

        List<OrderSimpleQueryDto> result = orderRepository.findAllWithMemberDelivery().stream()
                .map(o -> new OrderSimpleQueryDto(o))
                .collect(Collectors.toList());

        return result;
    }

    @PostMapping("/api/v1/order/cart")
    public CartResponse orderCart(@RequestBody Cart cart) {

        cart.setMemberId(cart.getMemberId());
        cartRepository.save(cart);

        System.out.println("memberId : " + cart.getMemberId() + " itemId : " + cart.getItemId() + " count : " + cart.getCount());
        Long orderId = orderService.order(cart.getMemberId(), cart.getItemId(), cart.getCount());

        return new CartResponse(orderId);
    }

    @Data
    static class CartResponse {

        private Long orderId;

        public CartResponse(Long orderId) {

            this.orderId = orderId;
        }
    }
}
