import React,{ Component } from "react";
import {starsvg} from '../rating';
import './singleBook.css';

class SingleBook extends Component{
    constructor(props){
        super(props);
        this.state = {selectedShelf:this.props.book.shelf}
        this.clickOptions=["Currently Reading","Want to Read","Read","None"];
        this.changeShelf = this.changeShelf.bind(this);
    }

    changeShelf(event){
        let toShelf = event.target.value;
        this.setState({selectedShelf:toShelf});
        this.props.changeShelf(this.props.book,toShelf);
    }
    render(){
        return(
            <li className="book">
                <div className="imgDiv">
                    <img className="bookImg"src={this.props.book.imageLinks.smallThumbnail} alt = "" /> 
                    <select name={this.state.selectedShelf} value={this.state.selectedShelf} onChange={this.changeShelf}>
                        <option  disabled={true}>Move to...</option>
                        {this.clickOptions.map((option) =>{
                            return(
                            <option key={option} value={option}>{option}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="contentDiv">
                    <div className="bookTitle"> {this.props.book.title}</div>
                    {this.props.book.authors ? <ul className="bookAuthors">{this.props.book.authors.map((author,index) => <li key={"author"+ index}>{author}</li> )}</ul> : ""}
                    {this.props.book.averageRating ? starsvg(this.props.book.id,this.props.book.averageRating) : ""}
                </div>
        </li>
        )
    }
}
export default SingleBook;