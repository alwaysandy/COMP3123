# Basic Redux Example

### State
Redux state is stored in a basic JS object. It's a read only, immutable object, that stores the state for an application.

In my example app, it only stores one value, the counter value.
### Store
The store in redux holds the state tree. The store allows the UI to get the state, and allows updating the state by dispatching an action.

As well, it is used to notify subscribers when the state is updated.

### Reducer
A reducer is a function that takes a state, applies a calculation on it and returns a new state object.

### Actions
Actions are plain JS objects with a type field. They act like an event that describes something that has happened in the app.

The actions in this example app are counter/incremented and counter/decremented

### Dispatch
The store has a method called dispatch, which is passed an action object. The store will run its reducer function after dispatch is called and update the state with the new state from the reducer function.

### Subscribe
Subscribe is a store method that allows a function to be run everytime the state changes. This can be used for updating the UI whenever the state is updated.
