import { PropTypes } from "prop-types";

Error.propTypes = {
  children: PropTypes.string,
};
export function Error({ children }) {
  return (
    <div className="p-10">
      <p className="text-white text-4xl">{children}</p>
    </div>
  );
}
