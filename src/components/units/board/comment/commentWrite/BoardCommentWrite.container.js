import { gql, useMutation } from '@apollo/client';
import * as S from './BoardCommentWrite.styles';
import { useRouter } from 'next/router';
import { useState } from 'react';

// export const CREATE_BOARD_COMMENT = gql`
//   mutation {
//     createBoardComment(
//       boardId: "65c0ba485d6eaa0029f7dcaa"
//       createBoardCommentInput: { writer: "철수", password: "123", contents: "룰루랄라", rating: 1 }
//     ) {
//       _id
//       writer
//       contents
//     }
//   }
// `;

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
    }
  }
`;

export default function BoardCommentWritePage() {
  const router = useRouter();
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }

      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0,
          },
          boardId: router.query.boardId,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <S.Wrapper>
      <S.Line></S.Line>
      <S.CommentWriteWrapper>
        <S.CommentWriteTop>
          <S.CommentPencil src="/images/yellow-pencil.svg" alt="노란 연필 그림" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentWriteTop>
        <S.CommentWriteInfo>
          <S.CommentWriter placeholder="작성자" onChange={onChangeWriter} />
          <S.CommentPassword placeholder="비밀번호" onChange={onChangePassword} />
          <S.CommentStar>🌟</S.CommentStar>
        </S.CommentWriteInfo>
        <S.CommentBottom>
          <S.CommentText
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={onChangeContents}
          />
          <S.CommentTextBottom>
            <S.CommentLength>{contents.length}/100</S.CommentLength>
            <S.CommentTextButton onClick={onClickWrite}>등록하기</S.CommentTextButton>
          </S.CommentTextBottom>
        </S.CommentBottom>
      </S.CommentWriteWrapper>
    </S.Wrapper>
  );
}
