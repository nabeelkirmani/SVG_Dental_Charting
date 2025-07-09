// src/components/Canvas/utils/canvasHelpers.js
export const isWithinBounds = (point, view) => {
  return view === "front"
    ? point.x >= 0 && point.x <= 122 && point.y >= 0 && point.y <= 380
    : point.x >= 0 && point.x <= 121 && point.y >= 0 && point.y <= 172;
};

export const adjustPoint = (point, groupX) => ({
  x: point.x - groupX,
  y: point.y,
});

export const getGroupX = (view) =>
  view === "front" ? (322 - 122) / 2 : (172 - 121) / 2;


// TODO: will use later
export const smoothPath = (pathData) => {
  // Split the path data into commands
  const commands = pathData.split(/(?=[MLZ])/);

  // Convert points to array of {x, y} coordinates
  const points = [];
  commands.forEach((cmd) => {
    if (cmd.startsWith("M") || cmd.startsWith("L")) {
      const [x, y] = cmd.slice(1).trim().split(" ").map(Number);
      points.push({ x, y });
    }
  });

  // Generate smooth path
  let smoothPath = `M ${points[0].x} ${points[0].y}`;

  // Use bezier curves between points
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];

    // Calculate control points
    const tension = 0.5;
    const cp1x = p0.x + (p1.x - p0.x) * tension;
    const cp1y = p0.y;
    const cp2x = p0.x + (p1.x - p0.x) * (1 - tension);
    const cp2y = p1.y;

    smoothPath += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }

  // Close the path if original was closed
  if (pathData.includes("Z")) {
    smoothPath += " Z";
  }

  return smoothPath;
};
