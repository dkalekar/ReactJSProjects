import React from "react";
import { useParams } from "react-router-dom";
import { useGetExchangesQuery } from "../services/CryptoAPI";

const Exchanges = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetExchangesQuery(coinId);

  console.log(coinId, data);
  return <div>Exchanges</div>;
};

export default Exchanges;
