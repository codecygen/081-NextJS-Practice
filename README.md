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
- **Next-Image-Optimization-Fast-Loading**, Use Image component for that. To understand what image size to set, examine the CSS code and give the expected values. The image size added in the component has nothing to do with the CSS code. It is the image size that will fetched to the client side. Image component optimizes the image sizes which will make the app much faster. We can delete the cache and double check this from the "Network" tab of the Dev Tools. These images are regenerated with the optimized size when requested by the app and then stored in the server for future requests. So they will be served upon new requests. These images also have lazy loading feature, meaning that they will only be downloaded whenever needed which makes the app less lighter. There are other things to consider for Image component. You should definitely check them out to configure your images to suit your need.
- **Next-API-Routes**



# Common HTTP Status Codes
- **Status Code 200** – This is the standard “OK” status code for a successful HTTP request. The response that is returned is dependent on the request. For example, for a GET request, the response will be included in the message body. For a PUT/POST request, the response will include the resource that contains the result of the action.
- **Status Code 201** – This is the status code that confirms that the request was successful and, as a result, a new resource was created. Typically, this is the status code that is sent after a POST/PUT request.
- **Status Code 204** – This status code confirms that the server has fulfilled the request but does not need to return information. Examples of this status code include delete requests or if a request was sent via a form and the response should not cause the form to be refreshed or for a new page to load.
- **Status Code 304** – The is status code used for browser caching. If the response has not been modified, the client/user can continue to use the same response/cached version. For example, a browser can request if a resource has been modified since a specific time. If it hasn’t, the status code 304 is sent. If it has been modified, a status code 200 is sent, along with the resource.
- **Status Code 400** – The server cannot understand and process a request due to a client error. Missing data, domain validation, and invalid formatting are some examples that cause the status code 400 to be sent.
- **Status Code 401** – This status code request occurs when authentication is required but has failed or not been provided.
- **Status Code 403** – Very similar to status code 401, a status code 403 happens when a valid request was sent, but the server refuses to accept it. This happens if a client/user requires the necessary permission or they may need an account to access the resource. Unlike a status code 401, authentication will not apply here.
- **Status Code 404** – The most common status code the average user will see. A status code 404 occurs when the request is valid, but the resource cannot be found on the server. Even though these are grouped in the Client Errors “bucket,” they are often due to improper URL redirection.
- **Status Code 409** – A status code 409 is sent when a request conflicts with the current state of the resource. This is usually an issue with simultaneous updates, or versions, that conflict with one another.
- **Status Code 410** – Resource requested is no longer available and will not be available again. Learn about network error 410.
- **Status Code 500** – Another one of the more commonly seen status codes by users, the 500 series codes are similar to the 400 series codes in that they are true error codes. The status code 500 happens when the server cannot fulfill a request due to an unexpected issue. Web developers typically have to comb through the server logs to determine where the exact issue is coming from.