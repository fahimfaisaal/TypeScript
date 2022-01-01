export interface DateString {
  date: string;
  time: string;
}

export interface Todo {
  id: string;
  text: string;
  createdAt: DateString;
  editedAt: null | DateString;
  isComplete: boolean;
}

export interface List {
  id: string;
  text: string;
  listColor: string;
  todos: Todo[];
  createdAt: DateString;
  editedAt: null | DateString;
  isComplete: boolean;
  status: string;
};