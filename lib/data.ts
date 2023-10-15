export const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Teambuilder",
    url: "/teams/teambuilder",
  },
  {
    name: "Your teams",
    url: "/teams",
  },
] as const;

export const faqData = [
  {
    title: "How should I use this?",
    paragraph:
      "For starters, head over to the teambuilder and experiment! The app will show you how well put together your team is, and you will be able to export it directly to Showdown.",
  },
  {
    title: "Is an account mandatory?",
    paragraph:
      "Of course not, it is only necessary if you want to save and edit your teams.",
  },
  {
    title: "Why are there MissingNos?",
    paragraph:
      "This project depends heavily on PokeAPI, which is where the app fetches the data from. Some new abilities will not be up to date, and the same goes for new Pokémon images. However, even if you see a MissingNo the Pokémon's typing will most likely be correct.",
  },
  {
    title: "Is this open-source?",
    paragraph:
      "As I cannot and do not intend to make any money from this, the project is fully open source. You can find the github repo in my github account in the footer.",
  },
  {
    title: "Why is there a wireframe Porygon up there?",
    paragraph: "Looks cool enough.",
  },
] as const;
