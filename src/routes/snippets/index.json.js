import gql from 'graphql-tag'
import { client } from '../../apollo-client'

export async function get(req, res) {
  const response = await client(req).query({
    query: gql`
      query {
        snippets {
          html
          metadata {
            title
            slug
            tags
            image
          }
        }
      }
    `,
  })

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response.data))
}
