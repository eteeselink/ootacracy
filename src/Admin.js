import {Poll} from "./Poll.js";

export class Admin {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            ADMIN PAGE<br>
            <button id="btn-next">Next</button>
        `;

        this.element.querySelector("#btn-next").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            
            //Move to the Poll page
            const poll = new Poll(this.element);
            poll.render("Here we should put some data for poll to use");
        })
    }
}