import { useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoSummary } from './components/TodoSummary';
import { Todo } from './types/todo';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    // ローカルストレージからTodoを取得
    const localStorageTodoList = localStorage.getItem("todoList");
    // 配列に変換
    return JSON.parse(localStorageTodoList ?? "[]");
  })

  // 第二引数のtodoListの値が変更されると発火
  useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      // 新しいTodoを作成
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      // Todoリストに追加
      return [newTodo, ...prevTodoList];
    });
  };

  // 対象のTodoの完了を変更
  const changeCompleted = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  // 削除ボタン
  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) =>
      // 対象のidではないTodoを残す
      prevTodoList.filter((todo) => todo.id !== id),
    );
  };

  // 完了したTodoを全て削除
  const deleteAllCompleted = () => {
    // 完了していないTodoは残す
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => !todo.completed),
    );
  };

  return (
    <main className="mx-auto mt-10 max-w-xl">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="rounded bg-slate-200 p-5">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
          <TodoSummary deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
