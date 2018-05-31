var render_app = function (container) {
    
    var binary_render = document.getElementById(container);

    var input_one = document.createElement('input');
    input_one.setAttribute('id', 'bin_one');
    input_one.setAttribute("class", "form-control mb-3 text-center mt-4");
    input_one.setAttribute("placeholder", "First Number");
    input_one.setAttribute("style", "width: 200px");

    var input_two = document.createElement('input');
    input_two.setAttribute('id', 'bin_two');
    input_two.setAttribute("class", "form-control mb-3 text-center");
    input_two.setAttribute("placeholder", "Second Number");
    input_two.setAttribute("style", "width: 200px");

    var operate_button = document.createElement('button');
    operate_button.setAttribute("class", "btn btn-warning mb-3");
    operate_button.setAttribute("type", "button");
    operate_button.innerHTML = 'CONVERT';

    var binary_display = document.createElement('span');
    binary_display.setAttribute('id', 'output');
    binary_display.setAttribute("class", "form-control text-muted");
    binary_display.setAttribute("style", "width: 200px");
    binary_display.innerHTML = "Result";


    binary_render.appendChild(input_one);
    binary_render.appendChild(input_two);
    binary_render.appendChild(operate_button);
    binary_render.appendChild(binary_display);

    operate_button.addEventListener('click', binary_addition);

}

render_app("binary_app");