import React from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import { ButtonLink } from '@paljs/ui/Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from 'Layouts';

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  a {
    max-width: 20rem;
  }
`;

const Home = () => {
  const router = useRouter();
  return (
    <Layout title="Home">
      <Card>
        <CardBody>
          <ErrorStyle>
            <h1>Home Page</h1>
            <small>The page you were looking</small>
            <ButtonLink fullWidth appearance="hero" onClick={() => router.push('/')} shape="Rectangle">
              First function
            </ButtonLink>
          </ErrorStyle>
        </CardBody>
      </Card>
    </Layout>
  );
};
export default Home;
