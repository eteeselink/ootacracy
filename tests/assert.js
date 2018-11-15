let assertionsRun = 0;
let assertionsFailed = 0;

export function report() {
    if(assertionsFailed) {
        document.body.style.backgroundColor = "#f00";
        document.body.style.color = "#fff";
    }
    else {
        document.body.style.backgroundColor = "#8f8";
    }
    document.body.innerHTML = `${assertionsRun} assertions run, ${assertionsFailed} failed.`;
    if(assertionsFailed) {
        document.body.innerHTML += "<br><small>Check the developer tools console for more info (hit F12)</small>"
    }
}
/**
 * Evaluates `func` and fails with a message if the result is false. The only
 * reason `func` must be a function is that we can then use a JS hack to turn the expression
 * into code, for pretty display. 
 * Optionally pass `message` to include a message instead of the function body.
 * 
 * @param {() => Boolean} func 
 * @param {String?} message 
 */
export function assert(func, message) {
    assertionsRun++;
    if(!func()) {
        if(!message) {
            const body = func.toString()
                .replace(/\(\) => (.*)$/, "`$1`")
                .replace(/^function\s*\(\)\s*\{\s*return\s*(.*);\s*\}\s*$/, "`$1`");
            message = body + " was not true";
        }
        fail(message);
    }
}

/**
 * @param {*} message 
 */
export function fail(message) {
    assertionsFailed++;
    console.trace(`%c ${message}`, "color: red; font-weight: bold;");
}
