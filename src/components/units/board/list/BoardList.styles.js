import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BoardsUl = styled.ul`
  width: 1200px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const HeadLi = styled.li`
  margin: 10px;

  list-style: none;
  text-align: center;

  display: inline-block;
  align-items: flex-start;

  width: 23.3%;

  padding: 13px 0px 12px 0px;
`;

export const FectchBoardsMap = styled.div`
  color: #4f4f4f;
  cursor: pointer;

  border-top: 1px solid #bdbdbd;

  padding: 14px 0px;
`;

export const BodyLi = styled.li`
  margin: 10px;

  list-style: none;
  text-align: center;

  display: inline-block;

  width: 23.3%;

  pointer-events: none;
`;

export const WriteButton = styled.div`
  color: #000;

  float: right;
  border: 1px solid #f2f2f2;
  border-radius: 10px;

  display: flex;
  align-items: center;

  gap: 8px;

  margin-top: 40px;
  padding: 14px 16px;

  cursor: pointer;
`;

export const Pencil = styled.img`
  width: 24px;
  height: 24px;
`;
