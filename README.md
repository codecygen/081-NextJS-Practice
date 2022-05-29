# Notes:
- Files and folders stored outside of **public** folder are not made accessible by NextJS. Visitors cannot load files from outside the public folder.
- Create a **components** folder to store all your components.
- **styles** folder stores all the css related files. This folder contains **/styles/globals.css** which is hooked to the app from **/pages/_app.js** file.
-  **/pages/_app.js** file is used for having a layout purposes. You can wrap the **Component** component there to create your own layout for every page.