import React from 'react';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ActivityIcon} from '../../assets/icons/ActivityIcon';
import {AddIcon} from '../../assets/icons/AddIcon';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {ErrorRoundIcon} from '../../assets/icons/ErrorRoundIcon';
import {FolderIcon} from '../../assets/icons/FolderIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {NoteIcon} from '../../assets/icons/NoteIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'purple', size}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  activity: ActivityIcon,
  add: AddIcon,
  arrowLeft: ArrowLeftIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
  folder: FolderIcon,
  home: HomeIcon,
  note: NoteIcon,
  settings: SettingsIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
