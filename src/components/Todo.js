import {observable} from 'knockout'

export class Todo {
    constructor({text = '', done = false} = {}) {
        this.text = observable(text);
        this.done = observable(done);
    }
}

export default Todo;