import { Plus } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  addTodo: (title: string) => void;
}

export const AddTodoForm = ({addTodo}: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページの更新を防ぐ
    addTodo(inputValue); // リストに渡す
    setInputValue(""); // フォームを空にする
  }

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="新しいTodoを入力してください"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="grow rounded-s bg-slate-200 p-2"
      />
      <button
        type="submit"
        disabled={!inputValue}
        className="rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:bg-gray-400"
      >
        <Plus className="text-white" />
      </button>
    </form>
  );
};
