package suinshop.suinbook.api;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.service.ItemService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemSimpleApiController {

    private final ItemService itemService;

    @GetMapping("/api/v1/items")
    public List<Item> items() {

        return itemService.findItems();
    }

    @PostMapping("/api/v1/items/detail")
    public Item postItems(@RequestBody Medicine item) {

        Item findItem = itemService.findOne(item.getId());

        return findItem;
    }

    @GetMapping("/api/v1/items/detail")
    public Item getItems(@RequestBody Medicine item) {

        return itemService.findOne(item.getId());
    }

    @PostMapping("/api/v1/items/cart")
    public Item postCartItems(@RequestBody Medicine item) {

        return itemService.findOne(item.getId());
    }

    @GetMapping("/api/v1/items/cart")
    public Item getCartItems(@RequestBody Medicine item) {

        return itemService.findOne(item.getId());
    }
}
