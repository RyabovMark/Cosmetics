import React from "react";
import "./style.scss";
import {MinusIcon} from "../icons/MinusIcon";
import {PlusIcon} from "../icons/PlusIcon";
import classNames from "classnames";

interface CounterProps {
  className?: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export const Counter = ({
                          className,
                          state,
                          setState,
                        }: CounterProps): JSX.Element => {
  const classes = classNames("counter", className);
  const decrement = () => {
    setState((state) => state - 1);
    console.log(state);
  };

  const increment = () => {
    setState((state) => state + 1);
    console.log(state);
  };

  return (
    <div className={classes}>
      <button onClick={decrement} disabled={state === 1}>
        <MinusIcon/>
      </button>
      <span>{state}</span>
      <button onClick={increment}>
        <PlusIcon/>
      </button>
    </div>
  );
};
