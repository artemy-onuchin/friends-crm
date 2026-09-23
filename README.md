# Friends CRM

> A source-available personal relationship manager built with Angular.

Friends CRM is a portfolio project for organizing information about friends,
relatives, colleagues, and other personal contacts. It brings contact details,
relationships, notes, interaction history, important dates, and personal debts
together in one place.

## Project status

**Work in progress.** The project is currently in its initial development stage.
The architecture, feature set, and user interface will evolve as development
continues.

## Planned features

- Email and password authentication
- Personal dashboard
- People directory with search, filtering, and tags
- Detailed person profiles with contact information and notes
- Relationship types and connections between people
- Interaction history and timeline
- Birthdays and other important dates
- Personal debt tracking
- Import and export of user data
- Responsive and accessible interface
- Demo mode with fictional data

AI features are not part of the first version. They may be added in a later
iteration for use cases such as summarizing notes or finding people with whom
the user has not interacted recently.

## Planned routes

| Route | Purpose | Access |
| --- | --- | --- |
| `/` | Application entry page | Public |
| `/login` | Sign in | Public |
| `/register` | Create an account | Public |
| `/dashboard` | Personal overview | Authenticated |
| `/people` | People directory | Authenticated |
| `/people/:id` | Person details | Authenticated |
| `/relationships` | Relationship management | Authenticated |
| `/settings` | Account and application settings | Authenticated |

## Tech stack

- Angular
- TypeScript
- SCSS
- Firebase Authentication
- Cloud Firestore

## Engineering goals

- Clear feature-based application structure
- Standalone Angular components
- Strict and explicit TypeScript types
- Reactive forms and validation
- Route guards and predictable authentication state
- Reusable UI components
- Responsive and accessible layouts
- Automated tests for critical behavior

## Demo

A public demo will be added later. It will use a dedicated demo account and
fictional data only.

## Development approach

The project is developed iteratively with an AI coding agent. Product scope,
architecture, task decomposition, acceptance criteria, code review, and final
technical decisions remain under human control. Changes are delivered through
small, reviewable tasks and logical commits.

## License

This project is source-available under the
[PolyForm Noncommercial License 1.0.0](LICENSE). You may view, fork, modify, and
redistribute the code for noncommercial purposes. Commercial use requires
separate written permission from the author.

Copyright 2026 Artemii Onuchin.
