import "./SingleTool.scss";

function SingleTool({ tool }) {
  return (
    <div className="single-tool col animated-element mx-4 my-2 d-flex flex-column align-items-center">
      <div className="tool-image-container">
        <img src={tool.logo} alt="" className="tool-image" />
      </div>
      <div className="text-center tool-name mt-1">{tool.name}</div>
    </div>
  );
}

export default SingleTool;
