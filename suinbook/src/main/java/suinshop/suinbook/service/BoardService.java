package suinshop.suinbook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import suinshop.suinbook.domain.Board;
import suinshop.suinbook.exception.ResourceNotFoundException;
import suinshop.suinbook.page.PageUtil;
import suinshop.suinbook.repository.BoardRepository;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public int findAllCount() {
        return (int) boardRepository.count();
    }

    // get paging boards data
    public ResponseEntity<Map> getPagingBoard(Integer p_num) {

        Map result = null;

        PageUtil pu = new PageUtil(p_num, 5, 5); // ($1:표시할 현재 페이지, $2:한페이지에 표시할 글 수, $3:한 페이지에 표시할 페이지 버튼의 수 )

        List<Board> list = boardRepository.findFromTo(pu.getObjectStartNum(), pu.getObjectCountPerPage());
        pu.setObjectCountTotal(findAllCount());
        pu.setCalcForPaging();

        System.out.println("p_num : "+p_num);
        System.out.println(pu.toString());

        if (list == null || list.size() == 0) {

            return null;
        }

        result = new HashMap<>();
        result.put("pagingData", pu);
        result.put("list", list);

        return ResponseEntity.ok(result);
    }

    // get boards data
    public List<Board> getAllBoard() {

        return boardRepository.findAll();
    }

    // get board by id
    public ResponseEntity<Board> getBoard(Integer no) {

        Board board = boardRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist board data by no : ["+no+"]"));

        return ResponseEntity.ok(board);
    }

    // create board
    public Board createBoard(Board board) {

        board.setCreatedTime(new Date());
        return boardRepository.save(board);
    }

    // update board
    public ResponseEntity<Board> updateBoard(Integer no, Board updatedBoard) {

        Board board = boardRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist board data by no : ["+no+"]"));
        board.setTitle(updatedBoard.getTitle());
        board.setContent(updatedBoard.getContent());

        Board endUpdatedBoard = boardRepository.save(board);

        return ResponseEntity.ok(endUpdatedBoard);
    }

    // delete board
    public ResponseEntity<Map<String, Boolean>> deleteBoard(Integer no) {

        Board board = boardRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist board data by no : ["+no+"]"));

        boardRepository.delete(board);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted board data by id : ["+no+"]", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
