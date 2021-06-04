import './App.css';
import GithubImage from './GitHub-Logo.png'

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search

                </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img src={GithubImage}
          className="responsive rounded circle"
          alt=""
          height="200px"
        />
        <h1 className="pt-3">
          <a href="https://github.com/lenx0" target="_new">
            Thiago Beraldo</a>
        </h1>
      </div>
    </div>

  );


}





export default App;
