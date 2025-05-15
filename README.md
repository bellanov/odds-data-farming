# Odds Data Farming

This project is responsible for **farming** data from _The Odds API_.

![Odds Data Scraping Diagram](./diagrams/odds.png "Odds Data Scraping Diagram")

## Dependencies

This project farms sports data from a premium data broker called **The Odds API**. In order for the scripts to execute successfully, the appropriate *authentication* token should be established within an environments file `.env`.

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

## Tasks

Summarize NPM tasks and their usage.

```sh
# Execute Task
npm run <TASK>

# Execute entire *Extract, Transform, and Load (ETL)* workflow.
npm run odds-etl
```

| Task     | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| **lint**       | Lint the codebase with *ESLint* and *Prettier*.     |
| **odds-etl**       | Execute entire *Extract, Transform, and Load (ETL)* workflow.     |
| **odds-events**       | Query *events* data.     |
| **odds-sports**       | Query *sports* data.     |
| **prettier**       | Execute *Prettier* on the codebase.     |
| **prettier-check**       | Check if *Prettier* was executed on the codebase.     |
| **test**       | Execute unit tests powered by *Jasmine*.     |
