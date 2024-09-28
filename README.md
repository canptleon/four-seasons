# FourSeasons Library

**FourSeasons** is a simple React component library that animates your application with seasonal themes: **Winter**, **Summer**, **Autumn**, and **Spring**. It provides a beautiful, dynamic way to enhance your UI based on the time of year.

## Features

- 4 seasonal animations: **Winter**, **Summer**, **Autumn**, and **Spring**.
- Fully supported in **TypeScript**.
- React-compatible with **React** and **React-DOM**.
- Easy to integrate with minimal setup.
- Comes with customizable seasonal images.

## Installation

To install the FourSeasons library, you can use either **npm** or **yarn**:

```bash
npm install four-seasons
```

or

```bash
yarn add four-seasons
```

## Usage

Once installed, you can import the **FourSeasons** component and use it to wrap your own components. Here’s an example of how you can use it:

```tsx
import React from 'react';
import { FourSeasons } from 'four-seasons';
import 'four-seasons/style.css'; // Import the required CSS

const App = () => {
  return (
    <FourSeasons season="Summer">
      <h1>Welcome to the Summer!</h1>
      {/* Your components go here */}
    </FourSeasons>
  );
};

export default App;
```

## Supported Props

- `season`: A string that sets the current season animation. The possible values are:
  - `"Winter"`
  - `"Summer"`
  - `"Autumn"`
  - `"Spring"`


## Example

```tsx
  <FourSeasons season="Winter">
    <p>It’s snowing!</p>
  </FourSeasons>
```

## Seasonal Animations

Each season is displayed with a unique animation. Below are the examples:

### Winter (Background is not included)
![Winter Season](https://github.com/canptleon/four-seasons/raw/main/src/photos/winter.gif)

### Summer (Background included)
![Summer Season](https://github.com/canptleon/four-seasons/blob/main/src/photos/summer.gif)

### Autumn (Background is not included)
![Autumn Season](https://github.com/canptleon/four-seasons/blob/main/src/photos/autumn.gif)

### Spring (Background is not included)
![Spring Season](https://github.com/canptleon/four-seasons/blob/main/src/photos/spring.gif)

## Importing Styles
You will need to import the provided CSS file for the animations to work. Add the following line to your main CSS or inside your main 

App component:
```tsx
import 'four-seasons/style.css';
```

## Requirements

- **React** (17.x or later)
- **React-DOM** (17.x or later)
- **TypeScript** support for better development experience
- **Images**: The library includes default images for each season:
  - **Winter**: Snowy landscape
  - **Summer**: Bright sunny day
  - **Autumn**: Falling leaves
  - **Spring**: Blossoming flowers


## License

This project is licensed under the **MIT License**.
