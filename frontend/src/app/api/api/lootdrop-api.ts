/* tslint:disable */
/* eslint-disable */
/**
 * Spire
 * Spire API documentation
 *
 * The version of the OpenAPI document: 3.0
 * Contact: akkadius1@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CrudcontrollersBulkFetchByIdsGetRequest } from '../models';
// @ts-ignore
import { ModelsLootdrop } from '../models';
/**
 * LootdropApi - axios parameter creator
 * @export
 */
export const LootdropApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Lootdrop
         * @param {ModelsLootdrop} lootdrop Lootdrop
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLootdrop: async (lootdrop: ModelsLootdrop, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'lootdrop' is not null or undefined
            if (lootdrop === null || lootdrop === undefined) {
                throw new RequiredError('lootdrop','Required parameter lootdrop was null or undefined when calling createLootdrop.');
            }
            const localVarPath = `/lootdrop`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof lootdrop !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(lootdrop !== undefined ? lootdrop : {})
                : (lootdrop || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes Lootdrop
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLootdrop: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteLootdrop.');
            }
            const localVarPath = `/lootdrop/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets Lootdrop
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLootdrop: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getLootdrop.');
            }
            const localVarPath = `/lootdrop/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets Lootdrops in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLootdropsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getLootdropsBulk.');
            }
            const localVarPath = `/lootdrops/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof body !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists Lootdrops
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLootdrops: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/lootdrops`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (where !== undefined) {
                localVarQueryParameter['where'] = where;
            }

            if (whereOr !== undefined) {
                localVarQueryParameter['whereOr'] = whereOr;
            }

            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates Lootdrop
         * @param {number} id Id
         * @param {ModelsLootdrop} lootdrop Lootdrop
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLootdrop: async (id: number, lootdrop: ModelsLootdrop, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateLootdrop.');
            }
            // verify required parameter 'lootdrop' is not null or undefined
            if (lootdrop === null || lootdrop === undefined) {
                throw new RequiredError('lootdrop','Required parameter lootdrop was null or undefined when calling updateLootdrop.');
            }
            const localVarPath = `/lootdrop/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof lootdrop !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(lootdrop !== undefined ? lootdrop : {})
                : (lootdrop || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LootdropApi - functional programming interface
 * @export
 */
export const LootdropApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Lootdrop
         * @param {ModelsLootdrop} lootdrop Lootdrop
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLootdrop(lootdrop: ModelsLootdrop, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLootdrop>>> {
            const localVarAxiosArgs = await LootdropApiAxiosParamCreator(configuration).createLootdrop(lootdrop, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes Lootdrop
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLootdrop(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await LootdropApiAxiosParamCreator(configuration).deleteLootdrop(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Lootdrop
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLootdrop(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLootdrop>>> {
            const localVarAxiosArgs = await LootdropApiAxiosParamCreator(configuration).getLootdrop(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Lootdrops in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLootdropsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLootdrop>>> {
            const localVarAxiosArgs = await LootdropApiAxiosParamCreator(configuration).getLootdropsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists Lootdrops
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listLootdrops(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLootdrop>>> {
            const localVarAxiosArgs = await LootdropApiAxiosParamCreator(configuration).listLootdrops(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates Lootdrop
         * @param {number} id Id
         * @param {ModelsLootdrop} lootdrop Lootdrop
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLootdrop(id: number, lootdrop: ModelsLootdrop, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLootdrop>>> {
            const localVarAxiosArgs = await LootdropApiAxiosParamCreator(configuration).updateLootdrop(id, lootdrop, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LootdropApi - factory interface
 * @export
 */
export const LootdropApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates Lootdrop
         * @param {ModelsLootdrop} lootdrop Lootdrop
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLootdrop(lootdrop: ModelsLootdrop, options?: any): AxiosPromise<Array<ModelsLootdrop>> {
            return LootdropApiFp(configuration).createLootdrop(lootdrop, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes Lootdrop
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLootdrop(id: number, options?: any): AxiosPromise<string> {
            return LootdropApiFp(configuration).deleteLootdrop(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Lootdrop
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLootdrop(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsLootdrop>> {
            return LootdropApiFp(configuration).getLootdrop(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Lootdrops in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLootdropsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsLootdrop>> {
            return LootdropApiFp(configuration).getLootdropsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists Lootdrops
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLootdrops(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsLootdrop>> {
            return LootdropApiFp(configuration).listLootdrops(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates Lootdrop
         * @param {number} id Id
         * @param {ModelsLootdrop} lootdrop Lootdrop
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLootdrop(id: number, lootdrop: ModelsLootdrop, options?: any): AxiosPromise<Array<ModelsLootdrop>> {
            return LootdropApiFp(configuration).updateLootdrop(id, lootdrop, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createLootdrop operation in LootdropApi.
 * @export
 * @interface LootdropApiCreateLootdropRequest
 */
export interface LootdropApiCreateLootdropRequest {
    /**
     * Lootdrop
     * @type {ModelsLootdrop}
     * @memberof LootdropApiCreateLootdrop
     */
    readonly lootdrop: ModelsLootdrop
}

/**
 * Request parameters for deleteLootdrop operation in LootdropApi.
 * @export
 * @interface LootdropApiDeleteLootdropRequest
 */
export interface LootdropApiDeleteLootdropRequest {
    /**
     * Id
     * @type {number}
     * @memberof LootdropApiDeleteLootdrop
     */
    readonly id: number
}

/**
 * Request parameters for getLootdrop operation in LootdropApi.
 * @export
 * @interface LootdropApiGetLootdropRequest
 */
export interface LootdropApiGetLootdropRequest {
    /**
     * Id
     * @type {number}
     * @memberof LootdropApiGetLootdrop
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
     * @type {string}
     * @memberof LootdropApiGetLootdrop
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof LootdropApiGetLootdrop
     */
    readonly select?: string
}

/**
 * Request parameters for getLootdropsBulk operation in LootdropApi.
 * @export
 * @interface LootdropApiGetLootdropsBulkRequest
 */
export interface LootdropApiGetLootdropsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof LootdropApiGetLootdropsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listLootdrops operation in LootdropApi.
 * @export
 * @interface LootdropApiListLootdropsRequest
 */
export interface LootdropApiListLootdropsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;LootdropEntries&lt;br&gt;LootdropEntries.Item&lt;br&gt;LootdropEntries.Item.DiscoveredItems
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof LootdropApiListLootdrops
     */
    readonly select?: string
}

/**
 * Request parameters for updateLootdrop operation in LootdropApi.
 * @export
 * @interface LootdropApiUpdateLootdropRequest
 */
export interface LootdropApiUpdateLootdropRequest {
    /**
     * Id
     * @type {number}
     * @memberof LootdropApiUpdateLootdrop
     */
    readonly id: number

    /**
     * Lootdrop
     * @type {ModelsLootdrop}
     * @memberof LootdropApiUpdateLootdrop
     */
    readonly lootdrop: ModelsLootdrop
}

/**
 * LootdropApi - object-oriented interface
 * @export
 * @class LootdropApi
 * @extends {BaseAPI}
 */
export class LootdropApi extends BaseAPI {
    /**
     * 
     * @summary Creates Lootdrop
     * @param {LootdropApiCreateLootdropRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LootdropApi
     */
    public createLootdrop(requestParameters: LootdropApiCreateLootdropRequest, options?: any) {
        return LootdropApiFp(this.configuration).createLootdrop(requestParameters.lootdrop, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes Lootdrop
     * @param {LootdropApiDeleteLootdropRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LootdropApi
     */
    public deleteLootdrop(requestParameters: LootdropApiDeleteLootdropRequest, options?: any) {
        return LootdropApiFp(this.configuration).deleteLootdrop(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Lootdrop
     * @param {LootdropApiGetLootdropRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LootdropApi
     */
    public getLootdrop(requestParameters: LootdropApiGetLootdropRequest, options?: any) {
        return LootdropApiFp(this.configuration).getLootdrop(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Lootdrops in bulk
     * @param {LootdropApiGetLootdropsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LootdropApi
     */
    public getLootdropsBulk(requestParameters: LootdropApiGetLootdropsBulkRequest, options?: any) {
        return LootdropApiFp(this.configuration).getLootdropsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists Lootdrops
     * @param {LootdropApiListLootdropsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LootdropApi
     */
    public listLootdrops(requestParameters: LootdropApiListLootdropsRequest = {}, options?: any) {
        return LootdropApiFp(this.configuration).listLootdrops(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates Lootdrop
     * @param {LootdropApiUpdateLootdropRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LootdropApi
     */
    public updateLootdrop(requestParameters: LootdropApiUpdateLootdropRequest, options?: any) {
        return LootdropApiFp(this.configuration).updateLootdrop(requestParameters.id, requestParameters.lootdrop, options).then((request) => request(this.axios, this.basePath));
    }
}
