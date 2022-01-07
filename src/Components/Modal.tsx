// import * as React from "react";

// interface IProps {
//   isOpen?: boolean;
//   toggle?: () => void;
//   classes?: string;
// }

// const Modal: React.FC<IProps> = ({
//   isOpen = true,
//   toggle,
//   classes,
//   children,
// }) => {
//   return (
//     <>
//       <div
//         className="main-modal flex justify-center items-center bg-black antialiased bg-opacity-40"
//         style={{
//           position: "fixed",
//           top: 0,
//           right: 0,
//           left: 0,
//           bottom: 0,
//           ...(!isOpen && {
//             visibility: "hidden",
//           }),
//         }}
//         onClick={toggle}
//       >
//         <div
//           className={`flex flex-col mx-auto rounded-lg border border-gray-300 shadow-xl ${
//             classes || ""
//           }`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {children}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;

import * as React from "react";

interface IProps {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
}

const Modal: React.FC<IProps> = ({
  isOpen = false,
  toggle,
  className,
  children,
}) => {
  return (
    <>
      <div
        className={`z-50 main-modal flex justify-center items-center 
        bg-gray-800 antialiased bg-opacity-30 fixed bottom-0 top-0 left-0 right-0
         ${isOpen ? "block" : "invisible"} `}
        onClick={toggle}
      >
        <div
          className={`flex flex-col mx-auto rounded-lg border border-gray-300 shadow-xl
          transition-all duration-100 ease-in transform 
          ${isOpen ? "block scale-100 animate-expand" : "invisible scale-50"}
          ${className || ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;