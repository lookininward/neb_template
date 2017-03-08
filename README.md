# neb_template
Basic website template built using Bootstrap 3, Express, and NodeJS.

[IN PROGRESS]

Requirements
- Git
- Node
- Express
- EJS [working with views]

Extra
- install nodemon with: npm install -g nodemon [watch for changes, reload server when changes detected; can't be used with SASS, etc. ?]
- install restart with: npm install -g reload [refresh browser when changes detected]
	- install as dependency for project with: npm install --save reload

Install Requirements
clone [project] onto desktop with: git clone [git repo link]
cd to [project]
create package.json file with: npm init --yes [if no package.json file exists; with defaults]
install npm plugins with: npm install
install express as dependency with: npm install express --save
install ejs as dependency with: npm install ejs --save
- install nodemon with: npm install -g nodemon [watch for changes, reload server when changes detected; can't be used with SASS, etc. ?]
- install restart with: npm install -g reload [refresh browser when changes detected]
	- install as dependency for project with: npm install --save reload



Folder Structure

Expressjs [root folder]
 - app
 	- data
 		- data.json [contains all text data files for project]
 	- public
 		- css
 		- scss
 		- images
 		- js
 	- routes
 		- index.js [routing for index page]
 		- speakers.js [routing for pages and sub-pages]
 	- views
 		- index.ejs []
 		- partials
 			- content
 			- template

 	- app.js
 - node_modules



Run Server
- Run local server on port 3000 with: npm start 
- Run local server with custom port settings with: node app/app.js
- Extra - Nodemon Update changes in browser with: nodemon app/app.js [will restart server on changes; need to manually refresh page in browser]

JS + Express
- conditionals loops, combine data on routes and learn to control information flow 

Relevant Links:
- https://docs.npmjs.com/getting-started/using-a-package.json
- http://getbootstrap.com/css/
- http://getbootstrap.com/components/
- http://www.embeddedjs.com/getting_started.html


To Do
- JSON file containing blog posts
- Create unique page for each
- Create page with list blog posts



