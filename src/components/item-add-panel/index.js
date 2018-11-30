import React from 'react';

const ItemAddPanel = ({ addItem }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="input-group mr-2">
        <input type="text" className="form-control" />
      </div>
      <div>
        <button className="btn btn-outline-secondary"
                onClick={() => addItem('Hello World')}>Add</button>
      </div>
    </div>
  );
}

export default ItemAddPanel;
