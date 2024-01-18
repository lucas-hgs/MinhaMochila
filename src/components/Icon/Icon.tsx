import React from 'react';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ActivityIcon} from '../../assets/icons/ActivityIcon';
import {AddIcon} from '../../assets/icons/AddIcon';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {FolderIcon} from '../../assets/icons/FolderIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'purple', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  activity: ActivityIcon,
  add: AddIcon,
  arrowLeft: ArrowLeftIcon,
  folder: FolderIcon,
  home: HomeIcon,
  settings: SettingsIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
