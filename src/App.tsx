import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { dummyTodoList } from './data/dummyTodoList';

function App() {
  const [todoList, setTodoList] = useState(dummyTodoList);

  // 対象のTodoの完了を変更
  const changeCompleted = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidならcompletedを変更（true→false）
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }


  return (
    <main className="mx-auto mt-10 max-w-xl">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="rounded bg-slate-200 p-5">
        <TodoList todoList={todoList} changeCompleted={changeCompleted}/>
      </div>
    </main>
  );
}

export default App;
