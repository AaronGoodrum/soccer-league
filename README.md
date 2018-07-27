## League Ranking
A command-line application that will calculate the ranking table for a soccer league

### Software Requirements
NodeJS

### Installation Instructions
    1. Clone or download the zip file from github
    2. Navigate to the project root folder
    3. Open terminal/command line from there
    4. The app expects a comma separated txt file, have that ready before running.
    5. Inorder to startup the app, execute the following on the command line :

        ``node index.js {{pathToInputFile}}``

    6.App should display the list of teams ranked according to most number of points earned in command line

### Testing
Starting Karma

When starting Karma, the configuration file path can be passed in as the first argument.

By default, Karma will look for karma.conf.js or karma.conf.coffee in the current directory.

### Start Karma using your configuration:
$ karma start karma.conf.js

For more detailed information about the Karma configuration file, such as available options and features, please read the configuration file docs.

### The Problem

We want you to create a command-line application that will calculate the
ranking table for a soccer league.

### Input/output

The input and output will be text. Your solution should parse the provided
sample-input.txt file via stdin (pipe or redirect) or by parsing a file passed
by name on the command line. Your solution should output the correct result via
stdout to the console.

The input contains results of games, one per line. See sample-input.txt for
details. The output should be ordered from most to least points, following the
format specified in expected-output.txt.

You can expect that the input will be well-formed. There is no need to add
special handling for malformed input files.

### Usage

Given a text input file with game results in the following format:

Lions 3, Snakes 3
Tarantulas 1, FC Awesome 0
Lions 1, FC Awesome 1
Tarantulas 3, Snakes 1
Lions 4, Grouches 0

the application will output ranked teams in order, as follows:

    Tarantulas, 6 pts
    Lions, 5 pts
    FC Awesome, 1 pt
    Snakes, 1 pt
    Grouches, 0 pts

### The rules

In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A
loss is worth 0 points. If two or more teams have the same number of points,
they should have the same rank and be printed in alphabetical order (as in the
tie for 3rd place in the sample data).

### Guidelines

This should be implemented in a language with which you are familiar. We would
prefer that you use elixir, ruby, javascript, python, objective-c or java , if
you are comfortable doing so. If none of these are comfortable, please choose a
language that is both comfortable for you and suited to the task.

Your solution should be able to be run (and if applicable, built) from the
command line. Please include appropriate scripts and instructions for
running your application and your tests.

If you use other libraries installed by a common package manager
(rubygems/bundler, npm, pip, gradle), it is not necessary to commit the
installed packages.

We write automated tests and we would like you to do so as well.

We appreciate well factored, object-oriented or functional designs.

Please document any steps necessary to run your solution and your tests.

### Platform support

This will be run in a unix-ish environment (OS X). If you choose to use a
compiled language, please keep this in mind. (Dependency on Xcode is acceptable
for objective-c solutions) Please use platform-agnostic constructs where
possible (line-endings and file-path-separators are two problematic areas).
