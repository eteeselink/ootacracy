import {Admin} from "./Admin.js";

export class Results {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(results) {
        this.element.innerHTML = `
            RESULTS PAGE<br>
            <button id="btn-next">Restart</button>
        `;
        //console.log(results);
        var q_arr=[];
        var opt_arr=[];
        var ans_arr=[];
        for(var result of results){
            const answers = result.answers;
            var counts = Object.keys(result.options).map(key => 0);
             
            for(var answer of answers){
                counts[answer]=counts[answer]+1;
            } 
            q_arr.push([result.question,result.options,counts]);
            //opt_arr.push(result.options);
            //ans_arr.push(counts);    
        }
        for(var i of q_arr)  {
            this.element.innerHTML += `
            </br> <text>${i[0]}</text></br>
            </br> <text>${i[1][0]}</text> <text>${i[2][0]}</text>
            <text>${i[1][1]}</text> <text>${i[2][1]}</text>
            
            `   ;
        };
        

        this.element.querySelector("#btn-next").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            const page = new Admin(this.element);
            page.render();
        })
    }
}




