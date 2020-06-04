import React from 'react';
import SingleBook from "../singleBook/singleBook";
import './section.css';

 const Section = (props) => {
    let title = props.title;
    let bookList = props.books.filter(function (book) {
        return book.imageLinks });
    return(
        <div className="section">
            {title  ? <h2 className="sectionTitle">{title}</h2> : ""}
            <ul className="bookList">
                {bookList.map(book =>{
                    return <SingleBook key={book.id} changeShelf={props.changeShelf} book={book}/>
                })}
            </ul>
        </div>
    )
 } 
 export default Section;