import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    // minWidth: 650,
  },
  container: {
    padding: theme.spacing(4),
  }
}));

function createData(name: string, calories: string, fat: string, carbs?: string, protein?: string) {
  return { name, calories, fat, carbs, protein };
}

const rowsDay1 = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('', 'Pembukaan Kegiatan Bimbingan Teknis Pengelola Database', ''),
  createData('08.00 - 08.30', 'Peserta akses dan berada di Lobby Zoom', 'Panitia'),
  createData('08.30 - 08.40', 'Menyanyikan lagu Indonesia Raya dan Mars BMKG', 'Efa'),
  createData('08.40 - 08.50', 'Laporan Ketua Panitia', 'Aminullah'),
  createData('08.50 - 09.15', 'Pengarahan sekaligus Pembukaan Acara', 'DI'),
  createData('09.15 - 09.25', 'Video Launching Aplikasi Lencana', 'Panitia'),
  createData('09.25 - 09.30', 'Pembacaan Do’a + Foto Bersama', 'M. Zakariya'),
  createData('', 'Pembukaan Selesai', ''),
  createData('09.30 - 10.00', 'Pembekalan kepada Peserta Bimtek Pengelola Database', 'Kepala Pusat Database'),
  createData('', '', 'Moderator (Iqbal)'),
  createData('10.00 - 10.20', 'Konsep Integrasi Satu Data MKG Nasional', 'Widada Sulistya'),
  createData('10.20 - 10.40', 'Data Cuaca Sebagai Verifikasi InaNWP', 'Tim InaNWP'),
  createData('10.40 - 11.00', 'Persiapan Pembuatan  Normal Iklim 1990 - 2020', 'Pusat Informasi Perubahan Iklim'),
  createData('11.00 - 11.20', 'Sosialisasi Implementasi Perka Nomor 4/2016', 'Pusat Informasi Perubahan Iklim'),
  createData('11.20 - 12.00', 'Diskusi', 'Moderator (Iqbal)'),
  createData('12.00', 'Acara Selesai', 'Efa'),

];

const rowsDay2 = [
  createData('08.30 - 09.00', 'Gambaran Umum Kuantitas dan Kualitas Data MKG', 'Tri Nurmayati'),
  createData('09.00 - 09.30', 'Metadata Stasiun (Nimos)', 'Husin Sanusi'),
  createData('09.30 - 10.00', 'Ketersediaan Data (sinta.bmkg.go.id)', 'Mahisa Ajy Kusuma'),
  createData('10.00 - 10.30', 'Istirahat', ''),
  createData('10.30 - 11.00', 'Akses dan Menu-menu BMKGSoft', 'Agita/Setyo'),
  createData('11.00 - 12.00', 'Pembacaan Pias Hillman', 'Pusat Informasi Perubahan Iklim'),
  createData('12.00 - 12.30', 'Istirahat', ''),
  createData('12.30 - 13.30', 'Pembacaan Pias Aktinograph', 'Pusat Informasi Perubahan Iklim'),
  createData('13.30 - 14.30', 'Penggunaan Tools Stripchart', 'M.D.N. Ayu Bima'),
];

const rowsDay3 = [
  createData('08.30 - 09.15', 'Implementasi QC Data Cuaca dan Iklim', 'Heru Tribuwono'),
  createData('09.15 - 10.00', 'Pembenahan Data Hardcopy di UPT', 'Joko Wigianto'),
  createData('10.00 - 10.30', 'Perkembangan Pembenahan Data MKG', 'Join Wan Chanlyn'),
  createData('10.30 - 11.00', 'Istirahat', ''),
  createData('11.00 - 12.00', 'Diskusi dan Tindak Lanjut Pembenahan Data (breakout room)', 'MD'),
  createData('', '- Room BBMKG Wil I', 'Tim Pusat Database'),
  createData('', '- Room BBMKG Wil II', 'Tim Pusat Database'),
  createData('', '- Room BBMKG Wil III', 'Tim Pusat Database'),
  createData('', '- Room BBMKG Wil IV', 'Tim Pusat Database'),
  createData('', '- Room BBMKG Wil V', 'Tim Pusat Database'),
  createData('12.00 - 12.15', 'Penutupan Kegiatan Bimbingan Teknis Pengelola Database dan penyerahan simbolis e-sertifikat', 'Kepala Pusat Database'),
  createData('12.15', 'Acara Selesai', ''),
];

export default function Agenda() {
  const classes = useStyles();

  return (
    <>

      <Container className={classes.container} maxWidth="sm" disableGutters>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Agenda Bimtek
        </Typography>
      </Container>

      <Container className={classes.container} maxWidth='md'>
        <Typography variant="h6" paragraph>Hari 1: Selasa, 21 September 2021</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Waktu (WIB)</TableCell>
                <TableCell align="left">Kegiatan</TableCell>
                <TableCell align="left">PIC/Narasumber</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow>
                <TableCell />
                <TableCell align="left">Selasa, 21 September 2021</TableCell>
                <TableCell />
              </TableRow> */}
              {rowsDay1.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}



            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container className={classes.container} maxWidth='md'>
        <Typography variant="h6" paragraph>Hari 2: Rabu, 22 September 2021</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Waktu (WIB)</TableCell>
                <TableCell align="left">Kegiatan</TableCell>
                <TableCell align="left">PIC/Narasumber</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>

              {/* <TableRow>
                <TableCell />
                <TableCell align="left">Rabu, 12 Agustus 2020</TableCell>
                <TableCell />
              </TableRow> */}
              {rowsDay2.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}



            </TableBody>
          </Table>
        </TableContainer>
      </Container>


      <Container className={classes.container} maxWidth='md'>
        <Typography variant="h6" paragraph>Hari 3: Kamis, 23 September 2021</Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Waktu (WIB)</TableCell>
                <TableCell align="left">Kegiatan</TableCell>
                <TableCell align="left">PIC/Narasumber</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>

              {/* <TableRow>
                <TableCell />
                <TableCell align="left">Kamis, 13 Agustus 2020</TableCell>
                <TableCell />                
              </TableRow> */}
              {rowsDay3.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}