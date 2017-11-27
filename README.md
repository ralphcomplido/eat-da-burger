# eat-da-burger
## Node Express Handlebars MySQL Homework

### Overview

In this assignment, we will create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). We have to follow the MVC design pattern; we have to use Node and MySQL to query and route data in our app, and Handlebars to generate our HTML.


### Important

We will utilize the [MYSQL Heroku Deployment Guide](../Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy our assignment.

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

## Keys to Achieve the homework

We used JawsDB add-on for heroku to make our MySQL run.
We followed the proper file and directory structure for the app:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Copyright

Ralph Complido 2017.