// src/pages/Projects.js
import React from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaRobot } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiArduino, SiRaspberrypi } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 80px 20px;
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 40px;
  background-color: #fafafa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 12px;
`;

const TechIcons = styled.div`
  font-size: 28px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>📁 프로젝트 소개</Title>

      <ProjectCard onClick={() => navigate("/projects/image-classification")}> 
        <ProjectTitle>🧠 이미지 분류 딥러닝 프로젝트</ProjectTitle>
        <Description>
          Python과 TensorFlow를 활용하여 이미지 전처리부터 분류 모델 학습까지 전 과정을 구현했습니다.
          다양한 하이퍼파라미터 튜닝을 통해 정확도를 향상시켰으며, 학습 시각화 및 실험 분석도 함께 진행하였습니다.
        </Description>
        <TechIcons>
          <FaPython title="Python" />
          <SiTensorflow title="TensorFlow" />
          <FaRobot title="Deep Learning" />
        </TechIcons>
      </ProjectCard>

      <ProjectCard onClick={() => navigate("/projects/embedded-system")}> 
        <ProjectTitle>🤖 임베디드 센서 제어 시스템</ProjectTitle>
        <Description>
          아두이노와 Raspberry Pi를 활용하여 센서 데이터를 수집하고, 조건에 따라 모터를 제어하는 시스템을 제작했습니다.
          웹 서버를 통해 실시간 데이터를 확인할 수 있도록 구현하였습니다.
        </Description>
        <TechIcons>
          <SiArduino title="Arduino" />
          <SiRaspberrypi title="Raspberry Pi" />
          <FaNodeJs title="Node.js" />
        </TechIcons>
      </ProjectCard>

      <ProjectCard onClick={() => navigate("/projects/todo-app")}> 
        <ProjectTitle>📅 풀스택 일정 관리 웹앱</ProjectTitle>
        <Description>
          React와 Node.js, MySQL을 사용한 풀스택 일정 관리 웹 애플리케이션입니다.
          JWT 인증, 역할 기반 권한 분리, 일정 필터링, 모달 UI 등 다양한 기능을 직접 구현했습니다.
        </Description>
        <TechIcons>
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <SiMysql title="MySQL" />
          <FaDatabase title="Database" />
        </TechIcons>
      </ProjectCard>
	  <ProjectCard onClick={() => navigate("/projects/memo-app")}>
  <ProjectTitle>📝 메모 애플리케이션</ProjectTitle>
  <Description>
    React, Node.js, MySQL(RDS)을 기반으로 개발된 <strong>JWT 인증 메모 관리 앱</strong>입니다.
    로그인한 사용자는 본인만의 메모를 작성, 수정, 삭제할 수 있으며 <strong>소프트 삭제</strong>, <strong>팀별 분류</strong>,
    <strong>모달 UI</strong> 등 다양한 기능을 포함하고 있습니다.
  </Description>
  <TechIcons>
    <FaReact title="React" />
    <FaNodeJs title="Node.js" />
    <SiMysql title="MySQL" />
    <FaDatabase title="AWS RDS" />
  </TechIcons>
</ProjectCard>

    </Container>

  );
};

export default Home;

