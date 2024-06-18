# APEX Summer'23
Apex provides built-in support for common Lightning Platform idioms, including:
- Data manipulation language (DML) calls, such as INSERT, UPDATE, and DELETE, that include built-in DmlException
handling
- Inline Salesforce Object Query Language (SOQL) and Salesforce Object Search Language (SOSL) queries that return lists of sObject
records
- Looping that allows for bulk processing of multiple records at a time
- Locking syntax that prevents record update conflicts
- Custom public API calls that can be built from stored Apex methods
- Warnings and errors issued when a user tries to edit or delete a custom object or field that is referenced by Apex

Apex is designed to thread together multiple query and DML statements into a single unit of work on the Salesforce server. Developers
use database stored procedures to thread together multiple transaction statements on a database server in a similar way
Apex runs in a multitenant environment. So, the Apex runtime engine is designed to guard
closely against runaway code, preventing it from monopolizing shared resources. Any code that violates limits fails with
easy-to-understand error messages.

In Apex, all primitive data type arguments, such as Integer or String, are passed into methods by value.
Non-primitive data type arguments, such as sObjects, are passed into methods by reference.

````
datatype variable_name [ = value];
````

- Assignment, such as assigning a value to a variable
- Conditional (if-else)
- Loops:
  - Do-while
  - While
  - For
- Locking
- Data Manipulation Language (DML)
- Transaction Control
- Method Invoking
- Exception Handling

A block is a series of statements that are grouped together with curly braces.

Apex has the following types of collections:
- Lists (arrays)
- Maps
- Sets
````
Map<Integer, String> My_Map = new Map<Integer, String>{1 => 'a', 2 => 'b', 3 => 'c'};
````
Use Apex if you want to:
- Create Web services.
- Create email services.
- Perform complex validation over multiple objects.
- Create complex business processes that are not supported by workflow.
- Create custom transactional logic (logic that occurs over the entire transaction, not just with a single record or object).
- Attach custom logic to another operation, such as saving a record, so that it occurs whenever the operation is executed, regardless
of whether it originates in the user interface, a Visualforce page, or from SOAP API.

## Lightning Components
Develop Lightning components to customize Lightning Experience, the Salesforce mobile app, or to build your own standalone apps.

You can also use out-of-the-box components to speed up development.

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components
model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern
JavaScript. Lightning web components and Aura components can coexist and interoperate on a page.Configure Lightning web
components and Aura components to work in Lightning App Builder and Experience Builder.

https://developer.salesforce.com/docs/component-library
https://developer.salesforce.com/docs/component-library/overview/components

## Visualforce (ApexPages)
Visualforce consists of a tag-based markup language that gives developers a more powerful way of building applications and customizing
the Salesforce user interface. With Visualforce you can:
- Build wizards and other multistep processes.
- Create your own custom flow control through an application.
- Define navigation patterns and data-specific rules for optimal, efficient application interaction.

https://developer.salesforce.com/docs/atlas.en-us.244.0.pages.meta/pages/

`salesforce_pages_developers_guide.pdf`

## SOAP API
Use standard SOAP API calls if you want to add functionality to a composite application that processes only one type of record at a time
and does not require any transactional control (such as setting a Savepoint or rolling back changes).

https://developer.salesforce.com/docs/atlas.en-us.244.0.api.meta/api/

`apex_api.pdf`

## .
All Apex runs entirely on-demand on the Lightning Platform. Developers write and save Apex code to the platform, and end users trigger
the execution of the Apex code via the user interface.

The Apex programming language is saved and runs in the cloud—the multitenant platform. Apex is tailored for data access and data
manipulation on the platform, and it enables you to add custom business logic to system events. While it provides many benefits for
automating business processes on the platform, it is not a general purpose programming language.

Apex cannot be used to:
- Render elements in the user interface other than error messages
- Change standard functionality—Apex can only prevent the functionality from happening, or add additional functionality
- Create temporary files
- Spawn threads

All Apex code runs on the Lightning Platform, which is a shared resource used by all other organizations. To guarantee
consistent performance and scalability, the execution of Apex is bound by governor limits that ensure no single Apex execution
impacts the overall service of Salesforce. This means all Apex code is limited by the number of operations (such as DML or SOQL)
that it can perform within one process.

All Apex requests return a collection that contains from 1 to 50,000 records. You cannot assume that your code only works on a
single record at a time. Therefore, you must implement programming patterns that take bulk processing into account. If you don’t,
you may run into the governor limits.

To develop Apex, get a Developer Edition account, write and test your code, then deploy your code.
You can run Apex in a production org, a developer org, or a sandbox org. You can develop Apex in a developer org or a sandbox org,
but not in a production org.
- Production org—An org that has live users accessing your data
- Developer org—An org created with a Developer Edition account
- Sandbox org—An org created on your production org that is a copy of your production org

System fields populated after insertion, namely: ID, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, and SystemModStamp.

## Learning Apex
Pg 13

## .
There are several development environments for developing Apex code. The Developer Console and the Salesforce extensions for Visual
Studio Code allow you to write, test, and debug your Apex code. The code editor in the user interface enables only writing code and
doesn’t support debugging.

Apex supports the creation and execution of unit tests. Unit tests are class
methods that verify whether a particular piece of code is working properly. Unit test methods take no arguments, commit no data to
the database, and send no emails. Such methods are flagged with the @IsTest annotation in the method definition. Unit test methods
must be defined in test classes, that is, classes annotated with @IsTest.
The @IsTest annotation on methods is equivalent to the testMethod keyword (deprecated)

In addition, before you deploy Apex or package it for the AppExchange, the following must be true.
- Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.
- Every trigger must have some test coverage.
- All classes and triggers must compile successfully.

You can also use the deploy() Metadata API call to deploy your Apex from a developer organization to a sandbox organization.
A useful API call is runTests(). In a development or sandbox organization, you can run the unit tests for a specific class, a list of
classes, or a namespace.

You can include an Apex class or trigger in an app that you are creating for AppExchange.

Any Apex that is included as part of a package must have at least 75% cumulative test coverage. Each trigger must also have some test
coverage. When you upload your package to AppExchange, all tests are run to ensure that they run without errors. In addition, tests
with the @isTest(OnInstall=true) annotation run when the package is installed in the installer's organization. You can specify
which tests should run during package install by annotating them with @isTest(OnInstall=true). This subset of tests must
pass for the package install to succeed.

In addition, Salesforce recommends that any AppExchange package that contains Apex be a managed package.
“What is a Package” in the Salesforce online help.
Packaging Apex classes that contain references to custom labels which have translations: To include the translations in the
package, enable the Translation Workbench and explicitly package the individual languages used in the translated custom labels.
See “Custom Labels” in the Salesforce online help.

### Custom object
The __c in the object name indicates that it is a custom object that you created.

### Apex class
it is a static method, you don't need to create an instance of the class to access the method—you can just use the name of the 
class followed by a dot (.) and the name of the method.

### Apex trigger
A trigger is a piece of code that executes before or after records of a particular type are inserted, updated, or deleted from the Lightning
platform database. Every trigger runs with a set of context variables that provide access to the records that caused the trigger to fire. All
triggers run in bulk; that is, they process several records at once.
The code defines the trigger:
````
trigger HelloWorldTrigger on Book__c (before insert)
````
It gives the trigger a name, specifies the object on which it operates, and defines the events that cause it to fire. For example, this
trigger is called HelloWorldTrigger, it operates on the Book__c object, and runs before new books are inserted into the database.

The next line in the trigger creates a list of book records named books and assigns it the contents of a trigger context variable
called Trigger.new. Trigger context variables such as Trigger.new are implicitly defined in all triggers and provide access
to the records that caused the trigger to fire. In this case, Trigger.new contains all the new books that are about to be inserted.
````
Book__c[] books = Trigger.new;
````
The next line in the code calls the method applyDiscount in the MyHelloWorld class. It passes in the array of new books.
````
MyHelloWorld.applyDiscount(books);
````
You now have all the code that is needed to update the price of all books that get inserted. However, there is still one piece of the puzzle
missing. Unit tests are an important part of writing code and are required. In the next step, you will see why this is so and you will be
able to add a test class.

### Test Class
One advantage to creating a separate class for testing is that classes defined with @IsTest
don’t count against your org’s limit of 6 MB of Apex code.
The method validateHelloWorld is defined using the @IsTest annotation. This annotation means that if changes are
made to the database, they’re rolled back when execution completes. You don’t have to delete any test data created in the test
method.

### Deploying
you deploy the Apex code and the custom object you created previously to your production organization using change sets.
- A deployment connection between the sandbox and production organizations that allows inbound change sets to be received by
the production organization. See “Change Sets” in the Salesforce online help.
- “Create and Upload Change Sets” user permission to create, edit, or upload outbound change sets.
`Pg 22`

This procedure doesn't apply to Developer organizations since change sets are available only in Performance, Unlimited, Enterprise,
or Database.com Edition organizations. If you have a Developer Edition account, you can use other deployment methods.

### .
All Apex variables, whether they’re class member variables or method variables, are initialized to null.

Blob a collection of binary data stored as a single object.

Decimal Scale is a count of decimal places. Use the setScale method to set a Decimal’s scale.

ID Any valid 18-character Lightning Platform record identifier.

Like all other variables, boolean variables are null if not assigned a value explicitly.

- Integer 32-bit
- Long 64-bit
- Double 64-bit
- Object Any data type that is supported in Apex.
- String single quotes
- Empty Strings and Trailing Whitespace: sObject String field values follow the same rules as in SOAP API: they can never be empty (only null), and they can never include leading and trailing
whitespace. These conventions are necessary for database storage.

Conversely, Strings in Apex can be null or empty and can include leading and trailing whitespace,
which can be used to construct a message.

The Solution sObject field SolutionNote operates as a special type of String. If you have HTML Solutions
enabled, any HTML tags used in this field are verified before the object is created or updated. If invalid
HTML is entered, an error is thrown. Any JavaScript used in this field is removed before the object is
created or updated.

