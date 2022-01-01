import shortid from 'shortid';
import { List } from '../Interface/Todo';
import getCurrentDate from './getCurrentDate';

const createList = (listName: string, listColor: string = 'transparent'): List => {
  const newList = {
    id: shortid.generate(),
    text: listName,
    listColor,
    todos: [],
    createdAt: getCurrentDate(),
    editedAt: null,
    isComplete: false,
    status: '0/0',
  };

  return newList;
};

export default createList;
