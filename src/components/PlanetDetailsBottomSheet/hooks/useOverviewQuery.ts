import { useQuery } from "react-query";

import { planetDetailsServices } from "@infra/services/planet-details-services";

import { planetFinder } from "@utils/planet-finder";
import { isObject } from "@utils/is-object";

import type { IPlanetOverview } from "../@types/IPlanetOverview";
import type { QueryDefaultReturn } from "../@types/QueryDefaultReturn";

type UseOverviewQueryReturn = QueryDefaultReturn & {
	planet: IPlanetOverview | undefined;
};

export function useOverviewQuery(id: string): UseOverviewQueryReturn {
	const { data, error, isError, isLoading } = useQuery(
		["overview", id],
		() => planetDetailsServices.getOverview(id),
		{ refetchOnWindowFocus: false, refetchOnMount: false }
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
