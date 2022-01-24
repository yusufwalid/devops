# DevOps Assessment

We at Bosta are receiving thousands of shipments everyday that need to be proceeded, aggregated and loaded into many datastores in order to be used for different business use cases.

## Context

The main purpose of this assessment is to test your ability to implement modern automated infrastructure, as well as familiarity of our technology stack which mainly consists of Node.js, MongoDB, MySQL, and Kuberentes. In your solution you should emphasize readability, maintainability and DevOps methodologies.

We believe that infrastructure is best represented as code, and provisioning of resources should be automated as much as possible.

## Specification

The assessment comes with a mock TCP data server that exposes a TCP port 8282 and once connected will generate a stream of JSON objects representing shipments data coming from different sources.

Using the 300$ free credit on your GCP account, try to complete the following tasks:

- Run a MongoDB cluster (use any IaC technology of your choice).
- Load the shipments data coming from the TCP server into MongoDB.

Let's imagine that we were running on MongoDB database for a while and we decided to move to MySQL database with **zero downtime**.

- Run a MySQL cluster (use any IaC technology of your choice).
- How can we migrate the old dataset?
- How can we roll this out?
- How can we roll this back?

## Deliverables

- Provide the needed scripts for the entire migration, rollout, and rollback processes.
- Write down documents to demonstrate your rollout plan, rollback plan, architecture overview, and any other documents you find it useful to share.

## Submit your solution

Create a public Github repository and push your solution in it. Commit often - we would rather see a history of trial and error than a single monolithic push. When you're finished, send us the URL to the repository.
