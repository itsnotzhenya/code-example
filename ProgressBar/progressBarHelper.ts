const ProgressBarContent = {
  short: {
    text: 'We recommend writing more to start a meaningful conversation',
    color: '#ff4343',
  },
  medium: {
    text: 'You might want to add a bit more detail',
    color: '#ffb443',
  },
  long: {
    text: 'This seems good lenght-wise',
    color: '#0da95e',
  },
};

export const MAX_SYMBOLS_COUNT = 300;

export const getPercent = (value: string) => {
  const length = value.length;
  return length / (MAX_SYMBOLS_COUNT / 100);
};

export const getText = (percent: number) => {
  if (percent < 33) return ProgressBarContent.short.text;
  if (percent < 66) return ProgressBarContent.medium.text;
  else return ProgressBarContent.long.text;
};

export const getColor = (percent: number) => {
  if (percent < 33) return ProgressBarContent.short.color;
  if (percent < 66) return ProgressBarContent.medium.color;
  else return ProgressBarContent.long.color;
};
