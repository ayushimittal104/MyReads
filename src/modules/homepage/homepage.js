import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {update} from '../../BooksAPI';
import Section from '../section/section';
import './homepage.css';
class Homepage extends Component{
    constructor(props){
        super(props);
        this.state ={bookList:[]};
        this.fetchData = this.fetchData.bind(this);
        this.changeShelf = this.changeShelf.bind(this);
    }

    componentDidMount(){
        this.fetchData()
    }
    
    changeShelf(book,toShelf){
        let shelf = toShelf === "Currently Reading" ? "currentlyReading" : toShelf === "Want to Read" ? "wantToRead" : toShelf === "Read" ? "read" :"None"
            update(book,shelf).then(() => {
                this.fetchData()
        })
    }
    
    fetchData(){
        this.props.fetchData().then(books => {
            let bookList = books.map(book =>{
                book.shelf = book.shelf === "currentlyReading" ? "Currently Reading"  : book.shelf === "wantToRead" ? "Want to Read"  : "Read";
                return book
            })
            this.setState({bookList:bookList})
        })
    }

    render(){
        let shelf1Books = [];
        let shelf2Books = [];
        let shelf3Books = [];
        this.state.bookList.map((book) =>{
            book.shelf ==="Currently Reading" ? shelf1Books.push(book) :  book.shelf === "Want to Read" ? shelf2Books.push(book) : shelf3Books.push(book);
            return  null
        })
        return (
            <div>
                <div>
                    <h1 className="heading">My Reads</h1>
                    {shelf1Books.length > 0 ? <Section key="shelf1" title="Currently Reading" changeShelf={this.changeShelf} books={shelf1Books}/> : ""}
                    {shelf2Books.length > 0 ? <Section  key="shelf2" title="Want to Read"  changeShelf={this.changeShelf} books={shelf2Books}/> : ""}
                    {shelf3Books.length > 0 ? <Section  key="shelf3" title="Read" changeShelf={this.changeShelf} books={shelf3Books}/> : ""}
                    <Link className="addSvgDiv" to={"/search"} >
                    <svg className="addSvg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"  viewBox="0 0 50 50" width="60" height="60">
                        <circle style={{fill:"green"}} cx="25" cy="25" r="25"/>
                        <line style={{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"}} x1="25" y1="13" x2="25" y2="38"/>
                        <line style={{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}} x1="37.5" y1="25" x2="12.5" y2="25"/>
                    </svg>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Homepage;