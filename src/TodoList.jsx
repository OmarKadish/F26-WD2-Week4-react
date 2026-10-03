import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');


    function addTodo() {
        //validate if the input is empty or not. if empty then stop
        if (!input.trim())
            return;

        // new todo item object
        const item = {
            id: Date.now(),
            text: input,
            done: false
        }

        setTodos([...todos, item]); // push into the array

        setInput(''); //clear out the input after finishing
    }

    function toggleTodo(id) {
        const updated = todos.map(t => t.id == id ? { ...t, done: !t.done } : t);
        setTodos(updated);
    }
    
    return (
        <div>
            <h1>My Todo List</h1>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((item) => (
                    <li key={item.id}
                        onClick={() => toggleTodo(item.id)}
                        style={{
                            textDecoration: item.done ? 'line-through' : 'none',

                        }}
                    >
                        {item.done}
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;