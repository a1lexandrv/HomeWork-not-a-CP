import React from "react";
import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Тарелка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Ложка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const hendleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };
  const hendleReset = () => {
    setCounters(initialState);
    console.log("сброс");
  };

  const handleIncrement = (id) => {
    setCounters(counters.map(count => {
      if (count.id === id) {
        count.value += 1
      }
      return count;
    }))
  };
  const handleDecrement = (id) => {
    setCounters(counters.map(count => {
      if (count.id === id) {
        count.value -= 1
      }
      return count;
    }))
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} onDelete={hendleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} {...count} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
