import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD } from './BoardWrite.queries'; // export는 골라서 가져오기 가능
import BoardWriteUI from './BoardWrite.presenter'; // export deault로 한개만 가져오기

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerErrer, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError('');
    }
    if (event.target.value && password && title && contents) setIsActive(true);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError('');
    }
    if (writer && event.target.value && title && contents) setIsActive(true);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError('');
    }
    if (writer && password && event.target.value && contents) setIsActive(true);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError('');
    }
    if (writer && password && title && event.target.value) setIsActive(true);
  };

  const onClickSubmit = async (event) => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요!!');
    }

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요!!');
    }

    if (!title) {
      setTitleError('제목을 입력해주세요!!');
    }

    if (!contents) {
      setContentsError('내용을 입력해주세요!!');
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              // shorthand-property
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        alert('정상적으로 포스팅되었습니다.');
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <BoardWriteUI
        writerErrer={writerErrer}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        isActive={isActive}
      />
    </div>
  );
}
