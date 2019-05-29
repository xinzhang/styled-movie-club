// See https://github.com/rebassjs/grid
//     https://github.com/rebassjs/grid#extending-components
import React from 'react';
import { Flex, Box } from '@rebass/grid';

const SPACING = 2;

const Container = props => (
  <Box
    {...props}
    px={[10, 12, 12, 50]}
    css={{
      maxWidth: '1440px',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  />
);

const Content = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: '1000px',
      width: '100%',
    }}
  />
);

const Row = React.forwardRef((props, ref) => (
  <Flex
    {...props}
    mx={-SPACING}
    ref={ref}
  />
));

const Column = props => (
  <Box
    {...props}
    px={SPACING}
    flex="1 1 auto"
  />
);

export { Container, Content, Row, Column, Flex, Box };
