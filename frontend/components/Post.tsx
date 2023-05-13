import Link from "next/link";
import PortableTextComponent from "../hooks/richText";
import Footer from "@/components/Footer";
import { Grid, GridItem, Box, Text, AspectRatio } from "@chakra-ui/react";

const Post = ({ post }: any) => {
  const { title = "Missing title", vimeoUrl, yearReleased, longSummary } = post;
  return (
    <Box bg="black">
      <Grid templateColumns="repeat(6, 1fr)" minHeight="100vh">
        <GridItem colSpan={2} px={20} pt="80px">
          <Box>
            <Link href="/" style={{ fontSize: "3.75rem", color: "white" }}>
              ←
            </Link>
          </Box>
        </GridItem>
        <GridItem colSpan={4} px={20} h="100%" pt="100px">
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            marginBottom="10px"
            display="flex"
          >
            <GridItem w="100%" alignSelf="flex-end">
              <Text color="white" fontSize="lg">
                {title.toUpperCase()}
              </Text>
            </GridItem>
          </Grid>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            borderTop="4px"
            borderColor="white"
            borderTopStyle="solid"
          />
          <GridItem w="100%" h="100%" marginTop="12px">
            <AspectRatio ratio={16 / 9} mb="10px">
              <iframe
                title="tbd"
                src={`${vimeoUrl}?autoplay=1&autopause=0&muted=1&background=1`}
                allowFullScreen
              />
            </AspectRatio>
            <Text color="white" mb="1rem" fontSize="sm">
              {yearReleased}
            </Text>
            <PortableTextComponent
              content={longSummary}
              fontSize="sm"
              color="white"
            />
          </GridItem>
        </GridItem>
      </Grid>
      <Footer color="white" />
    </Box>
  );
};

export default Post;
