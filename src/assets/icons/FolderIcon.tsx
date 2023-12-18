import React from 'react';
import {Svg, Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

interface Props {
  size?: number;
}

export function FolderIcon({size = 70}: Props) {
  const regularSize = size;
  let newSize = {
    bigSize: regularSize + (regularSize * 43) / 100,
    normalSize: regularSize,
    smallSize: regularSize - (regularSize * 10) / 100,
  };

  return (
    <Svg
      width={newSize.normalSize}
      height={newSize.smallSize}
      viewBox="0 0 70 63"
      fill="none">
      <Rect
        width={newSize.normalSize}
        height={newSize.normalSize}
        fill="url(#pattern0)"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use xlinkHref="#image0_48_244" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_48_244"
          width={newSize.bigSize}
          height={newSize.bigSize}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}
