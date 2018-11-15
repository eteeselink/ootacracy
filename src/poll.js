import {Results} from './Results.js';

export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(questions) {
        this.element.innerHTML="<h1>POLL PAGE<h1>";

        for(var question of questions){
            this.element.innerHTML+= `<h2>${question.question}<h2>`;
            for(const option of question.options){
                this.element.innerHTML+= `<input type="radio" name="${question.question}" value="${question.question}"/> ${option} <br>`
            }
        }

        var results=[];
        for (var i = 0; i < questions.length; i++) { 
            var obj={}; obj.type=questions[i].type;
            obj.question=questions[0].question;
            obj.results=[]; results.push(obj)
        }

        this.element.innerHTML += `<br>
            <button id="btn-next">Submit</button>
            <button id="btn-next">Final Results</button>
        `;

        this.element.querySelector("#btn-next").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const page = new Results(this.element);
            page.render(results);
            //page.render("results should be here");
        })
    }
}