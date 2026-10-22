# Checklist

Test the finished app as a user. The form must show the selected contact's values, not hardcoded text.

The expected values below use the contacts in `src/data/contacts.js`.

## What to build

- [ ] Import `initialContacts` from `./data/contacts.js`.
- [ ] Add state for `contacts`, the selected contact id, and the name and email fields.
- [ ] Render one `ContactButton` per contact in `contacts`.
- [ ] Make both inputs controlled.
- [ ] Load the selected contact into the inputs when a contact button is clicked.
- [ ] On Save, update that contact in `contacts` with `map`.
- [ ] On Reset, restore the inputs to the contact's last saved values.

## User test

- [ ] Open the app. Three buttons: Taylor, Alice, Bob. Name is `Taylor`, Mail is `taylor@mail.com`.
- [ ] Click Alice. Name is `Alice`, Mail is `alice@mail.com`.
- [ ] Click Bob. Name is `Bob`, Mail is `bob@mail.com`.
- [ ] With Bob selected, type `Bobby` in Name and click Save. The Bob button now reads `Bobby`.
- [ ] Click Taylor, then click Bobby again. Name is `Bobby`, Mail is `bob@mail.com`.
- [ ] With Alice selected, change Mail to `alice@work.com` and click Reset. Mail is back to `alice@mail.com`.
- [ ] With Alice selected, change Name to `Alicia` without saving, then click Taylor. Click Alice: name is still `Alice`.
- [ ] Clear the Name field and click Save. The button for that contact is empty and the app does not crash.
- [ ] Editing one contact never changes the name or email of the other two.
- [ ] The browser console shows no errors or key warnings.
