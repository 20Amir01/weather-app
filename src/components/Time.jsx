export function Time() {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const showDate =
    date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
  return (
    <div className="text-right text-white">
      <p className="text-lg">
        {showTime} <span className="text-gray-500">|</span> {showDate}
      </p>
    </div>
  );
}
