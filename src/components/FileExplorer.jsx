/* eslint-disable react/prop-types */

function FileExplorer({ explorer }) {
  console.log(explorer);
  return (
    <div>
      {
        explorer.map(({ id, name, isFolder, child }) => (
          <p key={id} style={{padding:"5px"}}>
            <span>{isFolder ? "📂" : "📄"}</span>
            {name}
            <FileExplorer explorer={child}/>
          </p>
        ))
      }
    </div>
  );
}

export default FileExplorer;
