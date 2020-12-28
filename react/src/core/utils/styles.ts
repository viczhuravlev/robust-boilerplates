export function rgba(color: string, opacity = 1): string {
  let newColor: string = color;

  if (color.length === 4) {
    let extendedColor = '#';

    for (let i = 1; i < color.length; i += 1) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }

    newColor = extendedColor;
  }

  const r = parseInt(newColor.substr(1, 2), 16);
  const g = parseInt(newColor.substr(3, 2), 16);
  const b = parseInt(newColor.substr(5, 2), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
