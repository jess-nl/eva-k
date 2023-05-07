import { PortableText } from "@portabletext/react";
import { Grid, GridItem, Text, Box, Stack, Flex } from "@chakra-ui/react";
import ptComponents from "../hooks/richText";

const Biography = ({ biography }: any) => {
  const { latest, press, awards } = biography[0];

  return (
    <Box paddingTop="150px" paddingBottom="100px">
      <div id="biography"></div>
      <Text marginX="100px" color="#A695A5" fontSize="80px" textAlign="right">
        Biography
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        marginX="100px"
        mb="20px"
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
      >
        {biography.length > 0 && (
          <>
            <GridItem w="100%" h="100%" marginTop={7}>
              <PortableText
                value={biography[0].biography}
                components={ptComponents}
              />
            </GridItem>
            <GridItem w="100%" h="100%" marginTop={4}>
              <Text fontSize="4xl" textAlign="center" mb={4}>
                Latest
              </Text>
              {latest.length > 0 &&
                latest.map((latest: any, id: any) => (
                  <Stack key={id} spacing="2px" mb={6}>
                    <Text fontSize="sm" textAlign="center" as="b">
                      {latest.title}
                    </Text>
                    <Text fontSize="sm" textAlign="center" as="i">
                      {latest.stage}
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                      {latest.mediaType}
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                      {latest.role}
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                      {latest.company}
                    </Text>
                  </Stack>
                ))}
            </GridItem>
            <GridItem w="100%" h="100%" marginTop={4}>
              <Text fontSize="4xl" mb={4}>
                Press
              </Text>
              {press.length > 0 &&
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
              <PortableText value={awards} components={ptComponents} />
            </GridItem>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Biography;
