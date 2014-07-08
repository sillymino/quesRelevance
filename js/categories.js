// list of categories ("cats" for short)
var cats = [
    "GoodGen",
    "GoodYes",
    "Bad"
];

var catsText = {
    "GoodGen": "<strong>Good General Question</strong> (e.g. answers the question, correctly OR incorrectly)",
    "GoodYes": "<strong>Bad</strong> (e.g. does not answer the question)",
    "Bad": "<strong>Potential</strong> (e.g. potentially useful information, but does not answer the question)"
};

var examples = {
    "GoodGen": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> There is Turkish Hamams, I",
        "<strong>Response Body:</strong> There is Turkish Hamams, I will have to check with my QL buddy Kellyheroes and get back to you!"
    ],
    "GoodYes": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> Brit",
        "<strong>Response Body:</strong> It could be a good defence against intruders if any .."
    ],
    "Bad": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> Please be careful. Remember",
        "<strong>Response Body:</strong> Please be careful. Remember that crude oil can seep into the pores and can be toxic :O("
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