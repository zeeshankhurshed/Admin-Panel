// Import necessary modules and functions
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the authApi
export const authApi = createApi({
  reducerPath: 'authApi', // The slice of the Redux store where data will be stored
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:10000/api/', // Base URL for your API
    mode: 'cors', // CORS mode
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/auth/register`,
        method: 'POST',
        body: data,
      }),
    }),
    googleUser: builder.mutation({
      query: (googleUser) => ({   
          url: `/auth/google`,
          method: 'POST',
          body:googleUser,
      
      }),
    }),
    loginUser: builder.mutation({
      query: ({email,password}) => { 
        console.log('Login data:', {email,password});
    
        return {
          url: `/auth/login`,
          method: 'POST',
          body:{email,password},
        };
      },
    }),
    
    logoutUser: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
    }),
  }),
});

// Export hooks for using the API endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation,useGoogleUserMutation } = authApi;
