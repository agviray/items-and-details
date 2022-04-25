import React from 'react';
import { connect } from 'react-redux';

// Using class based component here.
class ItemsList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        ItemsList
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemsList);

