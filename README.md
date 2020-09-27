# BESX

### Introduction
**BESX** is a RolePlay Framework for FiveM servers developed in TypeScript.

### Table Of Content
- [Installation](#installation)
- [Developing](#developing)
- [License](#license)
    
### Installation
* Clone this repository
* Run `npm run build` 
* Copy [fxmanifest.lua](https://github.com/cadox8/besx/blob/tree/fxmanifest.lua) and `dist` into the folder inside your `resources` folder
* Upload [database.sql](https://github.com/cadox8/besx/blob/tree/database.sql) to the MySQL server
* Configure [config.json](https://github.com/cadox8/besx/blob/tree/config.json)
* Add `ensure besx` before any other script that uses this as dependency
* Enjoy the server

### Developing
You can develop extra scripts using this as a base. Check [the API](https://cadox8.es/besx) to know how to use the API.
You can use this script with [Lua](https://cadox8.es/besx/lua) or [NPM](https://npm.org/cadox8/besx).

### License
This project is released under [MIT License](LICENSE.md). Please, read it before using/editing this script.