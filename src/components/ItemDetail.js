import React from 'react';
import { connect } from 'react-redux';

const ItemDetail = ({ item }) => {
  if (!item) {
    return (
      <div>Please select an item</div>
    );
  }

  // - Change JSX text depending on what type of item 
  //   details are being shown.
  // - Temporarily showing song details, so text is written 
  //   to fit that.
  return(
    <div>
      <h3>Details for:</h3>
      <p>
        Song title: {item.title}
        <br></br>
        Duration: {item.duration}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.selectedItem
  }
}

export default connect(mapStateToProps)(ItemDetail);