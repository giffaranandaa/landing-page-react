import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    height: 400px;
  }
`;

export const Heading = styled.h1``;

export const Slide = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  .slick-slide div {
    margin: 1rem 0.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 300px;
  padding: 30px;
  background: #010606;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: left;
  margin: 0 20px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;
export const ProfileImg = styled.img`
  margin: 0 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;

export const ProfileWrap = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProfileName = styled.h2`
  font-size: 1.5rem;
  color: #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ProfileRole = styled.p`
  font-size: 1rem;
`;

export const Arrow = styled.div`
  background-color: transparent;
  color: #333;
  margin-top: -20px;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;
