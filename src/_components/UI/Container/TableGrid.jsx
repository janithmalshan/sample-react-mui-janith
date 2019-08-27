import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import {CheckboxDefault} from "../OverrideMui/InputTypes";

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Manufacturer Name', 'Platinum', '100,230', 24, '10/12/2018 10:32pm'),
    createData('Manufacturer', 'Gold', '836,560', 37, '10/12/2018 10:32pm'),
    createData('Eclair', 'Platinum1', '190,230', 24, '10/12/2018 10:32pm'),
    createData('Cupcake', 'Platinum2', 3.7, 67, '10/12/2018 10:32pm'),
    createData('Gingerbread', 'Gold1', 16.0, 49, '10/12/2018 10:32pm'),
];

export default function SimpleTable() {

    function handleChangePage(event, newPage) {
        // setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        // setRowsPerPage(parseInt(event.target.value, 10));
        // setPage(0);
    }

    return (
        <div>
            <Paper className="ui-table">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Manufacturer</TableCell>
                            <TableCell align="left">Aggregator Type</TableCell>
                            <TableCell align="left">No of Outlets</TableCell>
                            <TableCell align="left">Limit</TableCell>
                            <TableCell align="left">Date/ Time Created</TableCell>
                            <TableCell align="center">
                                <CheckboxDefault
                                    checked={true}
                                    // inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="left" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="left">{row.fat}</TableCell>
                                <TableCell align="left">{row.carbs}</TableCell>
                                <TableCell align="left">{row.protein}</TableCell>
                                <TableCell align="center">
                                    <CheckboxDefault
                                        checked={false}
                                        // inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={6}
                                count={rows.length}
                                rowsPerPage={10}
                                page={0}
                                SelectProps={{
                                    inputProps: {'aria-label': 'rows per page'},
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                // ActionsComponent={TablePaginationActions}
                                //*****https://material-ui.com/components/tables/#custom-table-pagination-action****
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        </div>
    );
}