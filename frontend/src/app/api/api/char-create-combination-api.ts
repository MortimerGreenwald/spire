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
import { ModelsCharCreateCombination } from '../models';
/**
 * CharCreateCombinationApi - axios parameter creator
 * @export
 */
export const CharCreateCombinationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharCreateCombination
         * @param {ModelsCharCreateCombination} charCreateCombination CharCreateCombination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharCreateCombination: async (charCreateCombination: ModelsCharCreateCombination, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'charCreateCombination' is not null or undefined
            if (charCreateCombination === null || charCreateCombination === undefined) {
                throw new RequiredError('charCreateCombination','Required parameter charCreateCombination was null or undefined when calling createCharCreateCombination.');
            }
            const localVarPath = `/char_create_combination`;
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
            const nonString = typeof charCreateCombination !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(charCreateCombination !== undefined ? charCreateCombination : {})
                : (charCreateCombination || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes CharCreateCombination
         * @param {number} id race
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharCreateCombination: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCharCreateCombination.');
            }
            const localVarPath = `/char_create_combination/{id}`
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
         * @summary Gets CharCreateCombination
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharCreateCombination: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getCharCreateCombination.');
            }
            const localVarPath = `/char_create_combination/{id}`
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
         * @summary Gets CharCreateCombinations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharCreateCombinationsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getCharCreateCombinationsBulk.');
            }
            const localVarPath = `/char_create_combinations/bulk`;
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
         * @summary Lists CharCreateCombinations
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        listCharCreateCombinations: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/char_create_combinations`;
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
         * @summary Updates CharCreateCombination
         * @param {number} id Id
         * @param {ModelsCharCreateCombination} charCreateCombination CharCreateCombination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharCreateCombination: async (id: number, charCreateCombination: ModelsCharCreateCombination, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateCharCreateCombination.');
            }
            // verify required parameter 'charCreateCombination' is not null or undefined
            if (charCreateCombination === null || charCreateCombination === undefined) {
                throw new RequiredError('charCreateCombination','Required parameter charCreateCombination was null or undefined when calling updateCharCreateCombination.');
            }
            const localVarPath = `/char_create_combination/{id}`
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
            const nonString = typeof charCreateCombination !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(charCreateCombination !== undefined ? charCreateCombination : {})
                : (charCreateCombination || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CharCreateCombinationApi - functional programming interface
 * @export
 */
export const CharCreateCombinationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharCreateCombination
         * @param {ModelsCharCreateCombination} charCreateCombination CharCreateCombination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCharCreateCombination(charCreateCombination: ModelsCharCreateCombination, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharCreateCombination>>> {
            const localVarAxiosArgs = await CharCreateCombinationApiAxiosParamCreator(configuration).createCharCreateCombination(charCreateCombination, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes CharCreateCombination
         * @param {number} id race
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCharCreateCombination(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await CharCreateCombinationApiAxiosParamCreator(configuration).deleteCharCreateCombination(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharCreateCombination
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharCreateCombination(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharCreateCombination>>> {
            const localVarAxiosArgs = await CharCreateCombinationApiAxiosParamCreator(configuration).getCharCreateCombination(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharCreateCombinations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharCreateCombinationsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharCreateCombination>>> {
            const localVarAxiosArgs = await CharCreateCombinationApiAxiosParamCreator(configuration).getCharCreateCombinationsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists CharCreateCombinations
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        async listCharCreateCombinations(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharCreateCombination>>> {
            const localVarAxiosArgs = await CharCreateCombinationApiAxiosParamCreator(configuration).listCharCreateCombinations(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates CharCreateCombination
         * @param {number} id Id
         * @param {ModelsCharCreateCombination} charCreateCombination CharCreateCombination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCharCreateCombination(id: number, charCreateCombination: ModelsCharCreateCombination, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharCreateCombination>>> {
            const localVarAxiosArgs = await CharCreateCombinationApiAxiosParamCreator(configuration).updateCharCreateCombination(id, charCreateCombination, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CharCreateCombinationApi - factory interface
 * @export
 */
export const CharCreateCombinationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates CharCreateCombination
         * @param {ModelsCharCreateCombination} charCreateCombination CharCreateCombination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharCreateCombination(charCreateCombination: ModelsCharCreateCombination, options?: any): AxiosPromise<Array<ModelsCharCreateCombination>> {
            return CharCreateCombinationApiFp(configuration).createCharCreateCombination(charCreateCombination, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes CharCreateCombination
         * @param {number} id race
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharCreateCombination(id: number, options?: any): AxiosPromise<string> {
            return CharCreateCombinationApiFp(configuration).deleteCharCreateCombination(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharCreateCombination
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharCreateCombination(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharCreateCombination>> {
            return CharCreateCombinationApiFp(configuration).getCharCreateCombination(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharCreateCombinations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharCreateCombinationsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsCharCreateCombination>> {
            return CharCreateCombinationApiFp(configuration).getCharCreateCombinationsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists CharCreateCombinations
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
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
        listCharCreateCombinations(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharCreateCombination>> {
            return CharCreateCombinationApiFp(configuration).listCharCreateCombinations(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates CharCreateCombination
         * @param {number} id Id
         * @param {ModelsCharCreateCombination} charCreateCombination CharCreateCombination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharCreateCombination(id: number, charCreateCombination: ModelsCharCreateCombination, options?: any): AxiosPromise<Array<ModelsCharCreateCombination>> {
            return CharCreateCombinationApiFp(configuration).updateCharCreateCombination(id, charCreateCombination, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCharCreateCombination operation in CharCreateCombinationApi.
 * @export
 * @interface CharCreateCombinationApiCreateCharCreateCombinationRequest
 */
export interface CharCreateCombinationApiCreateCharCreateCombinationRequest {
    /**
     * CharCreateCombination
     * @type {ModelsCharCreateCombination}
     * @memberof CharCreateCombinationApiCreateCharCreateCombination
     */
    readonly charCreateCombination: ModelsCharCreateCombination
}

/**
 * Request parameters for deleteCharCreateCombination operation in CharCreateCombinationApi.
 * @export
 * @interface CharCreateCombinationApiDeleteCharCreateCombinationRequest
 */
export interface CharCreateCombinationApiDeleteCharCreateCombinationRequest {
    /**
     * race
     * @type {number}
     * @memberof CharCreateCombinationApiDeleteCharCreateCombination
     */
    readonly id: number
}

/**
 * Request parameters for getCharCreateCombination operation in CharCreateCombinationApi.
 * @export
 * @interface CharCreateCombinationApiGetCharCreateCombinationRequest
 */
export interface CharCreateCombinationApiGetCharCreateCombinationRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharCreateCombinationApiGetCharCreateCombination
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharCreateCombinationApiGetCharCreateCombination
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharCreateCombinationApiGetCharCreateCombination
     */
    readonly select?: string
}

/**
 * Request parameters for getCharCreateCombinationsBulk operation in CharCreateCombinationApi.
 * @export
 * @interface CharCreateCombinationApiGetCharCreateCombinationsBulkRequest
 */
export interface CharCreateCombinationApiGetCharCreateCombinationsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof CharCreateCombinationApiGetCharCreateCombinationsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listCharCreateCombinations operation in CharCreateCombinationApi.
 * @export
 * @interface CharCreateCombinationApiListCharCreateCombinationsRequest
 */
export interface CharCreateCombinationApiListCharCreateCombinationsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharCreateCombinationApiListCharCreateCombinations
     */
    readonly select?: string
}

/**
 * Request parameters for updateCharCreateCombination operation in CharCreateCombinationApi.
 * @export
 * @interface CharCreateCombinationApiUpdateCharCreateCombinationRequest
 */
export interface CharCreateCombinationApiUpdateCharCreateCombinationRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharCreateCombinationApiUpdateCharCreateCombination
     */
    readonly id: number

    /**
     * CharCreateCombination
     * @type {ModelsCharCreateCombination}
     * @memberof CharCreateCombinationApiUpdateCharCreateCombination
     */
    readonly charCreateCombination: ModelsCharCreateCombination
}

/**
 * CharCreateCombinationApi - object-oriented interface
 * @export
 * @class CharCreateCombinationApi
 * @extends {BaseAPI}
 */
export class CharCreateCombinationApi extends BaseAPI {
    /**
     * 
     * @summary Creates CharCreateCombination
     * @param {CharCreateCombinationApiCreateCharCreateCombinationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharCreateCombinationApi
     */
    public createCharCreateCombination(requestParameters: CharCreateCombinationApiCreateCharCreateCombinationRequest, options?: any) {
        return CharCreateCombinationApiFp(this.configuration).createCharCreateCombination(requestParameters.charCreateCombination, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes CharCreateCombination
     * @param {CharCreateCombinationApiDeleteCharCreateCombinationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharCreateCombinationApi
     */
    public deleteCharCreateCombination(requestParameters: CharCreateCombinationApiDeleteCharCreateCombinationRequest, options?: any) {
        return CharCreateCombinationApiFp(this.configuration).deleteCharCreateCombination(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharCreateCombination
     * @param {CharCreateCombinationApiGetCharCreateCombinationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharCreateCombinationApi
     */
    public getCharCreateCombination(requestParameters: CharCreateCombinationApiGetCharCreateCombinationRequest, options?: any) {
        return CharCreateCombinationApiFp(this.configuration).getCharCreateCombination(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharCreateCombinations in bulk
     * @param {CharCreateCombinationApiGetCharCreateCombinationsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharCreateCombinationApi
     */
    public getCharCreateCombinationsBulk(requestParameters: CharCreateCombinationApiGetCharCreateCombinationsBulkRequest, options?: any) {
        return CharCreateCombinationApiFp(this.configuration).getCharCreateCombinationsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists CharCreateCombinations
     * @param {CharCreateCombinationApiListCharCreateCombinationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharCreateCombinationApi
     */
    public listCharCreateCombinations(requestParameters: CharCreateCombinationApiListCharCreateCombinationsRequest = {}, options?: any) {
        return CharCreateCombinationApiFp(this.configuration).listCharCreateCombinations(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates CharCreateCombination
     * @param {CharCreateCombinationApiUpdateCharCreateCombinationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharCreateCombinationApi
     */
    public updateCharCreateCombination(requestParameters: CharCreateCombinationApiUpdateCharCreateCombinationRequest, options?: any) {
        return CharCreateCombinationApiFp(this.configuration).updateCharCreateCombination(requestParameters.id, requestParameters.charCreateCombination, options).then((request) => request(this.axios, this.basePath));
    }
}
