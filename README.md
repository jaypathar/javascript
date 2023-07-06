# javascript-examples

## Table of contents

# JavaScript topics

    - Declarations/hoisting/variable scopes/shadowing
    - Recursion/LexicalScope/Closure
    - JavaScript Errors: Syntax errors, Runtime errors, Logic errors, and error handling
    - Loops and functions in javascript
    - Array and its methods.
    - JavaScript Objects: Creating objects, object properties, and object methods, Prototypes.
    - Function Declaration,Expression,Arrow function,callbacks first class and Higher order function.

## Promises

Promises are used to find out if an operation is successfully completed or not.

- It basically has three states:
  - Pending =>
  - Fulfilled => .then(onFulfillment)
  - Rejected=> .catch(onRejection)
- Using a promise:
  - .then() block: used with callback when the promise is successfully resolved.
  - .catch() block: used with callback when the promise is rejected.
  - .finally() block: method gets executes irrespective if promise is resolved/rejected.

# Creating a Repository on Git.

    - open VScode,create a folder,open terminal and type the 'git init' command to start a repository.

**Getting started with Git commands**

    - git status // will return the status of the file(tracked,untracked,ready to commit etc)
    - git add <file name>  // Moves file to staging are making it ready for next commit.
    - git commit -m "message for change" //will save all the file changes locally making it ready to push to remote.
    - git push //will push all files to remote branch(i.e. GitHub)

**Creating a branch on Git**

> Creating a new branch will copy all files from existing branch to **new branch**.

    - git branch <branch name>
    - git checkout <branch name> //To switch to new branch

**Making a Pull Request**

> As soon as you push to remote,on the github page you will find an option to open a **Pull Request (PR)**

    - Click on the option to open PR.
    - You can add reviewer to review work done.
    - If you add reviewer,the person will be notified for the same.
    - Review suggestion will be made if any and finally you can merge the branch to main when approved.

**Code Review Process**

    - If you have received suggestions to make change,there may be option to 'commit change' for some changes.
    - You can commit the changes itself there and take a pull locally.(The changes which were remote will also be made locally).
    - And that remaining changes can be made locally and then pushed again.
    - After pushing,the reviewer will be notified about changes.
    - If approved, then merge it with main else
    repeat the review process.

**Resolving fetch/pull query locally.**

    - Let's say you created test2 branch from the main branch

    - Reviewer has comments after you push.But at the same time you also start another test2 from the main branch(i.e before merging)

    - Now test1 branch is merged to main.Now you need to take the fetch/pull from main for test2 branch (Because we need updated code in our branch)

**Note: Meanwhile you can stash changes on test2 and get back later.**

    - After taking pull from the main now we have latest changes in our branch test2.

**Note: There maybe conflict because you maybe making manipulations to common file in both branches.**

    case 1: There is no conflict with the base branch.Hence, your pull is successful.

    case 2: Conflict arises,hence you can compare both files and select changes you like.

    Finally, you can comeback to current branch(i.e. test2) and fetch the stash.

## HTTP status codes:

    1XX : Informational Response.
    2XX : Successful Response
    3XX : Redirects
    4XX : Client Error
    5XX : Server Error
