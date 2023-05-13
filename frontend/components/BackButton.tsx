import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const BackButton = ({ noHash }: any) => {
  const router = useRouter();

  return (
    <Box>
      {noHash ? (
        <Link href="/" style={{ fontSize: "3.75rem", color: "white" }}>
          ←
        </Link>
      ) : (
        <button
          onClick={() => router.back()}
          style={{ fontSize: "3.75rem", color: "white" }}
        >
          ←
        </button>
      )}
    </Box>
  );
};

export default BackButton;
