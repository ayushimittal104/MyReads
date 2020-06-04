import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './searchPage.css';
import {get,update,search} from '../../BooksAPI';
import Section from "../section/section";
class Searchpage extends Component{
    constructor(props){
        super(props);
        this.state = {showSearchResult:"",noResult:false};
        this.search =  this.search.bind(this);
        this.changeShelf = this.changeShelf.bind(this);
    }

    changeShelf(book,toShelf){
    let shelf = toShelf === "Currently Reading" ? "currentlyReading" : toShelf === "Want to Read" ? "wantToRead" : toShelf === "Read" ? "read" :"None"
        console.log(shelf)
        update(book,shelf).then(response => 
            {console.log(response)
                get(book.id).then(r => console.log(r))
            })    
    }

    search(event){
        if (event.target.value.length > 0) {
            search(event.target.value).then(
            (response) => {
                console.log(response)
                response.length > 0 ? this.setState({showSearchResult:response,noResult:false}) : this.setState({noResult:true,showSearchResult:""})
            }
        );}
        else{
            this.setState({showSearchResult:"",noResult:false})
        }
    }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#888888" viewBox="0 0 20 20" height="30" width="40">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </svg>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.search}/>
                    </div>
                </div>
                {this.state.showSearchResult  &&
                <div className="search-books-results">
                    <Section  key="searchResult"  changeShelf ={this.changeShelf} books={this.state.showSearchResult}/>
                </div>}
                {this.state.noResult && <div className="noResult">No Result Found</div>}
            </div>
        )
    }
}
export default Searchpage;