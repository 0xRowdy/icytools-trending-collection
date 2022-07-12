import React from "react";
import { useQuery } from "@apollo/client";

import {
  GET_TRENDING_COLLECTIONS,
  TrendingCollectionsData,
} from "../../../graphql/queries/trending-collections";

const TrendingCollections = () => {
  const { loading, error, data } = useQuery<TrendingCollectionsData>(
    GET_TRENDING_COLLECTIONS
  );
  // Loading Component
  if (loading) return <p>Loading...</p>;
  // Error Component with message
  if (error) return <p>Error :{error.message}</p>;

  if (data) {
    const items = data.trendingCollections.edges;
    return (
      <ul>
        {items.map((item) => {
          return <li key={item.node.address}>{item.node.name}</li>;
        })}
      </ul>
    );
  }
  return <p>No data, error, or loading returned</p>;
};

export default TrendingCollections;
