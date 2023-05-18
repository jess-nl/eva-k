import { Grid, GridItem, Text, Box, Stack, Flex } from "@chakra-ui/react";
import PortableTextComponent from "../hooks/richText";

const Biography = ({ biography }: any) => {
  const { latest, press, awards } = biography[0];
  return (
    <Box paddingTop="150px" paddingBottom="100px">
      <div id="biography"></div>
      <Text
        color="#A695A5"
        marginX={{ base: "20px", md: "20px", lg: "100px" }}
        fontSize={{ base: "5xl", md: "5xl", lg: "80px" }}
        textAlign={{ base: "initial", md: "initial", lg: "right" }}
      >
        Biography
      </Text>
      <Grid
        display={{ base: "block", md: "block", lg: "grid" }}
        templateColumns={{ base: "none", md: "none", lg: "repeat(4, 1fr)" }}
        gap={6}
        marginX={{ base: "20px", md: "20px", lg: "100px" }}
        mb="20px"
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
      >
        <GridItem w="100%" h="100%" marginTop={7}>
          {biography[0].biography && (
            <PortableTextComponent
              content={biography[0].biography}
              fontSize="sm"
            />
          )}
        </GridItem>
        <GridItem w="100%" h="100%" marginTop={4}>
          <Text
            fontSize="4xl"
            textAlign={{ base: "initial", md: "initial", lg: "center" }}
            mb={4}
          >
            Latest
          </Text>
          {latest &&
            latest.length > 0 &&
            latest.map((latest: any, id: any) => (
              <Stack key={id} spacing="2px" mb={6}>
                <Text
                  fontSize="sm"
                  textAlign={{
                    base: "initial",
                    md: "initial",
                    lg: "center",
                  }}
                  as="b"
                >
                  {latest.title}
                </Text>
                <Text
                  fontSize="sm"
                  textAlign={{
                    base: "initial",
                    md: "initial",
                    lg: "center",
                  }}
                  as="i"
                >
                  {latest.stage}
                </Text>
                <Text
                  fontSize="sm"
                  textAlign={{
                    base: "initial",
                    md: "initial",
                    lg: "center",
                  }}
                >
                  {latest.mediaType}
                </Text>
                <Text
                  fontSize="sm"
                  textAlign={{
                    base: "initial",
                    md: "initial",
                    lg: "center",
                  }}
                >
                  {latest.role}
                </Text>
                <Text
                  fontSize="sm"
                  textAlign={{
                    base: "initial",
                    md: "initial",
                    lg: "center",
                  }}
                >
                  {latest.company}
                </Text>
              </Stack>
            ))}
        </GridItem>
        <GridItem w="100%" h="100%" marginTop={4}>
          <Text fontSize="4xl" mb={4}>
            Press
          </Text>
          {press &&
            press.length > 0 &&
            press.map((press: any, id: any) => (
              <Flex key={id} mb={2}>
                <Text fontSize="sm" mr="5px">
                  {press.media}
                </Text>
                {press.journalist && (
                  <Text fontSize="xs" lineHeight="12px">
                    by {press.journalist}
                  </Text>
                )}
              </Flex>
            ))}
        </GridItem>
        <GridItem w="100%" h="100%" marginTop={4}>
          <Text fontSize="4xl" mb={4}>
            Awards
          </Text>
          {awards && <PortableTextComponent content={awards} fontSize="sm" />}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Biography;
