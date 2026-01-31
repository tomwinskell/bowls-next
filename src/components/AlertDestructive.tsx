import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

export const AlertDestructive = ({ message }: { message: string }) => {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
