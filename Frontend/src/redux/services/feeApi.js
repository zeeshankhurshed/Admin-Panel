import {
    createApi,
    fetchBaseQuery
  } from '@reduxjs/toolkit/query/react';
  
  export const feeApi = createApi({
    reducerPath: 'feeApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:10000/api/', 
      mode: 'cors',
    }),
    tagTypes:['contact'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
        query: () => '/userFee', 
        providesTags:['contact'],
      }),

      getUserById: builder.query({
        query: (id) => `/userFee/${id}` 
        
      }),

      deleteUser: builder.mutation({
        query: (id) => ({
          url: `/delete/${id}`,
          method: "DELETE"
        }), 
      }),
      
      updateUser: builder.mutation({
        query: ({id ,values}) => ({
          url: `/update/${id}`,
          method: "PUT",
          body:values
        }),
      }),

      addNewUser: builder.mutation({
        query: data => ({
          url: '/new/userFee', 
          method: 'POST',
          body: data
        }),
        invalidatesTags:['contact'],
      }),
      
    })
  });
  
  export const {useGetAllUsersQuery,useGetUserByIdQuery,useAddNewUserMutation,useDeleteUserMutation,useUpdateUserMutation } = feeApi;