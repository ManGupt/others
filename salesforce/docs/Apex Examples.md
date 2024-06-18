What all types you use Apex, Aura, Lightening

Testing strategy

GPT for testing?

Deploy? App Exchange?

Managed package?

You get salesforce a/c in sandbox or use your own dev accounts?

use Flow/Process builders?

Versioning?

Functional knowledge?

# Create a Custom Object
In this step, you create a custom object called Book with one custom field called Price.

Prerequisites:

A Salesforce account in a sandbox Professional, Enterprise, Performance, or Unlimited Edition org, or an account in a Developer org.
For more information about creating a sandbox org, see “Sandbox Types and Templates” in the Salesforce Help. To sign up for a free
Developer org, see the Developer Edition Environment Sign Up Page.
1. Log in to your sandbox or Developer org.
2. From your management settings for custom objects, if you’re using Salesforce Classic, click New Custom Object, or if you’re using
Lightning Experience, select Create > Custom Object.
3. Enter Book for the label.
4. Enter Books for the plural label.
5. Click Save.
Ta dah! You’ve now created your first custom object. Now let’s create a custom field.
6. In the Custom Fields & Relationships section of the Book detail page, click New.
7. Select Number for the data type and click Next.
8. Enter Price for the field label.
9. Enter 16 in the length text box.
10. Enter 2 in the decimal places text box, and click Next.
11. Click Next to accept the default values for field-level security.
12. Click Save.

You’ve just created a custom object called Book, and added a custom field to that custom object. Custom objects already have some
standard fields, like Name and CreatedBy, and allow you to add other fields that are more specific to your implementation. For this
tutorial, the Price field is part of our Book object and it is accessed by the Apex class you will write in the next step.

1. From the object management settings for books, go to Triggers, and then click New.
2. In the trigger editor, delete the default template code and enter this trigger definition:
````
trigger HelloWorldTrigger on Book__c (before insert) {
    Book__c[] books = Trigger.new;
    MyHelloWorld.applyDiscount(books);
}
````
3. To run this test and view code coverage information, switch to the Developer Console.
4. In the Developer Console, click Test > New Run.
5. To select your test class, click HelloWorldTestClass.
6. To add all methods in the HelloWorldTestClass class to the test run, click Add Selected.
7. Click Run.
The test result displays in the Tests tab. Optionally, you can expand the test class in the Tests tab to view which methods were run.
In this case, the class contains only one test method.
8. The Overall Code Coverage pane shows the code coverage of this test class. To view the percentage of lines of code in the trigger
covered by this test, which is 100%, double-click the code coverage line for HelloWorldTrigger. Because the trigger calls a method
from the MyHelloWorld class, this class also has coverage (100%). To view the class coverage, double-click MyHelloWorld.
9. To open the log file, in the Logs tab, double-click the most recent log line in the list of logs. The execution log displays, including
logging information about the trigger event, the call to the applyDiscount method, and the price before and after the trigger.

----
````
<apex:page controller="ExampleController">
    T1: {!t1} <br/>
    T2: {!t2} <br/>
    <apex:form>
        <apex:commandLink value="refresh"/>
    </apex:form>
</apex:page>

public class ExampleController {
    DateTime t1;
    transient DateTime t2;
    public String getT1() {
        if (t1 == null) t1 = System.now();
        return '' + t1;
    }
    public String getT2() {
        if (t2 == null) t2 = System.now();
        return '' + t2;
    }
}
````
````
public inherited sharing class InheritedSharingClass {
    public List<Contact> getAllTheSecrets() {
        return [SELECT Name FROM Contact];
    }
}
<apex:page controller="InheritedSharingClass">
    <apex:repeat value="{!allTheSecrets}" var="record">
        {!record.Name}
    </apex:repeat>
</apex:page>
````
````
// Create the account and the opportunity.
Database.SaveResult[] results = Database.insert(new SObject[] {
    parentAccount, newOpportunity
});
// Check results.
for (Integer i = 0; i < results.size(); i++) {
    if (results[i].isSuccess()) {
        System.debug('Successfully created ID: ' + results[i].getId());
    } else {
        System.debug('Error: could not create sobject ' + 'for array element ' + i + '.');
        System.debug(' The error reported was: ' + results[i].getErrors()[0].getMessage() + '\n');
    }
}
````
````
try {
    upsert acctsList;
} catch (DmlException e) {
    // Process exception here
}
````
````
SObjectAccessDecision securityDecision =
Security.stripInaccessible(AccessType.READABLE,
    [SELECT Name, BudgetedCost, ActualCost FROM Campaign]
);
// Construct the output table
if (securityDecision.getRemovedFields().get('Campaign').contains('ActualCost')) {
    for (Campaign c : securityDecision.getRecords()) {
        //System.debug Output: Name, BudgetedCost
    }
} else {
    for (Campaign c : securityDecision.getRecords()) {
        //System.debug Output: Name, BudgetedCost, ActualCost
    }
}
````
MKG
````
List<Account> accountsWithContacts =
    [SELECT Id, Name, Phone,
    (SELECT Id, LastName, Phone FROM Account.Contacts)
    FROM Account];
// Strip fields that are not readable
SObjectAccessDecision decision = Security.stripInaccessible(
    AccessType.READABLE,
    accountsWithContacts);
