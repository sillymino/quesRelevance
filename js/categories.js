// list of categories ("cats" for short)
var cats = [
    "Good",
    "Bad",
    "Potential",
    "Dialogue",
    "Notenglish",
    "Other"
];

var catDescriptions = [ 
    "Appropriately answers the question (attempts to provide a relevant answer)",
	"Potentially answers the question (attempts to provide a relevant answer, but is insufficient in some way)",
	"Badly answers the question (does not attempt to provide a relevant answer)",
	"a Dialogue starting a different conversation than the question",
	"a Not English response to the question"
];


var catsText = {
    "Good": "<strong>Good</strong> (e.g. answers the question, correctly OR incorrectly)",
    "Bad": "<strong>Bad</strong> (e.g. does not answer the question)",
    "Potential": "<strong>Potential</strong> (e.g. potentially useful information, but does not answer the question)",
    "Dialogue": "<strong>Dialogue</strong> (e.g. invites sub-dialogue or is a comment from the original poster)",
    "Notenglish": "<strong>Not English</strong> (e.g. not in English)",
    "Other": "<strong>Other</strong> (e.g. a rare choice for when nothing else is appropriate)"
};

var examples = {
    "Good": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> There is Turkish Hamams, I",
        "<strong>Response Body:</strong> There is Turkish Hamams, I will have to check with my QL buddy Kellyheroes and get back to you!"
    ],
    "Bad": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> Brit",
        "<strong>Response Body:</strong> It could be a good defence against intruders if any .."
    ],
    "Potential": [
        "<strong>Short Question:</strong> Oil Baths facilities in Qatar?",
        "<strong>Full Question:</strong> Any suggestions for Spas having the facility of Oil Baths?",
        "<strong>Response Subject:</strong> Please be careful. Remember",
        "<strong>Response Body:</strong> Please be careful. Remember that crude oil can seep into the pores and can be toxic :O("
    ],
    "Dialogue": [
        "<strong>Short Question:</strong> Where can I get an ASUS laptop fixed?",
        "<strong>Full Question:</strong> My ASUS laptop screen does not work, but everything else works still. Is there anywhere I can go to get it fixed?",
        "<strong>Response Subject:</strong> RE: Where can I get an ASUS laptop fixed?",
        "<strong>Response Body:</strong> do you have directions?"
    ],
    "Notenglish": [
        "<strong>Short Question:</strong> Nepalie and Filipina, How to get married?",
        "<strong>Full Question:</strong> Hi all, Please advise, is it possible that a Filipina and a Nepalie can get married in Qatar even civil wedding only?",
        "<strong>Response Subject:</strong> RE: Nepalie and Filipina, How to get married?",
        "<strong>Response Body:</strong> kabayan nagtanung kna lang sa embasy natin,,alam nla yan kung anu dapat nyo gawin,,god bless you"
    ],
    "Other": [
        "We don't expect you to have anything that fits in this cateogry"
    ]
};

var _T = {
    qnum: function (index, total) {
        return "Question " + (index + 1) + "/" + total;
    },
    pretext: "The response is...",
    hide: "HIDE",
    show: "SHOW"
};