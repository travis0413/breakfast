// import React, { useState, useRef } from "react";
// import Franchise from "../component/Franchise";
// import BasicInformation from "../component/BasicInformation";
// import Feedback from "../component/Feedback";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const [categorySelect, setCategorySelect] = useState("");
//   const [chooseOne, setChooseOne] = useState(null);
//   const [atLeastOne, setAtLeastOne] = useState(null);
//   const [nameWarning, setNameWarning] = useState(null);
//   const [birthWarning, setBirthWarning] = useState(null);
//   const [jobWarning, setJobWarning] = useState(null);
//   const [addressWarning, setAddressWarning] = useState(null);
//   const [storePlaceWarning, setStorePlaceWarning] = useState(null);
//   const [budgetWarning, setBudgetWarning] = useState(null);
//   const [loanWarning, setLoanWarning] = useState(null);
//   const [questionWarning, setQuestionWarning] = useState(null);
//   const emailInputRef = useRef(null);
//   const phoneInputRef = useRef(null);
//   const weekday1Ref = useRef(null);
//   const weekday2Ref = useRef(null);
//   const weekday3Ref = useRef(null);
//   const weekend1Ref = useRef(null);
//   const weekend2Ref = useRef(null);
//   const anyTimeRef = useRef(null);
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (nameWarning === "沒填" || nameWarning === null) {
//       setNameWarning(true);
//     }
//     if (!(emailInputRef.current.value || phoneInputRef.current.value)) {
//       setChooseOne(true);
//     } else {
//       setChooseOne(null);
//     }
//     if (birthWarning === "沒填" || birthWarning === null) {
//       setBirthWarning(true);
//     }
//     if (jobWarning === "沒填" || jobWarning === null) {
//       setJobWarning(true);
//     }
//     if (addressWarning === "沒填" || addressWarning === null) {
//       setAddressWarning(true);
//     }

//     if (
//       categorySelect == "franchise" &&
//       !(
//         weekday1Ref.current.checked ||
//         weekday2Ref.current.checked ||
//         weekday3Ref.current.checked ||
//         weekend1Ref.current.checked ||
//         weekend2Ref.current.checked ||
//         anyTimeRef.current.checked
//       )
//     ) {
//       setAtLeastOne(true);
//     } else {
//       setAtLeastOne(null);
//     }
//     if (storePlaceWarning === "沒填" || storePlaceWarning === null) {
//       setStorePlaceWarning(true);
//     }
//     if (budgetWarning === "沒填" || budgetWarning === null) {
//       setBudgetWarning(true);
//     }
//     if (loanWarning === "沒填" || loanWarning === null) {
//       setLoanWarning(true);
//     }
//     if (questionWarning === "沒填" || questionWarning === null) {
//       setQuestionWarning(true);
//     }

//     if (
//       nameWarning === false &&
//       birthWarning === false &&
//       jobWarning === false &&
//       addressWarning === false &&
//       storePlaceWarning === false &&
//       budgetWarning === false &&
//       loanWarning === false &&
//       (emailInputRef.current.value || phoneInputRef.current.value) &&
//       (weekday1Ref.current.checked ||
//         weekday2Ref.current.checked ||
//         weekday3Ref.current.checked ||
//         weekend1Ref.current.checked ||
//         weekend2Ref.current.checked ||
//         anyTimeRef.current.checked)
//     ) {
//       Swal.fire({
//         title: "表單已完成填寫",
//         text: "感謝您的填寫，近期內將有專員與您聯絡",
//         icon: "success",
//       });
//       navigate("/");
//     } else if (
//       nameWarning === false &&
//       questionWarning === false &&
//       (emailInputRef.current.value || phoneInputRef.current.value)
//     ) {
//       Swal.fire({
//         title: "表單已完成填寫",
//         text: "感謝您的寶貴意見，本店將盡速完成改善",
//         icon: "success",
//       });
//       navigate("/");
//     }
//   };

//   return (
//     <div className="contact">
//       <form action="http://localhost:3000">
//         <h1>線上表單</h1>
//         <BasicInformation
//           submitHandler={submitHandler}
//           emailInputRef={emailInputRef}
//           phoneInputRef={phoneInputRef}
//           chooseOne={chooseOne}
//           setChooseOne={setChooseOne}
//           setCategorySelect={setCategorySelect}
//           nameWarning={nameWarning}
//           setNameWarning={setNameWarning}
//         />
//         {(categorySelect == "franchise" && (
//           <Franchise
//             atLeastOne={atLeastOne}
//             setAtLeastOne={setAtLeastOne}
//             weekday1Ref={weekday1Ref}
//             weekday2Ref={weekday2Ref}
//             weekday3Ref={weekday3Ref}
//             weekend1Ref={weekend1Ref}
//             weekend2Ref={weekend2Ref}
//             anyTimeRef={anyTimeRef}
//             birthWarning={birthWarning}
//             setBirthWarning={setBirthWarning}
//             jobWarning={jobWarning}
//             setJobWarning={setJobWarning}
//             addressWarning={addressWarning}
//             setAddressWarning={setAddressWarning}
//             storePlaceWarning={storePlaceWarning}
//             setStorePlaceWarning={setStorePlaceWarning}
//             budgetWarning={budgetWarning}
//             setBudgetWarning={setBudgetWarning}
//             loanWarning={loanWarning}
//             setLoanWarning={setLoanWarning}
//           />
//         )) ||
//           (categorySelect == "feedback" && (
//             <Feedback
//               questionWarning={questionWarning}
//               setQuestionWarning={setQuestionWarning}
//             />
//           ))}
//         <div className="submitButton">
//           <button onClick={submitHandler}>交出表單</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