EscapeSequences: All Strings in Apex use the same escape sequences as SOQL strings: \b
(backspace), \t (tab), \n (line feed), \f (form feed), \r (carriage return), \" (double quote),
\' (single quote), and \\ (backslash).

Two non-standard primitive data types can’t be used as variable or method types, but do appear in system static methods:
- AnyType. The valueOf static method converts an sObject field of type AnyType to a standard primitive. AnyType is used within
the Lightning Platform database exclusively for sObject fields in field history tracking tables.
- Currency. The Currency.newInstance static method creates a literal of type Currency. This method is for use solely within
SOQL and SOSL WHERE clauses to filter against sObject currency fields. You can’t instantiate Currency in any other type of Apex.

There is no limit on the number of items a collection can hold. However, there is a general limit on heap size.

Operations:
- List: add, get
- Set: contains, remove
- Map: put, keySet

The index position of the first element in a list is always 0.

Lists can contain any collection and can be nested within one another and become multidimensional. For example, you can have a list
of lists of sets of Integers. A list can contain up to seven levels of nested collections inside it, that is, up to eight levels overall.

Using the List.sort method, you can sort elements in a list.

Lists can hold objects of your user-defined types (your Apex classes). Lists of user-defined types can be sorted.

To sort such a list using the List.sort method, your Apex classes must implement the Comparable interface.

- A set is an unordered collection—you can’t access a set element at a specific index. You can only iterate over set elements.
- The iteration order of set elements is deterministic
- A map key can hold the null value.
- Adding a map entry with a key that matches an existing key in the map overwrites the existing entry with that key with the new
entry.
- Map keys of type String are case-sensitive
- Uniqueness of map keys of user-defined types is determined by the equals and hashCode methods, which you provide in
your classes.
- A Map object is serializable into JSON only if it uses one of the primitive data types.

When using a custom type (your Apex class) for the map key or set elements, provide equals and hashCode methods in your
class. Apex uses these two methods to determine equality and uniqueness of keys for your objects.

If the object in your map keys or set elements changes after being added to the collection, it won’t be found anymore
because of changed field values.

An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Enums are typically
used to define a set of possible values that don’t otherwise have a numerical order.

Although each value corresponds to a distinct integer value, the enum hides this implementation. Hiding the implementation prevents
any possible misuse of the values to perform arithmetic and so on. After you create an enum, variables, method arguments, and return
types can be declared of that type.

You can use an enum in any place you can use another data type name. If you define a variable whose type is an enum, any object you
assign to it must be an instance of that enum class.

Any webservice method can use enum types as part of their signature. In this case, the associated WSDL file includes definitions
for the enum and its values, which the API client can use.

All enum values, including system enums, have common methods associated with them. You cannot add user-defined methods to enum values.

System-defined enums cannot be used in Web service methods.
- System.StatusCode
- System.XmlTag
- System.ApplicationReadWriteMode
- System.LoggingLevel
- System.RoundingMode
- System.SoapType
- System.DisplayType
- System.JSONToken
- ApexPages.Severity
- Dom.XmlNodeType

To avoid confusion with case-insensitive SOQL and SOSL queries, Apex is also case-insensitive.

Constants can be defined using the final keyword.

The final keyword means that the variable can be assigned at most once, either in the declaration itself, or with a static initializer
method if the constant is defined in a class.

### Comparison
The comparison of any two values can never result in null.
- If x or y equal null and are Integers, Doubles, Dates, or Datetimes,
the expression is false.
- A non-null String or ID value is always greater than a null value.
- If x and y are IDs, they must reference the same type of object.
Otherwise a runtime error results.
- If x or y is an ID and the other value is a String, the String value is
validated and treated as an ID.
- x and y can’t be Booleans.

The comparison of two strings is performed according to the locale of
the context user and is case-insensitive.
- String comparison using != is case-insensitive
- Unlike Java, != in Apex compares object value equality not reference
equality, except for user-defined types.
- For sObjects and sObject arrays, != performs a deep check of all sObject
field values before returning its result.
- For records, != evaluates to true if the records have different values for
any field.

User-defined types are compared by reference, which means that two
objects are different only if they reference different locations in memory.

You can override this default comparison behavior by providing equals
and hashCode methods in your class to compare object values instead.
- x or y can be the literal null.
- The comparison of any two values can never result in null.

Unlike Java, == in Apex compares object value equality not reference
equality, except for user-defined types. Therefore:
- String comparison using == is case-insensitive and is performed
according to the locale of the context user
- ID comparison using == is case-sensitive and doesn’t distinguish
between 15-character and 18-character formats
- User-defined types are compared by reference, which means that
two objects are equal only if they reference the same location in
memory. You can override this default comparison behavior by
providing equals and hashCode methods in your class to
compare object values instead.

For sObjects and sObject arrays, == performs a deep check of all sObject
field values before returning its result. Likewise for collections and built-in
Apex objects.

For records, every field must have the same value for == to evaluate to
true.
- x or y can be the literal null.
- The comparison of any two values can never result in null.

SOQL and SOSL use = for their equality operator and not ==. Although
Apex and SOQL and SOSL are strongly linked, this unfortunate syntax
discrepancy exists because most modern languages use = for assignment
and == for equality.

The designers of Apex deemed it more valuable to
maintain this paradigm than to force developers to learn a new
assignment operator. As a result, Apex developers must use == for
equality tests in the main body of the Apex code, and = for equality in
SOQL and SOSL queries.

- If x and y are Integers or Doubles, the operator adds the value of x to the
value of y. If a Double is used, the result is a Double.
- If x is a Date and y is an Integer, returns a new Date that is incremented by
the specified number of days.
- If x is a Datetime and y is an Integer or Double, returns a new Date that is
incremented by the specified number of days, with the fractional portion
corresponding to a portion of a day.
- If x is a String and y is a String or any other type of non-null argument,
concatenates y to the end of x.

?. i.e. x?.y
Safe navigation operator. Short-circuits expressions that attempt to operate on
a null value, and returns null instead of throwing a NullPointerException. If the
left-hand side of the chain expression evaluates to null, the right-hand side of the
chain expression isn’t evaluated.

Allowed:
- Method or variable or parameter chains
- Using parentheses, for example in a cast.
- SObject chaining
- SOQL Queries

You can’t use the Safe Navigation Operator in certain cases. Attempting to use the operator in these ways causes an error during
compilation:
- Types and static expressions with dots. For example:
- Namespaces
- {Namespace}.{Class}
- Trigger.new
- Flow.interview.{flowName}
- {Type}.class
- Static variable access, method calls, and expressions. For example:
- AClass.AStaticMethodCall()
- AClass.AStaticVariable
- String.format('{0}', 'hello world')
- Page.{pageName}
- Assignable expressions. For example:
- foo?.bar = 42;
- ++foo?.bar;
- SOQL bind expressions. For example:
  ````
  class X { public String query = 'xyz';}
  X x = new X();
  List<Account> accounts = [SELECT Name FROM Account WHERE Name = :X?.query]
  List<List<SObject>> moreAccounts = [FIND :X?.query IN ALL FIELDS
  RETURNING Account(Name)];
  ````
- With addError() on SObject scalar fields. For example:
  ````
  Contact c;
  c.LastName?.addError('The field must have a value');
  ````
You can use the operator with addError() on SObjects, including lookup and master-detail fields.

All Apex types are implicitly nullable and can hold a null value returned from the operator.

Comments Java style.

Apex requires you to explicitly convert one data type to another. For example, a variable of the Integer data type cannot be
implicitly converted to a String. You must use the string.format method.

### Arithmatic
Numbers form a hierarchy of types. Variables of lower numeric types can always be assigned to higher types without explicit conversion.

The following is the hierarchy for numbers, from lowest to highest:
1. Integer
2. Long
3. Double
4. Decimal

In addition to numbers, other data types can be implicitly converted. The following rules apply:
- IDs can always be assigned to Strings.
- Strings can be assigned to IDs. However, at runtime, the value is checked to ensure that it is a legitimate ID. If it is not, a runtime
exception is thrown.
- The instanceOf keyword can always be used to test whether a string is an ID.

Numeric values represent Integer values unless they are appended with L for a Long or with .0 for a Double or Decimal.

Arithmetic computations that produce values larger than the maximum value of the current type are said to overflow.

When dividing numeric Integer or Long values, the fractional portion of the result, if any, is removed before performing any implicit
conversions to a Double or Decimal.

### Conditional (If-Else) Statements
````
Switch Statements
  switch on expression {
    when value1 { // when block 1
    // code block 1
    }
    when value2 { // when block 2
    // code block 2
    }
    when value3 { // when block 3
    // code block 3
    }
    when else { // default block, optional
    // code block 4
    }
  }
````
The when value can be a single value, multiple values, or sObject types.
````
  when value1 {
  }
  when value2, value3 {
  }
  when TypeName VariableName {
  }
````
Each when block has a value that the expression is matched against. These values can take one of the following forms.
- when literal {} (a when block can have multiple, comma-separated literal clauses)
- when SObjectType identifier {}
- when enum_value {}

The value null is a legal value for all types.

If there isn’t a when else block, no action is taken on mismatch.

If you include a when else block, it must be the last block in the switch statement.

There is no fall-through. After the code block is executed, the switch statement exits.

Apex switch statement expressions can be one of the following types.
- Integer
- Long
- sObject
- String
- Enum

Salesforce recommends including a when else block, especially with enum types, although it isn’t required. When you
build a switch statement using enum values provided by a managed package, your code might not behave as expected if a
new version of the package contains additional enum values. You can prevent this problem by including a when else block
to handle unanticipated values.

String clauses are case-sensitive.

Switching on an sObject value allows you to implicitly perform instanceof checks and casting.

You can use only one sObject type per when block.

