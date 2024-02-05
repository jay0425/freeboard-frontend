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
        <S.CommentWriteInfo>
          <S.CommentWriter placeholder="작성자" />
          <S.CommentPassword placeholder="비밀번호" />
          <S.CommentStar>🌟</S.CommentStar>
        </S.CommentWriteInfo>
        <S.CommentBottom>
          <S.CommentText
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.CommentTextBottom>
            <S.CommentLength>0/100</S.CommentLength>
            <S.CommentTextButton>등록하기</S.CommentTextButton>
          </S.CommentTextBottom>
        </S.CommentBottom>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}
