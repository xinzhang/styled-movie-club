import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import screen from '../../styles/helpers/media';
import * as routes from '../../pages/routes';
import { Container, Flex } from '../Grid';

const StyledBarUI = styled(Flex)`
  height: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: top 0.3s;

   ${screen.md} {
    height: 60px;
    font-size: 14px;
    letter-spacing: 1.2px;
  }
`;

const Background = styled.div`
  background: ${props => props.theme.gradient};
`;

const StyledTitle = styled.h3`
  color: ${props => props.theme.primaryText};
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: ${props => (props.isActive ? props.theme.primary : props.theme.primaryText)};  
  border-radius: 300px;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => (props.isActive ? props.theme.primary : 'transparent')};
  /* unique padding numbers required to create the correct pill shape */
  padding: 4px 9px;
  text-decoration: none;
  margin: 0 6px;

  &:hover {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;

 function Navigation(props) {
  return (
      <Background>
        <Container>
          <nav>
            <StyledBarUI justifyContent="space-between" alignItems="center">
              <StyledTitle>Movie Club</StyledTitle>
              <Flex alignItems="center">
                <StyledLink>
                  <Link to={routes.Movies}>Movies</Link>
                </StyledLink>
                <StyledLink>
                  <Link to={routes.Search}>Search</Link>
                </StyledLink>            
              </Flex>
            </StyledBarUI>
          </nav>
        </Container>
      </Background>
  );
}

export default withRouter(Navigation);