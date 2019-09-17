// a test program to make sure I can generate sentences from the phrases I chose 

// sentences are 3-4 phrases long
function generate_num_words() {
	var num_words = Math.floor(Math.random() * 2 + 3);
	// console.log("words: " + num_words);
	return num_words;
}

function generate_num_sentences(){
	var num_sentences = Math.floor(Math.random() * 4 + 5);
	// console.log("sentences: " + num_sentences);
	return num_sentences; 
}

// the reason why im passing in an argument to this function is because 
// i want to make sure that I only use each phrase in a sentence once. 
function get_random_phrase(sentence) {
	do { 
		var rand_phrase_position= 0; 
		var the_phrase = ""; 

		// if the spiritual option is checked, occasionally insert a spiritual phrase 
		if (document.getElementById("spiritual").checked == true) {
			var heads_or_tails = Math.floor(Math.random() * 2); 
			if (heads_or_tails == 1) 
			{
				rand_phrase_position = Math.floor(Math.random() * spiritual_phrases.length);
				the_phrase = spiritual_phrases[rand_phrase_position]; 
			}
			else {
				rand_phrase_position = Math.floor(Math.random() * phrases.length);
				the_phrase = phrases[rand_phrase_position];
			}
		}
		else {
			rand_phrase_position = Math.floor(Math.random() * phrases.length);
			the_phrase = phrases[rand_phrase_position];
		}

	}
	while(sentence.includes(the_phrase));

	return the_phrase; 
}

function generate_sentence () {
	var num_words = generate_num_words(); 
	var sentence = ""; 

	// generate a random sentence out of phrases in the bank 
	for (var i = 0; i  < num_words; i++)
	{
		sentence = sentence + " " + get_random_phrase(sentence); 
	}
	sentence = sentence + "."; 
	sentence = sentence.charAt(1).toUpperCase() + sentence.slice(2); 
	return sentence;
}

function generate_paragraph() {
	var num_sentences = generate_num_sentences(); 
	var paragraph = "<p>"; 

	for (var i = 0; i < num_sentences; i++)
	{
		paragraph = paragraph + " " + generate_sentence(); 
	}

	paragraph = paragraph + "</p>";
	// paragraph = paragraph.slice(1); 
	return paragraph; 
}

function generate_text(num_p)
{
	var full_str = "";
	for (var i = 0; i < num_p; i++)
	{
		full_str = full_str + generate_paragraph(); 
	}

	return full_str;
}


$("#submit").on("click", function() {
 var num_paragraphs = document.querySelector('input[type="number"]').value; 

 document.querySelector("#paragraphs").innerHTML = generate_text(num_paragraphs);
 $("#line").removeClass("hideMe"); 
});

var phrases = ["Mercury in Uranus",
"taurus Venus",
"pisces full moon feels like",
"itching for libra season",
"put it out into the Universe",
"water signs tendency",
"moon entering Aquarius",
"cancer rising",
"mutable sign energy",
"virgo's critical thinking",
"because Mercury is in retrograde",
"saturn conjuncts Pluto",
"new moon in saggitarius",
"my capricorn moon and Venus in aries",
"I don't date capricorns",
"because I'm a gemini",
"leo is the best venus sign",
"what time were you born",
"that's the most pisces thing",
"as a Sun-Pluto Venus-Lilith",
"Neptune square",
"you're such a taurus",
"my north node is aries",
"transit my Mars",
"Co-Star",
"The Pattern says",
"Saturn gets to 2 degrees of Leo",
"horoscope",
"squared by Pluto",
"he was a scorpio",
"air signs",
"I don't believe in cusp signs",
"the moon and neptune",
"eclipse", 
"is opposite",
"in the 4th house",
"south node",
"north node in aquarius",
"cardinal",
"pisces are so sensitive",
"lilth",
"12th house placements",
"compatible with earth signs",
"south node",
"whats your sun moon and rising",
"Venus in the 1st house",
"high vibrational", 
"3rd house capricorn Stellium",
"virgo Stellium",
"I'm super compatible with",
"birth chart",
"planet in the 8th house", 
"I love scorpios",
"strong fire in my chart",
"natal",
"synastry",
"if astrology isn't real",
"11 degrees of Cancer",
"new moon in",
"energy of the planet",
"cusp of the 10th house",
"transits", 
"star sign",
"double gemini",
"sidereel",
"intuition",
"esoteric",
"Saturn return",
];


var spiritual_phrases = [
"transcendant",
"visualize", 
"i manifested",
"life path",
"crown chakra",
"astral project",
"rose quartz",
"spiritual realm",
"amethyst",
"cleansing energy",
"align your heart",
"blocked root chakra", 
"sage"
];
