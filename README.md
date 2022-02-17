<h1 align="center">
  <img src="images/readMeLogo.png" height="200px" alt="Gist logo" />
</h1>

Gist is a web application that lets you create lists of the games you own on the popular gaming platform, [Steam](https://store.steampowered.com/).

## Screenshots

<p align="center">
  <img src="images/myListsView.png" width="500" alt="My Lists view" />
</p>

<p align="center">
  <img src="images/listView.png" width="500" alt="List view" />
</p>

<p align="center">
  <img src="images/listEditorView.png" width="500" alt="List Editor view" />
</p>

<p align="center">
  <img src="images/listEditorViewModal.png" width="500" alt="Modal" />
</p>

## Getting started

### Prerequisites

You will need a few extra things for the app to work. If you do not have any of the following dependencies installed/available, please follow the links provided and install/obtain them before proceeding with *Installation*.

- **MongoDB** - follow the installation instructions [here](https://docs.mongodb.com/manual/installation/) for your platform of choice (the Community Edition will suffice). If you are using WSL2,  refer to the *Install MongoDB* section of [this article](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database).
- **Steam API key** - assuming you have a Steam account, you can obtain a key [here](https://steamcommunity.com/dev/apikey).
- **Steam user ID** - the easiest way to find this out is to log in to Steam in a browser, go to your profile page (by clicking your username), and check the URL. It should look something like *https://steamcommunity.com/profiles/*****************/*, where the asterisks represent your unique ID.

### Installation

1. Clone this repo and enter.

```bash
git clone https://github.com/Zomino/gist-ts.git
cd gist
```

2. Enter *server* directory and install dependencies.

```bash
cd server
npm install
```

3. Start MongoDB. The command will differ depending on the platform, so again please refer to the [documentation](https://docs.mongodb.com/manual/installation/) for the correct command. WSL2 users see [here](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database).

4. At the top level of the *server* directory, create a new file with filename *.env*, and copy and paste the below code into it, replacing the blocks demarcated by square brackets *([])* with your information. Make sure to remove the brackets.

```
API_KEY=[replace with your API key]                      
API_USER_ID=[replace with your user ID]                      
```

5. If you would like to customise any of the following environment variables, you may do so in the *.env* file.

```
SERVER_PORT       // defaults to 3001
DB_PORT           // defaults to 27017
DB_NAME           // defaults to 'gist'
```

6. Start development server.

```bash
npm start
```

7. Move to *client* directory and install dependencies.

```bash
cd ../client
npm install
```

4. Start development build.

```bash
npm start
```
