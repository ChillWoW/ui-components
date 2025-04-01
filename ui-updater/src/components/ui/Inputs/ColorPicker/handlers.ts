const toHex = (n: number) => {
  const hex = Math.round(n).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const formatColor = (
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  },
  format: "hex" | "rgb" | "rgba"
): string => {
  if (format === "hex") {
    const toHex = (n: number) => {
      const hex = Math.round(n).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  } else if (format === "rgb") {
    return `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(
      color.b
    )})`;
  } else if (format === "rgba") {
    return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(
      color.b
    )}, ${color.a.toFixed(2)})`;
  }
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
};

export const parseColor = (
  color: string,
  format: "hex" | "rgb" | "rgba"
): { r: number; g: number; b: number; a: number } | null => {
  if (!color) return null;

  if (color.startsWith("#")) {
    const hex = color.substring(1);
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return { r, g, b, a: 1 };
    } else if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b, a: 1 };
    }
  }

  const rgbMatch = color.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/
  );
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;
    return { r, g, b, a };
  }

  return null;
};
