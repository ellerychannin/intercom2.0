// ip@home: 192.168.1.154
// ip@ixd: 192.168.250.79
$(document).ready(function(){
    const socket = io.connect('http://192.168.1.154:5000');
    // var socket = io();
    socket.on('connect', function() {
        socket.emit('my event', {data: 'I\'m connected!'});
    });

    // An event handler for a change of value 
    $('input.sync').on('input', function(event) {
        socket.emit('Slider value changed', {
            who:$(this).attr('id'),  
            data: $(this).val()
        });
        return false;
    });

    socket.on('after connect', function(msg){
        console.log('After connect', msg);
    });
    socket.on('update value', function(msg) {
        console.log('Slider value updated');
        $('#'+msg.who).val(msg.data);
    });
});