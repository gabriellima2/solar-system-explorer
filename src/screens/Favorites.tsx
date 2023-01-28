import { Default } from "@layouts/Default";

import { useFavoriteSelect } from "@store/modules/favorites-module";

import { Planets } from "@components/Planets";
import { Error } from "@components/Error";

import planetsData from "@mocks/planets.json";
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
		const planet = planetsData.find(
			(planet) => favoritePlanet === planet.name_english
		);
		if (!planet) return acc;
		return [...acc, planet];
	}, []);

	return (
		<Default hasDefaultSpacings={false}>
			<Planets variants="verticalList" planets={favoritesPlanets} />
		</Default>
	);
};
