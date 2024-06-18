# Create a new Salesforce project and connect the project to your Trailhead Playground org
VS Code -> SFDX: Create Project -> Name (std option) -> SFDX: Authorize an Org -> Choose Production -> org alias as xyz.

LTS Node version, sf open org (to open in browser)

# Retrieve Metadata from Salesforce to the Local Project:
VS Code -> Org Browser -> Custom objects -> Download (select custom object)
Notice that the XML files are under the force-app/main/default/objects folder.
````
CLI: sfdx force:source:retrieve -m "CustomApplication:Dreamhouse, CustomTab:House__c, Layout:House__c-House Layout"
````
- Custom object and custom field API names often end with the suffix "__c". Standard objects have no suffix at all.

# Create and Deploy the Apex Class
Under force-app/main/default, right-click classes and select SFDX: Create Apex Class.
````
SFDX: Deploy Source to Org
dreamhouseappTest.apex in the scripts/apex folder
  System.debug(HouseService.getRecords());
Execute Anonymous Apex
````
Under the force-app/main/default, right-click the lwc folder and select SFDX: Create Lightning Web Component.

Html file has template code
-  Base Lightning component lightning-map to plot the dataset on a Map

JS file has data binding code
- To allow an Apex method to be used in an LWC, you annotate it with the @AuraEnabled annotation. (function decorator)
- You can import the @AuraEnabled method to LWC as a function (import function from ...).
- When used with the @wire decorator (function), the component retrieves data via the method.

XML file has meta data for the component
- Notice that we have the target attribute set to lightning__HomePage.
- This means the administrators will have the component available to drop on the Home page.

# Add Component
- Select SFDX: Open Default Org.
- ClickApp Launcher, search for and select Home.
- Click Setup, then select Edit Page.
- Drag the housingMap Lightning web component from the custom area of the Lightning Components list to the top of the Page Canvas.
- Click Save.
- Click Activate.
- Click Assign as Org Default.
- Click Save.
- Click Save again. Refresh
