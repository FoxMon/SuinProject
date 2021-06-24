package suinshop.suinbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import suinshop.suinbook.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {

    public final static String SELECT_BOARD_LIST_PAGED = ""
            + "SELECT "
            + "id,"
            + "title,"
            + "content,"
            + "created_time,"
            + "counts"
            + " FROM board WHERE 0 < id "
            + "ORDER BY id DESC LIMIT ?1, ?2";


    @Query(value = SELECT_BOARD_LIST_PAGED, nativeQuery = true)
    List<Board> findFromTo(
            final Integer objectStartNum,
            final Integer objectEndNum);
}
