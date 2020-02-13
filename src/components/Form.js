import React  from 'react';

export const Form = () => {
  return(
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Что нужно запомнить?</label>
      <input type="text" className="form-control" placeholder="Введите название заметки" />
    </div>
   </form>
  );
}
   