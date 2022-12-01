import React, { useState, useEffect } from 'react';
import produce from 'immer';
import { useDispatch, useSelector } from 'react-redux';

import { addList, fetchApiFromPlaceholder } from './redux/reducer';

function List() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchApiFromPlaceholder());
  });

  const chnageInput = (event) => {
    setText(event.target.value);
  };

  const handleChange = () => {
    dispatch(addList(text));
    setText('');
  };

  return (
    <div>
      <div>
        <input value={text} onChange={chnageInput} />
        <button onClick={handleChange}>Add</button>
      </div>
      {todos.map((el) => (
        <p>{el}</p>
      ))}
    </div>
  );
}

export default List;
