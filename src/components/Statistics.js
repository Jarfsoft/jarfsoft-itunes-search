import { React } from "react";

// import ArtistGraph from './ArtistGraph';
import "./Statistics.css";

export default function Statistics({ list }) {
  console.log(list);
  return (
    <div className="statistics">
      <h1>Statistics</h1>
      <ol>
        {list && list.length !== 0 ? list[0][0] : 'NADA'}
        {/*list.length !== 0 ? list.map((a) => <li><ArtistGraph artist={a[0]}/></li> ) : <h1>Most liked artists will be shown here.</h1>*/}
      </ol>
    </div>
  );
}
