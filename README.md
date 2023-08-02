# Message Board Backend

## About

This is a simple CRUD api for handling the messages within a fictional messaging board.


## Getting started

In order to run this, you must download this repository locally, and have [Docker](https://www.docker.com/products/docker-desktop/) installed.

```bash
docker build -t message-board-backend .
docker run -p 3000:3000 message-board-backend
```


## Technical choices

I chose to use Express with Typescript, in a barebones setup. This, along with many other decisions, was due to time constraints. This means features such as logging and error handling are missing.

For storage, I've just used a JavaScript variable. It's not ideal, but to implement a database or persistent storage option would take too long, so I've tried to write in such a way that this can be added in quickly later.

I've included some unit tests for good measure. Given more time, adding some integration tests would be the highest priority IMHO, which would test the wiring of the application and whether I've set the routes up correctly.

I used Docker to avoid versioning issues, and because it's quick to set up.


## Endpoints

There's a few endpoints here.

Get `http://localhost:3000/` - Return all messages

Get `http://localhost:3000/:messageId` - Return specific messages

POST `http://localhost:3000/` - Create a message e.g.
```JSON
{
  "text": "hello world",
  "user": "foo"
}
```

DELETE `http://localhost:3000/:messageId` - Delete a message.


## Next steps

Improvements that I would recommend, if you wanted to make this production worthy:

* Add integration / E2E tests
* Make Docker image leaner
* Add storage to the messages (probably SQL)
* Add error handling / logging
* CI/CD (AKA figuring out deployment...)
* Security (authorisation and authentication)


## Bonus:

Just if you've made it this far, please check out [this repository](https://github.com/benwallman/user-account-service) I made, about 6 years ago. It's not got testing, TypeScript and other nice to haves, but might be a bit better example of what good looks like architecturally.
