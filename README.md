# Welcome to Poost-It App! :grinning:


### Installation:

To run this project, you will need to have node installed. After having cloned the code, use the following command to run it on http://localhost:3000

*npm start*


### Technical decisions:

- I used a custom hook (useLocalStorage) to make it easier to connect the components state and the localStorage.
- The Workspace and the Trashbin are separated from the rest of the components in a folder called "pages" so they could be easier to identify.
- Since it is a small App, I decided to code all the CSS in a common file instead of writing it in each component.
- I used smart and dumb components pattern because some components are display only (the post it lists) and they do not need to be connected to the localStorage.


### Some extra functionalities:

I decided to add a couple extra functionalities to upgrade the UX such as:
- You can change your Post It color to help you prioritize, categorize or just to have fun!
- An alert will pop up when deleting a Post It from the trash bin (permanently) asking if you are sure, just to prevent any mistake!
- I added a button that deletes every Post It in the Trash bin, so you can save your valuable time!

### Dependencies:

This project uses three (3) dependencies which were added for the following reasons:
- **React Icon:** For the trash bin and the recycle icons
- **UUID generator:** To generate an unique ID for every Post-It that is created.
- **Classnames:** To apply conditional CSS for the Post-It color change.


## Hope you enjoy it!
