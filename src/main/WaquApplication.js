import { EventEmitter } from 'events'
import MainWindow from './MainWindow';

export default class WaquApplication extends EventEmitter {

    constructor() {
        super();
        this.mainWindow = new MainWindow();
    }

}