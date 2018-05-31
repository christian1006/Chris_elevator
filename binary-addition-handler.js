function binary_addition() {
    
    var a;
    var pre_a = document.getElementById('bin_one').value;
    if (pre_a == ''){
        a = undefined;
    } else {
        a = Number(pre_a);
    }

    var b;
    var pre_b = document.getElementById('bin_two').value;
    if (pre_b == ''){
        b = undefined;
    } else {
        b = Number(pre_b);
    }

    var result = addBinary(a,b);

    var outputbox = document.getElementById("output");
    outputbox.innerHTML = result;

}