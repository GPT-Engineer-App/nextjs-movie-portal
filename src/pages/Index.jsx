import { keyframes } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";

const glitchAnimation = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const glitchEffect = {
  animation: `${glitchAnimation} 500ms infinite`,
};

const Index = () => (
  <>
    <Box as="nav" bg="gray.900" p={4}>
      <Link as={RouterLink} to="/high-tech-anime" color="teal.300" fontWeight="bold">
        Visit High Tech Anime Page
      </Link>
    </Box>
    {}
  </>
);

export default Index;
