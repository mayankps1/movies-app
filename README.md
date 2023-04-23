
this Vue.js application is a movie website that displays a list of movies and allows users to search for movies. The website has several components, including MovieCard, NavBar, and HomeView.

The MovieCard component is a reusable card that displays movie information, including the movie's title, poster, overview, release date, and genres. It uses Bootstrap's b-card component and truncates the movie's overview to 150 characters. It also includes a button to bookmark the movie and genre buttons to display the movie's genres.

The NavBar component is the navigation bar at the top of the website. It includes links to the Home, About, and Favourite pages and a search bar to search for movies.

The HomeView component is the main page that displays a list of movies using the MovieCard component. It includes pagination to display a certain number of movies per page and allows users to navigate to different pages of the movie list.

Finally, the App component is the main Vue.js component that includes the NavBar component and renders the router-view component to display different pages depending on the current route.




This Repo demonstrates the use of the following in vuejs
1. Vue Routing
2. Components
3. Communication between Components ( Parent to child component )
4. Axios Library to make HTTP calls

## Prerequisites

### Install NodeJS [![Generic badge](https://img.shields.io/badge/Prerequisite-NodeJS-blue.svg)](https://nodejs.org/en/)

Refer https://nodejs.org/en/ to install **NodeJS v14**

### Install Vue Cli [![Generic badge](https://img.shields.io/badge/Prerequisite-VueCli-blue.svg)](https://cli.vuejs.org/guide/)

Install Vue Cli Node Package Globally using the following Command.

```bash
npm install -g @vue/cli
```
## How to run the Application

Clone the application to local

Go into the project Folder and install the npm packages using the following command
```bash
npm install
```
Run the following command to run the application
```
npm run serve
```
The Application runs on **localhost:8080**


## References

**VueJS** : https://vuejs.org/v2/guide/

**vue cli** : https://cli.vuejs.org/guide/

**axios** : https://www.npmjs.com/package/axios

**vue bootstrap** : https://bootstrap-vue.js.org/docs

**vue router** : https://router.vuejs.org/guide/
