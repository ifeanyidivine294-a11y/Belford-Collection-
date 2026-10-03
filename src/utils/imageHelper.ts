import imageMapData from '../config/imageMap.json';

const IMAGE_MAP: Record<string, string> = imageMapData;

export function resolveImageUrl(url: string | undefined): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (IMAGE_MAP[trimmed]) {
    return IMAGE_MAP[trimmed];
  }
  return trimmed;
}

export function isPlaceholderUrl(url: string | undefined): boolean {
  if (!url) return true;
  return url.startsWith('[') && url.endsWith(']');
}
