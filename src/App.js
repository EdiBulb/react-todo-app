import React, {useState} from 'react'
import './App.css';
import TodoBoard from './components/TodoBoard';
//1. 인풋 창이 있고 버튼이 있음
//2. 인풋 창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다.
//3. 아이템 삭제버튼을 누르면 삭제가 가능하다.

// onChange는 인풋창의 값이 바뀔 때마다 알려줌
function App() {
  const [inputValue, setInputValue] = useState(''); // 초기값은 비어둠 
  const [todoList, setTodoList] = useState([])
  const addItem = () =>{
    console.log("Im here", inputValue);
    setTodoList([...todoList,inputValue]) // 기존 것에 추가하는 것
  }

  return (
    <main>
      
      <input value = {inputValue} type='text' onChange={(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>add</button>
      <TodoBoard todoList={todoList}/>

    </main>
  );
}

export default App;
