import {applyBindings, observable, observableArray} from 'knockout'; //webpack/babel sørger for å hente dependecy fra riktig sted - i tillegg er det js filer

import {TodoList} from './components/TodoList';

import './App.scss';
/**
 * javadoc liknende doc
 * @field {observableArray<TodoList[]>} lists
 */
class App {
//class er syntactic sugar for const App = function() {}
    constructor() {
        this.lists = observableArray(); // skal holde TodoList[]
        this.openList = observable();

        this.evts = {
            onListClick: (model) => this.setOpenList(model)
        };
    }

    newList() {
        const newList2 = new TodoList();
        this.lists.push(newList2);
    }

    setOpenList(todoList) {
        this.openList(todoList);
    }

    static start() {
        const app = new App();
        applyBindings(app); //starter med body tag  og binder data-bind
        return app;
    }
}

window._app = App.start(); // window finnes overalt. Vi lager en nøkkel _app i window