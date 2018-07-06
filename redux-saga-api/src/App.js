import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPage from './components/MainPage/MainPage'
import BookPage from './components/BookPage/BookPage'
import { getBooksList } from './components/actions/actions'

const mapStateToProps = ({ currentPage }) => ({
  currentPage
})

const mapDispatchToProps = dispatch => ({
  getBooksList: () => dispatch(getBooksList())
})
// TODO: Dump mapStateToProps
class App extends Component {
  componentDidMount() {
    this.props.getBooksList()
  }

  render() {
    switch (this.props.currentPage) {
      case 'MainPage':
        this.page = <MainPage />
        break
      case 'BookPage':
        this.page = <BookPage />
        break
      default:
        this.page = null
    }

    return <div className="container">{this.page}</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
