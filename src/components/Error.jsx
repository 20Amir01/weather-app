import { PropTypes } from "prop-types";

Error.propTypes = {
  children: PropTypes.string,
};function Error({ children }) {
  return (
    <div className="p-10 text-center font-Edu-SA">
      <p className="text-red-400 text-4xl">{children}</p>
    </div>
  );
}
export default Error;