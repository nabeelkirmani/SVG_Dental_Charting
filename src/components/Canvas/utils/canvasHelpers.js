// src/components/Canvas/utils/canvasHelpers.js
export const isWithinBounds = (point, view) => {
    return view === 'front'
      ? point.x >= 0 && point.x <= 122 && point.y >= 0 && point.y <= 380
      : point.x >= 0 && point.x <= 121 && point.y >= 0 && point.y <= 172;
  };

  export const adjustPoint = (point, groupX) => ({
    x: point.x - groupX,
    y: point.y,
  });

  export const getGroupX = (view) =>
    view === 'front' ? (322 - 122) / 2 : (172 - 121) / 2;