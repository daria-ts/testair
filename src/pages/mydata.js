import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Tools"}}) {
      nodes {
        data {
          title
          subtitle
          link
          description
          contentType
          category
          feachered
          forUser
          free
          myChoise
        }
      }
    }
  }
`

export default ComponentName
