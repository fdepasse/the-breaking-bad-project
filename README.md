# <p><span>The Breaking Bad Project</span><img align="right" src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"></p>

<br/><br/>

<p align="center"><img src="src/images/logo-small.png"></p>

<br/><br/>

## Table of Contents
* [Overview](#overview)
* [Getting Started](#getting-started)
* [Project Brief](#brief)
* [Technologies Used](#technologies)
* [Team Responsibilities](#team)
* [Approach](#approach)
* [Enhancements](#enhancements)
* [Wins, Challenges & Learnings](#wins-and-challenges)

<br/>

## <a name="overview"></a>Overview
This was the second project from the Software Engineering Immersive Course I took at General Assembly London, built after 6 weeks of class.

It was a **pair programming** project in the form of a **2 days** Hackathon.

The application is a tribute to the Breaking Bad series allowing visitors to look at various artistic illustrations of the show, browse the characters and the episodes.

It is a frontend application built with React JS and talking to a Public API, implementing AJAX principles with JavaScript. It has been deployed via GitHub.

>Access the **app** [here](https://fdepasse.github.io/the-breaking-bad-project/) and the **repository** [here](https://github.com/fdepasse/the-breaking-bad-project)


<br/>


## <a name="getting-started"></a>Getting Started
Click the "Code" button on the [repository](https://github.com/fdepasse/pacman-thriller) and choose either to **Clone** it or to **Download ZIP** the files.
<p align="center"><img src="src/images/github.png"></p>
Once the files are on your machine, from the directory they are saved run `npm i` to install the dependencies from the package.json followed by `npm run serve` to start webpack dev server and see the app locally in your browser.

<br/>

## <a name="brief"></a>Project Brief
* Consume a public API
* Have several components
* The app should include a router - with several "pages"
* Include wireframes - that you designed before building the app
* Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS
* Be deployed online and accessible to the public

<br/>

## <a name="technologies"></a>Technologies Used

### Frontend
* React JS
* React Router
* React Player
* Bulma
* Sass
* Google Fonts
* Node JS
* Webpack
* NPM
* Axios
* Babel
* Lodash

### Development tools
* VS Code & Live Share
* Git
* GitHub (including deployment)
* Google Chrome Dev Tools
* Zoom
* Slack

<br/>


## <a name="team"></a>Team Responsibilities
* [Fabien Depasse](https://github.com/fdepasse): Characters, Character and Header components, Home hero banner and navigation links 
* [Abdi Osman](https://github.com/aozzy): Characters Search Bar, Episodes and Footer Components, Home page Video Player and Gallery


<br/>

## <a name="approach"></a>Approach
### Step 1: Whiteboarding & API End Points


#### Problem #1: Deciding the App Functionalities

Looking at API End Points and Data Available, decided we wanted to display all characters, show more details on a particular character, support a search function, showing episodes list by season

Also understood limit of API and for the homepage we decided to curate images and videos to complement the API data


<br/>

#### Problem #2: Deciding on the design of the app
Whiteboarded the pages we needed and which API endpoint will be needed on each
Which functions will be needed for each with pseudo code.
Routes in the front end with the react router

<br/>

<hr/>

### Step 2: Developing the App


#### Problem #1: Displaying all characters and being able to search them
* Using search end points and chginf the URL with a debounce function
* What's the debounce function
* Store the data in state
* Filtering and mapping to display

<br/>

#### Problem #2: Showing more info about one particular character from the characters page
* Passing id via match react router
* Calling the API
* Store character in state

> Could have passed as props but didn't want to rely on the previous page

#### Problem #3: Displaying all episodes by season
* Getting the data when the component mounts
* Storing data in state
* Storing Season in state
* Filtering on the front end

## <a name="enhancements"></a>Enhancements
### Potential Future Enhancements
* Add a carousel instead of the gallery
* Add pagination for the characters

<br/>

## <a name="wins-and-challenges"></a>Wins, Challenges & Learnings
### Wins
* Pair programming
* Working with React and understanding the lyfecycle
* Using an API, dealing with the data returned
* Building a search function
* Structuring the code into components and passing properties between them
* Using React Router to build a single page app
* Using a CSS framework with Bulma

### Challenges
* Understanding React lifecycle
* Manipulate the API data
* Live Share not always easy to use depending on the Internet connection strength

### Learnings
* Great way to consolidate the React knowledge acquired the previous 2 weeks of class