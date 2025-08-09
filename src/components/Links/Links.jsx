const Links = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-cyan-400 px-3 duration-700 my-3">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Links;
