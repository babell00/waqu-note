import {app , BrowserWindow} from 'electron'
import { format as formatUrl } from 'url'
import path from 'path'

const isDev = process.env.NODE_ENV !== 'production';

app.on('ready', () => {
  let window = new BrowserWindow({});
  if(isDev){
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));
  }
  
  
})
