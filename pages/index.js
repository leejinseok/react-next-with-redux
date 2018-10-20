import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
import { fetchPosts } from '../actions/postActions';
import { toggleSidebar } from '../actions/uiActions';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req

    return {}
  }

  componentDidMount () {
    this.props.fetchPosts();
  }

  componentWillUnmount () {

  }

  render () {
    const { ui, posts } = this.props;
    const { toggleSidebar } = this.props;
    return (
      <div>
        <Header />
        { ui.sidemenu ? <h1>hello sidemenu</h1> : <h1> bye sidemenu </h1> }
        <button onClick={toggleSidebar}>
          사이드바
        </button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { ui, posts } = state
  return { ui, posts }
}

const mapDispatchProps = dispatch => ({
  toggleSidebar: () => { dispatch(toggleSidebar()) },
  fetchPosts: () => { dispatch(fetchPosts())  }
});

export default connect(mapStateToProps, mapDispatchProps)(Index)
