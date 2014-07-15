// list of categories ("cats" for short)
var cats = [
    "Bad",
    "GoodGen",
    "GoodYes"
];

var catsText = {
    "Bad": "<strong>Bad</strong> (e.g., unfocused, vague, embarrassing, not a question, etc.)",
    "GoodGen": "<strong>Good General</strong> (e.g., is not a bad question and the answer is open-ended)",
    "GoodYes": "<strong>Good Yes/No</strong> (e.g.,  is not a bad question and the answer is either yes or no)"
};

var examples = {
    "Bad": [
        "<strong>Short Question:</strong> Apple iToilet New Released",
        "<strong>Full Question:</strong> Check this pic... i found ut funny so posted it here... Just thinking what functions it will carry ?",
        "<strong>Short Question:</strong> Craziest Thing you've done",
        "<strong>Full Question:</strong> Ok... here we go... What is the most craziest thing you've done so far in your life. And just for a change you actually are proud of it or feel good about it, today! :)",
        "<strong>Short Question:</strong> Brother for Sale ! !",
        "<strong>Full Question:</strong> I am an annoying brother for all my sisters. How many of you feel the same or do have an annoying brother that sometimes makes your sister think to put the brother on Sale ? Share some small stories, pranks, jokes that you have enjoyed with your brother or sister.",
        "<strong>Short Question:</strong> France intervenes in Mali",
        "<strong>Full Question:</strong> French troops have begun military operations including air strikes in Mali .. This is at the request of the Mali Government.. My question: Have we not learned any lessons from Iraq and Afghanistan ? Should we not leave countries to sort out their own mess ? Is France right to intervene in Mali ?"
    ],
    "GoodGen": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?"
    ],
    "GoodYes": [
        "<strong>Short Question:</strong> Is there any hindu Prayer Hall in Doha",
        "<strong>Full Question:</strong> Is there any hindu prayer hall available in Doha? Could you please guide me the location"
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