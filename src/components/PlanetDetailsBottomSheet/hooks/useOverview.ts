import { useQuery } from "react-query";

import { planetDetailsServices } from "@infra/services/planet-details-services";

import { planetFinder } from "@utils/planet-finder";
import { isObject } from "@utils/is-object";

import type { IPlanetOverview } from "../@types/IPlanetOverview";

type UseOverviewReturn = {
	planet: IPlanetOverview | undefined;
	error: string;
	isError: boolean;
	isLoading: boolean;
};

export function useOverview(id: string): UseOverviewReturn {
	const { data, error, isError, isLoading } = useQuery(
		["overview", id],
		() => planetDetailsServices.getOverview(id),
		{ refetchOnWindowFocus: false }
	);

	const staticPlanetInfo = planetFinder("name_english", id);

	const planet =
		isObject(data) || isObject(staticPlanetInfo)
			? ({ ...data, ...staticPlanetInfo } as IPlanetOverview)
			: undefined;

	return {
		planet,
		error: error as string,
		isError,
		isLoading,
	};
}
