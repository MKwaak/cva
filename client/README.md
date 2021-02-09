# Client Application

Project:

- [Next JS](https://nextjs.org/) - A React framework
- [Typescript](https://www.typescriptlang.org/) - Javascript that scales
- [Material UI](https://material-ui.com/) - React components for faster and easier web development
- [Docker](https://www.docker.com/) - Only used for spinning up the articles

## Development

To start developing your application run `yarn install` and then `yarn dev`. This starts the development server on `http://localhost:3000`.

Visit `http://localhost:3000` to view your application.

### Member subscription

In order for the subscription form to work you will need to start the back-end server for this application. See `./src/server/README.md` for more information.

### Articles page

Weaviate is needed for the Article page.

To start a weaviate navigate to **the root of this project** and run docker compose with the relevant services:

```bash
# Install the docker containers
$ docker build ./weaviate --no-cache

# then run the containers necessary for a Weaviate
$ docker-compose up contextionary esvector etcd weaviate
```

Now if you open `http://localhost:3000/articles` you are able to see the articles rendered in the front-end.

## SSR

T.b.d.
