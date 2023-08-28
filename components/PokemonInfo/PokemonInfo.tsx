import React from 'react';
import PokemonCombo from './PokemonCombo';
import PokemonType from './PokemonType';
import PokemonAbilities from './PokemonAbilities';
import PokemonStats from './PokemonStats';
import PokemonSprite from './PokemonSprite';

const PokemonInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around w-full">
      <div className="flex flex-col items-center gap-4">
        <PokemonSprite />
        <PokemonCombo />
        <PokemonType />
        <PokemonStats />
      </div>
      <div className="flex flex-col items-center px-1">
      <PokemonAbilities />
      </div>
    </div>
  );
};

export default PokemonInfo;
