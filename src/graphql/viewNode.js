import gql from "graphql-tag";

export default gql`
  query nodes($address: String) {
    accounts(where: { id: $address }) {
      flowsOwned(first: 1000) {
        id
        sum
        flowRate
        lastUpdate
        token
        owner
        recipient
        events
      }
      flowsReceived(first: 1000) {
        id
        sum
        flowRate
        lastUpdate
        token
        owner
        recipient
        events
      }
      upgradeEvents {
        id
        account
        transaction
        token
        amount
      }
      downgradeEvents {
        id
        account
        transaction
        token
        amount
      }
    }
  }
`;
