'use scrict'

const cla = {
    "python": 1,
    "C/C++": 2,
    "markdown": 3,
    "MySQL": 4,
    "java": 5,
    "生活哲学": 6
};

function get_html() {
    let selector = '.editormd-preview';
    return $(selector).get(0);
}

function get_title() {
    let title = '#t1';
    return $(title).val();
}

function get_class() {
    let cl = 'input[name=\'cl\']:checked';
    let checked_arr = [];
    for (let i = 0; i < $(cl).length; i++) {
        checked_arr.push($(cl)[i].value);
    }
    return checked_arr;
}

function submit() {
    let title = get_title();
    let classification = get_class();
    let context = get_html();

    console.log(title);
    console.log(classification);
    console.log(context);
}
