import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import PortableTextComponent from "../hooks/richText";
import urlFor from "../hooks/image";
import { Text, Flex, Box, Spacer, Stack } from "@chakra-ui/react";

const About = ({ about }: any) => {
  const { mainImage, longSummary } = about[0];
  return (
    <ChakraProvider>
      <Box bg="#A8973F" minHeight="100%" w="100%" h="100%">
        <Flex>
          <Box bg="#80687F" width="100%">
            <Flex>
              <Text fontSize="5xl" mr={3} color="#CFC500">
                →
              </Text>
              <Box mx="20%" mt="100px">
                <PortableTextComponent content={longSummary} fontSize="lg" />
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box bg="#A8973F">
            <img
              src={urlFor(mainImage).width(1200).height(1200).toString()}
              style={{ width: "100%" }}
            />
          </Box>
        </Flex>
        <Stack
          mt="120px"
          marginX="20px"
          borderTop="4px"
          borderColor="black"
          borderTopStyle="solid"
          h="100px"
        >
          <Text fontSize="xs" mt={3} mb={5}>
            Copyright &copy; Eva Kabuya. Select portrait photographer by Mallory
            Lowe Mpoka.
          </Text>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export async function getStaticProps() {
  const about = await client.fetch(groq`
    *[_type == "about"]
  `);
  return {
    props: {
      about,
    },
  };
}

export default About;
