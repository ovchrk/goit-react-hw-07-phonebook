import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import css from '../Error/Error.module.css';

export const Error = () => {
  const error = useSelector(selectError);
  return <div className={css.box}>{error}</div>;
};
