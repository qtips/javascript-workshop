import {observable, observableArray} from 'knockout';
import Todo from './Todo';

export class TodoList { //export class er som public class
    constructor({title = 'new LIST', todos = []} = {}) { // sender default object som parameter med title og todos satt. Kan også sende inn et av feltene til objektet.
        this.title = observable(title);       // gjør at viewet kan observere feltet vha knockout, men må hente det gjennom funksjonkall
        this.todos = observableArray(todos);
        this.newTodo = observable(new Todo());

        this.evts = {
            // Definerer disse metodene for å sette this med lamda. 
            // Hvis vi kaller onNewTodTextKeyDown() på klassen direkte så vil ikke this være instanen, men bli bestemt av kaller konteksten. 
            onNewTodoTextKeyDown: (model, evt) => this.onNewTodoTextKeyDown(model, evt), // må sende med evt fordi vi må sjekke hvilke tast som ble trykket
            onClickRemove: (model) => this.removeTodo(model) // må sende med evt fordi vi må sjekke hvilke tast som ble trykket
        };
    }

    onNewTodoTextKeyDown(todo, evt) {
        if (evt.key === 'Enter' && todo.text() !== '') { // hvis enter er klikket
            const parent = evt.target.parentElement; // hent li elementet
            this.addTodoFromNewTodo(todo);
            parent.querySelector('input').focus(); // sett fokus på det nye input elementet som ble laget av addTodo..
        } else if (evt.key === 'Backspace' && todo.text() === '') {
            this.removeLastTodo();
        }
        return true;
    }

    addTodoFromNewTodo(todo) {
        this.todos.push(todo);
        this.newTodo(new Todo());
    }

    removeLastTodo() {
        const todos = this.todos();
        if (todos.length === 0) return;
        this.todos.remove(todos[todos.length - 1]);

    }

    removeTodo(todo) {
        this.todos.remove(todo);
    }

    getData() { // få rådata
        return {
            title: this.title(),
            todos: this.todos().map(todo => todo.getData())
        };
    }

    static fromData(data){
        const config = Object.assign({}, data, {  // konvertere til Todoinstanser fordi vi får inn et "kjedelig" objekt med riktig felter
            todos: data.todos.map(todo => new Todo(todo))
        });
        return new TodoList(config);
    }

}

export default TodoList; //usikker på hvorfor

