import React from "react";
import { useQuery } from "@apollo/client";

import { GET_TRENDING_COLLECTIONS } from "../../../graphql/queries/trending-collections";

const TrendingCollections = () => {
  const { loading, error, data } = useQuery(GET_TRENDING_COLLECTIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("data", data);

  return <p>Inside Trending Collections</p>;
};

export default TrendingCollections;
