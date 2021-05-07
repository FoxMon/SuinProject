package suinshop.suinbook.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import suinshop.suinbook.domain.Item.Item;

public interface PostRepository extends JpaRepository<Item, Long> {

    Page<Item> findAll(Pageable pageable);
}
