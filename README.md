# react-native-playground-project
A sample react native project with a simple guide through its features and components. Feel free to fork, contribute, or address any naming convention issue. 

* [Project Setup](#project-setup)
  * [Installing React Native](#installing-react-native)
  * [Creating your project](#creating-your-project)
  * [Running your project](#running-your-project)
* [Project Structure](#project-structure)
  

## Project Setup

### Installing React Native

Assuming that you have Node installed, you can use npm to install the create-react-native-app command line utility.

```
npm install -g create-react-native-app
```

### Creating your project

The following command will create a new project.

```
create-react-native-app react-native-playground-project
```


### Running your project

To start packaging and running your project.

```
cd AwesomeProject
npm start
```

iOS (Mac only, requires Xcode)

```
npm run ios
```

Android (Requires Android build tools)

```
npm run android
```

## Project Structure

For project struture. I rely on using a structure similar to what [Konstantin Shkut breaks down in his page](http://rationalappdev.com/cross-platform-navigation-in-react-native/#outlining-the-structure):

* **App.js** - that’s the entry point for our app generated by create-react-native-app.
* **src** - folder for all source file that we create.
  * **components** - folder for re-usable components.
    * **Drawer.js** - The side menu drawer component.
    * **HeaderButton.js** - An icon button at the top left corner. We’ll use it for buttons that open the drawer and close the modal screen.
  * **screens** - folder for app screens.
    * **Modal.js** - Modal screen.
    * **Profile.js** - Profile screen.
  * **tabs** - folder for app screens that are shown as tabs.
    * **Home.js** - Home tab screen.
    * **Settings.js** - Settings tab screen.


