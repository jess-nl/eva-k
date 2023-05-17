import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AspectRatio, Grid, GridItem, Text, Box } from "@chakra-ui/react";
import responsiveCarousel from "@/hooks/responsiveCarousel";

const Works = ({ works }: any) => {
  return (
    <Box bg="#F4F3ED" paddingTop="150px" paddingBottom="100px">
      <div id="works"></div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        marginBottom="10px"
        display="flex"
        marginX={{ base: "20px", md: "20px", lg: "100px" }}
      >
        <GridItem
          w="100%"
          alignSelf="flex-end"
          display={{ base: "none", md: "none", lg: "initial" }}
        >
          <Text color="black" fontSize="lg">
            ↓ CLICK ON VIDEO TO VIEW
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Text
            color="#A391A0"
            fontSize={{ base: "5xl", md: "5xl", lg: "80px" }}
            textAlign={{ base: "initial", md: "initial", lg: "right" }}
          >
            Released Works
          </Text>
        </GridItem>
      </Grid>
      <Box
        marginX={{ base: "20px", md: "20px", lg: "100px" }}
        borderTop="4px"
        borderColor="black"
        borderTopStyle="solid"
        mb="12px"
      >
        <Carousel
          responsive={responsiveCarousel}
          customLeftArrow={
            <Text
              left="calc(4% + 1px)"
              position="absolute"
              color="white"
              zIndex="1"
              cursor="pointer"
              fontSize="6xl"
            >
              ←
            </Text>
          }
          customRightArrow={
            <Text
              right="calc(4% + 1px)"
              position="absolute"
              color="white"
              zIndex="1"
              cursor="pointer"
              fontSize="6xl"
            >
              →
            </Text>
          }
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
                    <GridItem w="98%" h="100%" mt="12px">
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
        </Carousel>
      </Box>
    </Box>
  );
};

export default Works;
