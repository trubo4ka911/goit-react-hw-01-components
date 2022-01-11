import PropTypes from "prop-types";
import { TransactionTbodyTd, TransactionTbodyTr } from "./Transactions.styled";

const TransactionsItem = ({ id, type, amount, currency }) => {
  return (
    <TransactionTbodyTr key={id}>
      <TransactionTbodyTd>{type}</TransactionTbodyTd>
      <TransactionTbodyTd>{amount}</TransactionTbodyTd>
      <TransactionTbodyTd>{currency}</TransactionTbodyTd>
    </TransactionTbodyTr>
  );
};
TransactionsItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default TransactionsItem;
