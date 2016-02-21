# Angular Drupal7 API Explorer

####This project shows the whole functionality of the  [Angular Drupal7 Services](https://github.com/BioPhoton/ng-drupal-7-services) lib.    See all parts in action or copy code into you own projects.

You should also checkout the [WEB DEMO](http://www.drupalionic.org/explore/) of this repo.
     
##Setup project

1. Check out the project
  ```bash
  $ git clone https://github.com/BioPhoton/ng-drupal-services-tests-with-ng.git [project name]
  ```
  Check that the current user have write permissions to the newly created folder.
  Then cd into the folder and check out the dev branch
  ```bash
  $ cd [project_name]  
  $ git checkout master
  ```

2. Setup node_modules  
  In the ckecked out branch there is a package.json file   
  which contains all required node modules required for the gulp tasks.
  ```bash
  $ npm install
  ```
3. Load bower lib's  
  As all the thrid party libs are not in the repository we have to load them over bower  
  ```bash
  $ bower update   
  ```  
  Open app.config.js
  ```javascript
	//drupal services configurations
	DrupalApiConstant.drupal_instance = 'http://www.your.domain/'; 
	DrupalApiConstant.api_endpoint += 'v1/'; // "api/v1/"

  ```  
  
  Now you are ready to test it. Run following command:    
  ```bash
  $ gulp webserver  
  ```
  
  ##Setup Drupal
  - Setup a fresh Drupal installation
  - install following Modules:
    - [CORS](https://www.drupal.org/project/cors)
    - [Services](https://www.drupal.org/project/services)
    - [Services Views](https://www.drupal.org/project/services_views)
    - [libraries](https://www.drupal.org/project/libraries)
    - [Views](https://www.drupal.org/project/views)
    - [C Tools](https://www.drupal.org/project/ctools)
  - Go to  admin/structure/services/add and import [the preconfigured service](https://github.com/BioPhoton/ng-drupal-services-tests-with-ng/blob/dev/resources/drupal/services_export.txt)
  - Go to admin/config/services/cors  and paste following into the textarea `api/v1*|<mirror>|POST,PUT,GET,DELETE|Content-Type,Authorization,X-CSRF-TOKEN|true`


