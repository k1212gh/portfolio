// src/pages/projects/MemoApp.js
import React from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Container = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
`;

const TechIcons = styled.div`
  font-size: 28px;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background: #0056b3;
  }
`;

const MemoApp = () => (
  <Container>
    <Title>📝 메모 애플리케이션</Title>
    <Description>
      이 프로젝트는 React, Node.js, MySQL, RDS, JWT 인증 등을 활용한 <strong>개인 메모 관리 웹앱</strong>입니다.
      <br />
      로그인 후 자신만의 메모를 작성, 삭제, 조회할 수 있으며 <strong>소프트 삭제</strong>, <strong>팀 분류</strong> 기능까지 지원합니다.
    </Description>

    <TechIcons>
      <FaReact title="React" />
      <FaNodeJs title="Node.js" />
      <SiMysql title="MySQL" />
      <FaDatabase title="AWS RDS" />
    </TechIcons>

    <Button href="https://k1212gh.site/memo" target="_blank" rel="noopener noreferrer">
      👉 메모 앱 바로가기
    </Button>
  </Container>
);

export default MemoApp;

