export interface DefaultProps {
  isContainer: boolean;
}

export interface LoaderProps extends Partial<DefaultProps> {
  className?: string;
}
