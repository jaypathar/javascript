# javascript-examples

## Table of contents

# JavaScript topics

    - Declarations/hoisting/variable scopes/shadowing
    - Recursion/LexicalScope/Closure
    - JavaScript Errors: Syntax errors, Runtime errors, Logic errors, and error handling
    - Loops and functions in javascript

# Github process

    - Open Vs code terminal
    - In the terminal type 'git init' command to start a repository.

# Creating a branch

> Creating a new branch will copy all files from existing branch to **new branch**.

    - git branch <branch name>
    - git checkout <branch name> //To switch to new branch

# Git commands

    - git status // will return the status of the file(tracked,untracked,ready to commit etc)
    - git add <file name>  // Moves file to staging are making it ready for next commit.
    - git commit -m "message for change" //will save all the file changes locally making it ready to push to remote.
    - git push //will push all files to remote branch(i.e. GitHub)

# Creating a pull Request

> As soon as you push to remote,on the github page you will find an option to open a **Pull Request (PR)**

    - Click on the option to open PR.
    - You can add reviewer to review work done.
    - If you add reviewer,the person will be notified for the same.
    - Review suggestion will be made if any and finally you can merge the branch to main when approved.

# Code Review Process

    - If you have received suggestions to make change,there may be option to 'commit change' for some changes.
    - You can commit the changes itself there and take a pull locally.(The changes which were remote will also be made locally).
    - And that remaining changes can be made locally and then pushed again.
    - After pushing,you need to reopen the PR for review.
