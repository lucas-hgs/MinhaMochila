import React from 'react';

import {Note} from '@domain';

import {Box, Text} from '@components';

interface Props {
  actualNote: Note[];
}

export function ReadNote({actualNote}: Props) {
  return (
    <Box>
      <Text preset="headingLarge" textAlign="center" color="darkPurple">
        {actualNote[0].title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {actualNote[0].description}
      </Text>
    </Box>
  );
}
