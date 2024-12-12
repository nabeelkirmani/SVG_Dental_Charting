// src/components/Canvas/hooks/useCanvasImage.js
import { useState, useEffect } from 'react';
import useImage from 'use-image';
import {
  toothImagesFrontView,
  toothImagesTopView,
} from '../../../assets/images/index.js';

export const useCanvasImage = (selectedTooth) => {
  const [imageFrontView] = useImage(
    selectedTooth ? toothImagesFrontView[selectedTooth] : null
  );
  const [imageTopView] = useImage(
    selectedTooth ? toothImagesTopView[selectedTooth] : null
  );

  return { imageFrontView, imageTopView };
};