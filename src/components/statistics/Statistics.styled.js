import styled from "@emotion/styled";

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 24px;
  width: 200px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-align: center;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  padding-bottom: 24px;
  margin: 20px 0 30px 20px;
  list-style-type: none;
`;

export const StatData = styled.span`
  margin-bottom: 10px;
`;
export const StatTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
