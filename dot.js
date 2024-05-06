class Dot {

    constructor(x,y,a,b) {
        this.pos = createVector(x, y); // the current position
        this.origin = createVector(x, y); // the original position for the characters
        this.dest = createVector(a, b); // the most far away point the dot could reach
        this.r = 3;
        this.age = 0; // the mark for framing the transitioning animation for position, rotation and lines
        this.longevity = 2400; // draw function loops 60 times per seconds
        this.reverse_longevity = 60;
        // this.vel = createVector((this.dest.x-this.origin.x)/this.longevity,(this.dest.y-this.origin.y)/this.longevity);
        this.neighbor_lines = [];
        this.rotation = 0;
        this.reversed = 0;
        this.reversed_start = createVector(0, 0);
        this.max_ang = random(-PI/2, PI/2);
        this.ang = 0;
    }

    // after declaring all dots in setup, connect the neighboring ones
    connect_neighbors(neighbor_dots) {
        for (let neighbor_dot of neighbor_dots) {
            let neighbor_to_dot = p5.Vector.sub(neighbor_dot.origin,this.origin);
            console.log("subtracted vector: " + neighbor_to_dot);
            let d = neighbor_to_dot.copy();
            d.normalize();
            console.log("line direction between " + this.origin + " and " + neighbor_dot.origin + " is: " + d);
            let max_l = neighbor_to_dot.mag()/2;
            let l = neighbor_to_dot.mag()/2;
            this.neighbor_lines.push({direction: d, max_length: max_l, length: l});
          
        }
    }

    // // when user engages a conversation
    // reverse() {
    //     // this.age = 0;
    //     this.reversed = 1;
    // }

    // called inside a draw function
    update() {

        if (this.reversed == 0) {
            // slowly disintegrate as age increases
            console.log("aging: ", this.age);
            this.pos.x = map(this.age, 0, this.longevity, this.origin.x, this.dest.x);
            this.pos.x = constrain(this.pos.x, min(this.origin.x, this.dest.x), max(this.origin.x, this.dest.x));
            this.pos.y = map(this.age, 0, this.longevity, this.origin.y, this.dest.y);
            this.pos.y = constrain(this.pos.y, min(this.origin.y, this.dest.y), max(this.origin.y, this.dest.y));
            this.ang = map(this.age, 0, this.longevity, 0, this.max_ang);
            this.ang = constrain(this.ang, min(0, this.max_ang), max(0, this.max_ang));
    
            for (let neighbor_line of this.neighbor_lines) {
                neighbor_line.length = map(this.age, 0, this.longevity, neighbor_line.max_length, 0);
                neighbor_line.length = constrain(neighbor_line.length, 0, neighbor_line.max_length);
            }
    
            if (this.age < this.longevity) {
                this.age += 1;
            }
        } else {
            // reverse back to origin as age decreases
            console.log("reversing age: ", this.age);
            this.pos.x = map(this.age, 0, this.longevity, this.origin.x, this.dest.x);
            this.pos.x = constrain(this.pos.x, min(this.origin.x, this.dest.x), max(this.origin.x, this.dest.x));
            this.pos.y = map(this.age, 0, this.longevity, this.origin.y, this.dest.y);
            this.pos.y = constrain(this.pos.y, min(this.origin.y, this.dest.y), max(this.origin.y, this.dest.y));
            this.ang = map(this.age, 0, this.longevity, 0, this.max_ang);
            this.ang = constrain(this.ang, min(0, this.max_ang), max(0, this.max_ang));
    
            for (let neighbor_line of this.neighbor_lines) {
                neighbor_line.length = map(this.age, this.longevity, 0, 0, neighbor_line.max_length);
                neighbor_line.length = constrain(neighbor_line.length, 0, neighbor_line.max_length);
            }
    
            if (this.age > 0) {
                this.age -= 30;
            } else {
                this.age = 0;
                this.reversed = 0;
            }
        }
    }

    show() {
        stroke(0);
        strokeWeight(1);
        fill(0);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.ang);
        // ellipse(this.pos.x, this.pos.y, this.r * 2);
        ellipse(0, 0, this.r*2);
        for (let neighbor_line of this.neighbor_lines) {
            line(0, 0, neighbor_line.direction.x * neighbor_line.length, neighbor_line.direction.y * neighbor_line.length);   
            // line(this.pos.x, this.pos.y, this.pos.x + neighbor_line.direction.x * neighbor_line.length, this.pos.y + neighbor_line.direction.y * neighbor_line.length);
        }
        pop();
       
    }

    






}