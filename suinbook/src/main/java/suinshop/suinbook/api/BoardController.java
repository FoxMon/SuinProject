package suinshop.suinbook.api;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import suinshop.suinbook.domain.Board;
import suinshop.suinbook.service.BoardService;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    // get all boards + paging
    @GetMapping("/api/v1/boards")
    public ResponseEntity<Map> getAllBoards(@RequestParam(value = "p_num", required=false) Integer p_num) {

        if (p_num == null || p_num <= 0) {

            p_num = 1;
        }

        return boardService.getPagingBoard(p_num);
    }

    // get board
    @GetMapping("/api/v1/board/{no}")
    public ResponseEntity<Board> getBoardByNo(@PathVariable Integer no) {

        return boardService.getBoard(no);
    }

    // create board
    @PostMapping("/api/v1/create/board")
    public Board createBoard(@RequestBody Board board) {

        return boardService.createBoard(board);
    }

    // update board
    @PutMapping("/api/v1/update/{no}")
    public ResponseEntity<Board> updateBoardByNo(@PathVariable Integer no, @RequestBody Board board) {

        return boardService.updateBoard(no, board);
    }

    // delete board
    @DeleteMapping("/api/v1/delete/{no}")
    public ResponseEntity<Map<String, Boolean>> deleteBoardByNo(@PathVariable Integer no) {

        return boardService.deleteBoard(no);
    }
}
