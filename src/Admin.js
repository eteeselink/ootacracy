import {Poll} from "./Poll.js";
export class Admin {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
        this.parseQuestions = text => {
            var questions = [];
            var arrayOfLines = text.split("\n");
                
                var type;
                var options = [];
                var question;
                
                for (var i = 0; i < arrayOfLines.length; i++){

                    if(arrayOfLines[i].indexOf("type") != -1){
                        type = arrayOfLines[i].split(":");
                        type = type[1];
                    }
                    if(arrayOfLines[i].indexOf("question") != -1){
                        question = arrayOfLines[i].split(":");
                        question = question[1];
                    }
                    if(arrayOfLines[i].indexOf("options") != -1){
                        
                        options = arrayOfLines[i].split(":");
                        options = options[1];

                        options = options.split(",");
                    }

                    if(arrayOfLines[i].length == 0 || i + 1 == arrayOfLines.length){
                        var question = {type : type, question : question, options : options};
                        questions.push(question);
                    }
                }
                return questions;

        }  
        this.onStartClick = ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            var flag = true;

            var text = document.getElementById("question").value.trim();
            
            if(text.length == 0){
                alert("Please input something");
            }else{
                
                var questions = this.parseQuestions(text);
                
                const poll = new Poll(this.element);
                poll.render(questions);
            }
        }
    }

    render(name) { 
        this.element.innerHTML = `
            <textarea id="question" rows="20" cols="50">
1.
type: single-choice
options: cats, dogs
question: Which one is better?

2.
type: multi-choice
options: zxc, dogs
question: Which awdawd is better?
            </textarea>
            <br/>
            <button class="uk-button uk-button-primary" id="start">Start Questionnaire</button>
        `;

        this.element.querySelector("#start").addEventListener("click", this.onStartClick )
    }
}