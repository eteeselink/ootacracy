import {makeAsciiArt} from "./art.js";

export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            Hi ${name}! What's the best pizza?<br>
            <input type="radio" name="pizza" value="Margherita" id="radio1">
            <label for="radio1">Margherita</label><br>

            <input type="radio" name="pizza" value="Shoarma" id="radio2">
            <label for="radio2">Shoarma</label><br>

            <input type="radio" name="pizza" value="Lahmacun" id="radio3">
            <label for="radio3">Lahmacun</label><br>

            <button id="btn">Vote!</button>
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const bestPizza = this.element.querySelector("input[name=pizza]:checked").value;
            this.element.innerHTML = `<p>Indeed ${name}, Pizza ${bestPizza} is by far the best.</p><div id="pizza"></div>`;
            
            makeAsciiArt(this.element.querySelector("#pizza"));
        })
    }
}