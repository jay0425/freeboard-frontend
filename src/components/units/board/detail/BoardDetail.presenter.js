import { getDate } from '../../../../../src/commons/libraries/utils';
import * as S from './BoardDetail.styles';

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.svg" alt="프로필 이미지"></S.Avatar>
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickBoards}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button id={props.data?.fetchBoard?._id} onClick={props.onClickDelete}>
          삭제하기
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
