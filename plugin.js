var x = (function(f) {
    var foo = "";
    foo = f;
    return f+"1234";
});


var y = (function(a){
    var foo = x(a);
    return foo + "456";
});