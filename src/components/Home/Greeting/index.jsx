import {Component} from "react";
import Typography from '@mui/material/Typography';
import ijse from "../../../assets/img/ijse.png"
import {styleSheet} from "../../Home/Greeting/styles";
import {withStyles} from "@mui/styles";


class Greeting extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom>
                     Hello Welcome {this.props.name}
                    </Typography>
                </div>

                <div>
                    <img src={ijse} alt="https://www.ijse.lk"/>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Greeting);