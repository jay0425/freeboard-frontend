import { gql, useMutation, useQuery } from '@apollo/client';
import * as S from './BoardList.styles';
import { useRouter } from 'next/router';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
      updatedAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);
  console.log(data?.fetchBoards);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        boardId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };

  const onClickMoveToDetail = (event) => {
    router.push(`boards/${event.target.id}`);
  };

  return (
    <>
      <S.Wrapper>
        <S.BoardsUl>
          <S.HeadLi>ID</S.HeadLi>
          <S.HeadLi>제목</S.HeadLi>
          <S.HeadLi>작성자</S.HeadLi>
          <S.HeadLi>날짜</S.HeadLi>
          {data?.fetchBoards.map((el) => (
            <S.FectchBoardsMap id={el._id} key={el._id} onClick={onClickMoveToDetail}>
              <S.BodyLi>{String(el._id).slice(-4).toUpperCase()}</S.BodyLi>
              <S.BodyLi>{el.title}</S.BodyLi>
              <S.BodyLi>{el.writer}</S.BodyLi>
              <S.BodyLi>{el.createdAt}</S.BodyLi>
            </S.FectchBoardsMap>
          ))}
        </S.BoardsUl>
        <S.WriteButton onClick={onClickMoveToBoardNew}>
          <S.Pencil src="/images/pencil.svg" alt="연필 이미지" />
          게시물 등록하기
        </S.WriteButton>
      </S.Wrapper>
    </>
  );
}
