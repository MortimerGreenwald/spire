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
import { ModelsNpcSpellsEffect } from '../models';
/**
 * NpcSpellsEffectApi - axios parameter creator
 * @export
 */
export const NpcSpellsEffectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NpcSpellsEffect
         * @param {ModelsNpcSpellsEffect} npcSpellsEffect NpcSpellsEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNpcSpellsEffect: async (npcSpellsEffect: ModelsNpcSpellsEffect, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'npcSpellsEffect' is not null or undefined
            if (npcSpellsEffect === null || npcSpellsEffect === undefined) {
                throw new RequiredError('npcSpellsEffect','Required parameter npcSpellsEffect was null or undefined when calling createNpcSpellsEffect.');
            }
            const localVarPath = `/npc_spells_effect`;
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
            const nonString = typeof npcSpellsEffect !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(npcSpellsEffect !== undefined ? npcSpellsEffect : {})
                : (npcSpellsEffect || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes NpcSpellsEffect
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNpcSpellsEffect: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNpcSpellsEffect.');
            }
            const localVarPath = `/npc_spells_effect/{id}`
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
         * @summary Gets NpcSpellsEffect
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpellsEffect: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getNpcSpellsEffect.');
            }
            const localVarPath = `/npc_spells_effect/{id}`
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
         * @summary Gets NpcSpellsEffects in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpellsEffectsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getNpcSpellsEffectsBulk.');
            }
            const localVarPath = `/npc_spells_effects/bulk`;
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
         * @summary Lists NpcSpellsEffects
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
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
        listNpcSpellsEffects: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/npc_spells_effects`;
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
         * @summary Updates NpcSpellsEffect
         * @param {number} id Id
         * @param {ModelsNpcSpellsEffect} npcSpellsEffect NpcSpellsEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNpcSpellsEffect: async (id: number, npcSpellsEffect: ModelsNpcSpellsEffect, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateNpcSpellsEffect.');
            }
            // verify required parameter 'npcSpellsEffect' is not null or undefined
            if (npcSpellsEffect === null || npcSpellsEffect === undefined) {
                throw new RequiredError('npcSpellsEffect','Required parameter npcSpellsEffect was null or undefined when calling updateNpcSpellsEffect.');
            }
            const localVarPath = `/npc_spells_effect/{id}`
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
            const nonString = typeof npcSpellsEffect !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(npcSpellsEffect !== undefined ? npcSpellsEffect : {})
                : (npcSpellsEffect || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NpcSpellsEffectApi - functional programming interface
 * @export
 */
export const NpcSpellsEffectApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NpcSpellsEffect
         * @param {ModelsNpcSpellsEffect} npcSpellsEffect NpcSpellsEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNpcSpellsEffect(npcSpellsEffect: ModelsNpcSpellsEffect, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpellsEffect>>> {
            const localVarAxiosArgs = await NpcSpellsEffectApiAxiosParamCreator(configuration).createNpcSpellsEffect(npcSpellsEffect, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes NpcSpellsEffect
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNpcSpellsEffect(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await NpcSpellsEffectApiAxiosParamCreator(configuration).deleteNpcSpellsEffect(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets NpcSpellsEffect
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNpcSpellsEffect(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpellsEffect>>> {
            const localVarAxiosArgs = await NpcSpellsEffectApiAxiosParamCreator(configuration).getNpcSpellsEffect(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets NpcSpellsEffects in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNpcSpellsEffectsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpellsEffect>>> {
            const localVarAxiosArgs = await NpcSpellsEffectApiAxiosParamCreator(configuration).getNpcSpellsEffectsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists NpcSpellsEffects
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
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
        async listNpcSpellsEffects(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpellsEffect>>> {
            const localVarAxiosArgs = await NpcSpellsEffectApiAxiosParamCreator(configuration).listNpcSpellsEffects(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates NpcSpellsEffect
         * @param {number} id Id
         * @param {ModelsNpcSpellsEffect} npcSpellsEffect NpcSpellsEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNpcSpellsEffect(id: number, npcSpellsEffect: ModelsNpcSpellsEffect, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcSpellsEffect>>> {
            const localVarAxiosArgs = await NpcSpellsEffectApiAxiosParamCreator(configuration).updateNpcSpellsEffect(id, npcSpellsEffect, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NpcSpellsEffectApi - factory interface
 * @export
 */
export const NpcSpellsEffectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates NpcSpellsEffect
         * @param {ModelsNpcSpellsEffect} npcSpellsEffect NpcSpellsEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNpcSpellsEffect(npcSpellsEffect: ModelsNpcSpellsEffect, options?: any): AxiosPromise<Array<ModelsNpcSpellsEffect>> {
            return NpcSpellsEffectApiFp(configuration).createNpcSpellsEffect(npcSpellsEffect, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes NpcSpellsEffect
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNpcSpellsEffect(id: number, options?: any): AxiosPromise<string> {
            return NpcSpellsEffectApiFp(configuration).deleteNpcSpellsEffect(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets NpcSpellsEffect
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpellsEffect(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNpcSpellsEffect>> {
            return NpcSpellsEffectApiFp(configuration).getNpcSpellsEffect(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets NpcSpellsEffects in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcSpellsEffectsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsNpcSpellsEffect>> {
            return NpcSpellsEffectApiFp(configuration).getNpcSpellsEffectsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists NpcSpellsEffects
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
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
        listNpcSpellsEffects(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNpcSpellsEffect>> {
            return NpcSpellsEffectApiFp(configuration).listNpcSpellsEffects(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates NpcSpellsEffect
         * @param {number} id Id
         * @param {ModelsNpcSpellsEffect} npcSpellsEffect NpcSpellsEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNpcSpellsEffect(id: number, npcSpellsEffect: ModelsNpcSpellsEffect, options?: any): AxiosPromise<Array<ModelsNpcSpellsEffect>> {
            return NpcSpellsEffectApiFp(configuration).updateNpcSpellsEffect(id, npcSpellsEffect, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNpcSpellsEffect operation in NpcSpellsEffectApi.
 * @export
 * @interface NpcSpellsEffectApiCreateNpcSpellsEffectRequest
 */
export interface NpcSpellsEffectApiCreateNpcSpellsEffectRequest {
    /**
     * NpcSpellsEffect
     * @type {ModelsNpcSpellsEffect}
     * @memberof NpcSpellsEffectApiCreateNpcSpellsEffect
     */
    readonly npcSpellsEffect: ModelsNpcSpellsEffect
}

/**
 * Request parameters for deleteNpcSpellsEffect operation in NpcSpellsEffectApi.
 * @export
 * @interface NpcSpellsEffectApiDeleteNpcSpellsEffectRequest
 */
export interface NpcSpellsEffectApiDeleteNpcSpellsEffectRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcSpellsEffectApiDeleteNpcSpellsEffect
     */
    readonly id: number
}

/**
 * Request parameters for getNpcSpellsEffect operation in NpcSpellsEffectApi.
 * @export
 * @interface NpcSpellsEffectApiGetNpcSpellsEffectRequest
 */
export interface NpcSpellsEffectApiGetNpcSpellsEffectRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcSpellsEffectApiGetNpcSpellsEffect
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
     * @type {string}
     * @memberof NpcSpellsEffectApiGetNpcSpellsEffect
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NpcSpellsEffectApiGetNpcSpellsEffect
     */
    readonly select?: string
}

/**
 * Request parameters for getNpcSpellsEffectsBulk operation in NpcSpellsEffectApi.
 * @export
 * @interface NpcSpellsEffectApiGetNpcSpellsEffectsBulkRequest
 */
export interface NpcSpellsEffectApiGetNpcSpellsEffectsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof NpcSpellsEffectApiGetNpcSpellsEffectsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listNpcSpellsEffects operation in NpcSpellsEffectApi.
 * @export
 * @interface NpcSpellsEffectApiListNpcSpellsEffectsRequest
 */
export interface NpcSpellsEffectApiListNpcSpellsEffectsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcSpellsEffectsEntries
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NpcSpellsEffectApiListNpcSpellsEffects
     */
    readonly select?: string
}

/**
 * Request parameters for updateNpcSpellsEffect operation in NpcSpellsEffectApi.
 * @export
 * @interface NpcSpellsEffectApiUpdateNpcSpellsEffectRequest
 */
export interface NpcSpellsEffectApiUpdateNpcSpellsEffectRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcSpellsEffectApiUpdateNpcSpellsEffect
     */
    readonly id: number

    /**
     * NpcSpellsEffect
     * @type {ModelsNpcSpellsEffect}
     * @memberof NpcSpellsEffectApiUpdateNpcSpellsEffect
     */
    readonly npcSpellsEffect: ModelsNpcSpellsEffect
}

/**
 * NpcSpellsEffectApi - object-oriented interface
 * @export
 * @class NpcSpellsEffectApi
 * @extends {BaseAPI}
 */
export class NpcSpellsEffectApi extends BaseAPI {
    /**
     * 
     * @summary Creates NpcSpellsEffect
     * @param {NpcSpellsEffectApiCreateNpcSpellsEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellsEffectApi
     */
    public createNpcSpellsEffect(requestParameters: NpcSpellsEffectApiCreateNpcSpellsEffectRequest, options?: any) {
        return NpcSpellsEffectApiFp(this.configuration).createNpcSpellsEffect(requestParameters.npcSpellsEffect, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes NpcSpellsEffect
     * @param {NpcSpellsEffectApiDeleteNpcSpellsEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellsEffectApi
     */
    public deleteNpcSpellsEffect(requestParameters: NpcSpellsEffectApiDeleteNpcSpellsEffectRequest, options?: any) {
        return NpcSpellsEffectApiFp(this.configuration).deleteNpcSpellsEffect(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets NpcSpellsEffect
     * @param {NpcSpellsEffectApiGetNpcSpellsEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellsEffectApi
     */
    public getNpcSpellsEffect(requestParameters: NpcSpellsEffectApiGetNpcSpellsEffectRequest, options?: any) {
        return NpcSpellsEffectApiFp(this.configuration).getNpcSpellsEffect(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets NpcSpellsEffects in bulk
     * @param {NpcSpellsEffectApiGetNpcSpellsEffectsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellsEffectApi
     */
    public getNpcSpellsEffectsBulk(requestParameters: NpcSpellsEffectApiGetNpcSpellsEffectsBulkRequest, options?: any) {
        return NpcSpellsEffectApiFp(this.configuration).getNpcSpellsEffectsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists NpcSpellsEffects
     * @param {NpcSpellsEffectApiListNpcSpellsEffectsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellsEffectApi
     */
    public listNpcSpellsEffects(requestParameters: NpcSpellsEffectApiListNpcSpellsEffectsRequest = {}, options?: any) {
        return NpcSpellsEffectApiFp(this.configuration).listNpcSpellsEffects(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates NpcSpellsEffect
     * @param {NpcSpellsEffectApiUpdateNpcSpellsEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcSpellsEffectApi
     */
    public updateNpcSpellsEffect(requestParameters: NpcSpellsEffectApiUpdateNpcSpellsEffectRequest, options?: any) {
        return NpcSpellsEffectApiFp(this.configuration).updateNpcSpellsEffect(requestParameters.id, requestParameters.npcSpellsEffect, options).then((request) => request(this.axios, this.basePath));
    }
}
