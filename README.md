# TODO List

- Assignment: [Todo List](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)
- Live preview: [https://greqov.github.io/odin-todo-list/](https://greqov.github.io/odin-todo-list/)

## About

Simple (wait wut?) todo list app with localStorage support. Done on _constructors/prototypes_.
To enable access to global objects (`storage`, `projectsManager`) I've added `storage` property to prototypes like

```js
Todo.prototype.storage = storage;
```

I'm not sure if this is a great idea kek.

Development stages: such constructors! => dumpster fire => light at the end of the tunnel.

## Features

- ...

## TODOs

- [ ] add demo data?
- [ ] add filter by date, priority, etc.
- [ ] add search field

- [ ] check TODOs in code
- [ ] add content 'Features' section
- [ ] refactor code
- [ ] update README

## Development

- build a project

```bash
npm run build
```

- start local dev server

```bash
npm run start
```

- publish 'dist' folder to github pages

```bash
npm run deploy
```
