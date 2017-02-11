# Space Bug Starter Kit
An Ant Design framework starting point for Meteor/React applications.. (Fork of [TheMeteorChef's Base](http://themeteorchef.com/base))


## Version

<table>
  <tbody>
      <tr>
      <th>SpaceBug</th>
      <td>v0.0.3</td>
    </tr>
    <tr>
      <th>Base Version</th>
      <td>v4.5.0</td>
    </tr>
    <tr>
      <th>Meteor Version</th>
      <td>v1.4.2</td>
    </tr>
  </tbody>
</table>

## Getting Started

* git clone this repo
* run `meteor npm install` which is the meteor equivalent to `npm install` (this will download all npm packages)
* run the app with `meteor npm start`
* you should see your app startup on localhost:3000
* the index page is where the bug is

## Where's the code?

If you haven't seen Meteor 1.3's recommended application structure yet you may be wondering where the actual code is.

Most of the app is in the `imports` folder. The UI is found in `imports/ui`. The API (methods, publications, schemas) can be found in `imports/api`


## Font
font is set in `~/client/theme.less` and currently pulls in a `<link>` tag from `~/client/main.html`. Currently set to Google Font's Open Sans.

## Other Stuff
* [AirBnB Style Guide for React] (https://github.com/airbnb/javascript/tree/master/react)


