# Name and Email

Exam coding challenge: a small React + Vite app that edits a contact's name and email.

## Task

Complete the contact editor in `src/App.jsx` using the data in `src/data/contacts.js`:

- `initialContacts`: list of `{ id, name, email }` used to fill the contact buttons and the form fields.

#### Requirements

1. One button per contact, labelled with the contact's name.
2. Clicking a contact button loads that contact into the form.
3. Name input (`data-testid="name"`) shows the selected contact's name.
4. Mail input (`data-testid="email"`) shows the selected contact's email.
5. Defaults: the first contact is selected on load.
6. Editing an input only changes the form, not the contact list.
7. "Save" writes the edited name and email back to the selected contact.
8. "Reset" restores the inputs to the last saved values of the selected contact.
9. Switching contact after editing without saving discards the edits.

### Hints

- Keep `contacts` and the selected contact id in state with `useState`.
- Keep the form fields in their own state so edits are not applied until Save.
- Make the inputs controlled: set `value` and `onChange`.
- Use `key={contact.id}` when rendering the buttons.
- Update the list immutably with `map`, do not mutate `contacts`.

## Getting started

```
npm install
npm run dev
```

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Production build             |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint with Oxlint             |

## Project structure

```
src/
  App.jsx            Contact editor, ContactButton and Input
  data/contacts.js   Contact list
  index.css          Styles
  main.jsx           Entry point
```

## Stack

React 19, Vite, Oxlint.
