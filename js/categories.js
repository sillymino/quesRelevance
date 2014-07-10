// list of categories ("cats" for short)
var cats = [
    "GoodGen",
    "GoodYes",
    "Bad"
];

var catsText = {
    "GoodGen": "<strong>Good General</strong> (e.g. is an open-ended question that other people would find useful)",
    "GoodYes": "<strong>Good Yes/No</strong> (e.g. is a yes-no question that other people would find useful)",
    "Bad": "<strong>Bad</strong> (e.g. not something other people would find useful)"
};

var examples = {
    "GoodGen": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?"
    ],
    "GoodYes": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?"
    ],
    "Bad": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?"
    ]
};

var _T = {
    qnum: function (index, total) {
        return "Question " + (index + 1) + "/" + total;
    },
    pretext: "The question is...",
    hide: "HIDE",
    show: "SHOW"
};