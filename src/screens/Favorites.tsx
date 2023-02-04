import { Default } from "@layouts/Default";

import { useFavoriteSelect } from "@store/modules/favorites-module";

import { Planets } from "@components/Planets";
import { Error } from "@components/Error";

import { planetFinder } from "@utils/planet-finder";
import type { IPlanet } from "@interfaces/IPlanets";

export const Favorites = () => {
	const { planets } = useFavoriteSelect();

	if (planets.length === 0)
		return (
			<Default>
				<Error message="Desculpe, não encontrei nenhum favorito!" />
			</Default>
		);

	const favoritesPlanets = planets.reduce<IPlanet[]>((acc, favoritePlanet) => {
		const planet = planetFinder("name_english", favoritePlanet);
		if (!planet) return acc;
		return [...acc, planet];
	}, []);

	return (
		<Default hasDefaultSpacings={false}>
			<Planets variants="verticalList" planets={favoritesPlanets} />
		</Default>
	);
};
