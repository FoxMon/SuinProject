package suinshop.suinbook.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.domain.Item.Medicine;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ItemRepository {

    private final EntityManager em;

    public void save(Item item) { // save

        if(item.getId() == null) {
            em.persist(item);
        } else {
            em.merge(item); // update
        }
    }

//    public void loadMedicine(List<Medicine> medicines) {
//
//        em.persist(medicines);
//    }

    public Item findOne(Long id) { // find item by id

        return em.find(Item.class, id);
    }

    public List<Item> findAll() { // find all item

        return em.createQuery("select i from Item i", Item.class)
                .getResultList();
    }
}
