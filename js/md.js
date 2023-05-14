'use scrict'

import('../mysql-master');

const cla = {
    "python": 1,
    "C/C++": 2,
    "markdown": 3,
    "MySQL": 4,
    "java": 5,
    "ХЬАн": 6
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
  
function get_connect() {
    let mysql = require("mysql");
    let connection = mysql.createConnection({
        user: 'root',
        password: '237161',
        host: 'localhost',
        port: '3306',
        database: 'myweb'
    });
    connection.connect();
    return connection;
}

function submit() {
    let title = get_title();
    let classification = get_class();
    let context = get_html();
    let conn = get_connect();
    for (let i = 0; i < classification.length; i++) {
        let sql = "insert into `blogs` (title, context, create_date, update_date, auther_id, classification_id) " +
            "values (\'" + title + "\',\'" + context.innerHTML + "\',\'" + new Date().toLocaleString() + "\',\'" + new Date().toLocaleString() + "\',1," + cla[classification[i]] + ");"
        console.log(sql);
        conn.query(sql);
    }
    conn.end();

    console.log(title);
    console.log(classification);
    console.log(context);
}
