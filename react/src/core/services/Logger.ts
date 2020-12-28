/* eslint-disable no-console */

type Message = string | number | Record<string, unknown>;

export class Logger {
  static info(title: string, message: Message): void {
    console.info('[INFO]', title, message);
  }

  static log(title: string, message: Message): void {
    console.log('[LOG]', title, message);
  }

  static warn(title: string, message: Message): void {
    console.warn('[WARNING]', title, message);
  }

  static error(title: string, message: Message): void {
    console.error('[ERROR]', title, message);
  }
}
