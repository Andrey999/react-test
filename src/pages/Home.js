import React, { Fragment }  from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const Home = () => {
  const notes = new Array(3)
        .fill('note').map((_, index) => ({ id: index, title: `Note: ${index + 1}` }));
  return(
    <Fragment>
      <Form />
      <hr />

      <Notes 
        notes={notes} 
      />
    </Fragment>
  );
}