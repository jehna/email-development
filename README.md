# Email Development
> A repository to help in email development

This is a repository that helps me do email development if I ever need to do it.
The grunt file starts a local email server and pushes a new email through a POP
connection every time the index.html file is chenged.

## Installing

Install by fetching `npm` dependencies:

```shell
npm install
```

That fetches all the needed dependencies from `npm` package manager.

### Email client configurations

You'll need to configure your email client. This is done by the following
settings:

```
Server type:    POP
Server address: 127.0.0.1
Username:       whatever
Password:       12345
Security:       None
Authentication: Password / no SSL
```

Enter those to your favorite emil client and you're ready to go! (note that
the `grunt` should be running when you're entering the credentials)

## Developing

Just fire up `grunt` and start developing!

```shell
grunt
```

This fires up a N3 email server and starts to watch the `index.html` file
changes.

## Features

So this project is just a simple custom POP email server
* Watches the `index.html` file
* When the file changes, pushes it as a message through local POP mail
  connection
* That's it!

## Contributing

This project is currently really barebone, but I pushed it to GitHub, because I
think it can some day benefit someone. If you'd like to develop the project
further, please just open an issue or fork and start hacking! Pull requests
are warmly welcome.

## Licensing

The code in this project is licensed under MIT license.
