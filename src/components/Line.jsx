import { memo } from "react";
function Line() {
  return (
    <div className="bg-gray-400 bg-opacity-50 h-[1px] w-full rounded-full"></div>
  );
}
export default memo(Line)