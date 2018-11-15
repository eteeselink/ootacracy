OOTICRACY
=========
This is a little starter project for the OOTI 2017 Continuous Integration class.

We're going to do a pure JavaScript application, that runs 100% in the browser.
Modern JavaScript is a pretty powerful programming language, and the ecosystem is huge. This will help you for sure during your first project. 

Goals for the assignment:
* Make a browser based decision making tool. A tool that can help a group of people come to an agreement on important matters, such as what's the best pizza or are dogs better than cats or not.
* It's a simple tool, it does not need to store data. Assume all users just use the same computer after one another.

User roles:
* Administrator: this person can define a questionnaire
* Voter: one or more people who can *do* the questionnaire.

Typical flow:
* The Administrator opens the site, configures the questionnaire using a text-based definition language
* The Administrator starts the questionnaire and asks the first Voter to sit behind the screen and answer the questions.
* The first Voter asks the second Voter, and so on
* When the last Voter is done, the tool and somehow display conclusive results (eg "cats *are* better than docs").

Requirements
------------
tl;dr are if you use a package manager such as [scoop](http://scoop.sh/):
```
> scoop install devd
> scoop install git
> scoop bucket add extras
> scoop install vscode
```

### Or, the manual steps

Browsers don't do JavaScript very well when opening a HTML file from the the file system. Therefore, you must install a little webserver:

* Visit https://github.com/cortesi/devd/releases and download devd for your OS
* Unzip it somewhere in your PATH
* Open a terminal in the project root directory, and type `devd .`. Visit http://localhost/src and http://localhost.tests, respectively.

Additionally, please install Git if you don't have it yet:

https://git-scm.com/download/

Finally, I *strongly* recommend you use Visual Studio Code for editing the files during this course. It has great support for modern JavaScript and supports really smart autocomplete and in-line documentation. It's free, fast and small. 

https://code.visualstudio.com/Download


JavaScript resources
--------------------
devdocs.io - This is really the ultimate reference, and the default documentation set selections contain precisely the tech you can use for this assignment. It'll let you search both the JavaScript language and the browser builtins at once. 