// Print stripped records
for (Integer i = 0; i < accountsWithContacts.size(); i++) {
    System.debug('Insecure record access: '+accountsWithContacts[i]);
    System.debug('Secure record access: '+decision.getRecords()[i]);
}
// Print modified indexes
System.debug('Records modified by stripInaccessible: '+decision.getModifiedIndexes());
// Print removed fields
System.debug('Fields removed by stripInaccessible: '+decision.getRemovedFields());
````
````
List<Account> newAccounts = new List<Account>();
Account a = new Account(Name='Acme Corporation');
Account b = new Account(Name='Blaze Comics', Rating=’Warm’);
newAccounts.add(a);
newAccounts.add(b);
SObjectAccessDecision securityDecision = Security.stripInaccessible(
AccessType.CREATABLE, newAccounts);
// No exceptions are thrown and no rating is set
insert securityDecision.getRecords();
System.debug(securityDecision.getRemovedFields().get('Account')); // Prints "Rating"
System.debug(securityDecision.getModifiedIndexes()); // Prints "1"
````
````
String jsonInput =
    '[' +
    '{' + '"Name": "InGen",' + '"AnnualRevenue": "100"' + '},' +
    '{' + '"Name": "Octan"' + '}' +
    ']';
List<Account> accounts = (List<Account>)JSON.deserializeStrict(jsonInput,
List<Account>.class);
SObjectAccessDecision securityDecision = Security.stripInaccessible(
AccessType.UPDATABLE, accounts);
// Secure update
update securityDecision.getRecords(); // Doesn’t update AnnualRevenue field
System.debug(String.join(securityDecision.getRemovedFields().get('Account'), ', '));
// Prints "AnnualRevenue"
System.debug(String.join(securityDecision.getModifiedIndexes(), ', ')); // Prints "0”
````
````
// Account__c is a lookup from MyCustomObject__c to Account
@IsTest
public class TestCustomObjectLookupStripped {
    @IsTest static void caseCustomObjectStripped() {
        Account a = new Account(Name='foo');
        insert a;
        List<MyCustomObject__c> records = new List<MyCustomObject__c>{
            new MyCustomObject__c(Name='Custom0', Account__c=a.id)
        };
        insert records;
        records = [SELECT Id, Account__c FROM MyCustomObject__c];
        SObjectAccessDecision securityDecision = Security.stripInaccessible
        (AccessType.READABLE, records);
        // Verify stripped records
        System.assertEquals(1, securityDecision.getRecords().size());
        for (SObject strippedRecord : securityDecision.getRecords()) {
            System.debug('Id should be set as Id fields are ignored: ' + strippedRecord.isSet('Id')); // prints true
            System.debug('Lookup field FLS is not READABLE to running user, should not be set: ' + strippedRecord.isSet('Account__c')); // prints false
        }
    }
}
````
````
@isTest
public class AsyncExecutionExampleTest {
    static testmethod void test1() {
        // startTest/stopTest block to force async processes
        // to run in the test.
        Test.startTest();
        System.enqueueJob(new AsyncExecutionExample());
        Test.stopTest();
        // Validate that the job has run
        // by verifying that the record was created.
        // This query returns only the account created in test context by the
        // Queueable class method.
        Account acct = [SELECT Name,Phone FROM Account WHERE Name='Acme' LIMIT 1];
        System.assertNotEquals(null, acct);
        System.assertEquals('(415) 555-1212', acct.Phone);
    }
}
````
````
public class AsyncExecutionExample implements Queueable {
    public void execute(QueueableContext context) {
        // Your processing logic here
        // Chain this job to next job by submitting the next job
        System.enqueueJob(new SecondJob());
    }
}
````
````
global class TestScheduledApexFromTestMethod implements Schedulable {
    // This test runs a scheduled job at midnight Sept. 3rd. 2042
    public static String CRON_EXP = '0 0 0 3 9 ? 2042';
    global void execute(SchedulableContext ctx) {
        CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered,    NextFireTime FROM CronTrigger WHERE Id = :ctx.getTriggerId()];
        System.assertEquals(CRON_EXP, ct.CronExpression);
        System.assertEquals(0, ct.TimesTriggered);
        System.assertEquals('2042-09-03 00:00:00', String.valueOf(ct.NextFireTime));
        Account a = [SELECT Id, Name FROM Account WHERE Name = 'testScheduledApexFromTestMethod'];
        a.name = 'testScheduledApexFromTestMethodUpdated';
        update a;
    }
}
@istest
class TestClass {
    static testmethod void test() {
        Test.startTest();
        Account a = new Account();
        a.Name = 'testScheduledApexFromTestMethod';
        insert a;
        // Schedule the test job
        String jobId = System.schedule('testBasicScheduledApex',
            TestScheduledApexFromTestMethod.CRON_EXP,
            new TestScheduledApexFromTestMethod());
        // Get the information from the CronTrigger API object
        CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered, NextFireTime FROM CronTrigger WHERE id = :jobId];
        // Verify the expressions are the same
        System.assertEquals(TestScheduledApexFromTestMethod.CRON_EXP, ct.CronExpression);
        // Verify the job has not run
        System.assertEquals(0, ct.TimesTriggered);
        // Verify the next time the job will run
        System.assertEquals('2042-09-03 00:00:00', String.valueOf(ct.NextFireTime));
        System.assertNotEquals('testScheduledApexFromTestMethodUpdated', [SELECT id, name FROM account WHERE id = :a.id].name);
        Test.stopTest();
        System.assertEquals('testScheduledApexFromTestMethodUpdated', [SELECT Id, Name FROM Account WHERE Id = :a.Id].Name);
    }
}
````
