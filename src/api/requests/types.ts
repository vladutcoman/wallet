export interface IWalletData {
  address: string;
  balance: string;
  developerReward: string;
  nonce: number;
  scrCount: number;
  shard: number;
  timestamp: number;
  txCount: number;
}

export interface ITransactionData {
  txHash: string;
  gasLimit: number;
  gasPrice: number;
  gasUsed: number;
  miniBlockHash: string;
  nonce: number;
  receiver: string;
  receiverShard: number;
  round: number;
  sender: string;
  senderShard: number;
  signature: string;
  status: string;
  value: string;
  fee: string;
  timestamp: number;
  function: string;
}
