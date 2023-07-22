# React IT Logger Test

This is a simple React IT Logger application that uses redux for state management. The application uses a local `db.json` file to simulate a database.

## Setup your GitLab profile

If you don't already have a GitLab profile setup you'll have to create one and apply your computers SSH key to the profile. This will allow you to pull and push to this repository.

Follow the steps to [setup your GitLab and SSH key here](https://subscription.packtpub.com/book/application_development/9781783986842/2/ch02lvl1sec20/adding-your-ssh-key-to-gitlab)

## Setup

1. `git clone git@gitlab.com:peterlehto/it-logger.git`
2. `cd it-logger`
3. `npm install`

### How to run the application

1. `npm run dev` will start the application and json server concurrently.
2. The application will be served on `http://localhost:3000`.

### What is already setup and provided in this test

- The application displays "IT logs" from the database.
- You can create new "IT logs" by clicking blue button in the bottom right corner (screenshot below).
- You can edit existing "IT logs" by clicking the title of the log.
- You can create new "Technicians" by hovering over the blue button and then clicking the red button (screenshot below).
- You can delete a log by clicking the Trashcan icon.

## The Test

Fork this repository, complete the tests and create a pull request.

Complete the following tests:

1. **Create a new Technician** - `./src/components/techs/AddTechModal.js`

   1. Add inputs for First Name and Last Name.
   2. `onChange` store the `firstName` and `lastName` inputs in state.
   3. `onSubmit` the technician must be saved to the database.
   4. Use the `addTech` redux action provided to save the new technician to the `db.json` "database".
   5. Clear input fields after save.

2. **Add Log Modal Select a Technician** - `./src/components/logs/AddLogModal.js`

   1. Add a select dropdown to select a technician `tech`.
      1. Use the `./src/components/techs/TechSelectOptions.js` component for your select options.
      2. Complete the `TechSelectOptions` component to list all the technicians in a dropdown list.
   2. `onChange` store the `tech` in state.
   3. `onSubmit` the log with the selected `tech` must be saved to the `db.json` "database".
   4. Use the `addLog` action provided.
   5. Clear all input fields after save.

3. **Edit Log Modal Select a Technician** - `./src/components/logs/EditLogModal.js`

   1. Add a select dropdown to select a technician `tech`.
      1. Use the `./src/components/techs/TechSelectOptions.js` component for your select options.
   2. `onChange` store the `tech` in state.
   3. `onSubmit` the log with the selected `tech` must be saved to the `db.json` "database".
   4. Use the `updateLog` action provided.
   5. Clear all input fields after save.

4. **Complete the deleteLog action** - `./src/actions/logActions.js`

   1. Complete the `deleteLog` action to delete a log from the database.
   2. Dispatch a `DELETE_LOG` reducer.
   3. Show a toast message that a log has been deleted.

5. **Complete the DELETE_LOG reducer** - `./src/reducers/logReducer.js`

   1. Complete the `DELETE_LOG` reducer used by the `deleteLog` action.
   2. Delete the log from the database and update the state.
   3. Show a toast message that a log has been deleted.

6. **Create a Pull Request**
   1. Create a pull request from your branch to `master`.
   2. Add a description and screenshots.

### Screenshots of completed application

1. Dashboard with action buttons
   ![1._dashboard](https://i.imgur.com/AYfKVzE.png)

2. Add a technician
   ![2._technician](https://i.imgur.com/qP4Uxcj.png)

3. Add an IT Log
   ![3._add](https://i.imgur.com/CnDKJyK.png)

4. Edit an IT Log
   ![4._edit](https://i.imgur.com/93YAJh4.png)
