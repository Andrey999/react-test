import React  from 'react';

export const Notes = ({ notes }) => {
  return(
  <ul className="list-group">
  { notes.map(note => {
    return <li 
      className="list-group-item notes__list" 
      key={ note.id }> 
      <div>
        <strong>{note.title}</strong>
        <span className="notes__date">{new Date().toLocaleDateString()}</span>
      </div>
      <button type="button" className="btn btn-outline-danger">&times;</button>
    </li>
  }) }
  </ul>
  );
}