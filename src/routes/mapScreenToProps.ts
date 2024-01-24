import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: IconProps['name'];
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: 'home',
  },
  CreationScreen: {
    label: 'Novo',
    icon: 'add',
  },
  ArchivesScreen: {
    label: 'Arquivos',
    icon: 'note',
  },
};
