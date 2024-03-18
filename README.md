# VIS Yggdrasil Tools

This npm package facilitates interaction with VIS' Custom Authentication Servers.

## Installation

```console
$ npm install vis-yggdrasil-tools
```

## Usage

To utilize this package, follow the examples below:

### Import the Package

```javascript
import * as mc from 'vis-yggdrasil-tools'; // Import Module
let player = new mc.player('Benson'); // Create a new Player (Can use Name or Uuid)
```

### Get UUID of a Player

```javascript
// Will take Player Object or player name as a string
mc.nameToUuid(player)
    .then(data => {
        console.log(data.uuid);
    })
    .catch(console.error);

// Another way if using player Object
player.uuid.then(uuid => {
    console.log(uuid);
});
```

### Get Player Name

```javascript
// Will take player Object or Uuid as a string
mc.uuidToName(player)
    .then(data => {
        console.log(data.name);
    })
    .catch(console.error);

// Another way if using player Object
player.name.then(name => {
    console.log(name);
});
```

### Get Full Name History of a Player

```javascript
// Will take Player Object or Uuid as a string
mc.getNameHistory(player)
    .then(data => {
        console.log(data);
    })
    .catch(console.error);
```

### Get a Player's Name at a Specific Time

```javascript
// Will take Player Object or Uuid as a string
// Also takes a Date Object
// Due to API limitations, anything before the first name change will be the account's original name.
mc.getNameAtDate(player, new Date('2017-01-01'))
    .then(name => {
        console.log(name);
    })
    .catch(console.error);
```

### Get Player Skin (and cape)

```javascript
// Will take Player Object or Uuid as a string
// Before the Player Object, you would need to convert a player name to Uuid yourself
mc.getSkin(player)
    .then(skin => {
        console.log(skin);
    })
    .catch(console.error);
```

### Check if Server is Banned by Mojang

```javascript
mc.isServerBlocked('vis.galnod.com')
    .then(data => {
        console.log(data);
    })
    .catch(console.error);
```

Please ensure proper error handling as shown in the examples.
