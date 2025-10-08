# Odds Data Farming

This project is a Node.js ETL system that farms sports betting data from The Odds API and stores it in Firebase. The system supports containerized deployment via Docker and Kubernetes orchestration.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Setup

- Install Node.js (v18.x, v20.x, or v22.x supported)
- Clone the repository
- Create environment file: `cp .env.example .env` (create .env.example if missing)
- Configure required environment variables (see Environment Configuration section)
- Install dependencies: `npm install` -- takes ~12 seconds. Set timeout to 30+ seconds.
- ALWAYS create the `data/` directory: `mkdir -p data` (required for data outputs)

### Core Development Commands

- Clean workspace: `npm run clean` -- takes ~0.1 seconds
- Install dependencies: `npm install` -- takes ~12 seconds. Set timeout to 30+ seconds.
- Run tests: `npm test` -- takes ~0.4 seconds. REQUIRES .env file or tests will fail.
- Lint codebase: `npm run lint` -- takes ~3 seconds. Set timeout to 30+ seconds.
- Format code: `npm run format` -- takes ~1 second

### Build and Deploy

- Docker build: `npm run docker-build` -- takes ~76 seconds but CURRENTLY FAILS due to deprecated `--only="production"` flag in Dockerfile line 10. Set timeout to 180+ seconds.
- Full Docker cycle: `npm run docker` -- tears down, builds, and deploys containers
- Docker teardown: `npm run docker-teardown`
- Docker deploy: `npm run docker-deploy`

## Environment Configuration

CRITICAL: Create a `.env` file with the following variables before running any scripts:

```bash
# The Odds API Configuration (REQUIRED)
THE_ODDS_API="your_api_key_here"
MARKETS="h2h,spreads,totals"
SPORTS="americanfootball_nfl,americanfootball_ncaaf"

# Firebase Configuration (REQUIRED for data storage)
FIREBASE_API_KEY="your_firebase_api_key"
FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="123456789"
FIREBASE_APP_ID="1:123456789:web:abcdef123456"
FIREBASE_MEASUREMENT_ID="G-ABCDEF123"
```

Without proper .env configuration:

- Tests will fail with "Cannot read properties of undefined (reading 'replace')"
- All data extraction scripts will fail
- Firebase integration will not work

## Data Extraction Scripts

The core functionality is organized into ETL (Extract, Transform, Load) operations:

### Available Data Commands

- Query sports data: `npm run odds-sports` -- extracts available sports from The Odds API
- Query events data: `npm run odds-events` -- extracts events for configured sports
- Query event odds: `npm run odds-event-odds` -- extracts odds for specific events
- View API usage: `npm run odds-account` -- checks API quota and usage statistics

### Script Architecture

```
scripts/
├── api/           # API query modules (sports.js, events.js, eventOdds.js, sportsOdds.js)
├── bin/           # Executable shell scripts that call extract/ modules
├── extract/       # Main ETL logic (calls api/ modules, processes data)
├── load/          # Data loading to Firebase (firestore.js)
├── cicd/          # Build and deployment scripts
├── k8s/           # Kubernetes management scripts
└── minikube/      # Local K8s cluster management
```

All data extraction creates:

- JSON files in `data/` directory
- Log files in root directory (e.g., `sports.log`, `api_event_odds.log`)
- Data stored in Firebase collections

## Kubernetes Operations

### Cluster Management

- Create cluster: `npm run k8s-create-cluster` -- creates minikube cluster
- Delete cluster: `npm run k8s-delete-cluster` -- destroys minikube cluster
- List resources: `npm run k8s-list` -- shows cluster status and resources
- View cron jobs: `npm run k8s-cron-jobs` -- displays scheduled tasks

### Application Deployment

REQUIRES: kubectl and minikube installed and available in PATH

## Testing and Validation

### Running Tests

- Execute all tests: `npm test` -- runs Jasmine test suite in ~0.4 seconds
- Tests validate API modules without making actual API calls
- CRITICAL: Tests REQUIRE .env file or will fail with undefined errors
- Tests require minimal .env with THE_ODDS_API and MARKETS variables

