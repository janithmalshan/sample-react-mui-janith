import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import {CheckboxDefault} from "../OverrideMui/InputTypes";
import TableCell from "@material-ui/core/TableCell";

function ExpandMoreIcon(props) {
    return (
        <SvgIcon fontSize="inherit" {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
        </SvgIcon>
    );
}

function ChevronRightIcon(props) {
    return (
        <SvgIcon fontSize="inherit" {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        </SvgIcon>
    );
}

export const UiTreeView  = (props) => {
    // const classes = useStyles();

    return (
        <TreeView
            className="ui-tree"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            {...props}
        />
    );
};

const useTreeItemStyles  = makeStyles(theme => ({
    root: {
        color: theme.palette.text.secondary,
        '&:focus > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
    },
    // content: {
    //     color: theme.palette.text.secondary,
    //     borderTopRightRadius: theme.spacing(2),
    //     borderBottomRightRadius: theme.spacing(2),
    //     paddingRight: theme.spacing(1),
    //     fontWeight: theme.typography.fontWeightMedium,
    //     '$expanded > &': {
    //         fontWeight: theme.typography.fontWeightRegular,
    //     },
    // },
    // group: {
    //     marginLeft: 0,
    //     '& $content': {
    //         paddingLeft: theme.spacing(2),
    //     },
    // },
    // expanded: {},
    // label: {
    //     fontWeight: 'inherit',
    //     color: 'inherit',
    // },
    // labelRoot: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     padding: theme.spacing(0.5, 0),
    // },
    // labelIcon: {
    //     marginRight: theme.spacing(1),
    //     width: "24px",
    //     height: "24px"
    // },
    // labelText: {
    //     fontWeight: 'inherit',
    //     flexGrow: 1,
    // },
}));

export function UiTreeItem (props) {
    const { labelText, labelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <div className="ui-tree">
                    <img src={labelIcon} className="ui-tree__icon" />
                    <p className="ui-tree__label">
                        {labelText}
                    </p>
                    <CheckboxDefault
                        checked={true}
                        className="f-right clr-bth"/>
                </div>
            }
            // classes={{
            //     root: classes.root,
            //     content: classes.content,
            //     expanded: classes.expanded,
            //     group: classes.group,
            //     label: classes.label,
            // }}
            {...other}
        />
    );
}














// import React from 'react';
// import PropTypes from 'prop-types';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
// import TreeView from '@material-ui/lab/TreeView';
// import TreeItem from '@material-ui/lab/TreeItem';
// import Collapse from '@material-ui/core/Collapse';
// import { useSpring, animated } from 'react-spring';
//
// function MinusSquare(props) {
//     return (
//         <SvgIcon fontSize="inherit" {...props}>
//             {/* tslint:disable-next-line: max-line-length */}
//             <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
//         </SvgIcon>
//     );
// }
//
// function PlusSquare(props) {
//     return (
//         <SvgIcon fontSize="inherit" {...props}>
//             {/* tslint:disable-next-line: max-line-length */}
//             <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
//         </SvgIcon>
//     );
// }
//
// function CloseSquare(props) {
//     return (
//         <SvgIcon className="close" fontSize="inherit" {...props}>
//             {/* tslint:disable-next-line: max-line-length */}
//             <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
//         </SvgIcon>
//     );
// }
//
// function TransitionComponent(props) {
//     const style = useSpring({
//         from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
//         to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
//     });
//
//     return (
//         <animated.div style={style}>
//             <Collapse {...props} />
//         </animated.div>
//     );
// }
//
// TransitionComponent.propTypes = {
//     /**
//      * Show the component; triggers the enter or exit states
//      */
//     in: PropTypes.bool,
// };
//
// const StyledTreeItem = withStyles(theme => ({
//     iconContainer: {
//         '& .close': {
//             opacity: 0.3,
//         },
//     },
//     group: {
//         marginLeft: 12,
//         paddingLeft: 12,
//         borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
//     },
// }))(props => <TreeItem {...props} TransitionComponent={TransitionComponent} />);
//
// const useStyles = makeStyles({
//     root: {
//         // height: 264,
//         // flexGrow: 1,
//         // maxWidth: 400,
//     },
// });
//
// export default function UiTreeView() {
//     const classes = useStyles();
//
//     return (
//         <TreeView
//             className={classes.root}
//             defaultExpanded={['1']}
//             defaultCollapseIcon={<MinusSquare />}
//             defaultExpandIcon={<PlusSquare />}
//             defaultEndIcon={<CloseSquare />}
//         >
//             <StyledTreeItem nodeId="1" label="Main">
//                 <StyledTreeItem nodeId="2" label="Hello" />
//                 <StyledTreeItem nodeId="3" label="Subtree with children">
//                     <StyledTreeItem nodeId="6" label="Hello" />
//                     <StyledTreeItem nodeId="7" label="Sub-subtree with children">
//                         <StyledTreeItem nodeId="9" label="Child 1" />
//                         <StyledTreeItem nodeId="10" label="Child 2" />
//                         <StyledTreeItem nodeId="11" label="Child 3" />
//                     </StyledTreeItem>
//                     <StyledTreeItem nodeId="8" label="Hello" />
//                 </StyledTreeItem>
//                 <StyledTreeItem nodeId="4" label="World" />
//                 <StyledTreeItem nodeId="5" label="Something something" />
//             </StyledTreeItem>
//         </TreeView>
//     );
// }
