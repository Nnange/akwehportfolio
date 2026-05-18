import { describe, it, expect } from 'vitest';
import { displayMonthYear, getDuration } from '../utils/resumeUtils';

describe('displayMonthYear', () => {
  it('returns "Present" unchanged', () => {
    expect(displayMonthYear('Present')).toBe('Present');
  });

  it('formats a date string to "Mon YYYY"', () => {
    expect(displayMonthYear('May, 2023')).toBe('May 2023');
    expect(displayMonthYear('April, 2022')).toBe('Apr 2022');
    expect(displayMonthYear('January, 2018')).toBe('Jan 2018');
  });
});

describe('getDuration', () => {
  it('returns months for short durations', () => {
    expect(getDuration('April, 2022', 'August, 2022')).toBe('5 mos');
    expect(getDuration('March, 2023', 'April, 2023')).toBe('2 mos');
  });

  it('returns singular month label for 1 month', () => {
    expect(getDuration('January, 2022', 'January, 2022')).toBe('1 mo');
  });

  it('returns years only when no remainder', () => {
    // Jan 2020 → Dec 2021: (2021-2020)*12 + (11-0) + 1 = 24 months = 2 yrs
    expect(getDuration('January, 2020', 'December, 2021')).toBe('2 yrs');
  });

  it('returns years and months when there is a remainder', () => {
    // Oct 2018 → Aug 2024: (2024-2018)*12 + (7-9) + 1 = 71 months = 5 yrs 11 mos
    expect(getDuration('October, 2018', 'August, 2024')).toBe('5 yrs 11 mos');
  });

  it('calculates duration up to today when endDate is "Present"', () => {
    const result = getDuration('January, 2024', 'Present');
    expect(result).toBeTruthy();
    expect(result).toMatch(/\d+ (mo|mos|yr|yrs)/);
  });
});
