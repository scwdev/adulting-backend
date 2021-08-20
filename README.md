# Adulting
#### For all the stuff you can't remember when you did it last... (call your mom)

## Project Links

- [github repo link](https://github.com/scwdev/adulting-backend)
- [deployment link](url)

## Project Description
An interactive "to-do" list app where users can input tasks with full CRUD functionality. In addition, the user can specifiy how often each task "should" be completed, and the app will prioritise overdue tasks.

### CRUD Routes

| Path | Route | Functionality |
| --- | :---: | :---: |
| /tasks | get | list tasks |
| /tasks | post | create task |
| /tasks/:id | put | update task |
| /tasks/:id | delete | destroy task |
| --- | :---: | :---: |
| /users | get | list users |
| /users | post | create user |
| /users/:id | put | update user |
| /users/:id | delete | destroy user |

### Models:

Users:
- username: String, Required, Unique
- password: String, Required
- name: String
- email: String, Required
- Timestamp

Tasks:
- name: String, required
- frequency: Number, required
- Countdown: Time
- tags: [Strings... ]
- checklist: [Strings... ]
- Timestamp


### Additional Resources:
- https://affirmations-dev.herokuapp.com/ (https://github.com/annthurium/affirmations)