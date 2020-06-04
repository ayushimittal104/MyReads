import React,{Component} from 'react';
import './section.css';
import SingleBook from "../singleBook/singleBook";
class Section extends Component{
    constructor(props){
        super(props)
        this.title = this.props.title ? this.props.title : "None";
    }
    render(){
        let bookList = this.props.books.filter(function (book) {
        return book.imageLinks });
        return(
            <div className="section">
                {this.title !=="None" ? <h2 className="sectionTitle">{this.title}</h2> : ""}
                <ul className="bookList">
                    {bookList.map(book =>{
                        return <SingleBook key={book.id} changeShelf={this.props.changeShelf} title={this.title} book={book}/>
                    })}
                </ul>
            </div>
        )
    }
}
export default Section