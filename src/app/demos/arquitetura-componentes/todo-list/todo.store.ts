import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Task } from './task';

export interface State {
    todolist: Task[]
}

const state: State = {
    todolist: []
};

export class Store {
    private subject = new BehaviorSubject<State>(state); //propagador do estado atual da store de State
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getTodoList(): Observable<Task[]> {
        return this.store
            .pipe(map(store => store.todolist));
    }

    set(name: string, state: any) {
        console.log(state);
        console.log(name);
        console.log(this.value);
        this.subject.next({ //next esta setando um novo valor
            ...this.value, [name]: state //...(spreed) vai propagar a informacao para o name="todolist" que seria uma key que vai receber os dados de this.value para o state, mesma coisa que add(this.value)
            //https://angular-training-guide.rangle.io/features/es6/spread_and_rest
        });
    }
}
