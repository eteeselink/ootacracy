import {Admin} from "./Admin.js";

export class Results {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            RESULTS PAGE<br>
            <button id="btn-next">Restart</button>
        `;

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