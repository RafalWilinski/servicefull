---
title: Serverless in 2020 gets even better with recent and re:Invent improvements for AWS Lambda - cold starts are finally gone
date: '2019-12-06T22:12:03.284Z'
length: 4 minutes
categories: '#AWS #Serverless #reInvent #VPC #ColdStarts #FaaS'
keywords: serverless,aws,reinvent,lambda coldstart problem,lambda concurrency,aws lambda,lambda in vpc,lambda rds,lambda destinations,faas
---

Cold Starts, even longer cold starts when launched in VPC, SQL connections limit and complexity. These were the most mentioned problems of the Serverless throughout 2019.

Luckily, Amazon listens to the community and customers and as a part of re:Invent they've proposed a solution to the most of these problems. I've prepared a list of the most imporant announcements which I think will greatly increase the adoption of Serverless in 2020.

## Improved VPC networking

The lack of proper networking support for AWS Lambda was holding it back from being used for fast and secure workloads which require accessing databases and other services in private subnets. Don't get me wrong, launching Lambdas in VPC was possible but the amount of time that it took to mount it to ENI was huge, [sometimes taking up to 20 seconds](https://www.freecodecamp.org/news/lambda-vpc-cold-starts-a-latency-killer-5408323278dd/).

![Lambda in VPC](lambda-in-vpc.png 'Lambda in VPC')

Smart AWS' engineers managed to bypass this issue by creating "AWS Hyperplane" which provides NAT capabilities from the Lambda VPC to customer VPCs. 

![hyperplane](hyperplane.png 'hyperplane')

Results? VPC attachment now takes less than a second! If you're interested in details, you can read about them [here](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/)

## Amazon RDS Proxy

Another thing that stopped Lambda from adoption was actually the most prominent benefit of FaaS which was _infinite_ scalability. The fact that you could simply spawn 10,000 concurrent Lambda executions also might convert to 10,000 connections to the database if your code was doing that. Many database instances are not designed to handle so many operations at once so you'll exhaust the connections pool and that would lead to throwing errors. 

There were some attempts to solve this issue by persisting connections across same Lambda invocation or by using [this excellent module by Jeremy Daly](https://www.jeremydaly.com/serverless-mysql-at-scale/), but it wasn't ideal.

Luckily for us, AWS created RDS Proxy, which might be percieved as a managed service to handle the connection pooling, scale automatically, maintain warm connections and kill zombie ones. [More details here](https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/)

## AWS Lambda Destinations

If you're writing asynchronous Lambda functions (and most likely you are), you've probably wrote a piece of code that required putting the result of some operation to SQS or SNS or another Lambda not once. If you wanted to handle that properly, you also had to write retries mechanism, manage failures, add DLQs and so on. At the same time, none of that has anything to do with writing the business logic and that's what we're supposed to spent most of our time on - delivering value.

With AWS Lambda Destinations all of that I've mentioned above is already handled without a single line of code. Interested in more details? [Read official AWS announcement](https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/)

## Provisioned Concurrency for Lambda functions

This one is a little bit controversial. While it solves the cold starts problem, the pricing model is odd and my opinion _anti-serverless_. The whole point of Lambda was to "pay for what you use", this statement is no longer true with hourly pricing of the provisioned concurrency. Seems like others are also [sharing this view](https://www.trek10.com/blog/provisioned-lambda-concurrency/). 

Nevertheless, it's nice to see one of the key problems of the serverless to be _kind of addressed_.

You can read more about it here: https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/

_As re:Invent is not over yet, this article is a subject to change, stay tuned for updates..._

<hr />


