import React from 'react';
import {Svg, Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

interface Props {
  size?: number;
}

export function HomeIcon({size = 70}: Props) {
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
          <Use xlinkHref="#image0_48_242" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_48_242"
          width={newSize.bigSize}
          height={newSize.bigSize}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}
