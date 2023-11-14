import { renderHook, waitFor, act } from '@testing-library/react-native';
import useTransactionWatcher, {
  ConfirmationStatus,
} from '@hooks/useTransactionWatcher';

import * as NetworkModule from '@services/networkProvidersService';

const awaitSpy = jest.fn();
const getWatchersSpy = jest
  .spyOn(NetworkModule, 'getTransactionWatcher')
  .mockImplementation(
    () =>
      ({
        awaitCompleted: awaitSpy,
      } as any),
  );

describe('useTransactionWatcher', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update status to PENDING when transaction is pending', async () => {
    const hookRes = renderHook(() => useTransactionWatcher());
    await act(async () => {
      await waitFor(() =>
        expect(hookRes.result.current?.status).toBe(ConfirmationStatus.PENDING),
      );
    });
  });

  it('should update status to CONFIRMED when transaction is completed', async () => {
    awaitSpy.mockResolvedValueOnce({});
    const hookRes = renderHook(() => useTransactionWatcher());
    await act(async () => {
      await waitFor(() => expect(getWatchersSpy).toHaveBeenCalledTimes(1));
      await waitFor(() => expect(awaitSpy).toHaveBeenCalledTimes(1));
    });

    expect(hookRes.result.current?.status).toBe(ConfirmationStatus.CONFIRMED);
  });

  it('should update status to FAILED when transaction is rejected', async () => {
    awaitSpy.mockRejectedValueOnce({});
    const hookRes = renderHook(() => useTransactionWatcher());
    await act(async () => {
      await waitFor(() => expect(getWatchersSpy).toHaveBeenCalledTimes(1));
      await waitFor(() => expect(awaitSpy).toHaveBeenCalledTimes(1));
    });

    expect(hookRes.result.current?.status).toBe(ConfirmationStatus.FAILED);
  });
});
