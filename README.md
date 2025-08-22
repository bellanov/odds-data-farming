# Odds Data Farming

This project is responsible for **farming** data from _The Odds API_.

![Odds Data Scraping Diagram](./diagrams/odds.png "Odds Data Scraping Diagram")

## Dependencies

This project farms sports data from a premium data broker called **[The Odds API](https://the-odds-api.com/)**.

In order for the scripts to execute successfully, the appropriate _authentication_ token should be established within an environments file `.env`, exemplified below.

```sh
#
# Define Environment Variables.
#

# Sports Data APIs
THE_ODDS_API="<API_TOKEN>"

# Firebase Configurations
# TBA
```

## Scripts

The scripts are organized across a series of directories.

| Directory     | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| **api**       | Scripts responsible for **querying** data from _The Odds API_.     |
| **bin**       | Scripts responsible for aspects of the **ETL** process.            |
| **build**     | Scripts responsible for aspects of the **CICD** process.           |
| **extract**   | Scripts responsible for **extracting** data from _The Odds API_.   |
| **transform** | Scripts responsible for **transforming** data from _The Odds API_. |
| **load**      | Scripts responsible for **loading** data from _The Odds API_.      |

## Usage

Aspects of the data farming process are isolated across a series off **NPM Tasks**, summarized below.

```sh
# Execute Task
npm run <TASK>

# Query Events Data
npm run odds-events
```

| Task                   | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| **clean**              | Execute _cleanup_ tasks before relevant builds.                             |
| **docker**             | Tears down existing _Docker_ containers and redeploys them.                 |
| **docker-build**       | Executes a _Docker_ build, packaging the project into a **container**.      |
| **docker-deploy**      | Deploys the most recently built _Docker_ container.                         |
| **docker-teardown**    | Tears down existing _Docker_ containers.                                    |
| **format**             | Execute _Prettier_ on the codebase.                                         |
| **k8s-apply**          | Applys existing _k8s/_ manifests, **procuring** resources.                  |
| **k8s-config**         | Procures _ConfigMaps_ required by K8s resources.                            |
| **k8s-create-cluster** | Creates a _Kubernetes_ cluster to deploy **containerized** workloads.       |
| **k8s-cron-jobs**      | Views _Scheduled Task_ information.                                         |
| **k8s-delete-cluster** | Deletes a _Kubernetes_ cluster.                                             |
| **k8s-delete**         | Deletes existing _k8s/_ manifests, **deleteing** resources.                 |
| **k8s-list**           | Lists existing _k8s_ cluster **information** (namespaces, resources, etc.). |
| **lint**               | Lint the codebase with _ESLint_ and _Prettier_.                             |
| **odds-account**       | View _API Usage_ statistics.                                                |
| **odds-events**        | Query _events_ data.                                                        |
| **odds-sports**        | Query _sports_ data.                                                        |
| **odds-event-odds**    | Query _event odds_ data.                                                    |
| **test**               | Execute unit tests powered by _Jasmine_.                                    |
