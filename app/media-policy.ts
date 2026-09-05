export type PlaybackIntent = 'auto' | 'play' | 'pause';

export function shouldPlayPreview({
  intent,
  visible,
  documentVisible,
  reducedMotion,
  saveData,
  effectiveType,
}: {
  intent: PlaybackIntent;
  visible: boolean;
  documentVisible: boolean;
  reducedMotion: boolean;
  saveData?: boolean;
  effectiveType?: string;
}): boolean {
  if (!visible || !documentVisible || intent === 'pause') return false;
  // An explicit play request can opt in, but never bypass visibility.
  if (intent === 'play') return true;
  return (
    !reducedMotion &&
    !saveData &&
    !['slow-2g', '2g', '3g'].includes(effectiveType ?? '')
  );
}
