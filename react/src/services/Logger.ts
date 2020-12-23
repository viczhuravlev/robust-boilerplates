/* eslint-disable no-console */

type Message = string | number | Record<string, unknown>;

export function info(title: string, message: Message): void {
  console.info('[INFO]', title, message);
}

export function log(title: string, message: Message): void {
  console.log('[LOG]', title, message);
}

export function warn(title: string, message: Message): void {
  console.warn('[WARNING]', title, message);
}

export function error(title: string, message: Message): void {
  console.error('[ERROR]', title, message);
}
