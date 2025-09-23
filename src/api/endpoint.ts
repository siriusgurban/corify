interface IEndpoints {
    [key: string]: string;
}

const endpoints: IEndpoints = {
    get_all_products: '/products',
    get_single_product: '/products',
}

const $api = (key: keyof IEndpoints) => {

    return endpoints[key];

}

export default $api;
