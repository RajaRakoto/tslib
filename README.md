### 📌 Use

```bash
git clone --depth 1 https://github.com/RajaRakoto/tslib
```

### 📌 Features

- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon
- Task runner with grunt

### 📌 Scripts

- Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

```bash
npm run start:dev
```

---

- Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

```bash
npm run start
```

---

- Builds the app at `build`, cleaning the folder first.

```bash
npm run build
```

---

- Runs the `jest` tests once.

```bash
npm run test
```

---

- Run the `jest` tests in watch mode, waiting for file changes.

```bash
npm run test:watch
```

---

- Format your code.

```bash
npm run prettier
```

---

- Format your code in watch mode, waiting for file changes.

```bash
npm run prettier:watch
```

---

- Check your project with eslint.

```bash
npm run check
```
