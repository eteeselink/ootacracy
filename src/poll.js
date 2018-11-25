import {Results} from './Results.js';
var obj_list=[]; 
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return 0;
}
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
                this.element.innerHTML+= `<input type="radio" name="${question.question}" value="${option}"/> ${option} <br>`
            }
        }
        this.element.innerHTML += `<br>
            <button id="btn-submit">Submit</button>
            <button id="btn-results">Final Results</button>
        `;
        this.element.querySelector("#btn-submit").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            var same_obj = {}
            for (var i = 0; i < questions.length; i++) {
                if (obj_list.length!=0){
                    if (findObjectByKey(obj_list, `id`, i)){
                        same_obj = Object.assign(findObjectByKey(obj_list, `id`, i))
                        for(var op_id=0; op_id < questions[i].options.length; op_id++){
                            if (questions[i].options[op_id] === this.element.querySelector(`input[name="${questions[i].question}"]:checked`).value){
                                var res = op_id
                            }
                        }
                        same_obj.results.push(res);
                    }
                    else{
                        var obj = {}
                        obj.id=i
                        obj.type=questions[i].type; 
                        obj.options=questions[i].options;
                        obj.question=questions[i].question;
                        for(var op_id=0; op_id < questions[i].options.length; op_id++){
                            if (questions[i].options[op_id] === this.element.querySelector(`input[name="${questions[i].question}"]:checked`).value){
                                var res = op_id
                            }
                        } 
                        obj.results=[res]; 
                        obj_list.push(obj)
                    }
                }
                else{
                    var obj = {}
                    obj.id=i
                    obj.type=questions[i].type; 
                    obj.options=questions[i].options;
                    obj.question=questions[i].question;
                    for(var op_id=0; op_id < questions[i].options.length; op_id++){
                        if (questions[i].options[op_id] === this.element.querySelector(`input[name="${questions[i].question}"]:checked`).value){
                            var res = op_id
                        }
                    } 
                    obj.results=[res]; 
                    obj_list.push(obj)
                }
            }
            const poll = new Poll(this.element);
            poll.render(questions);
        })

        this.element.querySelector("#btn-results").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            var votes = Object.assign(obj_list);
            const result = new Results(this.element);
            result.render(votes);
            //page.render("results should be here");
        })
    }
}