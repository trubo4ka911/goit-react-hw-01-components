import PropTypes from "prop-types";
import { TransactionTable, TransactionTheadTh } from "./Transactions.styled";
import TransactionsItem from "./TransactionItem";

const TransactionList = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTheadTh>Type</TransactionTheadTh>
          <TransactionTheadTh>Amount</TransactionTheadTh>
          <TransactionTheadTh>Currency</TransactionTheadTh>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionsItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};
TransactionList.propTypes = {
  items: PropTypes.array,
};
export default TransactionList;
