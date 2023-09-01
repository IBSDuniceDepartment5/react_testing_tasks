import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodoText: ''
        };
    }

    handleInputChange(event) {
        this.setState({
            newTodoText: event.target.value
        });
    }

    addTodo() {
        const newTodo = {
            id: Date.now(),
            text: this.state.newTodoText
        };

        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo],
            newTodoText: ''
        }));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.newTodoText} onChange={this.handleInputChange.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;