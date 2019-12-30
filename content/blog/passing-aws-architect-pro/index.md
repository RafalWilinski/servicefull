---
title: t
date: '2019-12-30T22:12:03.284Z'
length: 5 minutes
categories: '#AWS #Architecture #Certification'
keywords: serverless,aws,aws caa,aws cap,aws certified architect,aws certified architect guide,how to pass aws certified architect exam,aws exam,how to pass aws exam,aws certified architect professional guide,aws exam guide
image: https://servicefull.cloud/images/architect-pro-exam.png
---

AWS Certifications are one of the [most wanted on the market right now](https://www.jeffersonfrank.com/aws-blog/aws-certifications-2019-is-it-worth-it/). Many studies suggest that you can earn a decent amount of money by becoming a certified AWS expert. Recently I've managed to [pass AWS Certified Architect - Professional exam](https://twitter.com/rafalwilinski/status/1205113262343409664?s=20), and I have to say it wasn't easy. As many friends have been asking me how to learn, what is most important, etc. I've decided to put down a list of tips that I've used to pass it successfully. Even though this guide is mostly written with AWS SAP exam in mind, most of these pieces of advice also apply to other types of IT exams.

## Before the exam

### Take your time

Even if you have a substantial amount of experience with AWS, you probably mostly deal only with a limited set of services. AWS's exams are different. Their scope varies from low-level services like VPC or S3 to high-level ones like Workspaces, Alexa, or SageMaker. Because of that comprehensive set of things, I highly recommend taking at least 2 months of preparation to brace yourself properly. I've scheduled my exam for three months in advance and been learning for one hour per day, which gave me +100 hours of learning total.

### Establish a plan

As you're probably aiming to become an architect, planning is an essential part of this job. This applies to not only architecture but also the time. Be realistic. If you're already working eight hours per day, it's not likely you'll be able to sacrifice another four hours to learn every day. My recommendation is to digest a course in a week slowly, then start doing practice exams one per day and read a whitepaper per week.

Moreover, as I mentioned before, I've scheduled my exam for three months later, and I did that before I began learning. That established a non-negotiable deadline, and I've signed a pact with myself to be consistent and not waste time.

### Invest in a course

This is an absolute must for me. Just like many other humans, I have problems with motivating myself. Your mind is a tricky beast, but it's possible to cheat it in many ways. Purchasing a course from [A Cloud Guru](https://acloud.guru/) not only gave me an extraordinary amount of knowledge for laughable price and guided me through the most important concepts, but also kind of formed an obligation with myself. Because I paid for something, I had a feeling that if I wouldn't complete it, I'd simply waste money. Not to mention that they are simply awesome in delivering serious and complex concepts in an easy to digest form. _(Not a paid endorsement!)_

### But...

It's not enough. It would be too good if watching a course would give you the necessary amount of knowledge to pass the exam. It's definitely helpful, but from my experience, it's not diving deeply enough. Again, read whitepapers, read blogs _(including this one!)_ watch re:Invent videos, and, most importantly - practice.

### Have rock-solid fundamentals

You simply need to know services like VPC, S3, and IAM by heart. They are involved in a hefty amount of questions, and knowing them good will make your life easier, not only on the exam. Knowing [Well-Architected](https://aws.amazon.com/architecture/well-architected/) framework is also necessary.

### Reduce unnecessary knowledge

On the contrary, there are many things AWS is not likely to ask. Kubernetes, OpenStack, Docker? Not likely. Don't focus on them too much. Just be aware of the existence and know their purpose.

Even some services are not likely to appear. SWF? Mostly deprecated, replaced in favor of Step Functions. AWS App Mesh, Managed Cassandra Service, or Outposts? Nope, that's too new _(at least as I'm writing this)_. Be mindful that each exam has its release date, so it's just impossible for some services to appear in the test.

### Focus on things AWS likes to ask about in your exam

Recently, in the CAP exam, AWS likes to ask a lot of questions about AWS Organizations and the multi-account setup. Be prepared for that. I've also noticed a significant amount of questions about Hybrid Cloud, which mostly means mixing your on-premise datacenter with VPC. That includes migrations, operating storage gateways, connecting your office with AWS using VPNs/[Direct Connect](https://aws.amazon.com/directconnect/)/[Hub-and-Spoke VPC](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-vpn-cloudhub-network-to-amazon.html), and provisioning SAML access to the AWS for your company.

### Learn by doing

From my experience, nothing is better than practice. I always have a hard time memorizing empty concepts without real-world implementation, so I highly suggest taking a console tour on the services you haven't used before. [Cloud Academy](https://cloudacademy.com/) and [A Cloud Guru](https://acloud.guru/) offer a variety of "Labs" to get your hands dirty.

### Take notes by hand and use "Feynman Technique"

Alfred Einstein once said _"if you can't explain it simply, you don't understand it well enough"_. [Feynman technique](https://mattyford.com/blog/2014/1/23/the-feynman-technique-model) is a mental model that aims to help you _understanding it well enough_ and memorize it as a concept, not as bunch of sophisticated words. It boils down to re-writing things you're learning in a simple language that you understand. Moreover, it is proven that [we tend to remember things betten when take notes by hand](http://pss.sagepub.com/content/early/2014/04/22/0956797614524581.abstract).

## Solving an exam

### Solve at least one test everyday

Even if you're an excellent AWS expert, you might fail the exam because its form is radically different than a real job. In your day-to-day work, you probably focus on one task for an extended period, days or weeks, and once you're completed, you jump to another one. The exam's environment is different. **It's three hours, 70 disconnected questions and you.** It means that you have to totally switch your context every ~3 minutes and forget about the previous question just to read, analyze, and answer the current one. That's exhausting, and you basically need to become accustomed to and proficient at solving this type of exam.

### Gather a variety of test exams

If you keep solving the same exam three days in a row, there's not much point of repeating it on day four. Unfortunately, most of the questions from "Exam simulators" from popular course vendors are not varied. I recommend buying access to multiple learning sites so you'll have more quizzes and tests to practice.

Mainly, I really liked test exams from [Jon Bonso](https://www.udemy.com/user/jonjonbonso/). For 10USD, you get four test exams with explanations _right after answering the question_ - I found this way of learning to be most effective. Because I disliked Udemy's UI, you can use [alternative one](https://github.com/jackdh/better-jon-bonso-exam-host) and train on the go.

Moreover, If you've previously passed any other AWS exam, you probably also have coupons for free practice exams from [official Certmetrics site](https://www.certmetrics.com/amazon/). Solve at least one of these to get yourself accustomed to clunky UX of the official exam.

### Take practice exams in the same hour as the scheduled one

Solving an exam for me was different on 9PM than on 9AM. I decided to schedule an exam on 9AM because, from my observations, my cognitive abilities are the best around this hour. Practice around the same hour to accustom yourself to this feeling.

### Review results

Honestly, I gained much knowledge from making mistakes and correcting my false beliefs. Your job is not after solving the test exam and seeing the result. Spent some time looking at your wrong answers and memorize them. Embrace failure.

### Flag questions for review

If you're not sure, you can always go back to a question and reconsider it later if you'll end up with some free time. This saved my ass many times because I misread something. If you're not natively English-speaking, like me, this is even more important.

### Try "Start by reading answers" technique

Sometimes just reading answers first might reveal the original intention of the question and give you some prior context when reading the question. I found this technique practical for very long questions with a lot of unnecessary prefaces.

### Always favor more managed services

If you need to decide between hosting Postgres on EC2 on RDS, always choose RDS. Simple app with DB on EC2 or Beanstalk? Beanstalk. Serving static assets? Always S3 over NGINX. Any database or DynamoDB? DynamoDB. Self-made authentication and federation or Cognito? Rule of the thumb is - The more "Serverless", the better. Or, in other words, the more vendor lock-in, the better.

### Look for keywords and quick wins

Example: Anytime you spot a word _"clickstream"_ or _"realtime analytics"_ you basically know that anything other than Kinesis is wrong. If question mentions _"OCR"_, _"image recognition"_ or _"labeling"_ things, it's probably AWS Rekognition. _"Highly resilient and performant database"_ - RDS Multi-AZ with Read-replicas or just DynamoDB, _"BI"_ - Quicksight. You'll probably notice these patterns after solving a couple of test exams.

### Eliminate contradicting answers

Some questions might be solved by pure logic without even knowing what the hell IAM or VPC is. Let me give you an example: The question is to choose three correct answers out of four, but two questions contradict the third one. This automatically eliminates the third one.

### Control the time

Depending on the exam you're taking, calculate how much time per question you have and check your pace once every 5 questions. This will give you a sense of controlling the situation. Depending if you're behind or ahead, you can skip complicated questions and come back to them later or allow yourself to spend more time on them.
