import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export function ArrowLeftIcon({size = 20, color = '#7C6FAF'}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.401 33.2054C18.376 34.2649 16.714 34.2649 15.689 33.2054L4.76879 21.9184C3.74373 20.8589 3.74373 19.1411 4.76879 18.0816L15.6889 6.79462C16.714 5.73513 18.376 5.73513 19.401 6.79462C20.4261 7.85412 20.4261 9.5719 19.401 10.6314L12.9617 17.287L33.3752 17.287C34.8248 17.287 36 18.5016 36 20C36 21.4984 34.8248 22.713 33.3752 22.713L12.9617 22.713L19.401 29.3686C20.4261 30.4281 20.4261 32.1459 19.401 33.2054Z"
        fill={color}
      />
    </Svg>
  );
}
