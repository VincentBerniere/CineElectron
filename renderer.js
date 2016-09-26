const {ipcRenderer} = require('electron')

$('button#back').click(function () {
    ipcRenderer.send('back')
})