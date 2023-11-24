import * as S from './BoardList.styles';

export default function BoardsUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.BoardsUl>
          <S.HeadLi>ID</S.HeadLi>
          <S.HeadLi>제목</S.HeadLi>
          <S.HeadLi>작성자</S.HeadLi>
          <S.HeadLi>날짜</S.HeadLi>
          {props.data?.fetchBoards.map((el) => (
            <S.FectchBoardsMap id={el._id} key={el._id} onClick={props.onClickMoveToDetail}>
              <S.BodyLi>{String(el._id).slice(-4).toUpperCase()}</S.BodyLi>
              <S.BodyLi>{el.title}</S.BodyLi>
              <S.BodyLi>{el.writer}</S.BodyLi>
              <S.BodyLi>{el.createdAt}</S.BodyLi>
            </S.FectchBoardsMap>
          ))}
        </S.BoardsUl>
        <S.WriteButton onClick={props.onClickMoveToBoardNew}>
          <S.Pencil src="/images/pencil.svg" alt="연필 이미지" />
          게시물 등록하기
        </S.WriteButton>
      </S.Wrapper>
    </>
  );
}
