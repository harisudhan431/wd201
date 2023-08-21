const http = require('http');
const fs = require('fs');

let homeCont = "";
let projectCont = "";
let registrationCont = "";

const port = require("minimist")(process.argv.slice(2))

fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    homeCont = home;
});

fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    projectCont = project;
});


fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    registrationCont = registration;
});

const server = http.createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (url) {
        case '/project':
            response.write(projectCont);
            response.end();
            break;
        case '/registration':
            response.write(registrationCont);
            response.end();
            break;
        default:
            response.write(homeCont);
            response.end();
            break;

        }
});
server.listen(port.port);
