package suinshop.suinbook.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Cart;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@RequiredArgsConstructor
public class CartRepository {

    private final EntityManager em;

    @Transactional
    public void save(Cart cart) {

        em.persist(cart);
    }

    public Cart findOne(Long id) { // find cart by id

        return em.find(Cart.class, id);
    }
}
