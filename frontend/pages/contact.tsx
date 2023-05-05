import { Text, Flex, Box, Spacer, Stack, Link } from "@chakra-ui/react";

const Contact = ({ contact }: any) => {
  const { agentEmail, agentName, agentPhone, name, socials } = contact[0];

  return (
    <Box bg="#F4F3ED" pt={14}>
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
            socials.map((social: any) => (
              <Link href={social.url} color="#80687F" isExternal>
                <Text fontSize="4xl" color="#80687F" textAlign="right">
                  {social.title}
                </Text>
              </Link>
            ))}
        </Box>
      </Flex>
      <Stack
        mt="120px"
        marginX="100px"
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
      >
        <Text fontSize="xs" mt={3} mb={5}>
          Copyright &copy; Eva Kabuya. Select portrait photographer by Mallory
          Lowe Mpoka.
        </Text>
      </Stack>
    </Box>
  );
};

export default Contact;
