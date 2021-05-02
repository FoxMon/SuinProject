package suinshop.suinbook.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Address;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.domain.Order;
import suinshop.suinbook.domain.OrderStatus;
import suinshop.suinbook.exception.NotEnoughStockException;
import suinshop.suinbook.repository.OrderRepository;

import javax.persistence.EntityManager;

import static org.junit.Assert.fail;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class OrderServiceTest {

    @Autowired
    EntityManager em;

    @Autowired
    OrderService orderService;

    @Autowired
    OrderRepository orderRepository;

    @Test
    public void 상품주문() throws Exception {

        // given
        Member member = new Member();
        member.setName("회원1");
        member.setAddress(new Address("서울", "강가", "123-123"));
        em.persist(member);

        Medicine drug = new Medicine();
        drug.setName("약");
        drug.setPrice(10000);
        drug.setStockQuantity(10);
        em.persist(drug);

        int orderCount = 2;

        // when
        Long orderId = orderService.order(member.getId(), drug.getId(), orderCount);

        // then
        Order getOrder = orderRepository.findOne(orderId);

        Assert.assertEquals("상품 주문시 상태는 ORDER", OrderStatus.ORDER, getOrder.getStatus());
        Assert.assertEquals("주문한 상품 종류 수가 정확해야 한다.", 1, getOrder.getOrderItems().size());
        Assert.assertEquals("주문 가격은 가격 * 수량 이다", 10000 * orderCount, getOrder.getTotalPrice());
        Assert.assertEquals("주문 수량만큼 재고가 줄어야 한다.", 8, drug.getStockQuantity());
    }

    @Test(expected = NotEnoughStockException.class)
    public void 상품주문_재고수량초과() throws Exception {

        // given
        Member member = new Member();
        member.setName("회원1");
        member.setAddress(new Address("서울", "강가", "123-123"));
        em.persist(member);

        Medicine drug = new Medicine();
        drug.setName("약");
        drug.setPrice(10000);
        drug.setStockQuantity(10);
        em.persist(drug);

        int orderCount = 11;

        // when
        orderService.order(member.getId(), drug.getId(), orderCount);

        // then
        fail("재고 수량 부족 예외가 발생해야 한다.");
    }

    @Test
    public void 주문취소() throws Exception {

        // given
        Member member = new Member();
        member.setName("회원1");
        member.setAddress(new Address("서울", "강가", "123-123"));
        em.persist(member);

        Medicine drug = new Medicine();
        drug.setName("약");
        drug.setPrice(10000);
        drug.setStockQuantity(10);
        em.persist(drug);

        int orderCount = 2;

        Long orderId = orderService.order(member.getId(), drug.getId(), orderCount);

        // when
        orderService.cancelOrder(orderId);

        // then
        Order getOrder = orderRepository.findOne(orderId);

        Assert.assertEquals("주문 취소시 상태는 CANCEL이다.", OrderStatus.CANCEL, getOrder.getStatus());
        Assert.assertEquals("주문이 취소된 상품은 그만큼 재고가 증가해야 한다.", 10, drug.getStockQuantity());
    }
}
