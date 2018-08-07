import { BrowserWindow } from 'electron'
import { EventEmitter } from 'events'
import { format as formatUrl } from 'url'
import path from 'path'

export default class MainWindow extends EventEmitter {

    constructor(){
        super();
        this.isDev = process.env.NODE_ENV !== 'production';
        this.mainWindow = this.createMainWindow();
    }

    createMainWindow() {
        let window = new BrowserWindow({
            height: 600,
            width: 800,
            webPreferences: {
                backgroundThrottling: false
            }
        });
        if (this.isDev) {
            window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
        } else {
            window.loadURL(formatUrl({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file',
                slashes: true
            }));
        }
    }
}