# LEARNING TYPESCRIPT

## SETTING DEVELOPER ENVIROMENT

**Run Command in terminal(in directory)**

```
npm install typescript
```

### OR

**Run Command in terminal(for Global)**

```
npm i -g typescript
```

**Now check the version of TypeScript installed**

```
npm ls typescript
```

**Note: Make sure you are in the root directory of your project folder**

## USE OF TypeScript COMPILER

```
npx tsc {YOUR_TS_FILE_NAME.ts}
```

**This will compile your TypeScript Code and will generate a .js file**

### OR

```
npx tsc
```

**This will compile all the TS files in the folder**

## Configure TypeScript Compiler

```
npx tsc --init
```

**This Creates a tsconfig.json file which contains all the settings of TS compiler(see notes.txt for more about tsconfig.json)**
