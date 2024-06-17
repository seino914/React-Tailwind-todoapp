import { Todo } from '../types/todo';

type Props = {
  todoList: Todo[];
  changeCompleted: (id: number) => void;
};

export const TodoList = ({ todoList, changeCompleted }: Props) => {
  return (
    <div className="space-y-3">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-3 rounded bg-white p-2"
        >
          <label className="flex grow items-center gap-3 hover:cursor-pointer">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-5"
                checked={todo.completed}
                onClick={() => changeCompleted(todo.id)}
              />
            </div>
            {/* completedがtrueならclassを適用する。falseならclassは適用しない (横線を入れる）*/}
            <span
              className={todo.completed ? 'text-gray-400 line-through' : ''}
            >
              {todo.title}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};