### Loops
Apex supports five types of procedural loops.
These types of procedural loops are supported:
- do {statement} while (Boolean_condition);
- while (Boolean_condition) statement;
- for (initialization; Boolean_exit_condition; increment) statement;
- for (variable : array_or_set) statement;
- for (variable|variable_list : [inline_soql_query]) statement;
  Both variable and variable_list must be of the same sObject type as is returned by the soql_query.

All loops allow for loop control structures:
- break; exits the entire loop
- continue; skips to the next iteration of the loop
Modifying a collection's elements while iterating through that collection is not supported and causes an error.
Do not directly add or remove elements while iterating through the collection that includes them.
- create a temporary collection.
- later add/remove from the original collection.

Apex provides triggers, similar to database triggers. A trigger is Apex code that executes before or after database operations.

### Class
Apex classes are modeled on their counterparts in Java. You’ll define, instantiate, and extend classes, and you’ll work with interfaces,

Apex class versions, properties, and other related class concepts.

A class is a template or blueprint from which objects are created. An object is an instance of a
class. All objects have state and behavior, that is, things that an object knows about itself, and things that an object can do.

State: what it knows, Variables are used to specify the state of an object

Behavior: what it can do, Methods are used to control behavior

You can only have inner classes one level deep.

You can’t override a method with the override keyword unless the class has been defined as virtual.

A class can implement multiple interfaces, but only extend one existing class. This restriction means that Apex doesn’t support multiple
inheritance. The interface names in the list are separated by commas.

Apex parses methods in two phases, so forward declarations aren’t needed.

One constructor calls another constructor using the this(...) syntax, also know as constructor chaining.

Syntax:
````
private | public | global
[virtual | abstract | with sharing | without sharing]
class ClassName [implements InterfaceNameList] [extends ClassName]
{
    // The body of the class
    [public | private | protected | global] [final] [static] data_type variable_name [= value];
    [public | private | protected | global] [override] [static] data_type method_name (input parameters)
    {
        // The body of the method
    }
}
````

Static methods, variables, and initialization code have these characteristics.
- They’re associated with a class.
- They’re allowed only in outer classes.
- They’re initialized only when a class is loaded.
- They aren’t transmitted as part of the view state for a Visualforce page.
Instance methods, member variables, and initialization code have these characteristics.
- They’re associated with a particular object.
- They have no definition modifier.
- They’re created with every object instantiated from the class in which they’re declared.
Local variables have these characteristics.
- They’re associated with the block of code in which they’re declared.
- They must be initialized before they’re used.

Inner classes have no static methods or variables.

### Variables
A static variable is static only within the scope of the Apex transaction. It’s not static across the server or the entire organization. The
value of a static variable persists within the context of a single transaction and is reset across transaction boundaries. For example, if an
Apex DML request causes a trigger to fire multiple times, the static variables persist across these trigger invocations.

To store information that is shared across instances of a class, use a static variable. All instances of the same class share a single copy of
the static variable.

A static variable defined in a trigger doesn't retain its value between different trigger contexts within the same transaction, such as
between before insert and after insert invocations. Instead, define the static variables in a class so that the trigger can access these class
member variables and check their static values.

Local variable names are evaluated before class names. If a local variable has the same name as a class, the local variable hides methods
and variables on the class of the same name.

The instance initialization code in a class is executed each time an object is instantiated from that class. These code blocks run before
the constructor.
A static initialization block runs only one time, regardless of how many times you access the class that contains it.

### Property
An Apex property is similar to a variable 'C#'; however, you can do additional things in your code to a property value before it’s accessed or
returned. Properties can be used to validate data before a change is made, to prompt an action when data is changed (such as altering
the value of other member variables), or to expose data that is retrieved from some other source (such as another class).

Property definitions include one or two code blocks, representing a get accessor and a set accessor:
- The code in a get accessor executes when the property is read.
- The code in a set accessor executes when the property is assigned a new value.

If a property has only a get accessor, it’s considered read-only. If a property has only a set accessor, it’s considered write-only. A property
with both accessors is considered read-write.
the system passes an implicit argument to the setter called 'value' of the same data type as the property.

You can extend a class to provide more specialized behavior. 'polymorphism'
Extensions also apply to interfaces—an interface can extend another interface.
Example: `Pg 75`

### Interface
An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of
each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the
interface.

### Iterator
An iterator traverses through every item in a collection.

To use custom iterators, you must create an Apex class that implements the Iterator interface.

The Iterator interface has the following instance methods: hasNext, next

If you don’t want to use a custom iterator with a list, but instead want to create your own data structure, you can use the Iterable
interface to generate the data structure.

The Iterable interface has the following method: iterator

- Only classes that are extending from virtual or abstract classes can use super.
- You can only use super in methods that are designated with the override keyword.

### .
Use the transient keyword to declare instance variables that can't be saved, and shouldn't be transmitted as part of the view state
for a Visualforce page.

Declaring variables as transient reduces view state size. A common use case for the transient keyword is a field on a Visualforce
page that is needed only for the duration of a page request, but should not be part of the page's view state and would use too many
system resources to be recomputed many times during a request.

Some Apex objects are automatically considered transient, that is, their value does not get saved as part of the page's view state. These
objects include the following:
- PageReferences
- XmlStream classes
- Collections automatically marked as transient only if the type of object that they hold is automatically marked as transient, such as
a collection of Savepoints
- Most of the objects generated by system methods, such as Schema.getGlobalDescribe.
- JSONParser class instances.

Static variables also don't get transmitted through the view state.

### Sharing
Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the
inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.

Using inherited sharing is an advanced technique to determine the sharing mode at runtime and design Apex classes that 
can run in either with sharing or without sharing mode.

Because the sharing mode is determined at runtime, you must take extreme care to ensure that your Apex code is
secure to run in both with sharing and without sharing modes.

Using inherited sharing, along with other appropriate security checks, facilitates in passing AppExchange security review and
ensures that your privileged Apex code isn’t used in unexpected or insecure ways.

An Apex class with inherited sharing runs
as with sharing when used as:
- An Aura component controller
- A Visualforce controller
- An Apex REST service
- Any other entry point to an Apex transaction

There’s a distinct difference between an Apex class that is marked with inherited sharing and one with an omitted sharing
declaration. If the class is used as the entry point to an Apex transaction, an omitted sharing declaration runs as without sharing.

However, inherited sharing ensures that the default is to run as with sharing. A class declared as inherited
sharing runs as without sharing only when explicitly called from an already established without sharing context.

Apex without an explicit sharing declaration is insecure by default. We strongly recommend that you always specify a sharing declaration
for a class.

Regardless of the sharing mode, object-level access and field-level security are not enforced by Apex. You must enforce object-level
access and field-level security in your SOQL queries or code.

- with sharing:
Use this mode with caution. Ensure that you don’t inadvertently
expose sensitive data that would normally be hidden by the sharing
- without sharing:
This sharing mechanism is best used to grant targeted
elevation of sharing privileges to the current user.
For example, use without sharing to allow community
users to read records to which they wouldn’t otherwise have access.
- inherited sharing:
Use this mode for service classes that have to be flexible and
support use cases with different sharing modes while also
defaulting to the more secure with sharing mode.

### Annotations
Apex supports the following annotations.
- @AuraEnabled
- @Deprecated
- @Future
- @InvocableMethod
- @InvocableVariable
- @IsTest
- @JsonAccess
- @NamespaceAccessible
- @ReadOnly
- @RemoteAction
- @SuppressWarnings
- @TestSetup
- @TestVisible
- Apex REST annotations:
  - @ReadOnly
  - @RestResource(urlMapping='/yourUrl')
  - @HttpDelete
  - @HttpGet
  - @HttpPatch
  - @HttpPost
  - @HttpPut

The @AuraEnabled annotation enables client-side and server-side access to an Apex controller method. Providing this annotation
makes your methods available to your Lightning components (both Lightning web components and Aura components). Only methods
with this annotation are exposed.

Use the Deprecated annotation to identify methods, classes, exceptions, enums, interfaces, or variables that can no longer be
referenced in subsequent releases of the managed package in which they reside. This annotation is useful when you’re refactoring code
in managed packages as the requirements evolve. New subscribers can’t see the deprecated elements, while the elements continue to
function for existing subscribers and API integrations.

Use the Future annotation to identify methods that are executed asynchronously. When you specify Future, the method executes
when Salesforce has available resources.

For example, you can use the Future annotation when making an asynchronous Web service callout to an external service. Without
the annotation, the Web service callout is made from the same thread that is executing the Apex code, and no additional processing
can occur until the callout is complete (synchronous processing).

Methods with the Future annotation must be static methods, and can only return a void type. The specified parameters must be
primitive data types, arrays of primitive data types, or collections of primitive data types. Methods with the Future annotation can’t
take sObjects or objects as arguments.

To allow callouts in a Future method, specify (callout=true). The default is (callout=false), which prevents a method
from making callouts.

Use the InvocableMethod annotation to identify methods that can be run as invocable actions.
Invocable methods are called natively from Rest, Apex, Flow, or Einstein bot that interacts with the external API source. Invocable methods
have dynamic input and output values and support describe calls.
- The invocable method must be static and public or global, and its class must be an outer class.
- Only one method in a class can have the InvocableMethod annotation.
- Other annotations can’t be used with the InvocableMethod annotation.

Inputs and Outputs

There can be at most one input parameter.
For more information about invocable actions, see Actions Developer Guide.

#### Supported Modifiers
All modifiers are optional.
- label
  The label for the method, which appears as the action name in Flow Builder. The default is the method name, though we recommend
  that you provide a label.
- description
  The description for the method, which appears as the action description in Flow Builder. The default is Null.
- callout
  The callout modifier identifies whether the method calls to an external system. If the method calls to an external system, add
  callout=true. The default value is false.
- category
  The category for the method, which appears as the action category in Flow Builder. If no category is provided (by default), actions
  appear under Uncategorized.
