# apollo-client-browser
[![npm](https://img.shields.io/npm/v/apollo-client-browser.svg) ![npm](https://img.shields.io/npm/dm/apollo-client-browser.svg)](https://www.npmjs.com/package/apollo-client-browser)

A browser-ready version of apollo-client: [demo](https://jsfiddle.net/Akryum/oyejk2qL/)

```html
<script src="https://unpkg.com/apollo-client-browser@1.7.0"></script>

<script>
const apolloClient = new Apollo.lib.ApolloClient({
  networkInterface: Apollo.lib.createNetworkInterface({
    // Edit on https://launchpad.graphql.com/nnnwvmq07
    uri: 'https://nnnwvmq07.lp.gql.zone/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
})

const POSTS_QUERY = Apollo.gql`
{
  posts {
    id
    title
    author {
      id
      name
    }
  }
}
`
</script>
```

See [apollo-client](https://github.com/apollographql/apollo-client) for more info.
