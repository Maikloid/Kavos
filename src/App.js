import { useEffect, useState } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {

  const [kavy, nastavKavy] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    axios.get("https://api.sampleapis.com/coffee/hot")
      .then(odpoved => {
        nastavKavy(odpoved.data);
      }
      )
  }, [])

  return (
    <>
    
    <img style={{width : "50px"}} src={selectedItem.image}></img>
    {selectedItem.title}

      <Grid container spacing={2}>
        {
          kavy.map(kava => (
            <>
              <Grid item>
                <Paper onClick = {() => setSelectedItem(kava)}><img style={{ width: "50px"}} src={kava.image}></img>
                  {kava.title}
                </Paper>

              </Grid>
            </>))

        }</Grid></>
  );
}

export default App;

