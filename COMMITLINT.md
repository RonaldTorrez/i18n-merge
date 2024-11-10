# Commitlint Types Explained

## Types and Descriptions

- **build**: Changes that affect the build system or external dependencies.
- **chore**: Regular maintenance tasks, no production code change.
- **ci**: Changes to CI configuration or scripts.
- **docs**: Documentation only changes.
- **feat**: A new feature for the user or a significant change.
- **fix**: A bugfix for the user.
- **perf**: A code change that improves performance.
- **refactor**: Code change that neither fixes a bug nor adds a feature.
- **revert**: Reverting a previous commit.
- **style**: Changes that don’t affect the structure of code.
- **test**: Adding missing tests or correcting existing tests.

## Examples

### build

- `build: update npm dependencies to latest versions`
- `build: migrate from Grunt to Gulp for task automation`
- `build: configure Dockerfile for production deployment`
- `build: integrate new CDN for asset hosting`
- `build: update API endpoint URLs in configuration`

### chore

- `chore: clean up unused variables in codebase`
- `chore: refactor folder structure for better organization`
- `chore: update documentation links in README`
- `chore: review and update coding style guidelines`
- `chore: remove deprecated features from project`

### ci

- `ci: add new test suite for frontend components`
- `ci: update GitHub Actions workflow for Node.js 16`
- `ci: configure Jenkins pipeline for deployment automation`
- `ci: integrate Slack notifications for build status updates`
- `ci: optimize Docker image build process`

### docs

- `docs: add API reference documentation for authentication endpoints`
- `docs: update installation instructions in README.md`
- `docs: create user guide for new dashboard features`
- `docs: fix typos and grammatical errors in contributing guidelines`
- `docs: clarify usage examples in developer documentation`

### feat

- `feat: implement user authentication using OAuth 2.0`
- `feat: add dark mode option for user interface`
- `feat: introduce real-time notifications for new messages`
- `feat: integrate payment gateway for subscription upgrades`
- `feat: implement file upload functionality with progress bar`

### fix

- `fix: resolve issue with user login failing after session timeout`
- `fix: fix broken pagination on search results page`
- `fix: address XSS vulnerability in user input validation`
- `fix: correct handling of null pointer exception in data processing`
- `fix: resolve intermittent 500 error on checkout page`

### perf

- `perf: optimize database queries to reduce query execution time`
- `perf: implement lazy loading for images to improve page load speed`
- `perf: refactor algorithm to improve runtime efficiency`
- `perf: cache API responses for faster data retrieval`
- `perf: reduce memory usage in resource-intensive operations`

### refactor

- `refactor: streamline code duplication in user authentication logic`
- `refactor: restructure Redux store for better state management`
- `refactor: extract common functions into reusable utility module`
- `refactor: simplify complex conditional statements in payment processing`
- `refactor: rename variables and functions for clarity`

### revert

- `revert: revert changeset that caused unexpected UI layout issues`
- `revert: undo implementation of experimental feature due to user feedback`
- `revert: roll back database schema changes that caused data loss`
- `revert: revert accidental deletion of critical configuration file`
- `revert: undo optimization that introduced performance regressions`

### style

- `style: format code according to project coding standards`
- `style: update CSS styles to match new design mockups`
- `style: fix indentation issues in JavaScript files`
- `style: enforce consistent naming conventions for variables`
- `style: refactor HTML structure for better readability`

### test

- `test: add unit tests for validation logic in user registration form`
- `test: refactor existing test suite to use mocking for API calls`
- `test: integrate end-to-end tests for checkout process`
- `test: fix failing tests related to currency conversion functions`
- `test: improve test coverage for error handling scenarios`

## Notes

- Each commit message should begin with one of these types when using `commitlint`.
