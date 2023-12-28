import Navigation from '../components/Nav';

export default function Member() {
    return (
        <div className="membercon">
            <h3 style={{textAlign: "center"}}>Daftar Member</h3>
            <Navigation />
            <div className="d-flex flex-column">
                <div>
                    <div className="float-start p-3">
                        <label for="namamember">Nama Member</label><br/>
                        <input type="text"name='namamember'/><br/>
                        <label for="asalmember">Asal Member</label><br/>
                        <input type="text"name='asalmember'/><br/>
                        <label for="notelpon">No. Telpon</label><br/>
                        <input type="text"name='notelpon'/><br/>
                        <label for="tipemember">Tipe Member</label><br/>
                        <input type="text"name='tipemember'/><br/>
                    </div>
                    <div className="buttonmem float-end p-3">
                        <button className="btn btn-primary">Tambahkan</button><br/>
                        <button className="btn btn-primary">Edit Member</button><br/>
                        <button className="btn btn-primary">Hapus Member</button><br/>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Kode Member</th>
                        <th>Nama Member</th>
                        <th>Asal Member</th>
                        <th>No. Telpon</th>
                        <th>Tipe Member</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>a</td>
                        <td>asdfg</td>
                        <td>0823456789</td>
                        <td>harian</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>cass</td>
                        <td>eagjmns</td>
                        <td>09876541</td>
                        <td>bulanan</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>abcder</td>
                        <td>penebel</td>
                        <td>08987654321</td>
                        <td>mingguan</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}