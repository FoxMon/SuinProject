import React, { Component } from 'react';
import BoardService from '../service/BoardService';

import './ListBoardComponent.css';
 
class ListBoardComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            p_num: 0,
            paging: {},
            boards: []
        }
 
        this.createBoard = this.createBoard.bind(this);
    }
 
    componentDidMount() {
        BoardService.getBoards(this.state.p_num).then((res) => {
            this.setState({ 
                p_num: res.data.pagingData.currentPageNum,
                paging: res.data.pagingData,
                boards: res.data.list});
        });
    }
 
    createBoard() {
        this.props.history.push('/create-board/_create');
    }
 
    readBoard(id) {
        this.props.history.push(`/read-board/${id}`);
    }
 
 
    listBoard(p_num) {
        console.log("pageNum : "+ p_num);
        BoardService.getBoards(p_num).then((res) => {
            console.log(res.data);
            this.setState({ 
                p_num: res.data.pagingData.currentPageNum,
                paging: res.data.pagingData,
                boards: res.data.list});
        });
    }
 
    viewPaging() {
        const pageNums = [];
 
        for (let i = this.state.paging.pageNumStart; i <= this.state.paging.pageNumEnd; i++ ) {
            pageNums.push(i);
        }
 
        return (pageNums.map((page) => 
        <li className="list_page" key={page.toString()} >
            <a className="page-link" onClick = {() => this.listBoard(page)}>{page}</a>
        </li>
        ));
        
    }
 
    isPagingPrev(){
        if (this.state.paging.prev) {
            return (
                <li className="list_page">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.currentPageNum - 1) )} tabindex="-1">Previous</a>
                </li>
            );
        }
    }
 
    isPagingNext(){
        if (this.state.paging.next) {
            return (
                <li className="list_page">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.currentPageNum + 1) )} tabIndex="-1">Next</a>
                </li>
            );
        }
    }
 
    isMoveToFirstPage() {
        if (this.state.p_num != 1) {
            return (
                <li className="list_page">
                    <a className="page-link" onClick = {() => this.listBoard(1)} tabIndex="-1">Move to First Page</a>
                </li>
            );
        }
    }
 
    isMoveToLastPage() {
        if (this.state.p_num != this.state.paging.pageNumCountTotal) {
            return (
                <li className="list_page">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.pageNumCountTotal) )} tabIndex="-1">LastPage({this.state.paging.pageNumCountTotal})</a>
                </li>
            );
        }
    }
 
    render() {
        return (
            <div className = "list_board">
                <h2 className = "list_title"> Boards List</h2>
                <div className ="list_board_row">
                    <table className="list_board_table">
                        <thead>
                            <tr className = "list_board_table_head">
                                <th>No</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Date</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.id}>
                                        <td> {board.id} </td>
                                        <td> <a onClick = {() => this.readBoard(board.id)}>{board.title} </a></td>
                                        <td> {board.memberNo} </td>
                                        <td> {board.createdTime} </td>
                                        <td> {board.counts} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className ="list_board_row">
                    <nav className = "list_navbar">
                        <ul className="list_page">
                            {
                                this.isMoveToFirstPage()
                            }
                            {
                                this.isPagingPrev()
                            }
                            {
                                this.viewPaging()
                            }
                            {
                                this.isPagingNext()
                            }
                            {
                                this.isMoveToLastPage()
                            }
                        </ul>
                    </nav>
                    <div className = "list_board_row">
                        <button className="list_board_button" onClick={this.createBoard}>Post</button>
                    </div>
                </div>
            </div>
        );
    }
 
}
 
export default ListBoardComponent;