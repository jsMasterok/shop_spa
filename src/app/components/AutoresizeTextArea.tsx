import { useEffect, useRef } from "react";

const AutoResizeTextarea = ({ value }: { value: string }) => {
  const textareaRef = useRef(null);

  return (
    <textarea
      contentEditable={false}
      ref={textareaRef}
      className="border-0 resize-none focus:border-0 focus:ring-0 cursor-default h-full"
      rows={10}
      value={value}
    />
  );
};

export default AutoResizeTextarea;
