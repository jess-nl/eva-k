import Footer from "./Footer";
import { Text, Flex, Box, Spacer, Link } from "@chakra-ui/react";

const Contact = ({ contact }: any) => {
  const { agentEmail, agentName, agentPhone, name, socials } = contact[0];

  return (
    <Box bg="#F4F3ED" pt={14}>
      <div id="contact"></div>
      <Text color="#A695A5" fontSize="80px" marginX="100px">
        Work With Me
      </Text>
      <Flex
        marginX="100px"
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
      >
        <Box mt={14}>
          <Flex>
            <Text fontSize="5xl" mr={3}>
              →
            </Text>
            <Text fontSize="5xl" color="#80687F">
              {agentName}
            </Text>
          </Flex>
          <Text fontSize="5xl">{agentEmail}</Text>
          <Text fontSize="5xl">{agentPhone}</Text>
        </Box>
        <Spacer />
        <Box mt={14}>
          <Text fontSize="5xl" textAlign="right">
            {name}
          </Text>
          {socials.length > 0 &&
            socials.map((social: any, id: any) => (
              <div key={id}>
                <Link href={social.url} color="#80687F" isExternal>
                  <Text fontSize="4xl" color="#80687F" textAlign="right">
                    {social.title}
                  </Text>
                </Link>
              </div>
            ))}
        </Box>
      </Flex>
      <Footer color="black" />
    </Box>
  );
};

export default Contact;
