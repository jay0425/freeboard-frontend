import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1200px;

  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;

export const CommentPencil = styled.img`
  width: 24px;
  height: 24px;
`;

export const CommentTitle = styled.div`
  color: var(--Black, #000);
  font-family: 'Noto Sans CJK KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
