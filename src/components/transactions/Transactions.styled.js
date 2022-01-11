import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  width: 100%;
  border: none;
  margin-bottom: 20px;
`;

export const TransactionTheadTh = styled.th`
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
  border: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
  &: first-child {
    border-left: none;
  }
  :last-child {
    border-right: none;
  }
`;

export const TransactionTbodyTd = styled.td`
  text-align: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
  &: first-child {
    border-left: none;
  }
  :last-child {
    border-right: none;
  }
`;
export const TransactionTbodyTr = styled.tr`
  &:nth-child(even) {
    background: #f3f3f3;
  }
`;
