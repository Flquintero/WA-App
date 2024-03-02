export interface IRecipeListResponse {
    data: IRecipe[];
    links: IRecipeListLinks;
    meta: IRecipeListMeta;
}

export interface IRecipeSingleResponse {
    data: IRecipe;
}

export interface IRecipeListLinks {
    first?: string;
    last?: string;
    next?: string;
    prev?: string;
}

export interface IRecipeListMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: any;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface IRecipe {
    author_email: string;
    description: string;
    id: number;
    images: string[];
    ingredients: IIngredient[];
    name: string;
    slug: string;
    steps: string[];
}

export interface IIngredient {
    description: string;
    id: number;
    name: string;
    price: number;
    qty: number;
    type: string;
    unit: string;
}

//TO DO: Interface below should be in another maybe generic or element related
export interface IFilterOption {
    text: string;
    value: string;
}
