---
title: Comparison of AWS Cloud Development Kit with Terraform by building 2-tier Web App
date: '2015-05-01T22:12:03.284Z'
length: 10 minutes
categories: '#AWS #CDK #Terraform'
---

The [AWS Cloud Development Kit](https://github.com/awslabs/aws-cdk) is one of the newest tools from AWS Labs and I feel like it's not getting enough attention. Why? Let's start with quick quote which explains this tool.

I decided to check it on my own by building a simple 2-tier AWS infra like this:

![Schema](./2tier.jpg 'Schema')

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

### Outcomes

- Can be written using not only in Typescript but also using Java or Python (but without the types the benefit is not that big IMHO)
- Usage of same language for both code and configuration makes whole process of development really seamless
- Imperative nature of the language used might be counterintuitive for declaring things like infrastructure but pays off in better possibilities to express collection operations. This has been improved greatly in Terraform 0.12, however, it's still far from flexbility and easy of use that we're used from ES6 spec like `Array.filter(...).map(...).reduce(...)` etc.

```
➜  find ./cdk/lib -name "*.ts" | xargs cat | wc -l
105
➜  find ./terraform -name "*.tf" | xargs cat | wc -l
516
```

If you're interested in final result, [you can find the repo with code here!](https://github.com/RafalWilinski/terraform-vs-cdk)
