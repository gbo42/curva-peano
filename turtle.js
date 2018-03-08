function turtle(i, j, a){
    this.pos = new vector(i, j);
    this.newPos = new vector(i, j);
    this.angle = a;

    this.rotate = function(angle){
        this.angle += angle;
    }

    this.go = function(leng){
        this.pos = this.newPos.copy();
        cart = polarToCart(this.angle, leng);
        this.newPos.i += cart.i;
        this.newPos.j += cart.j;
    }

    this.draw = function(){
        stroke(255);
        line(this.pos.i, this.pos.j, this.newPos.i, this.newPos.j);
    }
}
