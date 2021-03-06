package suinshop.suinbook.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.repository.ItemRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    @Transactional
    public void saveItem(Item item) {

        itemRepository.save(item);
    }

//    @Transactional
//    public void saveMedicine(List<Medicine> medicines) {
//
//        itemRepository.loadMedicine(medicines);
//    }

    public List<Item> findItems() {

        return itemRepository.findAll();
    }

    public Item findOne(Long itemId) {

        return itemRepository.findOne(itemId);
    }

    public List<Item> findPageItem(int start, int end) {

        return itemRepository.findByPage(start, end);
    }
}
