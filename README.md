# Yemusic

## Overview

**Yemusic** is a project to build applications to help you listen to music on popular platforms.

## Design
https://www.figma.com/proto/L4vxZm6RnLLcbJvnYw00kw/YEM?page-id=0%3A1&node-id=156%3A566&viewport=321%2C48%2C0.13&scaling=min-zoom&hotspot-hints=0

## Languages and Frameworks

- [Typescript](https://www.typescriptlang.org/)
- [Nx](https://nx.dev/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [ReactJS](https://reactjs.org/)
- [Reactnative](https://reactnative.dev/)
- [Vcc-schema](https://github.com/gialynguyen/vcc-schema)
- ...


## Files/Directories

| Path                  | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| /.github/             | contains settings workflow                             |
| /.husky/              | contains settings **Git hooks**                        |
| /.vscode/             | contains settings for **Visual Studio Code** workspace |
| /apps/                | contains apps                                          |
| /libs/                | contains shared libs                                   |
| /tools/               | contains settings for **tools** of **nx** workspace    |
| /.editorconfig        | settings for **Editorconfig**                          |
| /.eslintrc.json       | settings for **ESLint**                                |
| /.prettierrc          | settings for **Prettierrc**                            |
| /babel.config.json    | settings for **Babel config**                          |
| /commitlint.config.js | settings for **Commitlint config**                     |
| /jest.config.js       | settings for **Jest config**                           |
| /jest.preset.js       | settings for **Jest preset**                           |
| /.package.json        | manifest file for Node.js projects                     |
| /tsconfig.base.json   | settings for **TypeScript**                            |
| /workspace.json       | settings for **Workspace**                             |

## Features

- [ ] Search tracks by name
- [ ] Player a track on application
- [ ] Sign up and sign in
- [ ] Download a track when signed in
- [ ] Create, edit or remove playlist when signed in
- [ ] Add or remove tracks to the playlist when signed in

## Getting Started

### Installation

1. Clone the repo.
  
    ```shell
    git clone https://github.com/VC-Team/yemusic.git
    ```

2. Install NPM packages

    ```shell
    npm install
    ```
3. Create `.env` file and add configuration variables

    ```env
    NX_DEV_SERVER_PORT=XXXXX
    NX_DEV_WEB_PORT=XXXXX
    ```

4. Run applications

    ```shell
    # Run server
    npm start server

    # Run web
    npm start web
    ```

## Contributors

- [Gialynguyen](https://github.com/gialynguyen)
