package suinshop.suinbook.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.repository.ItemRepository;


import javax.persistence.EntityManager;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class PagingTest {

    @Autowired
    EntityManager em;

    @Autowired
    ItemRepository itemRepository;

    @Test
    public void paging() {

        int start = 0;
        int end = start + 20;

        List<Item> items = itemRepository.findByPage(start, end);

        for(int i = 0; i < items.size(); i++) {
            System.out.println("items : " + items.get(i).getName());
        }
    }
}
