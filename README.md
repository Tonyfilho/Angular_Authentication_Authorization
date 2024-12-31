## What we are going create
Login, register, about, header, information, main and foot  components.
Create a Server with methods Register, Login, GetUser and a signal variable currentUserSig to salve data after register or login or logout.
Created Register.
Create a Login.
Save token in LocalStorage, and set Signal Var with user.
Hiden Link in Header.html with Signal Var and create a Logout Method in this component.
Render data from Signal Var in information.html.
Use the method getUser in App Component.
Create a Auth Interceptor e call him in the ApplicationConfig into provideHttpClient().
In AppComponent we must set the currentUserSig null.



# Auth



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

And API (https://realworld-docs.netlify.app/)
