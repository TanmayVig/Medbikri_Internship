// import * as React from "react";

// interface IProps {
//   toggle?: () => void;
//   classes?: string;
// }

// const Modal: React.FC<IProps> = ({ children, toggle, classes }) => {
//   return (
//     <>
//       <div
//         className={`flex flex-row justify-between items-center p-2 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg ${
//           classes || ""
//         }`}
//       >
//         <p className="font-semibold text-gray-800">{children || "Header"}</p>
//         <i className="bx bx-x text-2xl cursor-pointer" onClick={toggle} />
//       </div>
//     </>
//   );
// };

// export default Modal;

import * as React from "react";

interface IProps {
  toggle?: () => void;
  className?: string;
  hr?: boolean;
}

const Modal: React.FC<IProps> = ({
  children,
  toggle,
  className,
  hr = true,
}) => {
  return (
    <div className="flex flex-col items-center p-3">
      <div
        className={`flex flex-row justify-between items-center
        bg-white text-xl w-full
        rounded-tl-lg rounded-tr-lg p-2 ${className || ""}`}
      >
        <p className="font-semibold w-full text-gray-400 cursor-default">
          {children || "Header"}
        </p>
        <i
          className="bx bx-x cursor-pointer text-gray-500 hover:text-black"
          onClick={toggle}
        />
      </div>
      {hr && <hr className="w-full" />}
    </div>
  );
};

export default Modal;