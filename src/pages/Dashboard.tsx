import styled from "styled-components";
import PrivateRoute from "../auth/PrivateRoute";
import useAuth from "../auth/useAuth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #f6f6f6;
  padding: 40px;
  box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #555;
  max-width: 600px;
  text-align: center;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: #ff4757;
  color: white;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(255, 71, 87, 0.2);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0px 5px 10px rgba(255, 71, 87, 0.2);
  }
`;

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <Container>
        <Button>Logout</Button>
        <Title>Welcome to Your Dashboard, {user?.name}</Title>
        <Text>
          This is a protected page! You can only see this if you're
          authenticated.
        </Text>
      </Container>
    </PrivateRoute>
  );
};

export default Dashboard;