- configurationEditor
  The custom property editor that is registered with the method and appears in Flow Builder when an admin configures the action.
  If you don’t specify this modifier, Flow Builder uses the standard property editor.
- iconName
  The name of the icon to use as a custom icon for the action in the Flow Builder canvas. You can specify an SVG file that you uploaded
  as a static resource or a Salesforce Lightning Design System standard icon.

Use the InvocableVariable annotation to identify variables used by invocable methods in custom classes.
The InvocableVariable annotation identifies a class variable used as an input or output parameter for an InvocableMethod
method’s invocable action. If you create your own custom class to use as the input or output to an invocable method, you can annotate
individual class member variables to make them available to the method.

#### Supported Modifiers
All modifiers are optional.
label
  The label for the variable. The default is the variable name.
description
  The description for the variable. The default is Null.
required
  Specifies whether the variable is required. If not specified, the default is false. The value is ignored for output variables.

InvocableVariable Considerations
- Other annotations can’t be used with the InvocableVariable annotation.
- Only global and public variables can be invocable variables.
- The invocable variable can’t be one of the following:
- A non-member variable such as a static or local variable.
- A property.
- A final variable.
- Protected or private.
- The data type of the invocable variable must be one of the following:
- A primitive other than Object
- An sObject, either the generic sObject or a specific sObject
- A list or a list of lists of primitives, sObjects, objects created from Apex classes, or collections
- The invocable variable name in Apex must match the name in the flow. The name is case-sensitive.

Use the @IsTest annotation to define classes and methods that only contain code used for testing your application.

Classes defined as @IsTest can't be interfaces or enums.
use the @IsTest(SeeAllData=true) annotation to grant test classes and individual test methods access to all data in the organization.

Use the @IsTest(OnInstall=true) annotation to specify which Apex tests are executed during package installation.

Use the @IsTest(IsParallel=true) annotation to indicate test classes that can run in parallel.

@IsTest(SeeAllData=true) and @IsTest(IsParallel=true) annotations can’t be used together on the
same Apex method.

The @JsonAccess annotation defined at Apex class level controls whether instances of the class can be serialized or deserialized. If
the annotation restricts the JSON serialization and deserialization, a runtime JSONException exception is thrown.

The serializable and deserializable parameters of the @JsonAccess annotation enforce the contexts in which Apex
allows serialization and deserialization. You can specify one or both parameters, but you can’t specify the annotation with no parameters.

The valid values for the parameters to indicate whether serialization and deserialization are allowed:
- never: never allowed
- sameNamespace: allowed only for Apex code in the same namespace
- samePackage: allowed only for Apex code in the same package (impacts only second-generation packages)
- always: always allowed for any Apex code

The @NamespaceAccessible makes public Apex in a package available to other packages that use the same namespace.

You can't use the @NamespaceAccessible annotation for an @AuraEnabled Apex method.

The @ReadOnly annotation allows you to perform less restrictive queries against the Lightning Platform database by increasing the
limit of the number of returned rows for a request to 1,000,000. All other limits still apply. The annotation blocks the following operations
within the request: DML operations, calls to System.schedule, and enqueued asynchronous Apex jobs.

Visualforce pages can call controller methods with the @ReadOnly annotation, and those methods run with the same relaxed
restrictions. To increase other Visualforce-specific limits, such as the size of a collection that can be used by an iteration component like
`<apex:pageBlockTable>`, you can set the readonly attribute on the `<apex:page>` tag to true.

Prior to API version 49.0, using @ReadOnly on Apex REST methods (@HttpDelete, @HttpGet, @HttpPatch, @HttpPost, or @HttpPut)
also required annotating the method with @RemoteAction.

The RemoteAction annotation provides support for Apex methods used in Visualforce to be called via JavaScript. This process is
often referred to as JavaScript remoting.

Methods with the RemoteAction annotation must be static and either global or public.

Adding a controller or controller extension grants access to all @RemoteAction methods in that Apex class, even
if those methods aren’t used in the page. Anyone who can view the page can execute all @RemoteAction methods and
provide fake or malicious data to the controller.

Add the Apex class as a custom controller or a controller extension to your page.
````
<apex:page controller="MyController" extension="MyExtension">
````
Then, add the request as a JavaScript function call. A simple JavaScript remoting invocation takes the following form.
````
  [namespace.]MyController.method(
    [parameters...,]
    callbackFunction,
    [configuration]
  );
````
The @SuppressWarnings annotation does nothing in Apex but can be used to provide information to third-party tools.

Methods defined with the @TestSetup annotation are used for creating common test records that are available for all test methods
in the class.
Syntax:
````
  @TestSetup static void methodName() {
  }
````
If a test class contains a test setup method, the testing framework executes the test setup method first, before any test method in the
class. Records that are created in a test setup method are available to all test methods in the test class and are rolled back at the end of
test class execution. If a test method changes those records, such as record field updates or record deletions, those changes are rolled
back after each test method finishes execution. The next executing test method gets access to the original unmodified state of those
records.

You can have only one test setup method per test class.
Class using the @IsTest(SeeAllData=true) annotation, test setup methods aren’t supported in this class.

Use the TestVisible annotation to allow test methods to access private or protected members of another class outside the test
class. These members include methods, member variables, and inner classes. This annotation enables a more permissive access level
for running tests only. This annotation doesn’t change the visibility of members if accessed by non-test classes.

The @RestResource annotation is used at the class level and enables you to expose an Apex class as a REST resource.

Some considerations when using this annotation:
- The URL mapping is relative to https://instance.salesforce.com/services/apexrest/.
- The URL mapping can contain a wildcard (*).
- The URL mapping is case-sensitive. For example, a URL mapping for my_url matches a REST resource containing my_url and
not My_Url.
- To use this annotation, your Apex class must be defined as global.
URL Guidelines
URL path mappings are as follows:
- The path must begin with a forward slash (/).
- The path can be up to 255 characters long.
- A wildcard (*) that appears in a path must be preceded by a forward slash (/). Additionally, unless the wildcard is the last character
in the path, it must be followed by a forward slash (/).

The rules for mapping URLs are:
- An exact match always wins.
- If no exact match is found, find all the patterns with wildcards that match, and then select the longest (by string length) of those.
- If no wildcard match is found, an HTTP response status code 404 is returned.

The URL for a namespaced class contains the namespace. For example, if your class is in namespace abc and the class is mapped to
your_url, then the API URL is modified as follows:
https://instance.salesforce.com/services/apexrest/abc/your_url/. In the case of a URL collision, the
namespaced class is always used.

The @HttpGet/@HttpDelete/@HttpPatch/@HttpPost/@HttpPut annotation is used at the method level and enables you to expose an Apex method as a REST resource. This
method is called when an HTTP GET/DELETE/PATCH/POST/PUT request is sent, and deletes the specified resource.

To use this annotation, your Apex method must be defined as global static.

Methods annotated with @HttpGet are also called if the HTTP request uses the HEAD request method.

The Salesforce application supports the use of namespace prefixes. Namespace prefixes are used in managed AppExchange packages
to differentiate custom object and field names from names used by other organizations.

After a developer registers a globally unique namespace prefix and registers it with AppExchange registry, external references to custom
object and field names in the developer's managed packages take on the following long format:
`namespace_prefix__obj_or_field_name__c`

These fully qualified names can be onerous to update in working SOQL or SOSL statements, and Apex once a class is marked as “managed”.

Therefore, Apex supports a default namespace for schema names. When looking at identifiers, the parser assumes that the namespace
of the current object is the namespace of all other objects and fields unless otherwise specified. Therefore, a stored class must refer to
custom object and field names directly (using obj_or_field_name__c) for those objects that are defined within its same
application namespace.

Only use namespace prefixes when referring to custom objects and fields in managed packages that have been installed to
your organization from the AppExchange.

To invoke a method that is defined in a managed package, Apex allows fully qualified identifiers of the form:
`namespace_prefix.class.method(args)`

### Namespace
The System namespace is the default namespace in Apex. In addition to the System namespace, there is a built-in System class
in the System namespace, which provides methods like assertEquals and debug.

The Schema namespace provides classes and methods for working with schema metadata information. We implicitly import Schema.*

Because local variables, class names, and namespaces can all hypothetically use the same identifiers, the Apex parser evaluates expressions
in the form of `name1.name2.[...].nameN` as:
- local var
- if not, class
- if not, namespace

## Versions
To aid backwards-compatibility, classes and triggers are stored with the version settings for a specific Salesforce API version.

Setting a version for an installed package determines the exposed interface and behavior of any Apex code in the installed package. This
allows you to continue to reference Apex that may be deprecated in the latest version of an installed package, if you installed a version
of the package before the code was deprecated.

If you save an Apex class or trigger without
specifying the Salesforce API version, the class or trigger is associated with the latest installed version by default.

When classes and methods are added to the Apex language, those classes and methods are available to all API versions your Apex code
is saved with, regardless of the API version (Salesforce release) they were introduced in.

For example, if a method was added in API
version 33.0, you can use this method in a custom class saved with API version 33.0 or another class saved with API version 25.0.

There is one exception to this rule. The classes and methods of the ConnectApi namespace are supported only in the API versions
specified in the documentation.

You can add and interact with data in the Lightning Platform persistence layer. The sObject data type is the main data type that holds
data objects. the term sObject refers to any object that can be stored in the Lightning platform database.

An sObject variable represents a row of data and can only be declared in Apex using SOAP API name of the object.

If you use the generic SObject type instead of a specific object, such as Account, you can retrieve only the Id field using dot notation.
````
  SObject record;
  record.getSObjectType() == Account.sObjectType
````
SObject fields can be initially set or not set (unset); unset fields are not the same as null or blank fields. When you perform a DML operation
on an SObject, you can change a field that is set; you can’t change unset fields.

