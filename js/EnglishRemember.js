'use strict'
const number = 40;
const wordDict = {
    0: {
        verb: "bear",
        pastTense: "bore",
        pastParticiple: "born"
    },
    1: {
        verb: "beat",
        pastTense: "beat",
        pastParticiple: "beaten"
    },
    2: {
        verb: "become",
        pastTense: "became",
        pastParticiple: "become"
    },
    3: {
        verb: "begin",
        pastTense: "began",
        pastParticiple: "begun"
    },
    4: {
        verb: "blow",
        pastTense: "blew",
        pastParticiple: "blown"
    },
    5: {
        verb: "break",
        pastTense: "broke",
        pastParticiple: "broken"
    },
    6: {
        verb: "choose",
        pastTense: "chose",
        pastParticiple: "chosen"
    },
    7: {
        verb: "come",
        pastTense: "came",
        pastParticiple: "come"
    },
    8: {
        verb: "do",
        pastTense: "did",
        pastParticiple: "done"
    },
    9: {
        verb: "draw",
        pastTense: "drew",
        pastParticiple: "drawn"
    },
    10: {
        verb: "drink",
        pastTense: "drank",
        pastParticiple: "drunk"
    },
    11: {
        verb: "drive",
        pastTense: "drove",
        pastParticiple: "driven"
    },
    12: {
        verb: "eat",
        pastTense: "ate",
        pastParticiple: "eaten"
    },
    13: {
        verb: "fall",
        pastTense: "fell",
        pastParticiple: "fallen"
    },
    14: {
        verb: "fly",
        pastTense: "flew",
        pastParticiple: "flown"
    },
    15: {
        verb: "forget",
        pastTense: "forgot",
        pastParticiple: "forgotten"
    },
    16: {
        verb: "give",
        pastTense: "gave",
        pastParticiple: "given"
    },
    17: {
        verb: "go",
        pastTense: "went",
        pastParticiple: "gone"
    },
    18: {
        verb: "grow",
        pastTense: "grew",
        pastParticiple: "grown"
    },
    19: {
        verb: "hide",
        pastTense: "hid",
        pastParticiple: "hidden"
    },
    20: {
        verb: "know",
        pastTense: "knew",
        pastParticiple: "known"
    },
    21: {
        verb: "mean",
        pastTense: "meant",
        pastParticiple: "meant"
    },
    22: {
        verb: "mistake",
        pastTense: "mistook",
        pastParticiple: "mistaken"
    },
    23: {
        verb: "ride",
        pastTense: "rode",
        pastParticiple: "ridden"
    },
    24: {
        verb: "ring",
        pastTense: "rang",
        pastParticiple: "rung"
    },
    25: {
        verb: "rise",
        pastTense: "rose",
        pastParticiple: "risen"
    },
    26: {
        verb: "run",
        pastTense: "ran",
        pastParticiple: "run"
    },
    27: {
        verb: "shake",
        pastTense: "shook",
        pastParticiple: "shaken"
    },
    28: {
        verb: "shine",
        pastTense: "shone",
        pastParticiple: "shone"
    },
    29: {
        verb: "show",
        pastTense: "showed",
        pastParticiple: "shown"
    },
    30: {
        verb: "sing",
        pastTense: "sang",
        pastParticiple: "sung"
    },
    31: {
        verb: "speak",
        pastTense: "spoke",
        pastParticiple: "spoken"
    },
    32: {
        verb: "steal",
        pastTense: "stole",
        pastParticiple: "stolen"
    },
    33: {
        verb: "stick",
        pastTense: "stuck",
        pastParticiple: "stuck"
    },
    34: {
        verb: "swim",
        pastTense: "swam",
        pastParticiple: "swum"
    },
    35: {
        verb: "take",
        pastTense: "took",
        pastParticiple: "taken"
    },
    36: {
        verb: "throw",
        pastTense: "threw",
        pastParticiple: "thrown"
    },
    37: {
        verb: "wake",
        pastTense: "woke",
        pastParticiple: "woken"
    },
    38: {
        verb: "wear",
        pastTense: "wore",
        pastParticiple: "worn"
    },
    39: {
        verb: "write",
        pastTense: "wrote",
        pastParticiple: "written"
    }
};
let flag = [];

$("#start").click(function () {
    flag = [];
    $("#beforeStart").hide();
    $("#started").show();
    let num = Math.floor(Math.random()*39);
    while (flag.indexOf(num) >= 0) {
        num = Math.floor(Math.random()*39);
    }
    flag.push(num);
    console.log(wordDict[num].verb);
    $("#verb").text(wordDict[num].verb);
    $("#index").text(num);
});

$("#submitAnswer").click(function () {
    let verb = $("#index").text();
    let pastTenseTrue = wordDict[verb].pastTense;
    let pastParticipleTrue = wordDict[verb].pastParticiple;
    let pastTenseUser = $("#pastTense").val();
    let pastParticipleUser = $("#pastParticiple").val();
    if (pastTenseUser === pastTenseTrue) {
        $("#resultTense").text("过去式True");
    }

    else {
        $("#resultTense").text("过去式Wrong, 答案:" + pastTenseTrue);
    }

    if (pastParticipleUser === pastParticipleTrue) {
        $("#resultParticiple").text("过去分词True");
    }
    else {
        $("#resultParticiple").text("过去分词Wrong, 答案:" + pastParticipleTrue);
    }

    if (flag.length < 39) {
        $("#next").show();
    }
    else {
        $("#return").show();
    }
});

$("#next").click(function () {
    $("#pastTense").val("");
    $("#pastParticiple").val("");
    $("#next").hide();
    $("#resultTense").text("");
    $("#resultParticiple").text("");
    let num = Math.floor(Math.random()*39);
    while (flag.indexOf(num) >= 0) {
        num = Math.floor(Math.random()*39);
    }
    flag.push(num);
    console.log(wordDict[num].verb);
    $("#verb").text(wordDict[num].verb);
    $("#index").text(num);
});

$("#return").click(function () {
    $("#beforeStart").show();
    $("#started").hide();
});
