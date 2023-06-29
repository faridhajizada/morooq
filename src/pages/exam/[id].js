// import React from "react";

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId/${id}`
//   );

//   const data = await res.json();

//   const paths = data.map((users) => {
//     return {
//       params: { id: users.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {  
//     const id = context.params.id;
//     const res = await fetch(
//         `http://tapoyren.morooq.az/api/ExamQuestion/GetCourseExamByCourseExamId?courseExamId/${id}`
//         );

//     const data = await res.json();

//     return {
//         props: { users: data },
//     };
// };




// function Details({ users}) {

//   return <div>Details</div>;
// }

// export default Details;
