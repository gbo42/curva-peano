function vector(i, j){
    this.i = i;
    this.j = j;

    this.copy = () => new vector(this.i, this.j);
}

function polarToCart(tetha, r){
    x = r * cos(tetha)
    y = r * sin(tetha)
    return new vector(x, y);
}

var i;
var str;
var t;
var iter = 1;

function setup() {
    angleMode(DEGREES);
    createCanvas(500, 500);
    background(51);
    t = new turtle(0, 0, 90);
    i = 0;
    str = "L";
}

function rewriteString(s){
    ns = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] == "L"){
            ns += "LFRFL-F-RFLFR+F+LFRFL";
        } else if(s[i] == "R"){
            ns += "RFLFR+F+LFRFL-F-RFLFR";
        } else {
            ns += s[i];
        }
    }

    return ns;
}


function draw() {
    i = 0;
    str = rewriteString(str);
    background(51);
    t = new turtle(0, 0, 90);

    while(i < str.length){
        if(str[i] == "-"){
            t.rotate(-90);
        } else if(str[i] == "+"){
            t.rotate(90);
        } else if(str[i] == "F"){
            t.go(500 / 2 ** iter);
            t.draw();
        }
        i++;
    }
    iter++;
}
