let wifi = require('node-wifi');

function initData() {
    document.getElementById('ssid').value = localStorage.getItem('ssid');
    document.getElementById('password').value = localStorage.getItem('password');

    wifi.init({
        iface : null // network interface, choose a random wifi interface if set to null
    });

    wifi.scan(function(err, networks) {
        if (err) {
            console.log(err);
        } else {
            console.log(networks);
        }
    });
}

initData();

function writeCard() {

    let ssid = document.getElementById('ssid').value;
    let password = document.getElementById('password').value;

    // console.log(ssid)
    // console.log(password)

    localStorage.setItem('ssid', ssid);
    localStorage.setItem('password', password);

    writeConfig(ssid, password);
}
