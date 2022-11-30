# P12_bonhoure_robin

## Install project front

### `cd front/`
### `yarn`

## Start project front

### `cd front/`
### `yarn start`

## General informations

The `front\src\components\Main.jsx` component regroup all others components
All the components use the `front\src\components\fetch.services.js` service to fetch the data

### Dependencies used
`"recharts": "^2.1.15"`
`"sass": "^1.55.0"`

## Switch mock data to api data

In the file `front\src\components\fetch.services.js`
Chenge the `const mocked` to true (mock data) or false (api data)
**Note: The mock data is in this file : `front\src\mock\data-mocked.js`**

## Switch api url 

In the file `front\src\components\fetch.services.js`
Chenge the `const url` with the url of the api