# CLAUDE.md

## Tech Stack

- Astro
- TypeScript 5.x
- Tailwind CSS 4.x
- ESLint 9.x
- Prettier 3.x

## Project Structure

```text
src/
├── styles/
│   └── globals.css      # Tailwind imports
├── pages
    └── index.astro      # Entry point
```

## Commands

- `pnpm dev`: Start local dev server
- `pnpm build`: Build for production
- `pnpm preview`: Preview the production build
- `pnpm astro`: Run Astro CLI
- `pnpm lint`: Run ESLint
- `pnpm lint:fix`: Run ESLint with auto-fix

## Architecture & Product Documentation

- **Architecture Decision Records (ADRs):**
  - All technical decisions are documented as ADRs in [`doc/adr/`](doc/adr/).
  - To create a new ADR, use the [`adr-tools`](https://github.com/npryce/adr-tools) CLI. See their docs for usage.
  - Before making significant technical changes, check for existing ADRs and reference them in your PRs.
  - ADRs should be concise, actionable, and follow the established template.

- **Product Requirements Documents (PRDs):**
  - All product decisions and requirements are documented in [`doc/prd/`](doc/prd/).
  - PRDs inform the creation of ADRs—always review relevant PRDs before proposing technical changes.
  - Keep PRDs up to date as product scope evolves.

- **Best Practices:**
  - Link relevant ADRs and PRDs in your pull requests and issues.
  - For consistent, high-quality code, follow the project rules in [`./.cursor/rules/astro.mdc`](.cursor/rules/astro.mdc).
  - When in doubt, ask for guidance in code review or reference the templates in the respective folders.

## Code Style & Conventions

- Use named exports, not default
- Destructure imports where possible
- Use PascalCase for components, camelCase for functions/variables
- All files must be TypeScript (.ts/.tsx)
- Use Tailwind v4.x for styling, avoid inline styles. Always refer to v4.x documentation.

!IMPORTANT: We are using Tailwind 4, dot no check for tailwind.config.js. Always refer to [official documentation](https://tailwindcss.com/docs).

## Repository Etiquette

- Branches: `feature/*`, `fix/*`, `chore/*`
- Commits: Follow Conventional Commits format:
  - `feat`: New features (e.g., `feat: add user profile page`)
  - `fix`: Bug fixes (e.g., `fix: resolve login error`)
  - `chore`: Maintenance tasks (e.g., `chore: update dependencies`)
  - `docs`: Documentation changes (e.g., `docs: update API reference`)
  - `style`: Code style changes (e.g., `style: format files`)
  - `refactor`: Code refactoring (e.g., `refactor: simplify auth logic`)
  - `test`: Adding/updating tests (e.g., `test: add unit tests for auth`)
- PRs: Require code review, link to issue

## Core Files & Utilities

- `astro.config.mjs`: Astro configuration and integrations
- `eslint.config.js`: ESLint flat configuration
- `tsconfig.json`: TypeScript configuration
- `.prettierrc`: Prettier formatting rules
- `src/pages/index.astro`: Main entry point
- `src/styles/global.css`: Global styles and Tailwind imports
- `package.json`: Project dependencies and scripts
- `pnpm-workspace.yaml`: Workspace configuration

## Do Not Touch

- Do not modify `.env` files
- Do not remove accessibility checks

## Task Management

The project uses a task management system with the following files:

- `.tasks/tasks.json`: Contains all project tasks and their status
- `.tasks/state.json`: Tracks current working state and branch mappings

### Updating Task State

When working on tasks, always update the `.tasks/state.json` file:

1. **When starting work on a task:**
   - Update `lastUpdated` to current timestamp
   - Ensure `currentTag` matches your working branch
   - Add branch mapping if working on a new branch

2. **When completing a task:**
   - Update the task status in `.tasks/tasks.json` to `"completed"`
   - Update `lastUpdated` in `.tasks/state.json`
   - Update any dependent tasks that can now be started

3. **When switching branches:**
   - Update `currentTag` to match the branch name
   - Add branch mapping in `branchTagMapping` if new
   - Update `lastUpdated` timestamp

### Task Status Values

- `"pending"`: Task not yet started
- `"in_progress"`: Currently being worked on
- `"completed"`: Task finished
- `"blocked"`: Task cannot proceed due to dependencies

## Agentic Flow

When working on this project as an AI agent, follow this structured workflow to ensure comprehensive and accurate results:

### 1. INITIAL ANALYSIS (Sequential Thinking)

- **Break down the research query into core components**
  - Identify the main problem or feature being requested
  - List all technical requirements and constraints
  - Determine scope and complexity level
- **Identify key concepts and relationships**
  - Map out dependencies between components
  - Identify existing code patterns and conventions
  - Note any architectural constraints from ADRs
- **Plan search and verification strategy**
  - Determine which parts of the codebase need investigation
  - Plan which external resources to consult
  - Identify potential edge cases to consider
- **Determine which tools will be most effective**
  - Choose appropriate search methods (semantic vs. regex)
  - Decide on file reading scope and depth
  - Plan testing and validation approach

### 2. PRIMARY SEARCH (Codebase Investigation)

- **Start with broad context searches**
  - Use semantic search to understand the overall codebase structure
  - Search for related functionality and patterns
  - Identify relevant files and directories
- **Use targeted follow-up searches for specific aspects**
  - Search for specific function names, types, or patterns
  - Look for existing implementations of similar features
  - Find relevant configuration files and dependencies
- **Document and analyze search results**
  - Note key findings and their locations
  - Identify patterns and conventions used
  - Document any inconsistencies or potential issues

### 3. DEEP VERIFICATION (File Reading & Analysis)

- **Navigate to key files identified in search**
  - Read relevant source files to understand implementation details
  - Examine type definitions and interfaces
  - Review configuration files and dependencies
- **Extract specific data points**
  - Note exact function signatures and parameters
  - Document component props and state management
  - Identify API endpoints and data flow patterns
- **Click through and explore relevant links**
  - Follow import statements to understand dependencies
  - Trace function calls and component hierarchies
  - Examine related files for context
- **Fill forms if needed for data gathering**
  - Check for any missing configuration or setup requirements
  - Verify environment variables and dependencies
  - Ensure all prerequisites are documented

### 4. SYNTHESIS & PRESENTATION

- **Combine findings from all tools**
  - Integrate information from codebase search and file reading
  - Cross-reference with project documentation (ADRs, PRDs)
  - Validate against existing patterns and conventions
- **Present information in structured format**
  - Organize findings logically with clear sections
  - Use markdown formatting for readability
  - Include code examples and file references
- **Highlight key insights and relationships**
  - Emphasize important architectural decisions
  - Note potential conflicts or considerations
  - Provide actionable recommendations

### Best Practices for Agentic Workflow

- **Always reference existing patterns**: Before implementing new features, search for similar patterns in the codebase
- **Check documentation first**: Review relevant ADRs and PRDs before making technical decisions
- **Validate against project rules**: Ensure all code follows the established conventions in `.cursor/rules/`
- **Test assumptions**: Verify findings by reading actual source files, not just search results
- **Document decisions**: When making changes, reference relevant documentation and explain reasoning
- **Consider dependencies**: Always check for potential impacts on other parts of the system
- **Follow the established workflow**: Use the four-step process for complex tasks to ensure thorough analysis
