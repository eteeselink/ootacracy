import {Admin} from "../src/admin.js";
import {assert, report} from "./assert.js";

function test1() {
    const el = document.createElement("div");
    const admin = new Admin(el);
    // admin.render();
    const ev = {preventDefault: function(){}};

    const text=`
1.
type: single-choice
options: cats, dogs
question: Which one is better?

2.
type: multi-choice
options: zxc, dogs
question: Which awdawd is better?
    `;
    const expected=`[{"type":" single-choice","question":" Which one is better?","options":[" cats"," dogs"]},{"type":" multi-choice","question":" Which awdawd is better?","options":[" zxc"," dogs"]}]`;
    assert(() => admin.parseQuestions(text)==expected);
}

// now we run all tests sequentially
test1();

// display ugly results summary
report();