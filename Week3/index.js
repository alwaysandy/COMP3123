var http = require("http");
//TODO - Use Employee Module here
var employee = require('./Employee.js');
console.log("Lab 03 -  NodeJs");


//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write("<h1>Welcome to Lab Exercise 03</h1>");
            res.end();
            return;
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'text/json'})
            res.end(JSON.stringify(employee));
            return;
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employee_names = []
            employee.forEach((employee) => {
                employee_names.push([employee.firstName + " " + employee.lastName]);
            });
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(employee_names));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            //e.g. { "total_salary" : 100 }
            const total_salary = employee.reduce((acc, employee) => acc + employee.Salary, 0);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(total_salary));
            return;
        }

        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
