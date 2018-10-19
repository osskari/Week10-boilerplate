# SC-T-303 HUGB - Week 10 Boilerplate Project
Node.js + Express.js app, with support for static files.

## Getting started
### Prerequisites
- [NPM][npm] version 6.4.1+ (could work on older, but not tested).

Optional:

- [Nodemon][nodemon] version 1.18.4+ (could work on older, but not tested).

### Installing
After cloning the repo, run `npm install` in the project directory.

- `git clone https://github.com/arnlaugsson/Week10-boilerplate.git && cd Week10-boilerplate && npm install`

### Running the tests
This repository uses [Jest][jest] testing framework, and [SuperTest][supertest].

To run the tests use `npm test`. Or while developing, keep the tests running on changes `npm run watch` (uses the Jest --watchAll command).

### Running locally
Use `npm start` to start the Express server. The server uses port 5000 by default locally, but respects the port number if defined by the environment.

While developing it's super nice to have the server restarting on changes, and for that [Nodemon][nodemon] is your friend, run `npm run dev` to start the Nodemon server that will automatically restart the Express server on changes to files.

### Deployment
That is one of the objectives of this boilerplate, is for students to get this server deployed.

## Authors
- **Skúli Arnlaugsson** ([@arnlaugsson][arnlaugsson])

## License
This project is licensed under the ISC License - see the [LICENSE.md][license] file for details

[arnlaugsson]: https://github.com/arnlaugsson
[jest]: https://jestjs.io/
[license]: LICENSE.md
[npm]: https://www.npmjs.com/
[nodemon]: https://www.npmjs.com/package/nodemon
[supertest]: https://github.com/visionmedia/supertest