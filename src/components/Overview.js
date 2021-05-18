import React from "react";
import { useQuery } from "@apollo/react-hooks";

import OverviewGraph from "./OverviewGraph";
import OverviewModal from "./OverviewModal";
import Loading from "./Loading";
import { currencies, tokens } from "../assets/directory";

import graphql from "../graphql";

const Overview = props => {
  // Query subgraph
  var skip = 0;
  const { data, loading, error, fetchMore } = useQuery(graphql.viewNodes, {
    variables: {
      skip
    }
  });
  const fetchMoreAccounts = async () => {
    fetchMore({
      variables: { skip: data.accounts.length },
      updateQuery: (previousResult, { fetchMoreResult, queryVariables }) => {
        return {
          ...previousResult,
          accounts: [...previousResult.accounts, ...fetchMoreResult.accounts]
        };
      }
    });
  };
  if (data && data.hasOwnProperty("accounts")) {
    if (data.accounts.length % 1000 === 0) fetchMoreAccounts();
  }

  console.log(data);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return `Error! ${error}`;
  }

  function splitID(flowID) {
    let flowData = flowID.split("-");
    flowData = {
      source: flowData[0],
      target: flowData[1],
      token: flowData[2]
    };
    return flowData;
  }

  // Format data - nodes
  const nodes = data.accounts.map(account => {
    var streams = account.flowsOwned.length + account.flowsReceived.length;
    return {
      id: account.id,
      streams,
      color:
        streams <= 0
          ? "#000"
          : streams <= 3
          ? "#999"
          : streams <= 7
          ? "#ccc"
          : "#fff"
      /*balance: account.balance,
    group:
      (account.loansOwned.length > 0 ? 0x1 : 0x0) |
      (account.loansReceived.length > 0 ? 0x2 : 0x0),
    details: account*/
    };
  });

  // Format data - links
  const links = [].concat(
    ...data.accounts.map(account =>
      account.flowsReceived.map(flow => {
        var { source, target, token } = splitID(flow.id);
        var { color, curvature, rotation } = (() => {
          if (typeof tokens[currencies[props.network][token]] == "undefined") {
            return { color: "#000", curvature: 0, rotation: 0 };
          } else return tokens[currencies[props.network][token]];
        })();
        if (!nodes.some(e => e.id === source)) {
          nodes.push({ id: source, color: "#ff0000" });
        }
        return {
          source,
          target,
          flowRate: flow.flowRate,
          token,
          color,
          curvature,
          rotation
        };
      })
    )
  );
  console.log("LINKS!: ");
  console.log(links);

  // render
  return (
    <>
      <OverviewGraph
        data={{ nodes, links }}
        emitter={props.emitter}
        network={props.network}
        config={props.config}
        routing={props.routing}
      />
      <OverviewModal
        emitter={props.emitter}
        network={props.network}
        config={props.config}
        routing={props.routing}
      />
    </>
  );
};

export default Overview;
