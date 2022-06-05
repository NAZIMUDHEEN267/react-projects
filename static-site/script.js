
const navStyle = {
    margin: "0",
    padding: "10px",
    background: "steelblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "sanserif",
}

const companyStyle = {
    flex: 1,
    display: "flex",
    gap: "10px",
    alignItems: "center"
}

const companyName = {
    color: "#fff",
    fontSize: "2rem"
}

const companyLogo = {
    width: "50px",
    height: "50px"
}

const links = {
    display: "flex",
    listStyle: "none",
    flex: 1
}

const link = {
    marginLeft: "10px",
    padding: "6px",
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    background: "blue"
}

const bodyStyle = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

const nav = (<nav style={navStyle}>
    <div style={companyStyle}>
        <h1 style={companyName}>React</h1>
        <img src="./react.png" alt="react.png" style={companyLogo} />
    </div>

    <ul style={links}>
        <li><a href="#" style={link}>link</a></li>
        <li><a href="#" style={link}>link</a></li>
        <li><a href="#" style={link}>link</a></li>
        <li><a href="#" style={link}>link</a></li>
    </ul>
</nav>)


const body = (<div style = {bodyStyle}>
    <h1>Fun fact about React</h1>
    <ul>
        <li>was first released in 2013</li>
        <li>was originally created by jordan walke</li>
        <li>has over 100k stars on github</li>
        <li>is maintained by facebook</li>
        <li>react is imperative</li>
        <li>also declarative</li>
    </ul>
</div>)

const renderElem = <div>
    {nav}
    {body}
</div>

const root = document.getElementById("root");
ReactDOM.render(renderElem, root);