If an Apex method takes an SObject parameter, you can use the System.isSet() method to identify the set fields. If you want to unset any
fields to retain their values, first create an SObject instance. Then apply only the fields you want to be part of the DML operation.

## DML
You can perform DML operations either on a single sObject, or in bulk on a list of sObjects. Performing bulk DML operations is the
recommended way because it helps avoid hitting governor limits, such as the DML limit of 150 statements per Apex transaction. This
limit is in place to ensure fair access to shared resources in the Lightning Platform. Performing a DML operation on a list of sObjects
counts as one DML statement, not as one statement for each sObject.

Another DML governor limit is the total number of rows that can be processed by DML operations in a single transaction, which is 10,000.

All rows processed by all DML calls in the same transaction count incrementally toward this limit.

Most DML operations execute in system context, ignoring the current user's permissions, field-level security, organization-wide defaults,
position in the role hierarchy, and sharing rules.

If you execute DML operations within an anonymous block, they execute using the current user’s object and field-level
permissions.

The language in Apex that allows you to add and manage records in the database is the

Data Manipulation Language (DML). In contrast to the SOQL language, which is used for read operations (querying records), DML is used
for write operations.

You need to call DML statements to persist sObjects to the database.

Also, you can use DML to modify records that have already been inserted. Among the operations you can perform are record updates,
deletions, restoring records from the Recycle Bin, merging records, or converting leads. After querying for records, you get sObject
instances that you can modify and then persist the changes of.

Apex offers two ways to perform DML operations: using DML statements or Database class methods. This provides flexibility in how you
perform data operations. DML statements are more straightforward to use and result in exceptions that you can handle in your code.

The following helps you decide when you want to use DML statements or Database class methods.
- Use DML statements if you want any error that occurs during bulk DML processing to be thrown as an Apex exception that immediately
interrupts control flow (by using try. . .catch blocks). This behavior is similar to the way exceptions are handled in most
database procedural languages.
- Use Database class methods if you want to allow partial success of a bulk DML operation—if a record fails, the remainder of the DML
operation can still succeed. Your application can then inspect the rejected records and possibly retry the operation. When using this
form, you can write code that never throws DML exception errors. Instead, your code can use the appropriate results array to judge
success or failure. Note that Database methods also include a syntax that supports thrown exceptions, similar to DML statements.

DML statements return run-time exceptions if something went wrong in the database during the execution of the DML operations. You
can handle the exceptions in your code by wrapping your DML statements within try-catch blocks.

Database class methods return the results of the data operation. These result objects contain useful information about the data operation
for each record, such as whether the operation was successful or not, and any error information. Each type of operation returns a specific
result object type, as outlined below.
- Operation Result Class
- insert, update SaveResult Class
- upsert, UpsertResult Class
- merge, MergeResult Class
- delete, DeleteResult Class
- undelete, UndeleteResult Class
- convertLead, LeadConvertResult Class
- emptyRecycleBin, EmptyRecycleBinResult Class

While DML statements always return exceptions when an operation fails for one of the records being processed and the operation is
rolled back for all records, Database class methods can either do so or allow partial success for record processing. In the latter case of
partial processing, Database class methods don’t throw exceptions. Instead, they return a list of errors for any errors that occurred on
failed records.

The errors provide details about the failures and are contained in the result of the Database class method.

When an sObject record is locked, no other client or user is allowed to make updates either through code or the Salesforce user interface.
The client locking the records can perform logic on the records and make updates with the guarantee that the locked records won’t be
changed by another client during the lock period. The lock gets released when the transaction completes.

Your SOQL query sometimes returns so many sObjects that the limit on heap size is exceeded and an error occurs. To resolve, use a SOQL
query for loop instead, since it can process multiple batches of records by using internal calls to query and queryMore.

Using the SOQL query within the for loop reduces the possibility of reaching the limit on heap size. However, this approach
can result in more CPU cycles being used with increased DML calls.

Instead of using a SOQL query in a for loop, the preferred method of mass updating records is to use batch Apex, which minimizes
the risk of hitting governor limits.

Queries including an aggregate function don't support queryMore. A run-time exception occurs if you use a query containing an
aggregate function that returns more than 2,000 rows in a for loop.

SOQL for loops can process records one at a time using a single sObject variable, or in batches of 200 sObjects at a time using an
sObject list.

DML statements can only process up to 10,000 records at a time, and sObject list for loops process records in batches of
200.

You may get a QueryException in a SOQL for loop with the message Aggregate query has too many
rows for direct assignment, use FOR loop. This exception is sometimes thrown when accessing a large
set of child records (200 or more) of a retrieved sObject inside the loop, or when getting the size of such a record set.

SOQL and SOSL statements in Apex can reference Apex code variables and expressions if they’re preceded by a colon (:). This use of a
local code variable within a SOQL or SOSL statement is called a bind.

Bind expressions can be used as:
- The search string in FIND clauses.
- The filter literals in WHERE clauses.
- The value of the IN or NOT IN operator in WHERE clauses, allowing filtering on a dynamic set of values. Note that this is of
particular use with a list of IDs or Strings, though it works with lists of any type.
- The division names in WITH DIVISION clauses.
- The numeric value in LIMIT clauses.
- The numeric value in OFFSET clauses.

### Apex Describe Information
Pg 181

To create a dynamic SOQL query at run time, use the Database.query or Database.queryWithBinds methods, in one
of the following ways.
- Return a single sObject when the query returns a single record:
    sObject s = Database.query(string);
- Return a list of sObjects when the query returns more than a single record:
    `List<sObject> sobjList = Database.query(string);`
- Return a list of sObjects using a map of bind variables:
    `List<sObject> sobjList = Database.queryWithBinds(string, bindVariablesMap, accessLevel);`

The accessLevel parameter specifies whether the method runs in system mode
(AccessLevel.SYSTEM_MODE) or user mode (AccessLevel.USER_MODE).

To prevent SOQL injection, use the escapeSingleQuotes method. This method adds the escape character (\) to all single quotation
marks in a string that is passed in from a user. The method ensures that all single quotation marks are treated as enclosing strings, instead
of database commands.

These methods also use Dynamic SOQL:
- Database.countQuery and Database.countQueryWithBinds: Return the number of records that a dynamic SOQL
query would return when executed.
- Database.getQueryLocator and Database.getQueryLocatorWithBinds: Create a QueryLocator object
used in batch Apex or Visualforce.

To create a dynamic SOSL query at run time, use the search query method. For example:
````
  List<List <sObject>> myQuery = search.query(SOSL_search_string);
````
To provide more context for records in search results, use the SOSL WITH SNIPPET clause. Snippets make it easier to identify the
content you’re looking for. To use the SOSL WITH SNIPPET clause in a dynamic SOSL query at run time, use the Search.find method.
````
  Search.SearchResults searchResults = Search.find(SOSL_search_string);
````
## Dynamic DML
In addition to querying describe information and building SOQL queries at runtime, you can also create sObjects dynamically, and insert
them into the database using DML.

To create a new sObject of a given type, use the newSObject method on an sObject token. Note that the token must be cast into a
concrete sObject type (such as Account). For example:
````
  // Get a new account
  Account a = new Account();
  // Get the token for the account
  Schema.sObjectType tokenA = a.getSObjectType();
  // The following produces an error because the token is a generic sObject, not an Account
  // Account b = tokenA.newSObject();
  // The following works because the token is cast back into an Account
  Account b = (Account)tokenA.newSObject();
````
Though the sObject token tokenA is a token of Account, it is considered an sObject because it is accessed separately. It must be cast
back into the concrete sObject type Account to use the newSObject method.

You can also specify an ID with newSObject to create an sObject that references an existing record that you can update later.
`Pg 196`

Enforcing the current user's sharing rules can impact:
- SOQL and SOSL queries. A query may return fewer rows than it would operating in system context.
- DML operations. An operation may fail because the current user doesn't have the correct permissions. For example, if the user
specifies a foreign key value that exists in the organization, but which the current user doesn’t have access to.
````
  public with sharing class CWith {
    // All code in this class operates with enforced sharing rules.
  }
  public without sharing class CWithout {
    // All code in this class ignores sharing rules and operates
    // as if the context user has the Modify All Data permission.
    public class CInner {
      // All code in this class executes with the same sharing context
      // as the code that calls it.
      // Inner classes are separate from outer classes.
    }
    public class CInnerWithOut extends CWithout {
      // All code in this class ignores sharing rules because
      // this class extends a parent class that ignores sharing rules.
    }
  }
````
Apex generally runs in system context; that is, the current user's permissions and field-level security aren’t taken into account during
code execution. Sharing rules, however, aren’t always bypassed: the class must be declared with the without sharing keyword
in order to ensure that sharing rules aren’t enforced. Apex code that is executed with the executeAnonymous call and Connect in
Apex always execute using the sharing rules of the current user.

To enforce field-level security (FLS) and object permissions of the running user, you can specify user-mode access for database operations.

You can also enforce these permissions in your SOQL queries by using WITH SECURITY_ENFORCED.

You can also enforce object-level and field-level permissions in your code by explicitly calling the sObject describe result methods (of
Schema.DescribeSObjectResult) and the field describe result methods (of Schema.DescribeFieldResult) that check the current user's
access permission levels. In this way, you can verify if the current user has the necessary permissions, and only if he or she has sufficient
permissions, you can then perform a specific DML operation or a query.

For example, you can call the isAccessible, isCreateable, or isUpdateable methods of
Schema.DescribeSObjectResult to verify whether the current user has read, create, or update access to an sObject, respectively.

Similarly, Schema.DescribeFieldResult exposes these access control methods that you can call to check the current user's
read, create, or update access for a field. In addition, you can call the isDeletable method provided by
Schema.DescribeSObjectResult to check if the current user has permission to delete a specific sObject.

These examples call the access control methods.

To check the field-level update permission of the contact's email field before updating it:
````
  if (Schema.sObjectType.Contact.fields.Email.isUpdateable()) {
    // Update contact phone number
  }
