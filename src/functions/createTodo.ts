import shortid from 'shortid';
import { Todo } from '../Interface/Todo';
import getCurrentDate from './getCurrentDate';

const createTodo = (text: string): Todo => {
  const newTodo = {
    id: shortid.generate(),
    text,
    isComplete: false,
    createdAt: getCurrentDate(),
    editedAt: null,
  };

  return newTodo;
};

export default createTodo;