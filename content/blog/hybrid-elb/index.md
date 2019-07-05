---
title: Hybrid Load Balancing traffic between EC2 and Lambda functions - useful API migration pattern
date: '2019-07-06T22:12:03.284Z'
length: 4 minutes
categories: '#AWS #Serverless #ELB #EC2 #ALB'
---

With [this](https://github.com/serverless/serverless/pull/6073) particular PR included in version `1.45`, the Serverless Framework team has finally enabled a possibility of using Application Load Balancers as event source instead of using API Gateway.

We've heard few of stories where [replacing costful API Gateway with ALB has saved thousands of dollars](https://serverless-training.com/articles/save-money-by-replacing-api-gateway-with-application-load-balancer/) and it's really awesome but here I'd like to talk about another aspect which might be really helpful in migrations:

# Hybrid Load Balancing

Imagine following scenario: your company wants to migrate from ECS/EC2 to Lambda by stripping monolith web server route by route. It appears that such thing can be achieved easily with multiple target groups associated with Load Balancer. Instead of just one, you can specify many of them and basing on request paths (or whatever you like) route requests to EC2/ECS or to Lambda.

![Hybrid Load Balancing](./hybrid-overview.png 'Hybrid Load Balancing')

# How to do that?

1. If you don't have existing infra, provision [VPC](https://github.com/RafalWilinski/hybrid-load-balancing/blob/master/infra/vpc.yml), [EC2](https://github.com/RafalWilinski/hybrid-load-balancing/blob/master/infra/ec2.yml) and [ALB](https://github.com/RafalWilinski/hybrid-load-balancing/blob/master/infra/alb.yml), prefereably in separate files to keep it simple and clean. Otherwise, use existing ALB ARN.

2. Reference supplement CloudFormation files in main `serverless.yml` file:

```
resources:
  - ${file(./infra/alb.yml)}
  - ${file(./infra/ec2.yml)}
  - ${file(./infra/vpc.yml)}
```

3. Replace traditional `http` event with `alb` where you specify which Load Balancer, Condition and Priority. In this case all requests to path `/lambda` will be routed to Serverless solution. Rest of them will be routed to the EC2 based on rule specified [here](https://github.com/RafalWilinski/hybrid-load-balancing/blob/master/infra/alb.yml#L23-L34)

```
functions:
  hello:
    handler: handler.handle
    events:
      - alb:
          listenerArn:
            Ref: albListener
          priority: 1
          conditions:
            path: /lambda
```

One thing worth noting here is that Lambda priority should be bigger than server's, so it should look something like this:

![Loading Priorities](./priorities.png 'Priorities')

If you want to check fully working example, the source code can be found [here](https://github.com/RafalWilinski/hybrid-load-balancing)

Just run it with:

```
serverless deploy
```
