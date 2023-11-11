import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ApiAlertProps {
  title: string;
  description: string;
}

export const OutPut: React.FC<ApiAlertProps> = ({ title, description }) => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success("Text copied to clipboard.");
  };

  return (
    <Alert>
      <div className="flex justify-between items-center ">
        <AlertTitle className="flex items-center gap-x-2">{title}</AlertTitle>
        <Button
          variant="subtle"
          size="sm"
          onClick={() => onCopy(description)}
          className="absolute top-0 right-0 m-1"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
      </AlertDescription>
    </Alert>
  );
};
