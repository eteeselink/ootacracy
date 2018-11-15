/**
 * NOTE TO TRAINEES: This file has no practical use. I included it just for fun
 * and to show you how you can import 1 JavaScript file from another in modern
 * JavaScript.
 */

const pizza = `
                        ___
                    |  ~~--.
                    |%=@%%/
                    |o%%%/
                 __ |%%o/
           _,--~~ | |(_/ ._
        ,/'  m%%%%| |o/ /  \\\\.
       /' m%%o(_)%| |/ /o%%m \\\\
     /' %%@=%o%%%o|   /(_)o%%% \\\\
    /  %o%%%%%=@%%|  /%%o%%@=%%  \\
   |  (_)%(_)%%o%%| /%%%=@(_)%%%  |
   | %%o%%%%o%%%(_|/%o%%o%%%%o%%% |
   | %%o%(_)%%%%%o%(_)%%%o%%o%o%% |
   |  (_)%%=@%(_)%o%o%%(_)%o(_)%  |
    \\ ~%%o%%%%%o%o%=@%%o%%@%%o%~ /
     \\. ~o%%(_)%%%o%(_)%%(_)o~ ,/
       \\_ ~o%=@%(_)%o%%(_)%~ _/
         \\\\_~~o%%%o%%%%%~~_/'
            \\--..____,,--'`;

const lines = pizza.split("\n");

export function makeAsciiArt(element, t = 1) {
    for(let i = 0; i !== t; i++) {
        const text = lines
            .slice(0, i+1)
            .join("\n");

        element.innerHTML = `<pre>${text}</pre>`;
    }

    // draw the next line unless we're done
    if(t < lines.length) {
        setTimeout(() => makeAsciiArt(element, t + 1), 100);
    }
}