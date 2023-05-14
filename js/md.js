'use scrict'


function get_html(id) {
    let selector = '.'+id;
    return $(selector).get(0);
}

function set() {
    let selector = '#layout';
    let a = $(selector).html(get_html('markdown-body'));
    $(selector).css('width', '710px');
}


$('.blogs').click(function () {
    console.log($(this).get(0));
})

console.log(get_html('test-editormd'));

