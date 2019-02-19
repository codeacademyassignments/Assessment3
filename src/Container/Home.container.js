import { connect } from 'react-redux';
import Home from '../Component/Home/Home.component';
import { initializeState } from '../Actions/BookLibrary.action';


const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: (books) => {
    dispatch(initializeState(books));
  },
});
const Cards = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Cards;
