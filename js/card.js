const fs = require('fs');

// let ssid = '';
// let password = '';
//
// let content;
// fs.readFile('/Volumes/boot/wpa_supplicant.conf', "utf8", function read(err, data) {
//
//     if (err) {
//         throw err;
//     }
//
//     content = data;
//
//     // Invoke the next step here however you like
//     // console.log(content);   // Put all of the code here (not the best solution)
//     processFile();          // Or put the next step in a function and invoke it
// });
//
// function processFile() {
//     console.log(content);
// }

let configFile = '/Volumes/boot/wpa_supplicant.conf';

function writeConfig(ssid, password) {

    let configText =
        'ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\n' +
        'network={\n' +
        'ssid="' + ssid + '"\n' +
        'psk="' + password + '"\n' +
        'key_mgmt=WPA-PSK\n' +
        '}\n';

    fs.writeFile(configFile, configText, function (err) {

        if (err) {

            return console.log(err);
        }

        console.log("The file was saved!");
    });
}
