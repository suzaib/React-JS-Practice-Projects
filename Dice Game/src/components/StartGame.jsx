import styled from 'styled-components';
import { Button } from '../assets/styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="../public/images/dice.png"/>
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
    )
}

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 400px; /* adjust as needed */
    height: auto;
  }

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;

    img {
      width: 300px; /* smaller on small screens */
    }

    .content h1 {
      font-size: 48px;
      white-space: normal;
    }
  }
`;

