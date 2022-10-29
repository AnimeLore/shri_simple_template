import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDone } from '../store';
import { UUID } from '../utils/uuid';

import styles from './index.module.css';

// eslint-disable-next-line import/prefer-default-export
export function TodoItem(props) {
  // eslint-disable-next-line react/prop-types
  const { index } = props;

  const dispatch = useDispatch();
  const text = useSelector((state) => state.items[index]);
  const done = useSelector((state) => state.done[index]);

  const onChange = useCallback(() => dispatch(setDone(index, !done)), [index, done, dispatch]);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div data-testid={UUID} className={styles.item}>
      <div data-testid="list-item" className={done ? 'done' : ''}>
        <input type="checkbox" checked={done} onChange={onChange} />
        {text}
      </div>
    </div>
  );
}
