import React from "react";
import { useQuery } from "react-apollo";

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id },
    pollInterval: 500,
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p></p>;
  } else {
    return children({ data });
  }
};

export default Query;
