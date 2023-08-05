import { memo} from "react";

const dateData=new Date()
function Time() {
  return <div className="text-right text-white text-lg">
    <p>{dateData.toLocaleDateString()}</p>
  </div>;
}
export default memo(Time);