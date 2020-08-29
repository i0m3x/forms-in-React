//Ch. 5 Fetching Data 2:06

import React, { Component } from 'react'
import {render} from 'react-dom'

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "Moby Dick", "author": "Ernest Hemingway", "pages": 4800},
  {"title": "Catcher in the Rye", "author": "J.D. Salinger", "pages": 220}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

const Hiring = () => 
  <div>
    <p>The library is hiring. Go to www.library.org for more.</p>
  </div>
const NotHiring = () =>
  <div>
    <p>The library is not hiring. Go to indeed.jobs for more.</p>
  </div>


class Library extends React.Component {
  state = { 
    open: true,
    freeBookmark: true, 
    hiring: false,
    data: [],
    loading: false,
  }
  componentDidMount(){
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json()) //consult Evan on why it is one...
      .then(data => this.setState({data: data, loading: false}))
  }
  componentDidUpdate() { //similar to Vue component: watched
    console.log("The component just updated")
  }
  
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {  //FIRST place

  const {books} = this.props
  return (
    <div>
      {this.state.hiring ? <Hiring /> : <NotHiring />}
      {this.state.loading
      ? "loading"
      : <div>
        {this.state.data.map(product => {
          return (
            <div key={product.id}>
              <h3>Library Product of the week!</h3>
              <h4>{product.name}</h4>
              <img alt={product.name} src={product.image} height={100}/>
            </div>
          )
        })}
        </div>}
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
      <button onClick={this.toggleOpenClosed}>Change</button>
      {books.map(
        (book, i) => 
          <Book 
          key={i}
          title={book.title} 
          author={book.author} 
          pages={book.pages}
          freeBookmark={this.state.freeBookmark}/>
      )}
      
    </div>
    )
  }

}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)
