let currentState = {};
let dots = [];
const socket = io.connect('http://192.168.1.154:5000');
// const socket = io.connect('192.168.250.124:5000');
// var socket = io();
socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});

socket.on('after connect', function(msg){
    console.log('After connect', msg);
});



function setup() {
    //createCanvas(400, 400);
    createCanvas(windowWidth, windowHeight);
    background(220);

    let c_gap = 0.04*width;
    let c_size = 0.5*height;
    let l_center = createVector(0.5*width-c_gap-c_size/2, 0.5*height);
    let r_center = createVector(0.5*width+c_gap+c_size/2, 0.5*height);
    // let right_character_center = createVector()
    // create dots for 社
    // console.log("width: " + width);
    // console.log("height: " + height);

    dots.push(new Dot(l_center.x - 0.28*c_size, l_center.y - 0.455*c_size, l_center.x - 0.38*c_size, l_center.y - 0.538*c_size)); // 0: -0.28c -> -0.38c -0.455c -> -0.538c
    dots.push(new Dot(l_center.x - 0.478*c_size, l_center.y - 0.24*c_size, l_center.x - 0.66*c_size, l_center.y - 0.221*c_size)); // 1: -0.478c -> -0.66c   -0.24c -> -0.221c
    dots.push(new Dot(l_center.x - 0.28*c_size, l_center.y - 0.24*c_size, l_center.x - 0.344*c_size, l_center.y - 0.265*c_size)); // 2: -0.28c -> -0.344c    -0.24c -> -0.265c
    dots.push(new Dot(l_center.x - 0.13*c_size, l_center.y - 0.24*c_size, l_center.x - 0.087*c_size, l_center.y - 0.245*c_size)); // 3: -0.13c -> -0.087c  -0.24c -> -0.245c
    dots.push(new Dot(l_center.x - 0.28*c_size, l_center.y, l_center.x - 0.395*c_size, l_center.y - 0.016*c_size)); // 4: -0.28c -> -0.395c  0c -> -0.016c
    dots.push(new Dot(l_center.x - 0.478*c_size, l_center.y + 0.146*c_size, l_center.x - 0.648*c_size, l_center.y + 0.209*c_size )); // 5: -0.478c -> -0.648c   0.146c -> 0.209c
    dots.push(new Dot(l_center.x - 0.28*c_size, l_center.y + 0.233*c_size, l_center.x - 0.344*c_size, l_center.y + 0.209*c_size)); // 6: -0.28c -> -0.344c   0.233c -> 0.209c
    dots.push(new Dot(l_center.x - 0.28*c_size, l_center.y + 0.494*c_size, l_center.x - 0.451*c_size, l_center.y + 0.506*c_size)); // 7: -0.28c -> -0.451c    0.494c -> 0.506c
    dots.push(new Dot(l_center.x - 0.095*c_size, l_center.y + 0.123*c_size, l_center.x - 0.194*c_size, l_center.y + 0.024*c_size));// 8: -0.095c -> -0.194c    0.123c -> 0.024c
    
    dots.push(new Dot(l_center.x, l_center.y - 0.067*c_size, l_center.x - 0.048*c_size, l_center.y + 0.024*c_size)); // 9: 0c -> -0.048c   -0.067c -> 0.024c
    dots.push(new Dot(l_center.x + 0.198*c_size, l_center.y - 0.067*c_size, l_center.x + 0.154*c_size, l_center.y + 0.012*c_size)); // 10: 0.198c -> 0.154c    -0.067c -> 0.012c
    dots.push(new Dot(l_center.x + 0.447*c_size, l_center.y - 0.067*c_size, l_center.x + 0.336*c_size, l_center.y - 0.051*c_size)); // 11: 0.447c -> 0.336c   -0.067c -> -0.051c
    dots.push(new Dot(l_center.x + 0.198*c_size, l_center.y - 0.455*c_size, l_center.x + 0.174*c_size, l_center.y - 0.383*c_size)); // 12: 0.198c -> 0.174c   -0.455c -> -0.383c
    dots.push(new Dot(l_center.x + 0.198*c_size, l_center.y + 0.462*c_size, l_center.x + 0.138*c_size, l_center.y + 0.47*c_size)); // 13: 0.198c -> 0.138c   0.462c -> 0.47c
    dots.push(new Dot(l_center.x - 0.051*c_size, l_center.y + 0.462*c_size, l_center.x - 0.055*c_size, l_center.y + 0.486*c_size)); // 14: -0.051c -> -0.055c   0.462c -> 0.486c
    dots.push(new Dot(l_center.x + 0.47*c_size, l_center.y + 0.462*c_size, l_center.x + 0.411*c_size, l_center.y + 0.245*c_size)); // 15: 0.47c -> 0.411c    0.462c -> 0.245c

    // create dots for 群
    dots.push(new Dot(r_center.x - 0.427*c_size, r_center.y - 0.403*c_size, r_center.x - 0.66*c_size, r_center.y - 0.431*c_size)); // 16: -0.427c -> -0.66c      -0.403c -> -0.431c
    dots.push(new Dot(r_center.x - 0.285*c_size, r_center.y - 0.403*c_size, r_center.x - 0.395*c_size, r_center.y - 0.502*c_size)); // 17: -0.285c -> -0.395c     -0.403c -> -0.502c
    dots.push(new Dot(r_center.x - 0.079*c_size, r_center.y - 0.403*c_size, r_center.x - 0.115*c_size, r_center.y - 0.443*c_size)); // 18: -0.079c -> -0.115c     -0.403c -> -0.443c
    dots.push(new Dot(r_center.x - 0.079*c_size, r_center.y - 0.206*c_size, r_center.x - 0.111*c_size, r_center.y - 0.225*c_size)); // 19: -0.079c -> -0.111c     -0.206c -> -0.225c
    dots.push(new Dot(r_center.x - 0.079*c_size, r_center.y - 0.012*c_size, r_center.x - 0.138*c_size, r_center.y - 0.02*c_size)); // 20: -0.079c -> -0.138c     -0.012c -> -0.020c
    dots.push(new Dot(r_center.x - 0.49*c_size, r_center.y - 0.206*c_size, r_center.x - 0.794*c_size, r_center.y - 0.182*c_size)); // 21: -0.49c -> -0.794c    -0.206c -> -0.182c
    dots.push(new Dot(r_center.x - 0.296*c_size, r_center.y - 0.206*c_size, r_center.x - 0.419*c_size, r_center.y - 0.217*c_size)); // 22: -0.296c -> -0.419c      -0.206c -> -0.217c
    dots.push(new Dot(r_center.x, r_center.y - 0.206*c_size, r_center.x - 0.008*c_size, r_center.y - 0.134*c_size)); // 23: 0c -> 0.008c     -0.206c -> -0.134c
    dots.push(new Dot(r_center.x - 0.427*c_size, r_center.y - 0.012*c_size, r_center.x - 0.696*c_size, r_center.y - 0.02*c_size)); // 24: -0.427c -> -0.696c     -0.012c -> 0.020c
    dots.push(new Dot(r_center.x - 0.336*c_size, r_center.y - 0.012*c_size, r_center.x - 0.455*c_size, r_center.y + 0.012*c_size)); // 25: -0.336c -> -0.455c     -0.012c -> 0.012c
    dots.push(new Dot(r_center.x - 0.49*c_size, r_center.y + 0.257*c_size, r_center.x - 0.731*c_size, r_center.y + 0.217*c_size)); // 26: -0.49c -> -0.731c      0.257c -> 0.217c
    dots.push(new Dot(r_center.x - 0.36*c_size, r_center.y + 0.142*c_size, r_center.x - 0.482*c_size, r_center.y + 0.194*c_size)); // 27: -0.360c -> -0.482c     0.142c -> 0.194c
    dots.push(new Dot(r_center.x - 0.36*c_size, r_center.y + 0.435*c_size, r_center.x - 0.455*c_size, r_center.y + 0.443*c_size)); // 28: -0.360c -> -0.455c     0.435c -> 0.443c
    dots.push(new Dot(r_center.x - 0.079*c_size, r_center.y + 0.142*c_size, r_center.x - 0.099*c_size, r_center.y + 0.13*c_size)); // 29: -0.079c -> -0.099c     0.142c -> 0.13c
    dots.push(new Dot(r_center.x - 0.079*c_size, r_center.y + 0.435*c_size, r_center.x - 0.13*c_size, r_center.y + 0.474*c_size)); // 30: -0.079c -> -0.13c     0.435c -> 0.474c

    dots.push(new Dot(r_center.x + 0.075*c_size, r_center.y - 0.431*c_size, r_center.x + 0.111*c_size, r_center.y - 0.438*c_size)); // 31: 0.075c -> 0.111c  -0.431c -> -0.438c
    dots.push(new Dot(r_center.x + 0.119*c_size, r_center.y - 0.332*c_size, r_center.x + 0.265*c_size, r_center.y - 0.474*c_size)); // 32: 0.119c -> 0.265c -0.332c -> -0.474c
    dots.push(new Dot(r_center.x + 0.391*c_size, r_center.y - 0.431*c_size, r_center.x + 0.581*c_size, r_center.y - 0.589*c_size)); // 33: 0.391c -> 0.581c -0.431c -> -0.589c
    dots.push(new Dot(r_center.x + 0.352*c_size, r_center.y - 0.332*c_size, r_center.x + 0.498*c_size, r_center.y - 0.474*c_size)); // 34: 0.352c -> 0.498c -0.332c -> -0.474c
    dots.push(new Dot(r_center.x + 0.047*c_size, r_center.y - 0.229*c_size, r_center.x + 0.162*c_size, r_center.y - 0.19*c_size)); // 35: 0.047c -> 0.162c  -0.229c -> -0.190c
    dots.push(new Dot(r_center.x + 0.237*c_size, r_center.y - 0.229*c_size, r_center.x + 0.36*c_size, r_center.y - 0.237*c_size)); // 36: 0.237c -> 0.36c  -0.229c -> -0.237c
    dots.push(new Dot(r_center.x + 0.443*c_size, r_center.y - 0.229*c_size, r_center.x + 0.652*c_size, r_center.y - 0.217*c_size)); // 37: 0.443c -> 0.652c -0.229c -> -0.217c
    dots.push(new Dot(r_center.x + 0.051*c_size, r_center.y + 0.016*c_size, r_center.x + 0.123*c_size, r_center.y + 0.024*c_size)); // 38: 0.051c -> 0.123c 0.016c -> 0.024c
    dots.push(new Dot(r_center.x + 0.237*c_size, r_center.y + 0.016*c_size, r_center.x + 0.387*c_size, r_center.y + 0.012*c_size)); // 39: 0.237c -> 0.387c 0.016c -> 0.012c
    dots.push(new Dot(r_center.x + 0.423*c_size, r_center.y + 0.016*c_size, r_center.x + 0.664*c_size, r_center.y - 0.004*c_size)); // 40: 0.423c -> 0.664c 0.016c -> -0.004c
    dots.push(new Dot(r_center.x + 0.012*c_size, r_center.y + 0.217*c_size, r_center.x + 0.111*c_size, r_center.y + 0.237*c_size)); // 41: 0.012c -> 0.111c 0.217c -> 0.237c
    dots.push(new Dot(r_center.x + 0.237*c_size, r_center.y + 0.217*c_size, r_center.x + 0.36*c_size, r_center.y + 0.19*c_size)); // 42: 0.237c -> 0.360c 0.217c -> 0.190c
    dots.push(new Dot(r_center.x + 0.47*c_size, r_center.y + 0.217*c_size, r_center.x + 0.676*c_size, r_center.y + 0.233*c_size)); // 43: 0.47c -> 0.676c 0.217c -> 0.233c
    dots.push(new Dot(r_center.x + 0.237*c_size, r_center.y + 0.486*c_size, r_center.x + 0.451*c_size, r_center.y + 0.45*c_size)); // 44: 0.237c -> 0.451c 0.486c -> 0.450c

    // connect neighbors
    dots[0].connect_neighbors([dots[2]]);
    dots[1].connect_neighbors([dots[2]]);
    dots[2].connect_neighbors([dots[0], dots[1], dots[3]]);
    dots[3].connect_neighbors([dots[2], dots[4]]);
    dots[4].connect_neighbors([dots[3], dots[5], dots[6], dots[8]]);
    dots[5].connect_neighbors([dots[4]]);
    dots[6].connect_neighbors([dots[4], dots[7]]);
    dots[7].connect_neighbors([dots[6]]);
    dots[8].connect_neighbors([dots[4]]);

    dots[9].connect_neighbors([dots[10]]);
    dots[10].connect_neighbors([dots[9], dots[11], dots[12], dots[13]]);
    dots[11].connect_neighbors([dots[10]]);
    dots[12].connect_neighbors([dots[10]]);
    dots[13].connect_neighbors([dots[10], dots[14], dots[15]]);
    dots[14].connect_neighbors([dots[13]]);
    dots[15].connect_neighbors([dots[13]]);

    dots[16].connect_neighbors([dots[17]]);
    dots[17].connect_neighbors([dots[16], dots[18], dots[22]]);
    dots[18].connect_neighbors([dots[17], dots[19]]);
    dots[19].connect_neighbors([dots[18], dots[20], dots[22], dots[23]]);
    dots[20].connect_neighbors([dots[19], dots[25]]);
    dots[21].connect_neighbors([dots[22]]);
    dots[22].connect_neighbors([dots[17], dots[19], dots[21], dots[25]]);
    dots[23].connect_neighbors([dots[19]]);
    dots[24].connect_neighbors([dots[25]]);
    dots[25].connect_neighbors([dots[20], dots[22], dots[24], dots[26]]);
    dots[26].connect_neighbors([dots[25]]);
    dots[27].connect_neighbors([dots[28], dots[29]]);
    dots[28].connect_neighbors([dots[27], dots[30]]);
    dots[29].connect_neighbors([dots[27], dots[30]]);
    dots[30].connect_neighbors([dots[28], dots[29]]);

    dots[31].connect_neighbors([dots[32]]);
    dots[32].connect_neighbors([dots[31]]);
    dots[33].connect_neighbors([dots[34]]);
    dots[34].connect_neighbors([dots[33]]);
    dots[35].connect_neighbors([dots[36]]);
    dots[36].connect_neighbors([dots[35], dots[37], dots[39]]);
    dots[37].connect_neighbors([dots[36]]);
    dots[38].connect_neighbors([dots[39]]);
    dots[39].connect_neighbors([dots[36], dots[38], dots[40], dots[42]]);
    dots[40].connect_neighbors([dots[39]]);
    dots[41].connect_neighbors([dots[42]]);
    dots[42].connect_neighbors([dots[39], dots[41], dots[43], dots[44]]);
    dots[43].connect_neighbors([dots[42]]);
    dots[44].connect_neighbors([dots[42]]);
    

    // Listen for state change events from the server
    socket.on('time refresh', function(state) {
        // currentState = state;
        for  (let dot of dots) {
            dot.reversed = 1;
            dot.reversed_start = dot.pos.copy();
            // console.log('time refresh:', dot);
        }
    });
}

function draw() {
    background(220);
    for (let dot of dots) {
        dot.update();
        dot.show();
    }
    // fill(255, 0, 0);
    // Use some state value in your drawing logic
    // ellipse(200, 200, currentState.value || 20, currentState.value || 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }