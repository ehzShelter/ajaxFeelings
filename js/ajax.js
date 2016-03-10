//ajax using jquery

$(document).ready(function(){  
    
    //for ajax names                             
    var selected="";
    $("#selector").change(function(){                       //change in selector option
         selected=$("#selector").val()+".html";
         $.ajax({url:selected,success:function(result){     //ajax call
                $("#infodiv").html(result);                 //show result
         }});

    });

    //for ajax message board
    $("#msg_btn").click(function(){
          $.ajax({url:"message_board.html",success:function(result){     //ajax call
                $("#ajax_test").html(result);                         //show result
         }});
     });

    //for home button
    $("#home_btn").click(function(){
          $.ajax({url:"index.html",success:function(result){     //ajax call
                $(".main").html(result);                         //show result
         }});
     });
});







//ajax-with-JS

/*
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
*/
