import Footer from "./Footer";
import { Text, Flex, Box, Spacer, Link } from "@chakra-ui/react";

const Contact = ({ contact }: any) => {
  const { agentEmail, agentName, agentPhone, name, socials } = contact[0];

  return (
    <Box bg="#F4F3ED" pt={14}>
      <div id="contact"></div>
      <Text
        color="#A695A5"
        fontSize={{ base: "5xl", md: "5xl", lg: "80px" }}
        marginX={{ base: "20px", md: "20px", lg: "100px" }}
      >
        Work With Me
      </Text>
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        marginX={{ base: "20px", md: "20px", lg: "100px" }}
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
      >
        <Box mt={14}>
          <Flex>
            <Text fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }} mr={3}>
              →
            </Text>
            <Text
              fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
              color="#80687F"
            >
              {agentName}
            </Text>
          </Flex>
          <Text fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}>
            {agentEmail}
          </Text>
          <Text fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}>
            {agentPhone}
          </Text>
        </Box>
        <Spacer />
        <Box mt={14}>
          <Text
            fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
            textAlign={{ base: "initial", md: "initial", lg: "right" }}
          >
            {name}
          </Text>
          {socials &&
            socials.length > 0 &&
            socials.map((social: any, id: any) => (
              <div key={id}>
                <Link href={social.url} color="#80687F" isExternal>
                  <Text
                    fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}
                    color="#80687F"
                    textAlign={{ base: "initial", md: "initial", lg: "right" }}
                  >
                    {social.title}
                  </Text>
                </Link>
              </div>
            ))}
        </Box>
      </Box>
      <Footer color="black" />
    </Box>
  );
};

export default Contact;
