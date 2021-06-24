import React, { Component } from 'react';
import BoardService from '../service/BoardService';

import './ReadBoardComponent.css';
 
class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            no: this.props.match.params.no,
            board: {}
        }
 
        this.goToUpdate = this.goToUpdate.bind(this);
 
    }
 
    componentDidMount() {
        BoardService.getOneBoard(this.state.no).then( res => {
            this.setState({board: res.data});
            console.log("get result => "+ JSON.stringify(res.data));
        });
 
        
    }
 
    goToList() {
        this.props.history.push('/boards');
    }
 
    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.no}`);
    }
 
    deleteView = async function () {
        if(window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(this.state.no).then( res => {
                console.log("delete result => "+ JSON.stringify(res));
                if (res.status == 200) {
                    this.props.history.push('/boards');
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });
 
        }
    }
 
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">
                            <div className = "row">
                                <label> Title </label> : {this.state.board.title}
                            </div>
 
                            <div className = "row">
                                <label> Contents </label> : <br></br>
                                <textarea value={this.state.board.contents} readOnly/> 
                            </div >
 
                            <div className = "row">
                                <label> MemberNo  </label>: 
                                {this.state.board.memberNo}
                            </div>
 
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                            <button className="btn btn-info" onClick={this.goToUpdate} style={{marginLeft:"10px"}}>글 수정</button>
                            
                            <button className="btn btn-danger" onClick={() => this.deleteView()} style={{marginLeft:"10px"}}>글 삭제</button>
                    </div>
                </div>
 
            </div>
        );
    }
}
 
 
export default ReadBoardComponent;