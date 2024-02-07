import * as S from './BoardCommentList.styles';

export default function BoardCommentListPage() {
  return (
    <S.Wrapper>
      <S.Comment>
        <S.CommentLeft>
          <S.CommentProfile src="/images/avatar.svg" alt="프로필 이미지" />
        </S.CommentLeft>
        <S.CommentRight>
          <S.CommentRightTop>
            <S.TopLeft>
              <S.ProfileName>김재희</S.ProfileName>
              <S.Stars>🌟</S.Stars>
            </S.TopLeft>
            <S.TopRight>
              <S.Pencil src="/images/gray-pencil.svg" alt="수정하기 버튼" />
              <S.Delete src="/images/delete.svg" alt="삭제하기 버튼" />
            </S.TopRight>
          </S.CommentRightTop>
          <S.CommentRightBody>
            진짜 유익하고 정말 필요한 정보인것 같아요 앞으로도 좋은 정보 부탁드립니다
          </S.CommentRightBody>
          <S.CommentRightFooter>2024.02.07</S.CommentRightFooter>
        </S.CommentRight>
      </S.Comment>
    </S.Wrapper>
  );
}