````
To check the field-level create permission of the contact's email field before creating a new contact:
````
  if (Schema.sObjectType.Contact.fields.Email.isCreateable()) {
    // Create new contact
  }
````
To check the field-level read permission of the contact's email field before querying for this field:
````
  if (Schema.sObjectType.Contact.fields.Email.isAccessible()) {
    Contact c = [SELECT Email FROM Contact WHERE Id= :Id];
  }
````
To check the object-level permission for the contact before deleting the contact:
````
  if (Schema.sObjectType.Contact.isDeletable()) {
    // Delete contact
  }
````
Sharing rules are distinct from object-level and field-level permissions. They can coexist. If sharing rules are defined in Salesforce, you
can enforce them at the class level by declaring the class with the with sharing keyword.

If you call the sObject describe result and field describe result access
control methods, the verification of object and field-level permissions is performed in addition to the sharing rules that are in effect.

Sometimes, the access level granted by a sharing rule could conflict with an object-level or field-level permission.

You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special
keywords or by using DML method overloads.

Apex code runs in system mode by default, which means that it runs with substantially elevated permissions over the user running the
code. To enhance the security context of Apex, you can specify user mode access for database operations. Field-level security (FLS) and
object permissions of the running user are respected in user mode, unlike in system mode. User mode always applies sharing rules, but
in system mode they’re controlled by sharing keywords on the class.

You can indicate the mode of the operation by using WITH USER_MODE or WITH SYSTEM_MODE in your SOQL or SOSL query.
This example specifies user mode in SOQL.
````
  List<Account> acc = [SELECT Id FROM Account WITH USER_MODE];
````
Salesforce recommends that you enforce Field Level Security (FLS) by using WITH USER_MODE rather than WITH
SECURITY-ENFORCED because of these additional advantages.
- WITH USER_MODE takes into account polymorphic fields like Owner and Task.whatId.
- WITH USER_MODE processes all clauses in the SOQL SELECT statement including the WHERE clause.
- WITH USER_MODE finds all FLS errors in your SOQL query, while WITH SECURITY ENFORCED finds only the first error.

Further, in user mode, you can use the getInaccessibleFields() method on QueryException to examine the full set of
access errors.

Database operations can specify user or system mode. This example inserts a new account in user mode.
````
  Account acc = new Account(Name='test');
  insert as user acc;
````
The AccessLevel class represents the two modes in which Apex runs database operations. Use this class to define the execution
mode as user mode or system mode. An optional accessLevel parameter in Database and Search methods specifies whether the
method runs in system mode (AccessLevel.SYSTEM_MODE) or user mode (AccessLevel.USER_MODE). Use these overloaded
methods to perform DML and query operations.
- Database.query method. See Dynamic SOQL.
- Database.getQueryLocator methods
- Database.countQuery method
- Search.query method
- Database DML methods (insert, update, upsert, merge, delete, undelete, and convertLead)
- Includes the *Immediate and *Async methods, such as insertImmediate and deleteAsync.

When Database DML methods are run with AccessLevel.USER_MODE, you can access errors via
SaveResult.getErrors().getFields(). With insert as user, you can use the DMLException method
getFieldNames() to obtain the fields with FLS errors.

These methods require the accessLevel parameter.
- Database.queryWithBinds
- Database.getQueryLocatorWithBinds
- Database.countQueryWithBinds

Sharing is the act of granting a user or group of users permission to perform a set of actions on a record or set of records. Sharing access
can be granted using the Salesforce user interface and Lightning Platform, or programmatically using Apex.

## Security
Pg 221

## Debug Log
A debug log can record database operations, system processes, and errors that occur when executing a transaction or running unit tests.

Debug logs can contain information about:
- Database changes
- HTTP callouts
- Apex errors
- Resources used by Apex
- Automated workflow processes, such as:
- Workflow rules
- Assignment rules
- Approval processes
- Validation rules

You can retain and manage debug logs for specific users, including yourself, and for classes and triggers. Setting class and trigger trace
flags doesn’t cause logs to be generated or saved. Class and trigger trace flags override other logging levels, including logging levels set
by user trace flags, but they don’t cause logging to occur. If logging is enabled when classes or triggers execute, logs are generated at
the time of execution.

To view a debug log, from Setup, enter Debug Logs in the Quick Find box, then select Debug Logs. Then click View next to
the debug log that you want to examine. Click Download to download the log as an XML file.

Debug logs have the following limits.
- Each debug log must be 20 MB or smaller. Debug logs that are larger than 20 MB are reduced in size by removing older log lines,
such as log lines for earlier System.debug statements. The log lines can be removed from any location, not just the start of the
debug log.
- System debug logs are retained for 24 hours. Monitoring debug logs are retained for seven days.
- If you generate more than 1,000 MB of debug logs in a 15-minute window, your trace flags are disabled. We send an email to the
users who last modified the trace flags, informing them that they can re-enable the trace flag in 15 minutes.

Warning: If the debug log trace flag is enabled on a frequently accessed Apex class or for a user executing requests often,
the request can result in failure, regardless of the time window and the size of the debug logs.
- When your org accumulates more than 1,000 MB of debug logs, we prevent users in the org from adding or editing trace flags. To
add or edit trace flags so that you can generate more logs after you reach the limit, delete some debug logs.

After you generate a debug log, the type and amount of information listed depends on the filter values you set for the user. However,
the format for a debug log is always the same.

A debug log has the following sections.
- Header
  The header contains the following information.
  - The version of the API used during the transaction.
  - The log category and level used to generate the log.
- Execution Units
  An execution unit is equivalent to a transaction. It contains everything  that occurred within the transaction. EXECUTION_STARTED
  and EXECUTION_FINISHED delimit an execution unit.
- Code Units
  A code unit is a discrete unit of work within a transaction. For example, a trigger is one unit of code, as is a webservice method
  or a validation rule. A class is not a discrete unit of code.
  CODE_UNIT_STARTED and CODE_UNIT_FINISHED delimit units of code. Units of work can embed other units of work.

Units of code include, but are not limited to, the following:
- Triggers
- Workflow invocations and time-based workflow
- Validation rules
- Approval processes
- Apex lead convert
- @future method invocations
- Web service invocations
- executeAnonymous calls
- Visualforce property accesses on Apex controllers
- Visualforce actions on Apex controllers
- Execution of the batch Apex start and finish methods, and each execution of the execute method
- Execution of the Apex System.Schedule execute method
- Incoming email handling

### Log Lines
Log lines are included inside units of code and indicate which code or rules are being executed. Log lines can also be messages
written to the debug log.

Log lines are made up of a set of fields, delimited by a pipe (|). The format is:
- timestamp
- event identifier

### More Log Data
In addition, the log contains the following information.
- Cumulative resource usage is logged at the end of many code units. Among these code units are triggers, executeAnonymous,
batch Apex message processing, @future methods, Apex test methods, Apex web service methods, and Apex lead convert.
- Cumulative profiling information is logged once at the end of the transaction and contains information about DML invocations,
expensive queries, and so on. “Expensive” queries use resources heavily.

The following event types are logged. The table lists which fields or other information is logged with each event, and which combination
of log level and category causes an event to be logged.
`Pg 605`

You can use common exception methods to get more information about an exception, such as the exception error message or the stack
trace. The previous example calls the getMessage method, which returns the error message associated with the exception. There
are other exception methods that are also available.

Here are descriptions of some useful methods:
- getCause: Returns the cause of the exception as an exception object.
- getLineNumber: Returns the line number from where the exception was thrown.
- getMessage: Returns the error message that displays for the user.
- getStackTraceString: Returns the stack trace of a thrown exception as a string.
- getTypeName: Returns the type of exception, such as DmlException, ListException, MathException, and so on.

Some exception types, such as DmlException, have specific exception methods that apply to only them and aren’t common to other
exception types:
- getDmlFieldNames(Index of the failed record): Returns the names of the fields that caused the error for the
specified failed record.
- getDmlId(Index of the failed record): Returns the ID of the failed record that caused the error for the specified
failed record.
- getDmlMessage(Index of the failed record): Returns the error message for the specified failed record.
- getNumDml: Returns the number of failed records.

## Deploy
Before you can deploy your code or package it for the Salesforce AppExchange, the following must be true.
- Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.
Note the following.
- When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
- Calls to System.debug aren’t counted as part of Apex code coverage.
- Test methods and test classes aren’t counted as part of Apex code coverage.
- While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead,
make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single
records. This approach ensures that 75% or more of your code is covered by unit tests.
- Every trigger must have some test coverage.
- All classes and triggers must compile successfully.
Salesforce runs all tests in all organizations that have Apex code to verify that no behavior has been altered as a result of any service
upgrades.

Salesforce recommends that you write tests for the following:
- Single action
Test to verify that a single record produces the correct, expected result.
- Bulk actions
Any Apex code, whether a trigger, a class or an extension, may be invoked for 1 to 200 records. You must test not only the single
record case, but the bulk cases as well.
- Positive behavior
Test to verify that the expected behavior occurs through every expected permutation, that is, that the user filled out everything
correctly and did not go past the limits.
- Negative behavior
There are likely limits to your applications, such as not being able to add a future date, not being able to specify a negative amount,
and so on. You must test for the negative case and verify that the error messages are correctly produced as well as for the positive,
within the limits cases.
- Restricted user
Test whether a user with restricted access to the sObjects used in your code sees the expected behavior. That is, whether they can
run the code or receive error messages.

objects that are used to manage your organization or
metadata objects can still be accessed in your tests. These are some examples of such objects.
- User
- Profile
- Organization
- CronTrigger
- RecordType
- ApexClass
- ApexTrigger
- ApexComponent
- ApexPage

