import { useState } from 'react';
import {
  BoardContainer,
  BoardSubject,
  InfoWrapper,
  WriterWrapper,
  BoardWriter,
  BoardWriterInput,
  WriterPasswordWrapper,
  BoardPassword,
  BoardPasswordInput,
  WriterWrapperTop,
  Star,
  TitleWrapper,
  Title,
  TitleInput,
  TextWrapper,
  Text,
  TextArea,
  AddressWrapper,
  Address,
  ZipcodeWrapper,
  ZipcodeInput,
  ZipcodeButton,
  AddressTopInput,
  AddressbottomInput,
  AddressInputWrapper,
  ImageWrapper,
  AttachImage,
  UploadWrapper,
  UploadBox,
  Plus,
  Upload,
  MainSettingsWrapper,
  MainSettings,
  MainSettingsRadioWrapper,
  RadioWrapper,
  MainSettingsRadio,
  MainSettingsRadioLabel,
  RegistrationButton,
  Error,
} from '../../../styles/new';

export default function New() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [writerErrer, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [textError, setTextError] = useState('');

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError('');
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError('');
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError('');
    }
  }

  function onChangeText(event) {
    setText(event.target.value);
    if (event.target.value) {
      setTextError('');
    }
  }

  function onClickPost(event) {
    if (!writer) {
      setWriterError('작성자를 입력해주세요!!');
    }

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요!!');
    }

    if (!title) {
      setTitleError('제목을 입력해주세요!!');
    }

    if (!text) {
      setTextError('내용을 입력해주세요!!');
    }

    if (writer && password && title && text) {
      alert('정상적으로 포스팅되었습니다.');
    }
  }

  return (
    <div>
      <BoardContainer>
        <BoardSubject>게시물 등록</BoardSubject>

        <InfoWrapper>
          <WriterWrapper>
            <WriterWrapperTop>
              <BoardWriter for="boardWriter">작성자</BoardWriter>
              <Star>*</Star>
            </WriterWrapperTop>
            <BoardWriterInput
              type="text"
              id="boardWriter"
              placeholder="이름을 적어 주세요."
              onChange={onChangeWriter}
            />
            <Error>{writerErrer}</Error>
          </WriterWrapper>
          <WriterPasswordWrapper>
            <BoardPassword for="boardPassword">비밀번호</BoardPassword>
            <BoardPasswordInput
              type="password"
              id="boardPassword"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
            />
            <Error>{passwordError}</Error>
          </WriterPasswordWrapper>
        </InfoWrapper>

        <TitleWrapper>
          <Title for="title">제목</Title>
          <TitleInput id="title" type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
          <Error>{titleError}</Error>
        </TitleWrapper>

        <TextWrapper>
          <Text for="text">내용</Text>
          <TextArea id="text" type="text" placeholder="내용을 작성해주세요." onChange={onChangeText} />
          <Error>{textError}</Error>
        </TextWrapper>

        <AddressWrapper>
          <Address>주소</Address>
          <ZipcodeWrapper>
            <ZipcodeInput placeholder="07250" />
            <ZipcodeButton>우편번호 검색</ZipcodeButton>
          </ZipcodeWrapper>
          <AddressInputWrapper>
            <AddressTopInput />
            <AddressbottomInput />
          </AddressInputWrapper>
        </AddressWrapper>

        <ImageWrapper>
          <AttachImage>사진 첨부</AttachImage>
          <UploadWrapper>
            <UploadBox>
              <Plus>+</Plus>
              <Upload>Upload</Upload>
            </UploadBox>
            <UploadBox>
              <Plus>+</Plus>
              <Upload>Upload</Upload>
            </UploadBox>
            <UploadBox>
              <Plus>+</Plus>
              <Upload>Upload</Upload>
            </UploadBox>
          </UploadWrapper>
        </ImageWrapper>

        <MainSettingsWrapper>
          <MainSettings>메인 설정</MainSettings>
          <MainSettingsRadioWrapper>
            <RadioWrapper>
              <MainSettingsRadio type="radio" id="youtube" name="mainSettings" checked />
              <MainSettingsRadioLabel for="youtube">유튜브</MainSettingsRadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <MainSettingsRadio type="radio" id="image" name="mainSettings" />
              <MainSettingsRadioLabel for="image">사진</MainSettingsRadioLabel>
            </RadioWrapper>
          </MainSettingsRadioWrapper>
        </MainSettingsWrapper>

        <RegistrationButton onClick={onClickPost}>등록하기</RegistrationButton>
      </BoardContainer>
    </div>
  );
}
