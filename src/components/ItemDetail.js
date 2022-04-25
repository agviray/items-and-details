import React from 'react';
import { connect } from 'react-redux';

const ItemDetail = ({ item }) => {
  if (!item) {
    return (
      <div>Please select an item</div>
    );
  }

  return(
    <div>
      {item.title}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.selectedItem
  }
}

export default connect(mapStateToProps)(ItemDetail);