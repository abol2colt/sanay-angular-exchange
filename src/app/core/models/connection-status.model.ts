export type ConnectionPhase = 'idle' | 'connecting' | 'live' | 'degraded' | 'error';

export interface ConnectionStatus {
  phase: ConnectionPhase;
  provider: string;
  isLive: boolean;
}
