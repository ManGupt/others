# Functions
Salesforce Functions use cases include:
- Complex business calculations, such as loan processing, managing product license keys, contract billing, and demand forecasting
- Batch processing, such as daily inventory stocking, consumer goods assortments, ERP calculations, and material resource planning
- Resource-intensive back-office automation, such as document generation, mail merges, invoice creation, payroll processing, QR codes, and case routing

A function is your code, run on-demand, in Salesforce Functions elastic compute environments.

Once you add functions to your Salesforce projects for your complex business logic code,

Salesforce Functions takes care of everything else necessary to invoke your code in a secure and self-scaling environment.

# Heroku
You might know that Lightning Platform allows you to build employee-facing apps to customize and extend your Salesforce CRM.

With Heroku you can go even further, building pixel-perfect applications for your customers in open-source languages like Java, Ruby, Python, PHP, JavaScript, and Go.

You can go beyond the bounds of Lightning Platform but stay connected to your data inside Salesforce.

Applications are made up of many different components. A typical modern-day application consists of a back-end management system with a system of record for important data (like the Lightning Platform Model layer), internal tracking and reporting tools, and a public web or mobile interface that allows customers to engage with it.

Heroku gives you the ability to use open-source languages and frameworks like Node.js, Ruby on Rails, Django, or Spring to build that public-facing interface.

We’ve all heard about infrastructure as a service (Iaas), like Amazon Web Services, and software as a service (SaaS), like Salesforce.

Heroku is a PaaS, just like Lightning Platform, but it's a platform that provides different capabilities, such as support for many different programming languages and the ability to control and scale resources

- We’ll start with SaaS, which manages the most parts of the application for you and is therefore the simplest to use.
- SaaS is often built on top of a PaaS, which is in turn likely built on an IaaS, which is built with on-premises hardware.
- On-premises hardware requires the most work to maintain and use, but provides the foundation for all these other cool services.

# Software as a Service
SaaS is a methodology for delivering software from the cloud without downloading and installing it on your computer. You've already used SaaS when you log in to Salesforce via the web. To better describe the concept, let's use the analogy of buying a suit. Using SaaS is like going to a department store and buying a suit off the rack. You can find something quite nice that's already made and wear it to a party that night. You could also have a tailor make minor adjustments to get a more customized fit.

As mentioned, this method is the familiar model of Salesforce that we all know and love. Behind the scenes, Salesforce engineers build, manage, and upgrade all the software for you. All you have to do is log in and use it. Simple!

# Platform as a Service
A PaaS is a way to deliver hardware and software tools to users as a service. You can also use the hardware and tools for application development on top of the platform. So you can build your own SaaS right on top of a PaaS!

Of course, a PaaS provides less for you out of the box, but the trade-off is increased flexibility. In the clothing world, this approach is akin to going to a bespoke store where you pick out the fabric, buttons, and pattern and have the tailor make a suit that is custom fit to you. 

This is where Heroku fits in. Heroku takes care of the hard parts of operating what lies underneath an application at Internet scale. This allows you to concentrate on creating the perfect fit and finish for your customers using the open-source languages, frameworks, and other tools that best suit your needs.

# Infrastructure as a Service
IaaS is a model that provides just the hardware or virtualized bare-metal resources to its users, without the additional layer of tooling that would make it a platform. If you were to approach suit-making with the IaaS model, you would have to buy the fabric, buttons, and thread for yourself, dream up the designs for your custom suit, and cut the fabric to the pattern. Then you have to pay the local sewing shop to rent time on a sewing machine and sew the suit yourself. It's a lot of work, but you could be sure that you'll get to use a sewing machine that has those special stitch patterns you prefer.

The Heroku platform itself is actually built on top of a powerful IaaS called Amazon Web Services (AWS). AWS allows you to assemble virtual machines, load balancers, and other low-level resources to build large and complex application clusters. These systems require highly skilled professionals to architect, build, monitor, and maintain, but are more customizable than Platforms.

# On-Premises Infrastructure
On-premises or on-prem infrastructure is the foundation of all these other services. On-prem means you own and manage physical servers and other hardware. AWS can offer us its IaaS because it maintains thousand upon thousands of on-prem servers.

To fashion a suit following the on-prem model, you’d have to build and maintain all the pieces you need. To have wool fabric, you need to raise some sheep, shear them, weave the fabric, and dye it to the color you prefer. Then you have to build a sewing machine, imagine a pattern, cut the pieces, and sew them together. And in a couple of years, you'll be able to wear that fancy new suit.

Building your own on-prem data center and racking and stacking servers is a ton of work, but maintaining all the pieces yourself gives you total control.

