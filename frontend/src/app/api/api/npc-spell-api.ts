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
import { ModelsNpcSpell } from '../models';
/**
 * NpcSpellApi - axios parameter creator
 * @export
 */
export const NpcSpellApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NpcSpell
         * @param {ModelsNpcSpell} npcSpell NpcSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNpcSpell: async (npcSpell: ModelsNpcSpell, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'npcSpell' is not null or undefined
            if (npcSpell === null || npcSpell === undefined) {
                throw new RequiredError('npcSpell','Required parameter npcSpell was null or undefined when calling createNpcSpell.');
            }
            const localVarPath = `/npc_spell`;
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
            const nonString = typeof npcSpell !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(npcSpell !== undefined ? npcSpell : {})
                : (npcSpell || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes NpcSpell
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNpcSpell: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNpcSpell.');
            }
            const localVarPath = `/npc_spell/{id}`
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
         * @summary Gets NpcSpell
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpell: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getNpcSpell.');
            }
            const localVarPath = `/npc_spell/{id}`
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
         * @summary Gets NpcSpells in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpellsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getNpcSpellsBulk.');
            }
            const localVarPath = `/npc_spells/bulk`;
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
         * @summary Lists NpcSpells
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
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
        listNpcSpells: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/npc_spells`;
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
         * @summary Updates NpcSpell
         * @param {number} id Id
         * @param {ModelsNpcSpell} npcSpell NpcSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNpcSpell: async (id: number, npcSpell: ModelsNpcSpell, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateNpcSpell.');
            }
            // verify required parameter 'npcSpell' is not null or undefined
            if (npcSpell === null || npcSpell === undefined) {
                throw new RequiredError('npcSpell','Required parameter npcSpell was null or undefined when calling updateNpcSpell.');
            }
            const localVarPath = `/npc_spell/{id}`
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
            const nonString = typeof npcSpell !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(npcSpell !== undefined ? npcSpell : {})
                : (npcSpell || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NpcSpellApi - functional programming interface
 * @export
 */
export const NpcSpellApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NpcSpell
         * @param {ModelsNpcSpell} npcSpell NpcSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNpcSpell(npcSpell: ModelsNpcSpell, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpell>>> {
            const localVarAxiosArgs = await NpcSpellApiAxiosParamCreator(configuration).createNpcSpell(npcSpell, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes NpcSpell
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNpcSpell(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await NpcSpellApiAxiosParamCreator(configuration).deleteNpcSpell(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets NpcSpell
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNpcSpell(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpell>>> {
            const localVarAxiosArgs = await NpcSpellApiAxiosParamCreator(configuration).getNpcSpell(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets NpcSpells in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNpcSpellsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpell>>> {
            const localVarAxiosArgs = await NpcSpellApiAxiosParamCreator(configuration).getNpcSpellsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists NpcSpells
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
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
        async listNpcSpells(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpell>>> {
            const localVarAxiosArgs = await NpcSpellApiAxiosParamCreator(configuration).listNpcSpells(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates NpcSpell
         * @param {number} id Id
         * @param {ModelsNpcSpell} npcSpell NpcSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNpcSpell(id: number, npcSpell: ModelsNpcSpell, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpell>>> {
            const localVarAxiosArgs = await NpcSpellApiAxiosParamCreator(configuration).updateNpcSpell(id, npcSpell, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NpcSpellApi - factory interface
 * @export
 */
export const NpcSpellApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates NpcSpell
         * @param {ModelsNpcSpell} npcSpell NpcSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNpcSpell(npcSpell: ModelsNpcSpell, options?: any): AxiosPromise<Array<ModelsNpcSpell>> {
            return NpcSpellApiFp(configuration).createNpcSpell(npcSpell, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes NpcSpell
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNpcSpell(id: number, options?: any): AxiosPromise<string> {
            return NpcSpellApiFp(configuration).deleteNpcSpell(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets NpcSpell
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpell(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNpcSpell>> {
            return NpcSpellApiFp(configuration).getNpcSpell(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets NpcSpells in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpellsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsNpcSpell>> {
            return NpcSpellApiFp(configuration).getNpcSpellsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists NpcSpells
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
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
        listNpcSpells(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNpcSpell>> {
            return NpcSpellApiFp(configuration).listNpcSpells(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates NpcSpell
         * @param {number} id Id
         * @param {ModelsNpcSpell} npcSpell NpcSpell
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNpcSpell(id: number, npcSpell: ModelsNpcSpell, options?: any): AxiosPromise<Array<ModelsNpcSpell>> {
            return NpcSpellApiFp(configuration).updateNpcSpell(id, npcSpell, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNpcSpell operation in NpcSpellApi.
 * @export
 * @interface NpcSpellApiCreateNpcSpellRequest
 */
export interface NpcSpellApiCreateNpcSpellRequest {
    /**
     * NpcSpell
     * @type {ModelsNpcSpell}
     * @memberof NpcSpellApiCreateNpcSpell
     */
    readonly npcSpell: ModelsNpcSpell
}

/**
 * Request parameters for deleteNpcSpell operation in NpcSpellApi.
 * @export
 * @interface NpcSpellApiDeleteNpcSpellRequest
 */
export interface NpcSpellApiDeleteNpcSpellRequest {
    /**
     * id
     * @type {number}
     * @memberof NpcSpellApiDeleteNpcSpell
     */
    readonly id: number
}

/**
 * Request parameters for getNpcSpell operation in NpcSpellApi.
 * @export
 * @interface NpcSpellApiGetNpcSpellRequest
 */
export interface NpcSpellApiGetNpcSpellRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcSpellApiGetNpcSpell
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
     * @type {string}
     * @memberof NpcSpellApiGetNpcSpell
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NpcSpellApiGetNpcSpell
     */
    readonly select?: string
}

/**
 * Request parameters for getNpcSpellsBulk operation in NpcSpellApi.
 * @export
 * @interface NpcSpellApiGetNpcSpellsBulkRequest
 */
export interface NpcSpellApiGetNpcSpellsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof NpcSpellApiGetNpcSpellsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listNpcSpells operation in NpcSpellApi.
 * @export
 * @interface NpcSpellApiListNpcSpellsRequest
 */
export interface NpcSpellApiListNpcSpellsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEntries
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NpcSpellApiListNpcSpells
     */
    readonly select?: string
}

/**
 * Request parameters for updateNpcSpell operation in NpcSpellApi.
 * @export
 * @interface NpcSpellApiUpdateNpcSpellRequest
 */
export interface NpcSpellApiUpdateNpcSpellRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcSpellApiUpdateNpcSpell
     */
    readonly id: number

    /**
     * NpcSpell
     * @type {ModelsNpcSpell}
     * @memberof NpcSpellApiUpdateNpcSpell
     */
    readonly npcSpell: ModelsNpcSpell
}

/**
 * NpcSpellApi - object-oriented interface
 * @export
 * @class NpcSpellApi
 * @extends {BaseAPI}
 */
export class NpcSpellApi extends BaseAPI {
    /**
     * 
     * @summary Creates NpcSpell
     * @param {NpcSpellApiCreateNpcSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellApi
     */
    public createNpcSpell(requestParameters: NpcSpellApiCreateNpcSpellRequest, options?: any) {
        return NpcSpellApiFp(this.configuration).createNpcSpell(requestParameters.npcSpell, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes NpcSpell
     * @param {NpcSpellApiDeleteNpcSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellApi
     */
    public deleteNpcSpell(requestParameters: NpcSpellApiDeleteNpcSpellRequest, options?: any) {
        return NpcSpellApiFp(this.configuration).deleteNpcSpell(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets NpcSpell
     * @param {NpcSpellApiGetNpcSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellApi
     */
    public getNpcSpell(requestParameters: NpcSpellApiGetNpcSpellRequest, options?: any) {
        return NpcSpellApiFp(this.configuration).getNpcSpell(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets NpcSpells in bulk
     * @param {NpcSpellApiGetNpcSpellsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellApi
     */
    public getNpcSpellsBulk(requestParameters: NpcSpellApiGetNpcSpellsBulkRequest, options?: any) {
        return NpcSpellApiFp(this.configuration).getNpcSpellsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists NpcSpells
     * @param {NpcSpellApiListNpcSpellsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellApi
     */
    public listNpcSpells(requestParameters: NpcSpellApiListNpcSpellsRequest = {}, options?: any) {
        return NpcSpellApiFp(this.configuration).listNpcSpells(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates NpcSpell
     * @param {NpcSpellApiUpdateNpcSpellRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellApi
     */
    public updateNpcSpell(requestParameters: NpcSpellApiUpdateNpcSpellRequest, options?: any) {
        return NpcSpellApiFp(this.configuration).updateNpcSpell(requestParameters.id, requestParameters.npcSpell, options).then((request) => request(this.axios, this.basePath));
    }
}
