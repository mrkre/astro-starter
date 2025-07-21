# Task Management Files Documentation

This directory contains task management files for the project. These files help track project progress, manage tasks, and maintain state across different contexts.

## Files Overview

### `tasks.json`

The main task storage file that contains all project tasks and their metadata.

### `state.json`

A state management file that tracks current context, tag mappings, and last update timestamps.

## tasks.json

### Task File Purpose

Stores all project tasks in a structured JSON format. Each task can have subtasks, dependencies, priorities, and status tracking.

### Structure

```json
[
  {
    "id": "1",
    "title": "Task Title",
    "description": "Detailed task description",
    "status": "pending|in_progress|completed|review|deferred|cancelled",
    "priority": "high|medium|low",
    "dependencies": ["1", "2"],
    "subtasks": [
      {
        "id": "1.1",
        "title": "Subtask Title",
        "status": "pending|completed"
      }
    ]
  }
]
```

### Task Properties

- **id**: Unique identifier (string or number)
- **title**: Short, descriptive task name
- **description**: Detailed explanation of the task
- **status**: Current state of the task
  - `pending`: Not started
  - `in_progress`: Currently being worked on
  - `completed`: Finished
  - `review`: Ready for review
  - `deferred`: Postponed
  - `cancelled`: No longer needed
- **priority**: Importance level
  - `high`: Critical path items
  - `medium`: Important but not blocking
  - `low`: Nice to have
- **dependencies**: Array of task IDs that must be completed first
- **subtasks**: Array of smaller tasks that make up the main task

### Subtask Properties

- **id**: Format: `parentId.subtaskNumber` (e.g., "1.1", "2.3")
- **title**: Short description of the subtask
- **status**: Same status options as main tasks

### Usage Guidelines

1. **Task IDs**: Use sequential numbers or meaningful identifiers
2. **Dependencies**: Always list dependencies to maintain proper order
3. **Subtasks**: Break complex tasks into manageable subtasks
4. **Status Updates**: Keep status current as work progresses
5. **Descriptions**: Provide enough detail for anyone to understand the task

## state.json

### State File Purpose

Tracks the current working context, branch-to-tag mappings, and metadata about the task system.

### State File Structure

```json
{
  "currentTag": "main",
  "branchTagMapping": {
    "main": "main",
    "feature/new-feature": "feature-new-feature"
  },
  "lastUpdated": "2025-01-18T00:00:00Z"
}
```

### Properties

- **currentTag**: The active tag context for task operations
- **branchTagMapping**: Maps Git branch names to tag names for context switching
- **lastUpdated**: ISO timestamp of the last state change

### State File Usage Guidelines

1. **Tag Management**: Use tags to organize tasks by context (e.g., features, releases)
2. **Branch Mapping**: Automatically map Git branches to task tags
3. **Context Switching**: Switch between different task contexts as needed
4. **Timestamps**: Track when the state was last modified

## Best Practices

### Task Management

- Keep tasks focused and atomic
- Update status regularly
- Use dependencies to show relationships
- Break large tasks into subtasks
- Use descriptive titles and descriptions

### State Management

- Use meaningful tag names
- Keep branch mappings current
- Don't manually edit state.json unless necessary
- Use tags to separate different work contexts

### File Maintenance

- Back up task files regularly
- Version control both files
- Validate JSON syntax before committing
- Keep task IDs consistent across contexts

## Common Operations

### Adding a New Task

1. Add task object to `tasks.json` array
2. Assign unique ID
3. Set appropriate status and priority
4. Add dependencies if needed

### Updating Task Status

1. Locate task by ID
2. Update status field
3. Update any dependent tasks if needed

### Creating Subtasks

1. Add subtask to parent task's subtasks array
2. Use format `parentId.subtaskNumber` for ID
3. Set initial status

### Switching Contexts

1. Update `currentTag` in `state.json`
2. Add branch mapping if needed
3. Update `lastUpdated` timestamp

## Error Handling

- Validate JSON syntax before saving
- Check for circular dependencies
- Ensure task IDs are unique
- Verify subtask IDs follow naming convention
- Handle missing dependencies gracefully
