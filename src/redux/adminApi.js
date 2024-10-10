import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Provider } from "react-redux"

export const adminApi = createApi({
    reducerPath: "adminApi",
    // baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL}/api/admin` }),
    // baseQuery: fetchBaseQuery({ baseUrl: `https://samadhanbodkhe-portfolio.onrender.com/api/admin` }),
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api/admin` }),
    tagTypes: ["url", "email"],
    endpoints: (builder) => {
        return {

            getAdmin: builder.query({
                query: () => {
                    return {
                        url: "/get-email",
                        method: "GET",

                    }
                },
                transformResponse: data => data.data,
                providesTags: ["url"]

            }),
            addAdmin: builder.mutation({
                query: adminData => {
                    return {
                        url: "/send-email",
                        method: "POST",
                        body: adminData
                    }
                },
                transformResponse: data => data.result
            }),
            deleteAdmin: builder.mutation({
                query: id => {
                    return {
                        url: `/delete-email/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["url"],

            }),

        }
    }
})

export const { useAddAdminMutation, useGetAdminQuery, useDeleteAdminMutation } = adminApi
