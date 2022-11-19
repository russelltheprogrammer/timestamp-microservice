
### Part of [freeCodeCamp.org](https://www.freecodecamp.org/) Back End Development and APIs Certificate

Note: This project was built in progress for the <strong>freeCodeCamp Back End Development and APIs Projects Certificate</strong>. This was for <strong>project #1</strong>. This is a clone of the freeCodeCamp boilerplate repo from Github. The clone only included the starting packages and initial code. I had to build the actually API by myself, following the user stories and technical requirements requested by freeCodeCamp.


# Challenge?
## To Build a Timestamp Microservice

## User Stories To Fullfill

Build a full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks/. Working on this project will involve you writing your code using one of the following methods:

- Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-timestamp/) and complete your project locally.
- Use [our Replit starter project](https://replit.com/@russelltheprogr/boilerplate-project-timestamp-1#README.md) to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the ```Solution Link``` field. Optionally, also submit a link to your project's source code in the ```GitHub``` Link field.

Note: Time zones conversion is not a purpose of this project, so assume all sent valid dates will be parsed with ```new Date()``` as GMT dates.

## Technical Requirements

- You should provide your own project, not the example URL.

- A request to ```/api/:date?``` with a valid date should return a JSON object with a ```unix``` key that is a Unix timestamp of the input date in milliseconds

- A request to ```/api/:date?``` with a valid date should return a JSON object with a ```utc``` key that is a string of the input date in the format: ```Thu, 01 Jan 1970 00:00:00 GMT```

- A request to ```/api/1451001600000``` should return ```{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }```

- Your project can handle dates that can be successfully parsed by ```new Date(date_string)```

- If the input date string is invalid, the api returns an object having the structure ```{ error : "Invalid Date" }```

- An empty date parameter should return the current time in a JSON object with a ```unix``` key

- An empty date parameter should return the current time in a JSON object with a ```utc``` key

## What I used to create?

I cloned the freeCodeCamp repo from Github.

## Key Concepts Used

- HTTPS Requests
- Building an API
- Express.js
- Node.js
- Javascript

## Source Code?

Check out my source code above.

## Feedback?

Let me know! I would love to know what you think.
