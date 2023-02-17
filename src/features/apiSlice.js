import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const terminalsApi = createApi({
  reducerPath: "terminalsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getTerminalById: builder.query({
      query: (id) => `terminals/${id}/`,
    }),
    getTerminals: builder.query({
      query: () => "terminals/",
    }),
  }),
});

export const { useGetTerminalByIdQuery, useGetTerminalsQuery } = terminalsApi;