### Manual Validation Scenarios

ALWAYS test the following scenarios after making changes:

1. **Basic Setup Validation**:

   ```bash
   npm install
   npm run clean
   npm test
   npm run lint
   ```

2. **Data Extraction Validation** (requires valid API keys):

   ```bash
   npm run odds-sports
   # Verify: data/sports.json created and sports.log shows API responses

   npm run odds-account
   # Verify: API usage statistics displayed
   ```

3. **Code Quality Validation**:
   ```bash
   npm run format
   npm run lint
   # Verify: No linting errors, code properly formatted
   ```

### Expected File Outputs

After running data extraction scripts, expect:

- `data/sports.json` -- sports data from The Odds API
- `data/*.json` -- various extracted data files
- `*.log` -- Winston log files (sports.log, api_event_odds.log, etc.)
- Firebase collections populated (if properly configured)

## Common Issues and Troubleshooting

### Environment Issues

- **"Cannot read properties of undefined (reading 'replace')"**: Missing .env file or missing required environment variables
- **"API key is missing"**: THE_ODDS_API not set in .env file
- **"Markets are missing"**: MARKETS not set in .env file
- **Firebase errors**: Missing Firebase configuration variables

### Docker Issues

- **Docker build fails**: Known issue with `npm ci --only="production"` in Dockerfile. Use `npm run docker-build` with 180+ second timeout.
- **Container startup issues**: Ensure .env file is properly configured before building

### API Rate Limiting

- Scripts include built-in delays to prevent rate limiting
- Monitor API usage with `npm run odds-account`
- Adjust SPORTS and MARKETS environment variables to limit API calls

## Build Times and Timeouts

CRITICAL TIMING INFORMATION - NEVER CANCEL these operations:

- `npm install`: ~12 seconds -- Set timeout to 30+ seconds
- `npm test`: ~0.4 seconds -- Set timeout to 10+ seconds
- `npm run lint`: ~3 seconds -- Set timeout to 30+ seconds
- `npm run format`: ~1 second -- Set timeout to 10+ seconds
- Docker build: `npm run docker-build` -- takes ~76 seconds (but fails) -- Set timeout to 180+ seconds. NEVER CANCEL. Known issue: Dockerfile uses deprecated `--only="production"` flag.
- Data extraction scripts: Variable (depends on API response) -- Set timeout to 60+ seconds

## Repository Structure

### Key Directories

- `/scripts/api/` -- Direct API interaction modules
- `/scripts/extract/` -- Main business logic for data extraction
- `/scripts/bin/` -- Shell script wrappers for extract modules
- `/spec/` -- Jasmine test specifications
- `/k8s/` -- Kubernetes manifests for deployment
- `/config/` -- Firebase and other configuration
- `/data/` -- Output directory for extracted data (git-ignored)

### Key Files

- `package.json` -- All npm scripts and dependencies
- `eslint.config.js` -- ESLint configuration
- `.prettierrc` -- Prettier formatting rules
- `Dockerfile` -- Container build definition (currently has issues)
- `.env` -- Environment configuration (not in repo, must create)

## CI/CD Integration

GitHub Actions workflow (`.github/workflows/node.js.yml`) runs:

1. Setup Node.js (18.x, 20.x, 22.x matrix)
2. Create .env file from secrets
3. `npm ci` -- clean install
4. `npm run lint` -- code quality checks
5. `npm run build --if-present` -- build if build script exists
6. `npm test` -- run test suite

ALWAYS run `npm run lint` and `npm test` before committing changes or CI will fail.

## Development Workflow

1. **Setup**: Create .env, run `npm install`
2. **Development**: Make changes, run `npm run format`
3. **Testing**: Run `npm test` and validate functionality
4. **Quality**: Run `npm run lint` to ensure code quality
5. **Data Testing**: Use `npm run odds-account` to verify API connectivity
6. **Manual Testing**: Run appropriate data extraction scripts to verify changes
7. **Cleanup**: Run `npm run clean` to clear temporary files

ALWAYS validate that your changes work with both dummy API keys (for basic functionality) and real API keys (for full end-to-end testing).
