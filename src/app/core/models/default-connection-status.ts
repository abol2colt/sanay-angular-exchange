import { ConnectionStatus } from './connection-status.model';

export const DEFAULT_CONNECTION_STATUS: ConnectionStatus = {
  phase: 'idle',
  provider: 'None',
  isLive: false,
};
