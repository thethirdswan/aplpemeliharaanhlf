function App() {
  return (
    <div className="d-flex flex-column">
      <div>
        <a href="/member"><button className="member btn btn-primary">Daftar Member</button></a>
        <a href="/inventaris"><button className="inventaris btn btn-primary">Edit Inventaris</button></a>
      </div>
      <p className="txtinv">Inventaris cepat</p>
        <table className="quickinv">
          <tr>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Stok Barang</th>
          </tr>
          <tr>
            <td>01</td>
            <td>shake vanilla</td>
            <td>20</td>
          </tr>
          <tr>
            <td>02</td>
            <td>shake chocolate</td>
            <td>15</td>
          </tr>
          <tr>
            <td>03</td>
            <td>nrg tea</td>
            <td>23</td>
          </tr>
        </table>
    </div>
  );
}

export default App;
