"use client"

import React from 'react';
import PokemonCombo from './PokemonCombo';
import PokemonType from './PokemonType';
import PokemonAbilities from '../PokemonAbilities';

const PokemonInfo = () => {
  return (
    <div className="flex justify-around w-full">
      <div className="flex flex-col items-center gap-4">
        <PokemonCombo />
        <PokemonType />
      </div>
      <PokemonAbilities />
    </div>
  );
};

export default PokemonInfo;
