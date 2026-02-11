// @ts-check
import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter'

  test(qase(1, 'Test with Qase ID1'), () => {
    expect(true).toBe(true);
  });
  test(qase(2, 'Test with Qase ID2'), () => {
    expect(true).toBe(true);
  });

    test(qase([4,5], 'Test with Qase ID4 and ID5'), () => {
    expect(true).toBe(true);
  });

