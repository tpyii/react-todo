import React from 'react';
import './index.css';

export default class TodoListItem extends React.Component {
  render() {
    const { label, important, done, deleteItem, onBtnImportantClick, onLabelClick } = this.props;

    let labelClassNames = 'todo-list-item';
    if(done)
      labelClassNames += ' done';
    if(important)
      labelClassNames += ' important';

    let btnPrimaryClassNames = 'btn btn-outline-primary';
    if(important)
      btnPrimaryClassNames += ' active';

    return (
      <div className="d-flex justify-content-between align-items-center">
        <span className={labelClassNames}
              onClick={onLabelClick}>
          { label }
        </span>
        <div className="btn-group">
          <button type="button" 
                  className={btnPrimaryClassNames} 
                  title="Mark as important"
                  onClick={onBtnImportantClick}>
            <i className="fa fa-exclamation" aria-hidden="true"></i>
          </button>
          <button type="button" 
                  className="btn btn-outline-danger" 
                  title="Delete"
                  onClick={deleteItem}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  }
}
