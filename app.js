var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "What is the SI unit of vascosity ?",
		"options" : [
			{"a": "Candela",
			 "b":"Polseiulle",
			 "c":"Newton/M",
			 "d":"No Units"}
			],
		"answer":"Polseiulle",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Which among the following sugars is maximum in honey?",
		"options" : [
			{"a": "Glucose",
			 "b":"Sucrose",
			 "c":"Fructose",
      "d":"Maltose"}
			],
		"answer":"Fructose",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Which one is the first search engine in internet?",
		"options" : [
			{"a": "Google",
			 "b":"Archie",
			 "c":"Altavista",
		   "d":"WAIS"}
			],
		"answer":"Archie",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Which is determine what type of number 71 is form the list below.",
		"options" : [
			{"a": "Multipe of 3",
			 "b":"Multipe of 4",
			 "c":"Multipe of 5",
			 "d":"Prime number"}
			],
		"answer":"Prime number",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "when you see something stationary or not moving.",
		"options" : [
			{"a": "Unbalanced",
			 "b":"Balanced",
			 "c":"Kinetic",
			 "d":"work",
			}
			],
		"answer":"Balanced",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "1gm of which of the following will produce maximum ATPS ?",
		"options" : [
			{"a": "Protein",
			 "b":"Carbohydrate",
			 "c":"Fats",
			 "d":"Minerals",
			}
			],
		"answer":"Fats",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Which one is the first web browser invented in 1990?",
		"options" : [
			{"a": "Internet Explorer",
			"b":"Mosaic",
			 "c":"Mozilla",
			 "d":"Nexus"}
			],
		"answer":"Nexus",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "What is 1004 divided by 2?",
		"options" : [
			{"a": "52",
			 "b":"502",
			 "c":"520",
			 "d":"5002",
			}
			],
		"answer":"502",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "1 Kilowatt hour is commonly known as?",
		"options" : [
			{"a": "Unit",
			 "b":"faraday",
			 "c":"1 curie",
			 "d":"Non of  above"
			}
			],
		"answer":"Unit",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which of the following vitamins was discovered by sir Edward Mellanby?",
		"options" : [
			{"a": "Vitamin C",
			 "b":"Vitamin D",
			 "c":"Vitamin K",
			 "d":"Vitamin E",
			}
			],
		"answer":"Vitamin D",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "First computer virus is known as?",
		"options" : [
			{"a": "Rabbit",
			 "b":"Creeper Virus",
			 "c":"ELK cloner",
			 "d":"SCA Virus"
			}
			],
		"answer":"Creeper Virus",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "Who invented trignometry?",
		"options" : [
			{"a": "Greek Mathemation Hipparchus",
			 "b":"pythagoras",
			 "c":"Arayabhata",
			 "d":"Albert Einstein"
			}
			],
		"answer":"Greek Mathemation Hipparchus",
		"score":0,
		"status": ""
	},
	{
		"id" : 13,
		"question" : "Focal length of concave mirror is in?",
		"options" : [
			{"a": "Negative",
			 "b":"Positive",
			 "c":"Depends on the position of object ",
			 "d":"Depends on the position of image"
			}
			],
		"answer":"Negative",
		"score":0,
		"status": ""
	},
	{
		"id" : 14,
		"question" : "The human heart is ?",
		"options" : [
			{"a": "Neurogenic heart ",
			 "b":"Myogenic heart",
			 "c":"Pulsating heart",
			 "d":"Ampullary heart"
			}
			],
		"answer":"Myogenic heart",
		"score":0,
		"status": ""
	},
	{
		"id" : 15,
		"question" : "Which of the following is not an operating system?",
		"options" : [
			{"a": "DOS",
			 "b":"Mac",
			 "c":"CSS",
			 "d":"Linux"
			}
			],
		"answer":"CSS",
		"score":0,
		"status": ""
	},
	{
		"id" : 16,
		"question" : "How does a pie chart look like ?",
		"options" : [
			{"a": "Graph",
			 "b":"Pizza",
			 "c":"Chocolate Bar",
			 "d":"Chopsticks"
			}
			],
		"answer":"Pizza",
		"score":0,
		"status": ""
	},
	]
}



var quizApp = function() {

	this.score = 0;
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;


	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');


			$("#question").html(quiz.JS[this.currentque].question);
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {

				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);
		}
	}

	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div class="res-header"><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +

			'</div>'

			);

		}
	}

	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}

	}

	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);

	}

}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);

	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});



	});




	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});

	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});
