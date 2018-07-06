import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import { connect } from 'react-redux'

import './App.css'
import BooksListPage from './components/BooksListPage'
import { getBooks } from './actions/actions'
import BookPage from './components/BookPage/BookPage'


class App extends Component {
  constructor(props) {
    super(props)

    if (props.currentPage === 'BooksList') {
      props.getBooks()
    }
  }

  render() {
    let page = null

    switch (this.props.currentPage) {
      case 'BooksList':
        page = <BooksListPage booksCount={this.props.booksCount} />
        break
      default:
        page = <BookPage />
        break
    }

    return (
      <Container className="App">
        <Row>{page}</Row>
      </Container>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  getBooks: (startId, size) => {
    dispatch(getBooks(startId, size))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
