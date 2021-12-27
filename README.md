## Class Name Helper

Package to manage class names for css-in-js

![npm](https://img.shields.io/npm/v/@mertsolak/class-name-helper)
![license](https://img.shields.io/npm/l/@mertsolak/class-name-helper)
![size](https://img.shields.io/bundlephobia/min/@mertsolak/class-name-helper)
![issue](https://img.shields.io/github/issues/mert-solak/class-name-helper)

## Installation

Use node package manager to install @mertsolak/class-name-helper.

```bash
npm i @mertsolak/class-name-helper
```

## Basic Usage

```typescript
const App = () => {
  import { mergeClassNames, shouldMergeClassNames } from '@mertsolak/class-name-helper';
  import styles from './App.module.scss';

  const shouldMerge = true;

  return (
    <div>
      <div className={mergeClassNames(styles.container, styles.hidden)}></div>
      <div className={shouldMergeClassNames(shouldMerge, 1, styles.container, styles.hidden)}></div>
    </div>
  );
};
```
