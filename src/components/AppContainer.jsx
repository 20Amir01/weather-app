import {PropTypes} from "prop-types"
AppContainer.propTypes = {
  children: PropTypes.node,
};
function AppContainer({ children }) {
  return (
    <div className="max-w-[1366px] overflow-hidden font-Edu-SA">{children}</div>
  );
}
export default AppContainer;