# Notes:
- Files and folders stored outside of **public** folder are not made accessible by NextJS. Visitors cannot load files from outside the public folder.
- Create a **components** folder to store all your components.
- **styles** folder stores all the css related files. This folder contains **/styles/globals.css** which is hooked to the app from **/pages/_app.js** file.
-  **/pages/_app.js** file is used for having a layout purposes. You can wrap the **Component** component there to create your own layout for every page.
- Check **/Components/ui/Button.js** component for multi purpose usage.

Keywords:
- **Next-Adding-Head-Tag-To-Project-For-SEO**, the meta data of the head tag which can be injected into the page files for SEO purpose.
- **Next-Adding-Head-Tag-To-Root-Page-For-Every-Page-SEO**, the meta data inside '_app.js' file will be displayed in every page as '_app.js' is the root file of project.
- **Next-document-js-file**, this file does not exist by default but it will be taken into consideration when it is created along side with "_app.js". The file should be named as "_document.js". You can create the whole HTML structure with this element. For example you may wanna create overlay div which can be used to port some of the components.
- **Next-Image-Optimization-Fast-Loading**, use Image component for that. This method optimizes the image sizes which will make the app much faster. We can delete the cache and double check this from the "Network" tab of the Dev Tools.