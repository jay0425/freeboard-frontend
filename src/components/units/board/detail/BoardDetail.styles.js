import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardWrapper = styled.div`
  width: 1200px;
  min-height: 800px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);

  padding: 80px 120px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #bdbdbd;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;

  margin-right: 12px;
`;

export const Info = styled.div``;

export const Writer = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const CreatedAt = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Body = styled.div``;

export const Title = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;

  margin: 80px 0px 40px 0px;
`;

export const Contents = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 101px;
`;

export const Button = styled.button`
  display: inline-flex;
  height: 45px;
  padding: 14px 60px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-right: 24px;

  border: 1px solid #bdbdbd;
  background: #fff;

  cursor: pointer;

  &:hover {
    background-color: #ffd600;
    border: none;
  }
`;
