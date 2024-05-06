// ip@home: 192.168.1.154
// ip@ixd: 192.168.250.79
$(document).ready(function(){
    const socket = io.connect('http://192.168.1.154:5000'); //home
    // const socket = io.connect('192.168.250.124:5000');

    // var socket = io();
    socket.on('connect', function() {
        socket.emit('my event', {data: 'I\'m connected!'});
    });

    // An event handler for click of button
    $(".engage_convo").on('click', function(event) {
        socket.emit('convo engaged', {data: 'I\'m engaged!'});
        
        // swap page
        var contents = $(".content");
        var activeContent = $(".active");

        var nextIndex = (Array.from(contents).indexOf(activeContent) + 1) % contents.length;
        activeContent.classList.remove('active');
        contents[nextIndex].classList.add('active');
    });

    socket.on('after connect', function(msg){
        console.log('After connect', msg);
    });
    socket.on('time refresh', function(msg) {
        console.log('time refreshed');
    });
});