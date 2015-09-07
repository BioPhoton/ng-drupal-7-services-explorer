# ng-drupal-services-tests-with-ng
 Tests for Angular Headless Drupal setup with services

#TODO
implement user resource
implement auth

#Development

##Project settings:
node modules are stored in folder "node_modules"
bower components are stored in "bower_components" => .bowerrc

##Dependencies:
1. you have to have node installed => https://nodejs.org/

##Setup:
1. download project and paste it into your project folder
2. (optional) rename project depending settings (name, description, version) in package.json
3. In your console cd into your project-folder and execute following commands:
	$ npm install => loads all node modules into node_modules (on linux or mac run commands with sudo, this line maybe throws error on windows just run again after error)
	$ gulp setup-project => read under gulp section
4. Done

##Console commands
use `bower update` to update your bower libs



##Gulp:
$ gulp help //list all tasks


#Staging and Prodcution:
##SETUP
Move following folders and files into your servers root directory:
app/*
assets/*
index.html