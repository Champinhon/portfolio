import styled from 'styled-components';

const ProjectContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
`;

const ProjectImage = styled.img`
  width: 25%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ProjectLink = styled.a`
  color: blue;
  text-decoration: none;  
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

function Project({ title, description, image, link }) {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectImage src={image} alt="Project" />
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={link}>View Project</ProjectLink>
    </ProjectContainer>
  );
}

export default Project;