# Pivotal SSO and React Sample

## Setup 
1. Clone this repo

2. build the app:
```
npm run-script build     
```

3. [Create Service Instances](https://docs.pivotal.io/p-identity/1-11/manage-service-instances.html)

4. Push the app to cloud foundry with out starting it.
```
cf push --no-start 
```

5. Get the enviroment variables from the service:
```
cf env ssotestapp
```

6. Get the client_id, client_secret, auth_domain for the service 

System-Provided:
{<br>
&nbsp;"VCAP_SERVICES": {<br>
&nbsp;&nbsp;"p-identity": [<br>
&nbsp;&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;"binding_name": null,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"credentials": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"**auth_domain**": "https://sso-test-1.cfapps.io",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"**client_id**": "12e7121c-7a2a-4fc2-88ae-03fe96f91f6b",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"**client_secret**": "73a6806e-4dd0-4c41-bb15-28b35c76a478",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"grant_types": [<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"authorization_code"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"instance_name": "ssotest", ....<br> 

7. Create  a config file in the source diectory:
```
cd src
touch  config.json
``` 

8. Add the client_id, client_secret, auth_domain to the file:
```
{
    "clientId": "<client_id goes here>",
    "clientSecret": "<client_secret goes here>",
    "scopes": [
        "openid"
        ],
    "rejectUnauthorized": false,
    "wellknown" : "<auth_domain goes here>/.well-known/openid-configuration"
}
```

9. Rebuild the app:
```
npm run-script build      
```

10. re-push the app
```
cf push
```


***
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
