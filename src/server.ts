import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const supergraphSdl = ''; // TODO!

const gateway = new ApolloGateway({
  supergraphSdl
});

const server = new ApolloServer({
  gateway,
});

// start the graphql server
server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
});
