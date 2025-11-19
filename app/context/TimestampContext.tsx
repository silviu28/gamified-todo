import { createContext } from "react";

interface TimestampContextValue {
  time: Date;
};

const TimestampContext = createContext<TimestampContextValue>({
  time: new Date(),
});

export default TimestampContext;