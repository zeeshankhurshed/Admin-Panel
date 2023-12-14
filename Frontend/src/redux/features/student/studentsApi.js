// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const studentApi = createApi({
//   reducerPath: 'studentApi',
//   baseQuery: fetchBaseQuery({ 
//     baseUrl: 'http://localhost:10000/api/', // Corrected URL
//     mode: 'cors',
//   }),
//   endpoints: (builder) => ({
//     getAllStudents: builder.query({
//       query: () => 'students', // Removed the leading slash
//     }),
  
//     addNewStudent: builder.mutation({
//       query: (data) => ({
//         url: '/new/student', // Removed the leading slash
//         method: 'POST',
//         body: data,
//       }),
//     }), 
//   })
// });

// export const { useGetAllStudentsQuery, useAddNewStudentMutation } = studentApi;
