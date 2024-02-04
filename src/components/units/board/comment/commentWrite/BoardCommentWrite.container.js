import * as S from './BoardCommentWrite.styles';

export default function BoardCommentWritePage() {
  return (
    <S.Wrapper>
      <S.Line></S.Line>
      <S.CommentWriteWrapper>
        <S.CommentWriteTop>
          <S.CommentPencil src="/images/yellow-pencil.svg" alt="노란 연필 그림" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentWriteTop>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}
