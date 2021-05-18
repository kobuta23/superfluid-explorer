import gql from "graphql-tag";

export default gql`
  query nodes($address: String, $skip: Int) {
    accounts(where: { id: $address }) {
      flowsOwned(first: 1000, skip: $skip) {
        id
        flowRate
      }
    }
  }
`;
