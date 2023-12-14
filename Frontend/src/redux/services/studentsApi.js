import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:10000/api/', 
    mode: 'cors',
  }),
  tagTypes:['contact'],
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => '/students', 
      providesTags:['contact'],
    }),
    getStudentById: builder.query({
      query: (id) => `/student/${id}` 
      
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE"
      }), 
    }),
    
    updateStudent: builder.mutation({
      query: ({id ,values}) => ({
        url: `/update/${id}`,
        method: "PUT",
        body:values
      }),
    }),
    addNewStudent: builder.mutation({
      query: data => ({
        url: '/new/student', 
        method: 'POST',
        body: data
      }),
      invalidatesTags:['contact'],
    }),
    
  })
});

export const {
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useAddNewStudentMutation
} = studentApi;