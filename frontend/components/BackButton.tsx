import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const BackButton = ({ color = null, noHash = null }: any) => {
  const router = useRouter();

  return (
    <Box>
      {noHash ? (
        <Link href="/" style={{ fontSize: "3.75rem", color }}>
          ←
        </Link>
      ) : (
        <button
          onClick={() => router.back()}
          style={{ fontSize: "3.75rem", color }}
        >
          ←
        </button>
      )}
    </Box>
  );
};

export default BackButton;
