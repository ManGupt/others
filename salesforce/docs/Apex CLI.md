# apiVersion
- The apiVersion value determines the shape of the HTTPS request or response.
- Digging a little deeper, apiVersion refers to the core Metadata API version used to service an HTTPS request or response.
- When deploying metadata source to an org, Salesforce CLI sets the apiVersion value on the Connection object and uses the URL
of the HTTPS request with either the SOAP or REST API.
- Because there’s currently no REST API for metadata retrievals, Salesforce CLI
uses the apiVersion value set on the Connection object to create the URL for a SOAP endpoint.

# sourceApiVersion
- The sourceApiVersion value determines the shape of the metadata in the HTTPS request or response.
- Salesforce CLI uses the sourceApiVersion value when setting the <version> element in the manifest file (package.xml).
- The package.xml file is included in the HTTPS request or response when deploying or retrieving, respectively.

----
These examples show how the two settings work together:
- Retrieve: Let’s say that a new field was added to a metadata type in the Summer ‘22 release, which is API version 55.0. If you set
sourceApiVersion to 54.0, and then execute the project retrieve start command, the retrieved metadata
doesn’t include this new field. However, the same retrieve with sourceApiVersion set to 55.0 does return the metadata
with the new field.
- Deploy: Again assume that a new field was added to a metadata type in API version 55.0. If you set sourceApiVersion to
54.0 and try to deploy a local metadata file that includes this new field, the deploy fails. To successfully deploy metadata with the
new field, you must set sourceApiVersion to 55.0 or greater.
----
apiVersion: Order of Precedence
1. --api-version command flag.
2. SF_ORG_API_VERSION environment variable.
3. org-api-version local configuration variable.
4. org-api-version global configuration variable.
5. Highest API version supported by the target org.

sourceApiVersion: Order of Precedence
1. <version> element in the manifest file ( package.xml).
2. sourceApiVersion property in the sfdx-project.json file.
3. --api-version command flag.
4. SF_ORG_API_VERSION environment variable.
5. org-api-version local configuration variable.
6. org-api-version global configuration variable.
7. Highest API version supported by the target org.

CLI Parameter Resolution Order
- Command-line flags such as --target-org.
- Options listed in a file specified at the command line. An example is a scratch org definition in a file, which you specify with the
--definition-file flag of org create scratch. If you specify a flag at the command line, such as --edition,
whose value differs from what exists in the definition file, the command-line flag takes precedence.
- Environment variables, such as SF_TARGET_ORG.
- Local configuration variables, such as target-org or target-dev-hub. To view the local configuration variables, run sf
config list from your project directory.
- Global CLI configuration variables. To view the global configuration variables, run sf config list --global from any
directory.

Some plugins are automatically installed when you install Salesforce CLI. 

These core plugins contain
commands that support source-driven development, such as:
- Create and manage scratch orgs and sandboxes: The plugin-org plugin contains commands such
as org create scratch and org delete sandbox
- Deploy and retrieve metadata between the org and your local project: The plugin-deploy-retrieve
plugin contains commands such as project deploy start and project retrieve preview.
- Authorize orgs: The plugin-auth plugin contains commands such as org login web and org logout.
- Create and manage scratch org users: The plugin-user plugin contains commands such as org
create user and org generate password.

JIT plugin
- Create and manage second-generation packages: The plugin-packaging plugin contains commands
such as package version create and package install.
- Create and manage custom metadata types: The plugin-custom-metadata contains commands
such as cmdt generate object and cmdt generate records.
- Create and manage scratch org snapshots and shapes: The plugin-signups contains commands such
as org create shape and org delete snapshot.
- Create and manage Experience Cloud sites: The plugin-community plugin contains commands such
as community create and community publish.

To determine whether a plugin is core or JIT, check the package.json file of the aggregator
@salesforce/cli plugin:
- Core plugins are listed in the oclif:plugins section.
- JIT plugins are listed in the oclif:jitPlugins section.

