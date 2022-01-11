import styled from "@emotion/styled";

export const FriendsList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

export const FriendsItem = styled.li`
  flex-direction: column;
  padding-top: 24px;
  display: flex;
  justify-content: space-around;
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
export const FriendsStatus = styled.span`
  margin-bottom: 10px;
`;
export const FriendsAvatar = styled.img`
  width: 150px;
  margin: auto;
`;
export const StatusGreen = styled.div`
  margin-left: 20px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: rgba(11, 192, 72, 0.568);
`;
export const StatusRed = styled.div`
  margin-left: 20px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: rgba(218, 18, 18, 0.753);
`;
