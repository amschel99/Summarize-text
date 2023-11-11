import { FC } from "react";
import { OutPut } from "./ui/output";

interface SummaryProps {
  text: string;
}

const Summary: FC<SummaryProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full h-auto">
        <OutPut title={"Your Summary is here"} description={text} />
      </div>
    </div>
  );
};

export default Summary;
