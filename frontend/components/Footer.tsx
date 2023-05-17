import { Text, Stack } from "@chakra-ui/react";

const Footer = ({ color }: any) => {
  return (
    <Stack
      mt="120px"
      marginX={{ base: "20px", md: "20px", lg: "100px" }}
      borderTop="4px"
      borderColor={color}
      borderTopStyle="solid"
      color={color}
    >
      <Text fontSize="xs" mt={3} mb={5}>
        Copyright &copy; Eva Kabuya. Select portrait photographer by Mallory
        Lowe Mpoka.
      </Text>
    </Stack>
  );
};

export default Footer;
