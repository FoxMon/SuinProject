package suinshop.suinbook.api;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import suinshop.suinbook.domain.Cart;
import suinshop.suinbook.domain.Item.Item;
import suinshop.suinbook.domain.Item.Medicine;
import suinshop.suinbook.domain.Member;
import suinshop.suinbook.repository.CartRepository;
import suinshop.suinbook.repository.ItemRepository;
import suinshop.suinbook.repository.MemberRepository;
import suinshop.suinbook.service.ItemService;
import suinshop.suinbook.service.MemberService;

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

    @GetMapping("/api/v1/items/page")
    public List<Item> getPageItems() {

        int start = 0;
        int end = 20;

        return itemService.findPageItem(start, end);
    }

    @PostMapping("/api/v1/items/page/post")
    public List<Item> postPageItems(@RequestBody PageNumber pageNumber) {

        int start = (pageNumber.getPageNumber() - 1) * 20;
        int end = 20;

        return itemService.findPageItem(start, end);
    }

    @Data
    static class PageNumber {

        private int pageNumber;
    }
}
