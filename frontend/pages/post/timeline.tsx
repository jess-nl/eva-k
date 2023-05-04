import { PortableText } from "@portabletext/react";
import {
  AspectRatio,
  Grid,
  GridItem,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";
import ptComponents from "../../hooks/richText";

const Timeline = ({ timeline }: any) => {
  return (
    <Box bg="#80687F" paddingTop="150px" paddingBottom="100px">
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        marginX="100px"
        marginBottom="10px"
        display="flex"
      >
        <GridItem w="100%" h="100%" alignSelf="flex-end">
          <Text color="#DBD47D" fontSize="lg">
            YEAR(S) OF RELEASE
          </Text>
        </GridItem>
        <GridItem w="100%" h="100%" alignSelf="flex-end">
          <Text color="#DBD47D" fontSize="lg">
            TITLE
          </Text>
        </GridItem>
        <GridItem w="100%" h="100%" alignSelf="flex-end">
          <Text color="#DBD47D" fontSize="lg">
            SUMMARY
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Text color="#AE9E7E" fontSize="80px" textAlign="right">
            Timeline
          </Text>
        </GridItem>
      </Grid>
      {timeline.length > 0 &&
        timeline.map(
          ({
            _id,
            _type,
            title = "",
            yearReleased = "",
            summary = [],
            vimeoUrl = "",
          }: any) => (
            <div key={_id}>
              <Grid
                templateColumns="repeat(4, 1fr)"
                gap={6}
                marginX="100px"
                mb="20px"
                borderTop="4px"
                borderColor="#DBD47D"
                borderTopStyle="solid"
              >
                <GridItem w="100%" h="100%" marginTop="12px">
                  <Text color="#DBD47D" fontSize="6xl">
                    {yearReleased}
                  </Text>
                </GridItem>
                <GridItem w="100%" h="100%" marginTop="12px">
                  <Text color="#DBD47D" fontSize="lg">
                    {title}
                  </Text>
                </GridItem>
                <GridItem w="100%" h="100%" marginTop="12px">
                  <PortableText value={summary} components={ptComponents} />
                </GridItem>
                <GridItem w="100%" h="100%" marginTop="12px">
                  <AspectRatio maxW="480px" ratio={16 / 9}>
                    <iframe
                      title="tbd"
                      src={`${vimeoUrl}?autoplay=1&autopause=0&muted=1&background=1`}
                      allowFullScreen
                    />
                  </AspectRatio>
                </GridItem>
              </Grid>
            </div>
          )
        )}
    </Box>
  );
};

export default Timeline;
