import React from 'react';
import ItemStatusFilter from '../item-status-filter/';

const SearchPanel = () => {
  return (
    <div className="d-flex mb-2">
      <div className="input-group mr-2">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <ItemStatusFilter />
    </div>
  );
}

export default SearchPanel;
