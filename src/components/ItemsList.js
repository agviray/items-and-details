import React from 'react';
import { connect } from 'react-redux';

// Using class based component here.
class ItemsList extends React.Component {
  renderList() {
    return this.props.items.map((item) => {
      return (
        <div className="item" key={item.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{item.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
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

