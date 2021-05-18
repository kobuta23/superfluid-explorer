import gql from "graphql-tag";

/*      flowsOwned(first: 1000) {
        id
        sum
        flowRate
        lastUpdate
        token
        owner
        recipient
        events
      }*/

export default gql`
  query nodes($address: String) {
    accounts(where: { id: $address }) {
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