# Why Heroku?
A PaaS abstracts away the complexity of building and running infrastructure for applications. Using a PaaS allows you to easily create load-balanced collections of containers that run your software. You can think of those containers just like shipping containers that hold all the code and resources needed to run your application.

Heroku is a fully managed PaaS — all the underlying complexity is handled for you by dedicated teams at Salesforce, including things like responding to failures, monitoring security vulnerabilities and patching them, planning for scaling, and actually scaling the PaaS. If you wanted to run your own PaaS, you’d need teams of people managing all these things 24/7/365.

Heroku takes care of these things for you so that you can concentrate on building custom applications to delight your customers. And you get the added flexibility of being able to use a variety of languages and easily scale your resources as necessary.

With Heroku you can build applications or systems using a number of open-source languages, like Java, PHP, Python, Node, Go and Ruby. The systems you build can accept requests via HTTP and HTTPS, attach to databases, use third-party add-on modules, and queue and run background jobs.

In short, you can build cutting-edge web applications from scratch using Heroku. You can also store data in a managed database and use third-party add-ons that provide additional functionality from the Heroku Elements Marketplace. And because Heroku is part of the Salesforce Platform, all your Heroku apps can easily gain access to your company’s Salesforce data.

# A Hypothetically Real Example
Let’s say you have a brilliant idea to revolutionize the connected doormat market. You need an application to accept data points from the doormats, display metrics from each customer's doormat, and allow customers to open support cases about their doormats. You also want to allow potential customers to see information about your connected doormats and to buy them.
Whew! That sounds like a lot, right?

Hold on, don’t forget the business dashboards, marketing programs, predictive support, and all the back-end systems you need to track the doormats, accept orders, track the orders, deliver them, and ...

In a Salesforce Platform world, you concentrate on the code that makes the most impact to your customers. You build your customer websites, RESTFul API endpoints, and high-volume data ingestion points as custom apps on Heroku. Then you use Lightning Platform to build out the back-end systems, customer service tools, business intelligence, workflows, and marketing journeys. With the Salesforce Platform, you can move from selling to supporting and servicing hundreds of thousands or even millions of doormats.

- Deployment methods:
    https://trailhead.salesforce.com/content/learn/modules/heroku_enterprise_baiscs/your_first_deployment
- Access modes:
    https://trailhead.salesforce.com/content/learn/modules/heroku_enterprise_baiscs/getting_the_most

Your application's code runs on the Heroku Platform inside of structures that we call dynos. Heroku's dynos are just managed runtime containers with a Linux operating system underneath. These containers run the processes that allow your custom application code to run.

Containerization is just a mechanism for keeping running processes isolated from one another.

Containers also provide separation between two or more dynos running identical instances of your app, accepting client requests, and serving up responses. Even though one request might be served by Dyno A and another by Dyno B, your users won't know the difference. All they see is your application giving them quick responses. When you scale up your app to run on several dynos (or even dozens or hundreds), you've got extra peace of mind. If something goes wrong with your app code on one dyno, all the others can continue serving your customers.

Slugs are compressed and pre-packaged copies of your application optimized for distribution to the dyno manager. When you push code to Heroku, your code is received by the slug compiler which transforms it into a slug. At the heart of the slug compiler is a collection of scripts called a buildpack that handle different languages. All applications written in Ruby, Python, Java, Clojure, Node.js, Scala, Go and PHP are implemented and compiled using buildpacks. Scaling an application then downloads and expands the slug to a dyno for execution.

Custom buildpacks can be used to support languages or frameworks that are not covered by Heroku’s officially supported buildpacks.

# Application Traffic Control: The Heroku Router
The Heroku router is the key to all this multi-dyno magic. Whenever a new web dyno starts up, it registers itself with the router, letting it know which application the dyno is running. After a dyno is registered, the Heroku router begins distributing incoming requests across all the available dynos for an application, the app's "dyno formation" — that's what we call the size and number of dynos running your app.

Add-ons are another essential piece of the Heroku platform. These elements give you the ability to add complex functionality to your application without having to manage the underlying software or infrastructure.

A great example of a useful add-on is the Heroku Postgres database.

In addition to several Heroku-managed add-ons, third parties offer dozens of add-ons — data stores, email servers, monitoring tools, and just about anything else you can imagine. Developers can plug in back-end functionality, like the ability to send email or texts, with as little as one click. Many have free options that you can try and use as long as you like.

The high-level packages we use are:

    prettier: for formatting code
    eslint: for code linting
    @salesforce/sfdx-lwc-jest: the Jest extension for testing Lightning web components
    husky: to execute actions that verify code before committing to version control

We use the Jest testing library to execute Lightning web component unit tests. In our case, Salesforce has created an extension that is tailor made for LWC called sfdx-lwc-jest. 

Any parts of your project you want to prevent from automatically syncing are configured in a file called .forceignore