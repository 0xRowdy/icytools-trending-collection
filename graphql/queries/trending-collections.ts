import { gql } from "@apollo/client";

// type ContractConnection = {
//   pageInfo: PageInfo
//   edges: ContractEdge[]
// }

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: String;
  endCursor: String;
};

// type ContractEdge = {
//   node: Contract
//   cursor: String
// }
// interface Contract {
//   address: string
//   isVerified: boolean
//   tokenStandard: TokenStandard
//   logs: LogConnection
//   token: Token
//   tokens: TokenConnection
//   attributes: ContractAttribute[]
// }

type ContractAttribute = {
  name: string;
  value: string;
  valueCount: number;
  rarity: number;
};

enum TokenStandard {
  ERC721,
  ERC1155,
}
export interface TrendingCollectionsData {
  trendingCollections: {
    edges: {
      node: {
        address: string;
        name: string;
        stats: {
          totalSales: number;
          average: number;
          ceiling: number;
          floor: number;
          volume: number;
        };
        symbol: string;
      };
    }[];
  };
}

export const GET_TRENDING_COLLECTIONS = gql`
  query GetTrendingCollections {
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
