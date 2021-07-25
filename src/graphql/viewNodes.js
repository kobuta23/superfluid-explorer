import gql from "graphql-tag";

export default gql`
  query nodes($skip: Int, $skip2: Int) {
    accounts(first: 500, skip: $skip) {
      id
      flowsOwned(first: 500, skip: $skip2) {
        id
        flowRate
      }
      flowsReceived {
        id
        flowRate
      }
    }
  }
`;
