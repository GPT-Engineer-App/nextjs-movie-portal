import { Box, Button, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FaBars, FaFlag } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="#0c0e16" color="white">
      <Flex as="nav" justify="space-between" px={4} py={2}>
        <Flex align="center" spacing={4}>
          <FaBars color="white" size={24} />
          <Flex as="ul" spacing={2}>
            <Link as="li" px={2} py={1} _hover={{ color: "gray.300" }} href="#">
              ME
            </Link>
            <Link as="li" px={2} py={1} _hover={{ color: "gray.300" }} href="#">
              MOVIES
            </Link>
            <Link as="li" px={2} py={1} _hover={{ color: "gray.300" }} href="#">
              SOPLS
            </Link>
            <Link as="li" px={2} py={1} _hover={{ color: "gray.300" }} href="#">
              PRODIES
            </Link>
            <Link as="li" px={2} py={1} _hover={{ color: "gray.300" }} href="#">
              STOR
            </Link>
            <Link as="li" px={2} py={1} _hover={{ color: "gray.300" }} href="#">
              SOCCER
            </Link>
          </Flex>
        </Flex>
        <FaFlag size={32} />
      </Flex>
      <Box as="main" px={4} py={20}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold">
            KIO CYR
          </Heading>
          <Text mt={4} fontSize="lg">
            Some prose to be his actor.
            <br />
            Won the acting this asserting to be his acting.
          </Text>
          <Button mt={8} bg="#bd1e59" _hover={{ bg: "#a31648" }}>
            SEE FILM CO
          </Button>
        </Box>
        <Grid
          mt={10}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          <Box bg="#1a1c23" transform="scale(1.05)" _hover={{ transform: "scale(1.1)" }} transition="transform 0.3s">
            <Image alt="Movie scene" h="200px" w="full" objectFit="cover" src="https://images.unsplash.com/photo-1607287214260-c78e5ebcafee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHNjZW5lfGVufDB8fHx8MTcxMDUwMDYwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Heading as="h3" mt={4} size="xl" fontWeight="semibold">
              SPOTER
            </Heading>
          </Box>
          <Box bg="#1a1c23" transform="scale(1.05)" _hover={{ transform: "scale(1.1)" }} transition="transform 0.3s">
            <Image alt="Movie scene" h="200px" w="full" objectFit="cover" src="https://images.unsplash.com/photo-1528051918192-ea3f5f11907d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHNjZW5lfGVufDB8fHx8MTcxMDUwMDYwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Heading as="h3" mt={4} size="xl" fontWeight="semibold">
              INLENV BTES
            </Heading>
          </Box>
          <Box bg="#1a1c23" transform="scale(1.05)" _hover={{ transform: "scale(1.1)" }} transition="transform 0.3s">
            <Image alt="Movie scene" h="200px" w="full" objectFit="cover" src="https://images.unsplash.com/photo-1517081719774-67c8f09db5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHNjZW5lfGVufDB8fHx8MTcxMDUwMDYwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Heading as="h3" mt={4} size="xl" fontWeight="semibold">
              SPOTER
            </Heading>
          </Box>
          <Box bg="#1a1c23" transform="scale(1.05)" _hover={{ transform: "scale(1.1)" }} transition="transform 0.3s">
            <Image alt="Movie scene" h="200px" w="full" objectFit="cover" src="https://images.unsplash.com/photo-1585951237313-1979e4df7385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxtb3ZpZSUyMHNjZW5lfGVufDB8fHx8MTcxMDUwMDYwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Heading as="h3" mt={4} size="xl" fontWeight="semibold">
              INLENV BTES
            </Heading>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
