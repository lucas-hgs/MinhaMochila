import {format} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_DATE = new Date('1995-06-03').getTime();

describe('dateUtils', () => {
  describe('formatDate', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_DATE);
    });

    afterAll(() => {
      jest.clearAllMocks;
    });

    it('should format date to dd/MM/yyyy', () => {
      const timeFormatted = format(MOCKED_DATE, 'dd/MM/yyyy');

      expect(dateUtils.formatDate(MOCKED_DATE).formatedDate).toBe(
        timeFormatted,
      );
    });

    it('should format time to HH:mm', () => {
      const timeFormatted = format(MOCKED_DATE, 'HH:mm');

      expect(dateUtils.formatDate(MOCKED_DATE).formatedTime).toBe(
        timeFormatted,
      );
    });

    it('should format date to yyyy-mm-dd format', () => {
      expect(dateUtils.formatDateToISO('03/06/1995')).toBe('1995-06-03');
    });
  });
});
