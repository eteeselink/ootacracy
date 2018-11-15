import {Poll} from "../src/poll.js";
import {assert, report} from "./assert.js";

function test1() {
    const el = document.createElement("div");
    const poll = new Poll(el);
    poll.render("George");
    assert(() => el.innerHTML.includes("Lahmacun"));
    assert(() => el.innerHTML.includes("Pepperoni")); // this one will fail
}

// now we run all tests sequentially
test1();

// display ugly results summary
report();