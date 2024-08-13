import cliente from './sanity';  // Asegúrate de que la ruta sea correcta

const sanityQuery = (query, params) => cliente.fetch(query, params);

export const getFeaturedRestaurants = () => {
    return sanityQuery(`
        *[_type == 'featured']{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                },
                type->{
                    name
                }
            }
        }
    `);
}

export const getCategories = () => {
    return sanityQuery(`
        *[_type == 'category']{
            ...
        }
    `);
}

export const getFeaturedRestaurantsById = id => {
    return sanityQuery(`
        *[_type == 'featured' && _id == $id]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                },
                type->{
                    name
                }
            }
        }[0]
    `, { id });
}
