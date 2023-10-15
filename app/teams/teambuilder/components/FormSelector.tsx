import { usePokemon } from "@/context/usePokemon";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { GiPokecog } from "react-icons/gi";

const FormSelector = ({}) => {
  const { pokemonSpecies, variety, setVariety } = usePokemon();

  const [displayValue, setDisplayValue] = useState(
    pokemonSpecies?.varieties[0].pokemon.name || "",
  );

  const formatName = (name: string) => {
    const parts = name.split("-");
    return parts.length > 1 ? parts.slice(1).join("-") : name;
  };

  const handleVarietyChange = (index: number) => {
    setVariety(index);
    setDisplayValue(
      formatName(pokemonSpecies?.varieties[index].pokemon.name || ""),
    );
  };

  useEffect(() => {
    setDisplayValue(
      formatName(pokemonSpecies?.varieties[0].pokemon.name || ""),
    );
  }, [pokemonSpecies]);

  return (
    (pokemonSpecies?.varieties?.length || 0) > 1 && (
      <div className="flex flex-col gap-1 py-2">
        <h3 className="text-md font-semibold text-center">Forms</h3>
        <Listbox value={variety} onChange={handleVarietyChange}>
          {({ open }) => (
            <div className="relative mt-1">
              <Listbox.Button className="relative group w-40 py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-900 rounded-lg cursor-default hover:shadow-md sm:text-sm">
                <span className="block capitalize truncate">
                  {displayValue}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 cursor-pointer">
                  <GiPokecog />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {pokemonSpecies?.varieties.map((form, index) => (
                    <Listbox.Option
                      key={form.pokemon.name}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-gray-900 bg-gray-100 dark:text-gray-300 dark:bg-gray-900"
                            : "text-gray-900 dark:text-gray-400"
                        }
                                    cursor-default select-none relative py-2 text-center pr-4 capitalize`
                      }
                      value={index}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {formatName(form.pokemon.name)}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
    )
  );
};

export default FormSelector;
