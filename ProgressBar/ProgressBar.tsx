import React, { useState, useEffect } from 'react';
import { Text, TextVariant, TextColor } from '@/components/Text';
import {
  getPercent,
  getColor,
  getText,
  ProgressBarContent,
  MAX_SYMBOLS_COUNT,
} from '@/src/utils/progressBarHelper';
import s from './ProgressBar.module.scss';

type ProgressBarProps = {
  value: string;
  showValue: boolean;
  className: string;
};

export const ProgressBar = ({
  value = '',
  showValue = false,
}: ProgressBarProps) => {
  const [percent, setPercent] = useState(0);
  const [color, setColor] = useState('');
  const [text, setText] = useState(ProgressBarContent.short.text);

  useEffect(() => {
    const newPercent = getPercent(value);
    setPercent(newPercent);
    setColor(getColor(newPercent));
    setText(getText(newPercent));
  }, [value]);

  return (
    <div className={s.wrapper}>
      {showValue && (
        <div
          className={s.value}>{`${value.length} / ${MAX_SYMBOLS_COUNT}`}</div>
      )}
      <div className={s.outer}>
        <div
          style={{
            width: `${percent}%`,
            backgroundColor: `${color}`,
          }}
          className={s.inner}
        />
      </div>
      <Text
        className={s.progressBarMessage}
        color={TextColor.darkGrey}
        variant={TextVariant.t2}>
        {text}
      </Text>
    </div>
  );
};
