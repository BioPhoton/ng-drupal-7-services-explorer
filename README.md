# Angular Drupal7 API Explorer

####This project shows the whole functionality of the  [Angular Drupal7 Services](https://github.com/BioPhoton/ng-drupal-7-services) lib.    See all parts in action or copy code into you own projects.
     

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
  Now you are ready to test it. Run following command:  
  ```bash
  $ gulp webserver  
  ```
  
  


