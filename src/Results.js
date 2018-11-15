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
            ${JSON.stringify(results)}
        `;
        console.log(results);
        for(var result of results){
            const answers = result.answers;
            var counts = Object.keys(result.options).map(key => 0);
             
            for(var answer of answers){
                counts[answer]=counts[answer]+1;
            }
            console.log(counts); 
        }

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