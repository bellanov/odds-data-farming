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

Also, create a directory to hold output from executing scripts.

```sh
# Create Data Directory
mkdir data
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

| Task                | Description                                       |
| ------------------- | ------------------------------------------------- |
| **lint**            | Lint the codebase with _ESLint_ and _Prettier_.   |
| **odds-account**    | View _API Usage_ statistics.                      |
| **odds-events**     | Query _events_ data.                              |
| **odds-sports**     | Query _sports_ data.                              |
| **odds-event-odds** | Query _event odds_ data.                          |
| **odds-sport-odds** | Query _sport odds_ data.                          |
| **prettier**        | Execute _Prettier_ on the codebase.               |
| **prettier-check**  | Check if _Prettier_ was executed on the codebase. |
| **test**            | Execute unit tests powered by _Jasmine_.          |
