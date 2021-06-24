import axios from 'axios';
 
const BOARD_API_BASE_URL = "/api/v1";
 
class BoardService {
 
    getBoards(p_num) {
        return axios.get(BOARD_API_BASE_URL + "/boards/?p_num="+ p_num);
    }
 
    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL + "/create/board", board);
    }
 
    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL + "/board/" + no);
    }
 
    updateBoard(no, board) {
        return axios.put(BOARD_API_BASE_URL + "/update/" + no, board);
    }
 
    deleteBoard(no) {
        return axios.delete(BOARD_API_BASE_URL + "/delete/" + no);
    }
 
 
}
 
export default new BoardService();