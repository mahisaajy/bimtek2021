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
    paddingTop: theme.spacing(4),
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
  createData('08.30 - 09.00', 'Peserta akses dan berada di Lobby Zoom', 'Panitia'),
  createData('09.00 - 09.10', 'Menyanyikan lagu Indonesia Raya dan Mars BMKG', 'MC'),
  createData('09.10 - 09.20', 'Laporan Ketua Panitia', 'MD'),
  createData('09.20 - 10.00', 'Pengarahan sekaligus Pembukaan Acara', 'DI'),
  createData('10.00 - 10.05', 'Pembacaan Do’a + Foto Bersama', 'MD'),
  createData('', 'Pembukaan Selesai', ''),
  createData('10.05 - 10.30', 'Pembekalan kepada Peserta Bimtek Pengelola Database', 'KPD'),
  createData('', '', 'Moderator (Iqbal)'),
  createData('10.30 - 11.00', 'Implementasi OOP (Integrasi Satu Data MKG Nasional)', 'LD (Widada S)'),
  createData('11.00 - 11.30', 'Data Cuaca Sebagai Verifikasi InaNWP', 'Tim InaNWP'),
  createData('11.30 - 12.00', 'Persiapan Pembuatan  Normal Iklim 1990 - 2020', 'DK'),
  createData('12.00 - 12.30', 'Sosialisasi Implementasi Perka Nomor 4/2016', 'DK'),
  createData('12.30 - 13.00', 'Diskusi', 'Moderator'),
  createData('13.00', 'Acara Pembukaan Selesai', 'MC'),

];

const rowsDay2 = [
  createData('08.30 - 09.00', 'Gambaran Umum Kuantitas dan Kualitas Data MKG', 'Tri Nurmayati'),
  createData('09.00 - 09.30', 'Metadata Stasiun (Nimos)', 'Sanusi'),
  createData('09.30 - 10.00', 'Ketersediaan Data (sinta.bmkg.go.id)', 'Mahisa Ajy Kusuma'),
  createData('10.00 - 10.30', 'Istirahat', ''),
  createData('10.30 - 11.00', 'Akses dan Menu-menu BMKGSoft', 'Agita & Setyo'),
  createData('11.00 - 12.00', 'Pembacaan Pias Hillman', 'DK'),
  createData('12.00 - 12.30', 'Istirahat', ''),
  createData('12.30 - 13.30', 'Pembacaan Pias Aktinograph', 'DK'),
  createData('13.30 - 14.30', 'Penggunaan Tools Stripchart', 'Ayu Bima'),
];

const rowsDay3 = [
  createData('08.30 - 09.15', 'Implementasi QC Data Cuaca dan Iklim', 'Heru'),
  createData('09.15 - 10.00', 'Pembenahan Data Hardcopy di UPT', 'Joko'),
  createData('10.00 - 10.30', 'Perkembangan Pembenahan Data MKG', 'Tri Nurmayati / Join'),
  createData('10.30 - 11.00', 'Istirahat', ''),
  createData('11.00 - 12.00', 'Diskusi dan Tindak Lanjut Pembenahan Data (breakout room)', 'MD'),
  createData('', '- Room BBMKG Wil I', ''),
  createData('', '- Room BBMKG Wil II', ''),
  createData('', '- Room BBMKG Wil III', ''),
  createData('', '- Room BBMKG Wil IV', ''),
  createData('', '- Room BBMKG Wil V', ''),
  createData('12.00 - 12.15', 'Penutupan Kegiatan Bimbingan Teknis Pengelola Database dan penyerahan simbolis e-sertifikat', 'KPD'),
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