1. Create a .csv file that has the data for the test records. This sample .csv file has three account records. You can use this sample content
to create your .csv file.
````
  Name,Website,Phone,BillingStreet,BillingCity,BillingState,BillingPostalCode,BillingCountry
  sForceTest1,http://www.sforcetest1.com,(415) 901-7000,The Landmark @ One Market,San
  Francisco,CA,94105,US
  sForceTest2,http://www.sforcetest2.com,(415) 901-7000,The Landmark @ One Market Suite
  300,San Francisco,CA,94105,US
  sForceTest3,http://www.sforcetest3.com,(415) 901-7000,1 Market St,San
  Francisco,CA,94105,US
````
2. Create a static resource for the .csv file:
  - From Setup, enter Static Resources in the Quick Find box, then select Static Resources.
  - Click New.
  - Name your static resource testAccounts.
  - Choose the file you created.
  - Click Save.
3. Call Test.loadData in a test method to populate the test accounts.

.
1. From Setup, enter Apex Test Execution in the Quick Find box, then select Apex Test Execution.
2. Click Select Tests....
Note: If you have Apex classes that are installed from a managed package, you must compile these classes first by clicking
Compile all classes on the Apex Classes page so that they appear in the list.
3. Select the tests to run. The list of tests includes only classes that contain test methods.
  - To select tests from an installed managed package, select the managed package’s corresponding namespace from the drop-down
  list. Only the classes of the managed package with the selected namespace appear in the list.
  - To select tests that exist locally in your organization, select [My Namespace] from the drop-down list. Only local classes that
aren't from managed packages appear in the list.
  - To select any test, select [All Namespaces] from the drop-down list. All the classes in the organization appear, whether or not
they are from a managed package.

Note: Classes with tests currently running don't appear in the list.

4. To opt out of collecting code coverage information during test runs, select Skip Code Coverage.
5. Click Run.

After you run tests using the Apex Test Execution page, you can view code coverage details in the Developer Console.

From Setup, enter Apex in the Quick Find box, select Apex Test Execution, then click View Test History to view all test results
for your organization, not just tests that you have run. Test results are retained for 30 days after they finish running, unless cleared.

You can use the runTests() call from the SOAP API to run tests synchronously.
````
RunTestsResult[] runTests(RunTestsRequest ri)
````
This call allows you to run all tests in all classes, all tests in a specific namespace, or all tests in a subset of classes in a specific namespace,
as specified in the RunTestsRequest object. It returns the following.
- Total number of tests that ran
- Code coverage statistics
- Error information for each failed test
- Information for each test that succeeds
- Time it took to run the test

You can also run tests using the Tooling REST API. Use the /runTestsAsynchronous/ and /runTestsSynchronous/
endpoints to run tests asynchronously or synchronously.

Exercise bulk trigger functionality—use at least 20 records in your tests.
Test the classes in your application individually. Never test your entire application in a single test.

Parallel test execution can
speed up test run time. Sometimes, parallel test execution results in data contention issues, and you can turn off parallel execution in
those cases. In particular, data contention issues and UNABLE_TO_LOCK_ROW errors can occur.

## Testing Example
Pg 657

## Package
There are limitations on the changes that you can make to some of these items when they are used in Apex code in managed packages.

Package developers can add or remove the following items:
- @future
- @isTest
- with sharing
- without sharing
- transient

Package developers can make limited changes to the following items:
- private—can be changed to global
- public—can be changed to global
- protected—can be changed to global
- abstract—can be changed to virtual but cannot be removed
- final—can be removed but cannot be added

Package developers cannot remove or change the following items:
- global
- virtual

Package developers can add the webservice keyword, but once it has been added, it cannot be removed.

Note: You cannot deprecate webservice methods or variables in managed package code.
````
// Run test as managed package version 1.0
System.runAs(new Version(1,0)) {
}
````
## Running Apex
An anonymous block is Apex code that doesn’t get stored in the metadata, but that can be compiled and executed.

To execute anonymous Apex: “API Enabled” and “Author Apex”
(Anonymous Apex execution through the API allows restricted access without the “Author
Apex” permission.)

If an anonymous Apex callout references a named credential as the endpoint: Customize Application

Compile and execute anonymous blocks using one of the following:
- Developer Console
- Salesforce extensions for Visual Studio Code
- The executeAnonymous() SOAP API call:
ExecuteAnonymousResult executeAnonymous(String code)

## Trigger
Apex can be invoked by using triggers. Apex triggers enable you to perform custom actions before or after changes to Salesforce records,
such as insertions, updates, or deletions.

A trigger is Apex code that executes before or after the following types of operations:
- insert
- update
- delete
- merge
- upsert
- undelete

