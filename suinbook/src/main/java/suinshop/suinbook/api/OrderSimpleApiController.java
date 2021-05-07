package suinshop.suinbook.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import suinshop.suinbook.repository.OrderRepository;
import suinshop.suinbook.repository.OrderSimpleQueryDto;

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

    private final OrderRepository orderRepository;

    @GetMapping("/api/v1/orders")
    public List<OrderSimpleQueryDto> odersV3() {

        List<OrderSimpleQueryDto> result = orderRepository.findAllWithMemberDelivery().stream()
                .map(o -> new OrderSimpleQueryDto(o))
                .collect(Collectors.toList());

        return result;
    }
}
