# Install from npm
````
node --version
> Must be Active LTS
sfdx v7
npm install sfdx-cli --global
sf v2
npm install -g @salesforce/cli
sf version
> @salesforce/cli/2.9.8 win32-x64 node-v16.17.0
sf plugins --core
````

# Install from tar
````
wget
https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-linux-x64.tar.xz

mkdir ~/cli/sf
tar xJf sf-linux-x64.tar.xz -C ~/cli/sf --strip-components 1
export PATH=~/cli/sf/bin:$PATH
````

# Help
Run --help at each level to get more information
````
sf --help // lists all top-level topics
sf org --help // lists all the topics and commands under "org"
sf org create --help // lists all the commands in the subtopic "org create"
sf org create sandbox --help // detailed info about the "org create sandbox" command
sf org create sandbox -h // quick and short info about the "org create sandbox" command
````
# Configure
````
sf autocomplete --refresh-cache
sf autocomplete [powershell]
sf commands
set the SF_AUTOUPDATE_DISABLE environment variable to true

sf config set name <value> [--global]
sf config list
sf config get name
sf config unset name

sf config set disable-telemetry true --global
````

# .
Connected Accounts for adding trailblazer play grounds
- https://www.salesforce.com/trailblazer/settings

Lightning components
- https://developer.salesforce.com/docs/component-library/overview/components

Others
- https://developer.salesforce.com/tools/vscode
- https://developer.salesforce.com/tools/vscode/en/user-guide/prettier
- https://developertoolinglearningmap.herokuapp.com/

In Salesforce, we think about:
- database tables as objects
- columns as fields
- rows as records.