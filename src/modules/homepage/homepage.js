import './homepage.css';
import React,{ Component } from 'react';
import {getAll,update} from '../../BooksAPI';
import Section from '../section/section';
import {Link} from 'react-router-dom';
import SearchPage from '../SearchPage/searchPage';
import './homepage.css';
class Homepage extends Component{
    constructor(props){
        super(props);
        this.state ={bookList:[],showSearchPage:false};
        this.fetchData = this.fetchData.bind(this);
        this.changeShelf = this.changeShelf.bind(this);
    }

    componentDidMount(){
        this.fetchData()
    }
    
    changeShelf(book,toShelf){
        let shelf = toShelf === "Currently Reading" ? "currentlyReading" : toShelf === "Want to Read" ? "wantToRead" : toShelf === "Read" ? "read" :"None"
            console.log(shelf)
            update(book,shelf).then(response => {
                console.log(response)
                this.fetchData()
            })    
        }

    fetchData(){
        getAll().then(books => {
            this.setState({bookList:books})
        })
    }

    render(){
        let shelf1Books = [];
        let shelf2Books = [];
        let shelf3Books = [];
        this.state.bookList.map((book) =>{
            book.shelf === "currentlyReading" ||  book.shelf ==="Currently Reading" ? shelf1Books.push(book) :  book.shelf === "wantToRead" ||  book.shelf === "Want to Read" ? shelf2Books.push(book) : shelf3Books.push(book);
            return  null
        })
        return (
            <div>
                {this.state.showSearchPage ? <SearchPage /> :
                <div>
                    <h1 className="heading">My Reads</h1>
                    <Section key="shelf1" title="Currently Reading" changeShelf={this.changeShelf} books={shelf1Books}/>
                    <Section  key="shelf2" title="Want to Read"  changeShelf={this.changeShelf} books={shelf2Books}/>
                    <Section  key="shelf3" title="Read" changeShelf={this.changeShelf} books={shelf3Books}/>
                    <Link className="addSvgDiv" to={"/search"} >
                    <svg className="addSvg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"  viewBox="0 0 50 50" width="60" height="60">
                        <circle style={{fill:"green"}} cx="25" cy="25" r="25"/>
                        <line style={{fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"}} x1="25" y1="13" x2="25" y2="38"/>
                        <line style={{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}} x1="37.5" y1="25" x2="12.5" y2="25"/>
                    </svg>
                    </Link>
                </div>
                }
            </div>
        )
    }
}
export default Homepage;