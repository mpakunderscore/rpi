function initData() {
    document.getElementById('ssid').value = localStorage.getItem('ssid');
    document.getElementById('password').value = localStorage.getItem('password');
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
