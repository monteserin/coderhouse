import Papa from "./components/Papa";

const App = () => {

  const v = 6;
  return (
    <div className="box" >


      <div style={{ background: 'red' }}>
        <Papa valorQueVoyAPasar={v} v2={v} datosQueVienenDelHijo={(r) => alert(r)} >

          El amor es sin duda lo mejor del mundo

        </Papa>

      </div>
    </div>
  );
}

export default App;
