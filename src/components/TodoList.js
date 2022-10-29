import React, { useCallback } from 'react';
import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setText } from '../store';
import { TodoItem } from './TodoItem';

// eslint-disable-next-line import/prefer-default-export
export function TodoList() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);
  const text = useSelector((state) => state.text);

  const onChange = useCallback(({ target }) => {
    dispatch(setText(target.value));
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(addItem(text));
  }, [dispatch, text]);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div>
        <input data-testid="input-add" value={text} onChange={onChange} />
        {/* eslint-disable-next-line react/button-has-type */}
        <button data-testid="button-add" onClick={onClick}>Добавить</button>
      </div>
      <div data-testid="list" className="list">
        {/* eslint-disable-next-line no-shadow */}
        {lodash.map(items, (text, i) => <TodoItem key={i} index={i} />)}
      </div>
    </div>
  );
}
