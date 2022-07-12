import { gql } from "@apollo/client";

export const GET_TRENDING_COLLECTIONS = gql`
  query TrendingCollections {
    trendingCollections(orderBy: SALES, orderDirection: DESC) {
      edges {
        node {
          address
          ... on ERC721Contract {
            name
            stats {
              totalSales
              average
              ceiling
              floor
              volume
            }
            symbol
          }
        }
      }
    }
  }
`;
