import {applyBindings, observable, observableArray, computed} from 'knockout'; //webpack/babel sørger for å hente dependecy fra riktig sted fra node_modules - i tillegg er det js filer

import TodoList from './components/TodoList';
import StorageService from './services/StorageService'
import LoginBox from './components/LoginBox'

import './App.scss';
/**
 * javadoc liknende doc
 * @field {observableArray<TodoList[]>} lists
 */
class App {
//class er syntactic sugar for const App = function() {}
    constructor({storageService, loginBox} = {}) {
        this.storageService = storageService;
        this.loginBox = loginBox
        this.lists = observableArray(); // skal holde TodoList[]
        this.openList = observable();

        this.isLoggedIn = observable(false);
        this.rawData = computed(() => this.getData()).extend({rateLimit: 1000, method: 'notifyWhenChangesStor'}); //få knckout til å vente 1000 ms før den notifier dine lyttere. Siden alle underliggende data er observables så vil knockout lytte på alle

        this.rawData.subscribe(() => // knockout subscriber når vi binder i html bak kulissene
            this.saveState()
    );


        this.evts = {
            onListClick: (model) => this.setOpenList(model),
            onLoginSubmit: () => this.onLogin()
        };
    }

    onLogin() {
        this.isLoggedIn(true);
        this.tryLoadStat();
    }

    async tryLoadStat() {
        const rawLists = await this.storageService.get(this.loginBox.hashCombo());
        this.lists( rawLists.map(TodoList.fromData));
    }

    async saveState() {
        return await this.storageService.store(this.loginBox.hashCombo(), this.getData());
    }

    getData() {
        return this.lists().map(todoList => todoList.getData());
    }

    newList() {
        const newList2 = new TodoList();
        this.lists.push(newList2);
    }

    setOpenList(todoList) {
        this.openList(todoList);
    }

    static start(dependencies) {
        const app = new App(dependencies);
        applyBindings(app); //starter med body tag  og binder data-bind
        return app;
    }
}

// window finnes overalt. Vi lager en nøkkel _app i window
window._app = App.start({
    storageService: new StorageService(),
    loginBox: new LoginBox()
});