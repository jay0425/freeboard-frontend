import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1200px;

  /* position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const Line = styled.div`
  width: 1199px;
  height: 1px;

  border: 1px solid #bdbdbd;

  margin-bottom: 40px;
`;

export const CommentWriteWrapper = styled.div``;

export const CommentWriteTop = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;

export const CommentPencil = styled.img`
  width: 24px;
  height: 24px;
`;

export const CommentTitle = styled.div`
  color: #000;
  font-family: 'Noto Sans CJK KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommentWriteInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentWriter = styled.input`
  box-sizing: border-box;

  width: 180px;
  height: 52px;
  padding: 14px 0 14px 20px;
  margin-right: 24px;

  color: #828282;
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  font-weight: 500;

  border: 1px solid #bdbdbd;
`;

export const CommentPassword = styled.input`
  box-sizing: border-box;

  width: 180px;
  height: 52px;
  padding: 14px 0 14px 20px;
  margin-right: 24px;

  color: #828282;
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  font-weight: 500;

  border: 1px solid #bdbdbd;
`;

export const CommentStar = styled.div``;

export const CommentBottom = styled.div`
  border: 1px solid #bdbdbd;
  width: 1200px;
  margin-bottom: 31px;
`;

export const CommentText = styled.textarea`
  box-sizing: border-box;

  width: 1200px;
  height: 108px;

  padding: 20px 0 0 20px;

  resize: none;

  color: #bdbdbd;
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  border: none;
`;

export const CommentTextBottom = styled.div`
  width: 1200px;
  height: 52px;

  border-top: 1px solid #bdbdbd;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentLength = styled.div`
  margin-left: 20px;
`;

export const CommentTextButton = styled.button`
  display: flex;
  width: 91px;
  height: 52px;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;

  background-color: #000;
  color: #fff;

  cursor: pointer;
`;
