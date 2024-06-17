import { TodoSummaryProps } from '../types/todo';

export const TodoSummary = ({ deleteAllCompleted }: TodoSummaryProps) => {
  return (
    <div className="flex justify-end">
      <button onClick={deleteAllCompleted} className="text-sm text-red-500">
        完了したTodoを削除
      </button>
    </div>
  );
};
