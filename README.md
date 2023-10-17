# [PokeTeams](https://poketeams.matteodiiorio.dev)

An advanced **Pokemon Team Builder** made from scratch using **Supabase**, **Next 13**, **Stripe** and **TailwindCSS**.

<p align="center">
<img src="https://user-images.githubusercontent.com/104271382/237925682-89be2835-2732-4574-aa30-cdeb7ad6d52f.png" alt="LogoFull-Blue" style="max-width: 100%; width:300px; height:300px;">
</p>

## How to run

You will need to provide a `.env.local` containing your own **environment variables** to get this running. The environment variables are:  
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY  

Then `git clone` this repo, `npm install` and `npm run dev` to get it running on localhost:3000.  
The Supabase keys can be retrieved from the relevant Supabase project dashboard.

## Features

**PokeTeams** leverages React and NextJS to provide a beautiful UI for a modern and fast teambuilding experience.
Some notable features:
- Weakness analysis for the whole team
- One-click export to *Pokémon Showdown*
- Fully animated using Framer Motion
- Account-based team storage and management

### Roadmap
Ordered on priority:
- IV, EV, Nature and Item features
- Type recommendations based on analyzed weaknesses

## Credits

**PokeTeams** is heavily based on [PokeAPI](https://github.com/PokeAPI/pokeapi) and utilizes [Supabase](https://supabase.com) as its backend.
