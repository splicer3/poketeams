import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GiPokecog } from "react-icons/gi";

const generations = [
  { id: 0, name: "All Generations" },
  { id: 1, name: "Generation I" },
  { id: 2, name: "Generation II" },
  { id: 3, name: "Generation III" },
  { id: 4, name: "Generation IV" },
  { id: 5, name: "Generation V" },
  { id: 6, name: "Generation VI" },
  { id: 7, name: "Generation VII" },
  { id: 8, name: "Generation VIII" },
  { id: 9, name: "Generation IX" },
];

interface GenerationSelectorProps {
  onGenerationChange: (newGeneration: number) => void;
  selectedGeneration: number;
}

const GenerationSelector: React.FC<GenerationSelectorProps> = ({
  onGenerationChange,
  selectedGeneration,
}) => {
  return (
    <Listbox value={selectedGeneration} onChange={onGenerationChange}>
      {({ open }) => (
        <div className="relative mt-1">
          <Listbox.Button className="relative group w-40 py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-900 rounded-lg cursor-default hover:shadow-md sm:text-sm">
            <span className="block truncate">
              {generations.find((gen) => gen.id === selectedGeneration)?.name}
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
              {generations.map((generation) => (
                <Listbox.Option
                  key={generation.id}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-gray-900 bg-gray-100 dark:text-gray-300 dark:bg-gray-900"
                        : "text-gray-900 dark:text-gray-400"
                    }
                          cursor-default select-none relative py-2 text-center pr-4`
                  }
                  value={generation.id}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {generation.name}
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
  );
};

export default GenerationSelector;
