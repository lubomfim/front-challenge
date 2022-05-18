# Resale Product Information Management

Project developed for front-end challenge at Luxclusif.

[![Vercel](https://vercelbadge.vercel.app/api/lubomfim/front-challenge)](https://luxclusif.vercel.app/)

## 🎯 Project's goal

Build a simple Resale Product Information Management (PIM) Module. The purpose is to have a tool where an authenticated user (credentials can be hardcoded) can create, view and edit Luxclusif product catalog.
. You can check the design [here](https://xd.adobe.com/view/61dbec2c-0235-4a87-9fbb-87db24ebb0b2-3488/?fullscreen)
## 🌐 Live Version

[Access live project](https://luxclusif.vercel.app/)

## Run locally

```sh
git clone https://github.com/lubomfim/front-challenge.git
cd front-challenge
npm install && npm start
```

## Test project

```sh
//After cloning and installing the dependencies, you can run the command:
npm test

// If you want, you can get the coverage folder, run this command:
npm test -- --coverage
```
## 🚀 Technologies

- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Styled-Components](https://styled-components.com/)
- [Testing Library](https://testing-library.com/)

## Folder Structure

```
├── README.md
│
└── src
    ├── components/ # Dumb application components
    │
    ├── contexts/ # Access to shared states.
    │
    ├── constants/ # Application settings, styles and static data.
    │
    ├── pages/ #  Application pages
    │
    ├── routes.js # Routes configuration
    │
    ├── utils/ #  Utility functions
    │
```
