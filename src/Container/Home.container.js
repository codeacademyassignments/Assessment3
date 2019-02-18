import { connect } from 'react-redux';
import Home from '../Component/Home/Home.component';
import { setState, initializeState } from '../Actions/BookLibrary.action';


const mapStateToProps = state => ({
  blogs: state.blogs,
  fetchState: state.fetchState,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: (blogs) => {
    // blogs.forEach((blog) => {
    //   dispatch(addBlog(blog));
    // });
    dispatch(initializeState(blogs));
  },
  onDataStoreComplete: () => {
    dispatch(setState());
  },
});
const Cards = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Cards;
