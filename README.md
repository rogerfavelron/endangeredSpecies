# Endangered Species

Live link: https://rogerfavelron.github.io/endangeredSpecies/ 

## Cool Features

- Create spans dynamically to highlight text
- Set background depending on the animal


## Tech Stack

- React
- Styled Components

## Folder Structure

##### Components

In this folder you can find presentational components. It means that these components don't care about global state. They may have their own state or props. They're about how things seem on a page.

In this folder we have our components. These components are:

- Animal
- Controller
- Threat
- Sidebar

##### Other details
I've created a db.js file for animal details. Some text needs to be highlighted in Threat component,
so I've stored text needs to be highlighted in this form : !textNeedsToBeHighlighted* . 
In the utils/TextColors.js, I've created spans , some took highlight class, some didn't.

Note: This project is inspired from http://species-in-pieces.com/. Image and data rights doesn't belong to me.

## Installation

```sh
git clone
cd endangeredSpecies
npm install
npm start
```