There are two types of triggers:
- Before triggers are used to update or validate record values before they’re saved to the database.
- After triggers are used to access field values that are set by the system (such as a record's Id or LastModifiedDate field), and
to affect changes in other records, such as logging into an audit table or firing asynchronous events with a queue. The records that
fire the after trigger are read-only.

Triggers can also modify other records of the same type as the records that initially fired the trigger. For example, if a trigger fires after
an update of contact A, the trigger can also modify contacts B, C, and D. Because triggers can cause other records to change, and
because these changes can, in turn, fire more triggers, the Apex runtime engine considers all such operations a single unit of work and
sets limits on the number of operations that can be performed to prevent infinite recursion.

Before creating triggers, consider the following:
- upsert triggers fire both before and after insert or before and after update triggers as appropriate.
- merge triggers fire both before and after delete for the losing records, and both before and after update triggers for the
winning record.

All triggers are bulk triggers by default, and can process multiple records at a time.
Bulk triggers can handle both single record updates and bulk operations like:
- Data import
- Lightning Platform Bulk API calls
- Mass actions, such as record owner changes and deletes
- Recursive Apex methods and triggers that invoke bulk DML statements

To define a trigger, use the following syntax:
````
  trigger TriggerName on ObjectName (trigger_events) {
    code_block
  }
````
where trigger_events can be a comma-separated list of one or more of the following events:
- before insert
- before update
- before delete
- after insert
- after update
- after delete
- after undelete

The code block of a trigger cannot contain the static keyword. Triggers can only contain keywords applicable to an inner class. In
addition, you do not have to manually commit any database changes made by a trigger. If your Apex trigger completes successfully,
any database changes are automatically committed. If your Apex trigger does not complete successfully, any changes made to the
database are rolled back.

All triggers define implicit variables that allow developers to access run-time context. These variables are contained in the
System.Trigger class.

Variable Usage
- isExecuting
- isInsert
- isUpdate
- isDelete
- isBefore
- isAfter
- isUndelete
- new
- newMap
- old
- oldMap
- operationType: Returns an enum of type System.TriggerOperation corresponding to the current operation.
  - Possible values of the System.TriggerOperation enum are: BEFORE_INSERT, BEFORE_UPDATE,
  BEFORE_DELETE,AFTER_INSERT, AFTER_UPDATE, AFTER_DELETE, and
  AFTER_UNDELETE.
  - If you vary your programming logic based on different trigger types, consider
  using the switch statement with different permutations of unique trigger execution enum states.

size: The total number of records in a trigger invocation, both old and new.
`Pg 238`

The after undelete trigger event only fires for the following objects:
- Account
- Asset
- Campaign
- Case
- Contact
- ContentDocument
- Contract
- Custom objects
- Event
- Lead
- Opportunity
- Product
- Solution
- Task

`Pg 243`

## Asynchronous Apex Feature When to Use
Queueable Apex - To start a long-running operation and get an ID for it
- To pass complex types to a job
- To chain jobs

Scheduled Apex - To schedule an Apex class to run on a specific schedule

Batch Apex - For long-running jobs with large data volumes that need to
be performed in batches, such as database maintenance jobs
- For jobs that need larger query results than regular transactions
allow

Future Methods - When you have a long-running method and need to prevent
delaying an Apex transaction
- When you make callouts to external Web services
- To segregate DML operations and bypass the mixed save DML
error

Take control of your asynchronous Apex processes by using the Queueable interface. This interface enables you to add jobs to the
queue and monitor them. Using the interface is an enhanced way of running your asynchronous Apex code compared to using future
methods.

These with these additional benefits.
- Getting an ID for your job: When you submit your job by invoking the System.enqueueJob method, the method returns the
ID of the new job. This ID corresponds to the ID of the AsyncApexJob record. Use this ID to identify and monitor your job, either
through the Salesforce UI (Apex Jobs page), or programmatically by querying your record from AsyncApexJob.
- Using non-primitive types: Your queueable class can contain member variables of non-primitive data types, such as sObjects or
custom Apex types. Those objects can be accessed when the job executes.
- Chaining jobs: You can chain one job to another job by starting a second job from a running job. Chaining jobs is useful if your
process depends on another process to have run first.

You can set a maximum stack depth of chained Queueable jobs, overriding the default limit of five in Developer and Trial Edition
organizations.

Note: Variables that are declared transient are ignored by serialization and deserialization and the value is set to null in
Queueable Apex.

This example implements the Queueable interface. The execute method in this example inserts a new account. The
````
System.enqueueJob(queueable) method is used to add the job to the queue.
  public class AsyncExecutionExample implements Queueable {
    public void execute(QueueableContext context) {
      Account a = new Account(Name='Acme',Phone='(415) 555-1212');
      insert a;
    }
  }
````
To add this class as a job on the queue, call this method:
````
  ID jobID = System.enqueueJob(new AsyncExecutionExample());
````
You can monitor the status of your job programmatically by querying AsyncApexJob or through the user interface in Setup
by entering Apex Jobs in the Quick Find box, then selecting Apex Jobs.
````
  AsyncApexJob jobInfo = [SELECT Status,NumberOfErrors FROM AsyncApexJob WHERE Id=:jobID];
````
System.enqueueJob(queueable, delay) method to add queueable jobs to the asynchronous execution queue
with a specified minimum delay (0-10 minutes).

When you set the delay to 0 (zero), the queueable job is run as quickly as possible. With chained queueable jobs,
implement a mechanism to slow down or halt the job if necessary. Without such a fail-safe mechanism in place, you can rapidly
reach the daily async Apex limit.

Admins can define a default org-wide delay (1-600 seconds) in scheduling queueable jobs that were scheduled without a delay parameter.

Use the delay setting as a mechanism to slow default queueable job execution. If the setting is omitted, Apex uses the standard queueable
timing with no added delay.

Use the System.enqueueJob(queueable, asyncOptions) method where you can specify the maximum stack depth
and the minimum queue delay in the asyncOptions parameter.

The System.AsyncInfo class properties contain the current and maximum stack depths and the minimum queueable delay.

The System.AsyncInfo class has methods to help you determine if maximum stack depth is set in your Queueable request and
to get the stack depths and queue delay for your queueables that are currently running. Use information about the current queueable
execution to make decisions on adjusting delays on subsequent calls.

These are methods in the System.AsyncInfo class.
- hasMaxStackDepth()
- getCurrentQueueableStackDepth()
- getMaximumQueueableStackDepth()
- getMinimumQueueableDelayInMinutes()

Apex allows HTTP and web service callouts from queueable jobs, if they implement the Database.AllowsCallouts
marker interface. In queueable jobs that implement this interface, callouts are also allowed in chained queueable jobs.

The Transaction Finalizers feature enables you to attach actions, using the System.Finalizer interface, to asynchronous Apex
jobs that use the Queueable framework. A specific use case is to design recovery actions when a Queueable job fails.

The Transaction Finalizers feature provides a direct way for you to specify actions to be taken when asynchronous jobs succeed or fail.

Before Transaction Finalizers, you could only take these two actions for asynchronous job failures:
- Poll the status of AsyncApexJob using a SOQL query and re-enqueue the job if it fails
- Fire BatchApexErrorEvents when a batch Apex method encounters an unhandled exception

With transaction finalizers, you can attach a post-action sequence to a Queueable job and take relevant actions based on the job execution
result.

Finalizers can be implemented as an inner class. Also, you can implement both Queueable and Finalizer interfaces with the same class.

The Queueable job and the Finalizer run in separate Apex and Database transactions. For example, the Queueable can include DML, and
the Finalizer can include REST callouts. Using a Finalizer doesn’t count as an extra execution against your daily Async Apex limit.

Synchronous governor limits apply for the Finalizer transaction, except in these cases where asynchronous limits apply:
- Total heap size
- Maximum number of Apex jobs added to the queue with System.enqueueJob
- Maximum number of methods with the future annotation allowed per Apex invocation
````
  global void execute(System.FinalizerContext ctx) {}
````
This method is called on the provided FinalizerContext instance for every enqueued job with a finalizer attached. Within the execute
method, you can define the actions to be taken at the end of the Queueable job. An instance of System.FinalizerContext is
injected by the Apex runtime engine as an argument to the execute method.

The System.FinalizerContext interface contains four methods.
- getAsyncApexJobId method:
  `global Id getAsyncApexJobId {}`
- getRequestId method:
  `global String getRequestId {}`
- getResult method:
  `global System.ParentJobResult getResult {}`
- getException method:
  `global System.Exception getException {}`

Attach the finalizer to your Queueable jobs using the System.attachFinalizer method.
1. Define a class that implements the System.Finalizer interface.
2. Attach a finalizer within a Queueable job’s execute method. To attach the finalizer, invoke the System.attachFinalizer
method, using as argument the instantiated class that implements the System.Finalizer interface.
````
  global void attachFinalizer(Finalizer finalizer) {}
````
`Pg 259`

## Schedules
To invoke Apex classes to run at specific times, first implement the Schedulable interface for the class, then specify the schedule
using either the Schedule Apex page in the Salesforce user interface, or the System.schedule method.

Important: Salesforce schedules the class for execution at the specified time. Actual execution can be delayed based on service
availability.

You can only have 100 scheduled Apex jobs at one time. You can evaluate your current count by viewing the Scheduled Jobs
page in Salesforce and creating a custom view with a type filter equal to “Scheduled Apex”. You can also programmatically query
the CronTrigger and CronJobDetail objects to get the count of Apex scheduled jobs.

To monitor or stop the execution of a scheduled Apex job using the Salesforce user interface, from Setup, enter Scheduled Jobs
in the Quick Find box, then select Scheduled Jobs.

The Schedulable interface contains one method that must be implemented, execute.
````
  global void execute(SchedulableContext sc){}
````
The implemented method must be declared as global or public.

The System.schedule method takes three arguments: a name for the job, an expression used to represent the time and date the
job is scheduled to run, and the name of the class. This expression has the following syntax:
````
Seconds Minutes Hours Day_of_month Month Day_of_week Optional_year
````
The System.schedule method uses the user's timezone for the basis of all schedules.
- \, Delimits values.
- \- Specifies a range.
- \* Specifies all values.
- \? Specifies no specific value. This option is only available for Day_of_month and
  Day_of_week. It’s typically used when specifying a value for one and not the other.
- \/ Specifies increments. The number before the slash specifies when the intervals will
  begin, and the number after the slash is the interval amount.
- L Specifies the end of a range (last).
  - This option is only available for Day_of_month
  and Day_of_week.
  - When used with Day of month, L always means the last
  day of the month, such as January 31, February 29 (for leap years), and so on.
  - When
  used with Day_of_week by itself, it always means 7 or SAT. When used with a
  Day_of_week value, it means the last of that type of day in the month. 
  - For example,
  if you specify 2L, you’re specifying the last Monday of the month.
- W Specifies the nearest weekday (Monday-Friday) of the given day.
  - This option is only
  available for Day_of_month.
  - For example, if you specify 20W, and the 20th is a
  Saturday, the class runs on the 19th.
  - If you specify 1W, and the first is a Saturday, the
  class doesn’t run in the previous month, but on the third, which is the following
  Monday.
- \# Specifies the nth day of the month, in the format weekday#day_of_month.
  - This option is only available for Day_of_week.
  - The number before the # specifies
  weekday (SUN-SAT).
  - The number after the # specifies the day of the month. For
  example, specifying 2#1 means the class runs on the first Monday of every month.

An easier way to schedule a batch job is to call the System.scheduleBatch method without having to implement the
Schedulable interface.

Use the SchedulableContext object to track the scheduled job when it's scheduled. The SchedulableContext getTriggerID method
returns the ID of the CronTrigger object associated with this scheduled job as a string. You can query CronTrigger to track the
progress of the scheduled job.

To stop execution of a job that was scheduled, use the System.abortJob method with the ID returned by the getTriggerID
method.

After the Apex job has been scheduled, you can obtain more information about it by running a SOQL query on CronTrigger. You can
retrieve the number of times the job has run, and the date and time when the job is scheduled to run again, as shown in this example.
````
  CronTrigger ct = [SELECT TimesTriggered, NextFireTime FROM CronTrigger WHERE Id = :jobID];
````
The previous example assumes you have a jobID variable holding the ID of the job. The System.schedule method returns the
job ID. If you’re performing this query inside the execute method of your schedulable class, you can obtain the ID of the current job
by calling getTriggerId on the SchedulableContext argument variable. Assuming this variable name is sc, the modified example
becomes:
````
  CronTrigger ct = [SELECT TimesTriggered, NextFireTime FROM CronTrigger WHERE Id = :sc.getTriggerId()];
````
You can also get the job’s name and the job’s type from the CronJobDetail record associated with the CronTrigger record. To do so, use
the CronJobDetail relationship when performing a query on CronTrigger. This example retrieves the most recent CronTrigger
record with the job name and type from CronJobDetail.
````
  CronTrigger job = [SELECT Id, CronJobDetail.Id, CronJobDetail.Name, CronJobDetail.JobType FROM CronTrigger ORDER BY CreatedDate DESC LIMIT 1];
````
Alternatively, you can query CronJobDetail directly to get the job’s name and type. This next example gets the job’s name and type for
the CronTrigger record queried in the previous example. The corresponding CronJobDetail record ID is obtained by the
CronJobDetail.Id expression on the CronTrigger record.
````
  CronJobDetail ctd = [SELECT Id, Name, JobType FROM CronJobDetail WHERE Id = :job.CronJobDetail.Id];
````
To obtain the total count of all Apex scheduled jobs, excluding all other scheduled job types, perform the following query. Note the
value '7' is specified for the job type, which corresponds to the scheduled Apex job type.
````
  SELECT COUNT() FROM CronTrigger WHERE CronJobDetail.JobType = '7'
````
You can call the System.scheduleBatch method to schedule a batch job to run one time at a specified time in the future. This
method is available only for batch classes and doesn’t require the implementation of the Schedulable interface. It’s therefore easy
to schedule a batch job for one execution.

A developer can now employ batch Apex to build complex, long-running processes that run on thousands of records on the Lightning
Platform. Batch Apex operates over small batches of records, covering your entire record set and breaking the processing down to
manageable chunks.

Batch Apex is exposed as an interface that must be implemented by the developer. Batch jobs can be programmatically invoked at
runtime using Apex.

You can only have five queued or active batch jobs at one time. You can evaluate your current count by viewing the Scheduled Jobs
page in Salesforce or programmatically using SOAP API to query the AsyncApexJob object.

To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke
the class programmatically.

To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box, then select Apex
Jobs.

## Fields
Field Type 	What is it? 	Can I get an example?

Identity 	A 15-character, case-sensitive field that’s automatically generated for every record. You can find a record’s ID in its URL. 	An account ID looks like 0015000000Gv7qJ.

System 	Read-only fields that provide information about a record from the system, like when the record was created or when it was last changed. 	CreatedDate, LastModifiedById, and LastModifiedDate.

Name 	All records need names so you can distinguish between them. You can use text names or auto-numbered names that automatically increment every time you create a record. 	A contact’s name can be Julie Bean. A support case’s name can be CA-1024.

Custom 	Fields you create on standard or custom objects are called custom fields. You can create a custom field on the Contact object to store your contacts’ birthdays.