# Car Listing App by Danyal Muneer

## Description

In this project user Can Login and make CRUD operation according to the requirments that was menion in Email.

## Getting Started

### State Managment

for state managment i use Contect API I can use redux for this but for this type of smal task its batter to use context api.
so i create my custom hooks for authentication and CRUD operation

```
useAuth
```

```
useCar
```

this is available in src/hooks

### Navigation

I create 1 stack that contain login and signup screens and the other one with home and car form screen

- if user is login it will automatically switch toward the 2nd stack

### Components

I Created 2 Components

```
PrimaryButton
```

```
TextField
```

i reuse this components in every form and also insted of creating new componet for update car screen i reuse the add
car screen

### Validation

I apply Validation on signup and add update car form user have to fill each input field

### Loom Video Link

https://www.loom.com/share/e72ac70fbe5347a4b7b06e379a6752e3
