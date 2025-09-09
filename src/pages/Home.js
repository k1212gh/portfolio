// src/pages/Home.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ccc;
`;

const InfoSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Name = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
  color: #222;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;

  li {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const Section = styled.div`
  margin-bottom: 24px;

  h3 {
    margin-bottom: 6px;
    color: #333;
  }

  p {
    color: #555;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const StackList = styled.div`
  font-size: 16px;
  color: #444;
  line-height: 1.8;
`;

const Contact = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 20px;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
    color: #444;
  }

  a {
    color: #0077cc;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <ProfileImage src= "https://lh3.googleusercontent.com/fife/ALs6j_Fvu_SgVF1vysGryS-O9kNtIoHLDn7CZ3Ph5M33-Ctc0ia_VNFQN2aPlWcVPbC7b47FyBAs9Akr5hFaB24U74dbhX3u_1pM3uCMbp4Hjsj8jRSHtR8PwI2uB3Xztj2kbqOqVD3vULaU5gVUVxVcEbILZ9dDeXpfB49LySgJywAppLVnHRwfGp4Wjk0wzAkbzYd4RrxUZVzCmlrpjSliuqooShDhm7RlDIYetXZ_X4MGgP5PaFSpS-S3gPbOj_zXYLWCexWs3Ia7CkhoEZcMlFW0SpW4eJ_wWlDzUrHF-Vucg6DtZgKsjjjmnYJDv6ilSJI_RRKpQJZXFvT96zfhmEKeo9eyiaU1rnnvPxfIRBJlu5dODGbYqUDN6RbffMcyp1Ngq5JYEfaDrazGz-YD4xFtP-bzqrzGPjoSt4yQe-p8FLXzS2TaBqkLuTZPfLoOnz9F-xIrzGIih0sSQUw6xSx7qosVGaio1y9Wd_d87Q4UmZYdsejU5NLdaNTnGr-AN4Jr1PHn7j_-inkhuz-FJARi7cmSlHMQXHwQmrRIWyxI_kTH5w2fhI55EANFDdMXOdp4V2jJeBFjpcbr2DAjGdvr4MZZLEzjmkfjhMnOiKpq0WW5HcZTns3KL-HqiXW9WINqYzIcZ2PlWk4fFnGcLULWD8u82iQMt-h2-25WgZeqTmbKaMrrfNE0CgrpTTVebnQBCCF1DNVGEmhdgwiQ_TS_3Bz1j3d-ibapTs5gfOLLWX0P0a24m5OCBsNDS6iAWZrJEmgjzy9tX282c8rSVS8LzT2VXjrfs8GPsJD1Gh1afzrTBjXat78w-LvjKyH9dBtdf_PPOpJMT6WbpCO0dWCsGrpeSXuCz3ppsFnPCuGAbjGJp-Py5-UVwLuPbxARQR8NgrBRi8rR0K4R5FDoOFO3DFWi12UZ1rCPV2lz_0i8ajt7_STcc6ObCuX0Rk8JId-CyfW17LYRp-qDoAesqVh_RjR1wyIPRMgNjwnwSEUePew2lAFWQrlTaO27Il3DCJUTSiKLvhrmBp3hSi7morrPm1LuB7SGVJNnKNcxcZU7CNzkrrtsJePbS4vddFdij7xyw0SG2j936VcIKKuKk7gJqs_sMFmLq_yfz2lUgHVZluji7eO59BQP2j8AXC9O1S8dOF0cCymKkGqJcLQDbdjbmrLf3doPia-wKJaHTsfamO7IAWSjdl-f8BfNFnnNDGMv47xxoBISXVXa7wYEbNdNylLs2NxVdfE_yZGJZGlnZVpoT_PB8QqZWnvds6yl6E8-pV2-hEXHD64dfdBOw37z8QdkUS7vNlDNX9bIqJusc3jt3k6iJSUGx6OdVUmTrWyzaZBRv4cojZapvhLchwN-jCPk3TGmpRhtGmnHeCqAGNQ5XG4132ubjrhnpFLArMseBPw7IfrQjfT8GQJU7af7ZhlMUiNFr36lzH5Mqi3dFi5FXmydQ432pzjEsc7fYwIXv2ouLWOBsmxEeHAoGUZoGtBto3dDM3xpRZ4W78zM1A330_Qk3fTd6Ii77vDX60mDqC9mY0QxtL9Lk_ClL0JlZUb0m74rllj-WZiGySNCFgScxn9hi7UbyMevkIYK7RCjzUc9SSe8Ft-HLA=w1468-h1478"/>

        <InfoSection>
          <Name>👨‍💻 김건희</Name>
          <InfoList>
            <li>📍 거주지: 서울특별시</li>
            <li>🎓 전공: 임베디드 시스템 공학</li>
            <li>🎂 나이: 2000년생 (26세)</li>
	    <li>  MBTI : ISTP </li> 
            <li>  취 미: 독서,게임,음악감상,전자제품모으기</li>
	    <li>📱 사용 IDE: Android Studio, VSCode</li>
          </InfoList>

          <Section>
            <h3>💻 기술 스택</h3>
            <StackList>
              ▸ Frontend: React, styled-components,Javascript<br />
              ▸ Backend: Node.js, Express, JWT,fastApi<br />
              ▸ Database: MySQL, Postgresql, mongoDB<br />
              ▸ Infra: AWS EC2 (Ubuntu), Docker,보안 관리, 쿠버네틱스(공부중)<br />
              ▸ Mobile: Android Studio (Java 기반 앱 제작 경험), React-Native<br />
              ▸ Embedded: 아두이노, Raspberry Pi 기반 - 센서 입력 및 모터 제어<br />
              ▸ ML/DL: Python + TensorFlow로 이미지 분류 실습 경험, Deep-seek coser 6.7b instruct fintunibe& serving 경험<br />
              ▸ Language: C, C++, JavaScript, Python
            </StackList>
          </Section>

          <Section>
            <h3>🛠 사용 툴</h3>
            <p>VSCode, GitHub, Android Studio, MathLab, MySQL Workbench</p>
          </Section>

          <Section>
            <h3>📌 자기소개</h3>
            <p>
              HancomAI 아카데미와 임베디드 전공 경험을 바탕으로,<br />
              웹 풀스택 개발과 센서 기반 제어 시스템까지 아우르는 개발자입니다.<br />
              
            </p>
          </Section>
        </InfoSection>
      </Container>

      
    </>
  );
};

export default Home;

