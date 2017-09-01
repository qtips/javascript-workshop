import {observable} from 'knockout'

export class Todo {
    constructor({text = '', done = false} = {}) {
        this.text = observable(text);
        this.done = observable(done);
        this.evts = {        // konvensjon å legge eventhandlere i denne lista, men ikke nødvendig fordi this blir riktig i dette tilfelle
            onClickRow: (model, evt) => {
                if (evt.altKey) this.onTodoClick();
            }
        }
    }

    onTodoClick() {     // denne metoden jobber bare på instansen.
        this.done(!this.done())
    }

    getData() {
        return {
            text: this.text(),
            done: this.done()
        }
    }
}

export default Todo;