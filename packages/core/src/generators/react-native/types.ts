import { BaseTranspilerOptions } from '@/types/transpiler';

export interface ToReactNativeOptions extends BaseTranspilerOptions {
  stylesType: 'emotion' | 'react-native' | 'twrnc' | 'native-wind';
  stateType: 'useState' | 'mobx' | 'valtio' | 'solid' | 'builder';
}

export type ReactNativeMetadata = {
  forwardRef?: string;
};
