import Link from "next/link";
import { AspectRatio, Grid, GridItem, Text, Box } from "@chakra-ui/react";

const Works = ({ works }: any) => {
  return (
    <Box bg="#F4F3ED" paddingTop="150px" paddingBottom="100px">
      <div id="works"></div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        marginX="100px"
        marginBottom="10px"
        display="flex"
      >
        <GridItem w="100%" alignSelf="flex-end">
          <Text color="black" fontSize="lg">
            ↓ CLICK ON VIDEO TO VIEW
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Text color="#A391A0" fontSize="80px" textAlign="right">
            Released Works
          </Text>
        </GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        marginX="100px"
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
      >
        {works.length > 0 &&
          works.map(
            ({ _id, description = "", vimeoUrl = "", slug = [] }: any) => (
              <div key={_id}>
                <Link
                  href={{
                    pathname: "/works/[slug]",
                    query: { slug: slug.current },
                  }}
                >
                  <GridItem w="100%" h="100%" marginTop="12px">
                    <AspectRatio ratio={16 / 9} mb="10px">
                      <iframe
                        title="tbd"
                        src={`${vimeoUrl}?autoplay=1&autopause=0&muted=1&background=1`}
                        allowFullScreen
                      />
                    </AspectRatio>
                    <Text color="black">{description}</Text>
                  </GridItem>
                </Link>
              </div>
            )
          )}
      </Grid>
    </Box>
  );
};

export default Works;
