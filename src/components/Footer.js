// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  color: #444;
  margin-top: auto;
`;

const LinkGroup = styled.div`
  margin-bottom: 16px;

  a {
    margin: 0 12px;
    color: #0077cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
	  <h3>📞 Contact</h3>
      <LinkGroup>
        <a href="mailto:k1212gh@gmail.com" target="_blank" rel="noreferrer">📧 Email : k1212gh@gmail.com</a>
        <a href="https://github.com/k1212gh" target="_blank" rel="noreferrer">💻 GitHub</a>
        <a href="https://k1212gh.tistory.com/" target="_blank" rel="noreferrer">✍ Blog</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">📄 Resume</a>
      </LinkGroup>

      <p>Copyright © 2025 Kevin</p>
      <p>Last Updated: 2025-03-26</p>
    </FooterContainer>
  );
};

export default Footer;

