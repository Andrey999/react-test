import React, {useState, useContext}  from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const submitHandler = event => {
    event.preventDefault();

    if(value.trim()) {
      alert.show(' Заметка создана', 'success');
      setValue('');
    } else {
      alert.show(' Введите название заметки');
    }  
  }

  return(
  <form onSubmit={submitHandler}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1" >Что нужно запомнить?</label>
      <input type="text" className="form-control"  value={value} onChange={e=>setValue(e.target.value)} placeholder="Введите название заметки" />
    </div>
   </form>
  );
}
   