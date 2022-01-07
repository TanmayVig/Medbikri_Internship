// import * as React from "react";

// interface IProps {
//   classes?: string;
// }

// const Modal: React.FC<IProps> = ({ children, classes }) => {
//   return (
//     <>
//       <div className={`p-3 ${classes || ""}`}>{children}</div>
//     </>
//   );
// };

// export default Modal;

import * as React from "react";

interface IProps {
  className?: string;
}

const ModalBody: React.FC<IProps> = ({ children, className }) => {
  return (
    <>
      <div className={`p-3 z-50 ${className || ""}`}>{children}</div>
    </>
  );
};

export default ModalBody;