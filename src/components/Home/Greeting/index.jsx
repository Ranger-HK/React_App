import {Component} from "react";
import Typography from '@mui/material/Typography';
import ijse from "../../../assets/img/ijse.png"

class Greeting extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
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

export default Greeting;