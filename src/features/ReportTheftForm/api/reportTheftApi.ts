import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from "../../../shared/api/instance.ts";
import type {ReportTheftRequest, ReportTheftResponse} from "./types.ts";


export const reportTheftApi = createApi({
    reducerPath: 'reportTheft',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        reportTheft: builder.mutation<ReportTheftResponse, ReportTheftRequest>({
            query: (credentials) => ({
                url: '/public/report',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const {
    useReportTheftMutation
} = reportTheftApi;
