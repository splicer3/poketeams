import React from "react";
import Bar from "./Bar";
import PokeAPI from "pokedex-promise-v2";

interface MultiplierListProps {
  multipliers: Record<string, number>;
  team: PokeAPI.Pokemon[];
}

const MultiplierList: React.FC<MultiplierListProps> = ({
  multipliers,
  team,
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {Object.entries(multipliers).map(([type, multiplier]) => {
        return (
          <li key={type}>
            <div className="capitalize font-semibold">
              {multiplier == 0 ? `${type}: Immune` : `${type}: ${multiplier}x`}
            </div>
            <Bar multiplier={multiplier} />
          </li>
        );
      })}
    </ul>
  );
};

export default MultiplierList;
