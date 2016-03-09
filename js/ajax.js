function Info(name) {
    // deal with the situation where nothing is chosen
    'use strict';
    if (name === '') {
        return;
    }

    // create a new AJAX object
    var ajax = new XMLHttpRequest();

    // when the page is loaded, have a callback function pre-fill our div
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4 && ajax.status === 200) {
            $('#infodiv').html(ajax.responseText);
        }
    };

    // open the requested file and transmit the data
    ajax.open('GET', name + '.html', true);
    ajax.send();

}
