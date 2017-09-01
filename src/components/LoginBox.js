import {observable, computed} from 'knockout';
import {hash} from '../../shared/utils'; // webpack sørger for at hash er tilgjengelig selv om vi ikke har export statement

export class LoginBox {
    constructor() {
        this.username = observable();
        this.password = observable();
        this.hasTyped = computed(() => {
            return this.username() && this.password(); // hvis begge har verdi så er hasTyped true
        });
        this.hashCombo = computed(() => { // computed sier at denne verdien er avhengig av andre observable verdier og lager en observable
            return hash(this.username() + this.password());
        });
    }
}

export default LoginBox;