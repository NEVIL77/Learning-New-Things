import { data } from "autoprefixer"
import { useState } from "react"
import "./style.css";

const Folder = ({ explorer }) => {
    const [expane, setExpane] = useState(false);

    if (explorer.isFolder) {
        return (
            <div className="container">
                <div className="folder" onClick={() => setExpane(!expane)}>
                    <span>{expane ? "📂" : "📁"} {explorer.name}</span>
                    <div className="g-8px d-flex mt-10px">
                        <button className="button">˖📁 Add </button>
                        <button className="button"> ˖📄 Add </button>
                    </div>
                </div>

                <div className="items" style={{ display: expane ? "block" : "none" }}>
                    {explorer.items?.map((exp) => (
                        <Folder explorer={exp} key={exp.id} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <span className="file">📄 {explorer.name}</span>
        );
    }
};

export default Folder;


// STEPs

// 1 render the first level of the data
// 2 on Click do hide and show 