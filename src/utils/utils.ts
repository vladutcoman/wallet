import { TokenTransfer } from '@multiversx/sdk-core/out';

export const formatBalance = (balance: number) => {
  const prettyStringVal =
    TokenTransfer.egldFromBigInteger(balance).toPrettyString();

  const [number, unit] = prettyStringVal.split(' ');

  return `${Number(number)} ${unit}`;
};
