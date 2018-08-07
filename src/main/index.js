import {app} from 'electron'


import WaquApplication from './WaquApplication'


app.on('ready', () => {
  new WaquApplication();
});
