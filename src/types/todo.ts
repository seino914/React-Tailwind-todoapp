export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoListProps = {
  todoList: Todo[];
  changeCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export type TodoSummaryProps = {
  deleteAllCompleted: () => void;
};

export type AddTodoFormProps = {
  addTodo: (title: string) => void;
};
